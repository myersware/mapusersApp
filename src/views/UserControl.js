var m = require("mithril")
const {Form, Field, ValidationError} = require("powerform")
import { RaisedButton, Slider } from "polythene-mithril"
import "polythene-css/dist/polythene.css"   // Component CSS
import "polythene-css/dist/polythene-typography.css"  // Default Material Design styles including Roboto font

class UserControl {
	constructor() {
		console.log('UserControl constructor')

		class SearchUserField extends Field {
			setValue = function(value) {
				console.log('set searchUser=', value)
				this.setData(value)
			}
		}
		class SearchLocationField extends Field {
			setValue = function(value) {
				console.log('set searchLoc=', value)
				this.setData(value)
			}
		}
		class SearchRadius extends Field {
			setValue = function(value) {
				console.log('set searchRadius=', value)
				this.setData(value)
			}
		}
		class SearchLimit extends Field {
			setValue = function(value) {
				console.log('set searchLimit=', value)
				this.setData(value)
			}
		}
		class SearchForm extends Form {
			searchUser = SearchUserField.new()
			searchLocation = SearchLocationField.new()
			searchRadius = SearchRadius.new()
			searchLimit = SearchLimit.new()
		}
		
		this.form = SearchForm.new()
		this.submit = function() { // this -> class
			console.log("UserControl submit, this=", this)
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
		return this.submitted
			? m("h3", "You're done!")
			: m("form",
				{
					onsubmit : this.submit.bind(this)
				},
				[
					m(".row", [
						m("input", {
							name : "searchUser",
							placeholder : "User forum name",
							oninput : m.withAttr("value", form.searchUser.setValue, form.searchUser),
							onchange : form.searchUser.isValid
						}),
						this.submitFailed && !form.searchUser.isValid() && m("p.error", form.searchUser.getError()),
					]),
					m(".row", [
						m(RaisedButton, {
							// onclick : this.submit
							onclick: this.submit.bind(this),
							style: {
					              backgroundColor: "blue",
					              color: "white"
					            }
						}, "Search by forum user name")
					]),
					m(".row", [
						m("input", {
							name : "searchLocation",
							placeholder : "Search location",
							oninput : m.withAttr("value", form.searchLocation.setValue, form.searchLocation),
							onchange : form.searchLocation.isValid
						}),
						this.submitFailed && !form.searchLocation.isValid() && m("p.error", form.searchLocation.getError()),
					]),
					m(".row", [
						m("RaisedButton", {
							// onclick : this.submit
							onclick: this.submit.bind(this),
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
							  oninput : m.withAttr("value", form.searchRadius.setValue, form.searchRadius),
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
							  oninput : m.withAttr("value", form.searchLimit.setValue, form.searchLimit),
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