var m = require("mithril")
var User = require("../models/User")
var UserControl = require("./UserControl")
var UserMap = require("./UserMap")

var UserMapPage = {
	view: function(vnode) {
		return m(".user-map-div", 
				[
					  m("h1", "Forum User Locations"),
					  m("#user-form-div", m(UserControl)),
					  m("#user-map-div", m(UserMap))
					]
		)
	}
}

module.exports = UserMapPage
