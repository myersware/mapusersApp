var m = require("mithril")
var UserControl = require("./UserControl")
var UserMap = require("./UserMap")

var UserMapPage = (function(){
	let x = 0
	function ctrl(vnode){ /*...*/ return; }
	function view (vnode) {
		return m("user-map-page", 
				[
					  m("h1", "Forum User Locations"),
					  m("#user-form-div", m(UserControl)),
					  m("#user-map-div", m(UserMap))
					]
		)
	}
	return {view:view, oninit: ctrl};
}());

module.exports = UserMapPage
