var m = require("mithril")
const {Form, Field, ValidationError} = require("powerform")
// const {validate, SkipValidation, minLength, required, equalsTo} = require("validatex")

class UserControl {
	constructor() {
		console.log('UserControl constructor')

	    class UsernameField extends Field {
			validate(value, allValues) {
				console.log("values = ", value, allValues)
				if(!value) {
					throw new ValidationError("This field is required.")
				}
			}
			setValue = function(value) {
				console.log('set un=', value)
				this.setData(value)
			}
		}
		
		class PasswordField extends Field {
		  validate(value, allValues) {
		    if (!value) throw new ValidationError("This field is required.")
		    if(value.length < 8) {
		      throw new ValidationError("This field must be at least 8 characters long.")
		    }
		  }
		  setValue = function(value) {
				console.log('set pw=', value)
				this.setData(value)
			}
		}
		
		class ConfirmPasswordField extends Field {
		  validate(value, allValues) {
		    if (value == undefined || value !== allValues[this.config.passwordField]) {
		      throw new ValidationError("Passwords do not match.")
		    }
		  }
		  setValue = function(value) {
				console.log('set cp=', value)
				this.setData(value)
			}
		}
		
		class SignupForm extends Form {
			  username = UsernameField.new()
			  password = PasswordField.new()
			  confirmPassword = ConfirmPasswordField.new({field: 'password'})
			}
		this.form = SignupForm.new()

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
					m("h1", "Sign up"),
					m(".row", [
						m("input", {
							name : "username",
							placeholder : "Username",
							oninput : m.withAttr("value", form.username.setValue, form.username),
							onchange : form.username.isValid
						}),
						this.submitFailed && !form.username.isValid() && m("p.error", form.username.getError()),
					]),
					m(".row", [
						m("input", {
							name : "password",
							placeholder : "Password",
							oninput : m.withAttr("value", form.password.setValue, form.password),
							onchange : form.password.isValid
						}),
						this.submitFailed && !form.password.isValid() && m("p.error", form.password.getError()),
					]),
					m(".row", [
						m("input", {
							name : "confirmPassword",
							placeholder : "Confirm password",
							oninput : m.withAttr("value", form.confirmPassword.setValue, form.confirmPassword),
							onchange : form.confirmPassword.isValid
						}),
						this.submitFailed && !form.confirmPassword.isValid() && m("p.error", form.confirmPassword.getError()),
					]),
					m(".row", [
						m("button", {
							// onclick : this.submit
							onclick: this.submit.bind(this),
						}, "Send")
					])
				]
			)
	}
}

module.exports = UserControl