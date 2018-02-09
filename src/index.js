//src/index.js
var m = require("mithril")

var UserMapPage = require("./views/UserMapPage")

m.mount(document.getElementById("mapusersApp"), UserMapPage)
