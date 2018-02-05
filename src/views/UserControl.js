var m = require("mithril")
const {Form, Field, ValidationError} = require("powerform")
const {validatex, SkipValidation, minLength, required, equalsTo} = require("validatex")

class UsernameField extends Field {
		  validate(value, allValues) {
		    if(!value) {
		      throw new ValidationError("This field is required.")
		    }
		  }
		}

class UserControl {
	constructor() {
		console.log('UserControl constructor')
	    this.form = Form.new({
			username : {
				default : "",
				validatexx : [
					required(true)
				],
				validate(value, allValues) {
					console.log("validate username")
				    if(!value) {
				      throw new ValidationError("This field is required.")
				    }
				  }
			},
			password : {
				default : "",
				validate : required(true)
			},
			confirmPassword : {
				default : "",
				validate : [
					required(true),
					equalsTo("password")
				]
			}
	    })
		
		class PasswordField extends Field {
		  validate(value, allValues) {
		    if (!value) throw new ValidationError("This field is required.")
		    if(value.length < 8) {
		      throw new ValidationError("This field must be at least 8 characters long.")
		    }
		  }
		}
		
		class ConfirmPasswordField extends Field {
		  validate(value, allValues) {
		    if (value !== allValues[this.config.passwordField]) {
		      throw new ValidationError("Passwords do not match.")
		    }
		  }
		}
		class SignupForm extends Form {
			username = UsernameField.new()
		}
		
		this.form = SignupForm.new({
				username: UsernameField.new({
				default : "",
				validatexx : [
					required(true)
				],
					validate(value, allValues) {
						console.log("validate username")
						if(!value) {
							throw new ValidationError("This field is required.")
						}
				  	}
				}),
				password: PasswordField.new({
					default : "",
					validate : required(true)
				}),
				confirmPassword: ConfirmPasswordField.new({passwordField: 'password'})
			}
		)

		this.submit = function() { // this -> class
			console.log("UserControl submit, this=", this)
			const form = this.form.config
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
		const form = this.form.config
		console.log("UserControl view, form=", this.form.config)
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
							oninput : m.withAttr("value", form.username),
							onchange : form.username.isValid
						}),
						this.submitFailed && !form.username.isValid() && m("p.error", form.username.error()),
					]),
					m(".row", [
						m("input", {
							name : "password",
							placeholder : "Password",
							oninput : m.withAttr("value", form.password),
							onchange : form.password.isValid
						}),
						this.submitFailed && !form.password.isValid() && m("p.error", form.password.error()),
					]),
					m(".row", [
						m("input", {
							name : "confirmPassword",
							placeholder : "Confirm password",
							oninput : m.withAttr("value", form.confirmPassword),
							onchange : form.confirmPassword.isValid
						}),
						this.submitFailed && !form.confirmPassword.isValid() && m("p.error", form.confirmPassword.error()),
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