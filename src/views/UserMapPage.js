var m = require("mithril")
var UserControl = require("./UserControl")
var UserMap = require("./UserMap")

var UserMapPage = (function(){
	function view (vnode) {
		return m("user-map-page", 
				[
					m("#user-form-div", m(UserControl)),
					m("#user-map-div", m(UserMap))
				])
	}
	return {view:view};
}());

module.exports = UserMapPage
