var m = require("mithril")
var Stream = require("mithril/stream")
const {Form, Field, ValidationError} = require("powerform")
import { RaisedButton, Slider, TextField } from "polythene-mithril"
import "polythene-css/dist/polythene.css"   // Component CSS
import "polythene-css/dist/polythene-typography.css"  // Default Material Design styles including Roboto font
var UserMap = require("./UserMap")

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
		class SearchForm extends Form {
			searchForum = SearchForumField.new()
			searchLocation = SearchLocationField.new()
			searchRadius = SearchRadius.new()
			searchLimit = SearchLimit.new()
		}
		
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

	view() {
		const form = this.form
		console.log("UserControl view, form=", this.form)
		const errors = this.form.getError();
		const submitFailed = this.submitFailed;
		const formErrors = form.formErrors;
		return m("form",
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
							events: {
								onclick: this.submit.bind(this),
							},
							disabled: !form.searchForum.getData(),
							style: {
					              backgroundColor: "blue",
					              color: "white"
					            }
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
							events: {
								onclick: this.submit.bind(this),
							},
							disabled: !form.searchLocation.getData(),
							style: {
					              backgroundColor: "blue",
					              color: "white"
					            }
						}, "Search by location")
					]),
					m(".row", [
						m(".title", "Radius(km)"),
						m(".component", 
						  m(Slider, {
							  onChange : ({ value }) => {console.log("radius=", value); form.searchRadius.setData(value)},
							  min: 100,
							  max: 25000,
							  defaultValue: 200,
							  stepSize: 100
							})
						)
					])
					,
					m(".row", [
						m(".title", "Limit to closest"),
						m(".component", 
						  m(Slider, {
							  onChange : ({ value }) => {console.log("limit=", value); form.searchLimit.setData(value)},
							  min: 10,
							  max: 100,
							  defaultValue: 20,
							  stepSize: 10
							})
						)
					])
				]
			)
	}
}

module.exports = UserControl