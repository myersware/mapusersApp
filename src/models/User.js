// src/models/User.js
var m = require("mithril")

var User = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            // url: "https://rem-rest-api.herokuapp.com/api/users",
            url: "assets/crashers.json",
            withCredentials: true,
        })
        .then(function(result) {
            User.list = result.crashers
        })
    },
}

module.exports = User