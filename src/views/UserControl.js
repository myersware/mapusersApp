var m = require("mithril")
var Stream = require("mithril/stream")
const {Form, Field, ValidationError} = require("powerform")
import { RaisedButton, Slider, TextField, Toolbar, ToolbarTitle, List, ListTile, Icon } from "polythene-mithril"
import "polythene-css/dist/polythene.css"   // Component CSS
import "polythene-css/dist/polythene-typography.css"  // Default Material Design styles including Roboto font
import "polythene-css/dist/polythene-raised-button.css"
import { RaisedButtonCSS } from "polythene-css"
var UserMap = require("./UserMap")
var Users = require("../models/Users")
  
class UserControl {
	constructor() {
		console.log('UserControl constructor')

		class SearchForumField extends Field {
			validate = function(value, allValues) {
				console.log("validate forum name=", value)
			}
		}
		class SearchLocationField extends Field {
			validate = function(value, allValues) {
				console.log("validate location=", value)
			}
		}
		class SearchRadius extends Field {
			validate = function(value, allValues) {
				console.log("validate radius=", value)
			}
		}
		class SearchLimit extends Field {
			validate = function(value, allValues) {
				console.log("validate limit=", value)
			}
		}
		class SelectUser extends Field {
			validate = function(value, allValues) {
				console.log("validate select user=", value)
			}
		}
		class SearchForm extends Form {
			searchForum = SearchForumField.new()
			searchLocation = SearchLocationField.new()
			searchRadius = SearchRadius.new()
			searchLimit = SearchLimit.new()
			// selectUser = SelectUser.new()
		}
		
		this.showList = false
		this.form = SearchForm.new()
		this.form.searchRadius.setData(200)
		this.form.searchLimit.setData(20)
		this.submit = function() { // this -> class
			console.log("UserControl submit, form=", this.form)
			const form = this.form
			this.submitFailed = false; // reset
			console.log("form isValid=", this.form.isValid())
			if (!this.form.isValid()) {
				this.submitFailed = true;
				return false;
			}
			// Server side validation
			// Send form data to API... but instead we will just show user feedback
			this.submitted = true;
			this.submitFailed = false;
			UserMap.search({location: this.form.searchLocation.getData(), 
				user: this.form.searchForum.getData(),
				limit: this.form.searchLimit.getData(),
				radius: this.form.searchRadius.getData()})
			return false;
		}
		this.submitFailed = false
		this.submitted = false
	  }
	
	enableList() {
		console.log("menu clicked"); 
		// handle clicks outside menu to collapse it
		const bodyTag = document.getElementsByTagName('body')
		const element = document.getElementById('mapUserList');
		const el = clickedOrNot.bind(this)
		function clickedOrNot(e) {
			if (e.target !== element) {
				// action in the case of click outside 
				bodyTag[0].removeEventListener('click', el, true)
				console.log("got outside menu click")
				this.showList = false
				m.redraw()  // mouse click won't force redraw for menu
			}	
		}
		bodyTag[0].addEventListener('click', el, true);
		this.showList = true
	}

	view() {
		const form = this.form
		console.log("UserControl view, form=", this.form, "showList=", this.showList)
		// confirm('view')
		const errors = this.form.getError();
		const submitFailed = this.submitFailed;
		const formErrors = form.formErrors;
		const profileUrl = "/memberlist.php?mode=viewprofile&u="
		const SelectUser = {
			view: ({attrs}) => {
				const createOption = ({ id, forum }) => 
					m(ListTile, {class: "userListElement", url: {href: profileUrl + id},
					title: forum})
			    const tb = m(Toolbar, { compact: true },
    				[
    					m("div#mapUserList", 
    						{
    							onclick: m.withAttr("", this.enableList, this)
    						}, m("span.fas.fa-bars")),
    					m(ToolbarTitle, { text: "Select user" }),
    				])
			    // console.log("tb=", tb)
			    const list = m(List, { class: "userListElement"},
			    		[ Users.list.map(createOption), ])
			    // console.log("list=", list)
			    return this.showList ? list : tb
			}
		}
		RaisedButtonCSS.addStyle(".themed-button", {
			  color_light_text:       "#fff",
			  color_light_background: "#ff1744",
			  color_dark_text:        "#fff",
			  color_dark_background:  "#c51162"
			});
		return m(".ui#page", [
				m(".ui#header", m(SelectUser)),
				m(".ui#content", [
					m("form",
					{
						onsubmit : this.submit.bind(this)
					},
					[
						m(".row", [
						      m(".component",
						        m(TextField, {
						        	label: "Forum user name",
						          floatingLabel: true,
						          onChange: newState => {console.log("forum_name=", newState.value); form.searchForum.setData(newState.value)},
						          help: "Enter a forum user name"
						        })
						      )
						    ]),
					    m(".row", [
							m(RaisedButton, {
								className: "themed-button",
								events: {
									onclick: this.submit.bind(this),
								},
								disabled: !form.searchForum.getData(),
							}, "Search by forum user name")
						]),
						m(".row", [
						      m(".component",
						        m(TextField, {
						        	label: "Location",
						        	floatingLabel: true,
						        	onChange: newState => {console.log("location=", newState.value); form.searchLocation.setData(newState.value)},
						        	help: "Enter a location"
						        })
						      )
						]),
						m(".row", [
							m(RaisedButton, {
								className: "themed-button",
								events: {
									onclick: this.submit.bind(this),
								},
								disabled: !form.searchLocation.getData(),
							}, "Search by location")
						]),
						m(".row", [
							m(".title", "Radius="+form.searchRadius.getData() + " km"),
							m(".component", 
							  m(Slider, {
								  onChange : ({ value }) => {console.log("radius=", value); form.searchRadius.setData(value)},
								  min: 100,
								  max: 25000,
								  defaultValue: 200,
								  stepSize: 100
								})
							)
						]),
						m(".row", [
							m(".title", "Limit to closest " + form.searchLimit.getData() + " users"),
							m(".component", 
							  m(Slider, {
								  onChange : ({ value }) => {console.log("limit=", value); form.searchLimit.setData(value)},
								  min: 10,
								  max: 100,
								  defaultValue: 20,
								  stepSize: 10
								})
							)
						]),
					]),  // end of form
				]),  // end of content
		])  // end of page
	}
}

module.exports = UserControl