// src/models/User.js
var m = require("mithril")

var crashersJson = `
{
	"crashers": [
		{
		    "id": 2,
		    "key": 2,
			"forum": "Ilona",
			"name": "Ilona Ciunaite",
			"role": "guide",
			"color": "red",
			"location": "Playa del Carmen, Quintana Roo, Mexico",
			"distance": 5000,
			"geo": {
			     "latitude": 20.6296,
			     "longitude": -87.0739
			     }
		},
		{
		    "id": 48,
		    "key": 48,
			"forum": "jjm109",
			"name": "James Myers",
			"role": "crasher",
			"color": "blue",
			"location": "Paradise, CA, USA",
			"distance": 0,
			"geo": {
    			"latitude": 39.7596,
	       		"longitude": -121.6219
	       		}
		},
        {
            "id": 10851,
            "key": 10851,
            "forum": "forgetmenot",
            "name": "Kay Nieminen",
            "role": "guide",
            "color": "red",
            "location": "Australia",
            "distance": 15000,
            "geo": {
                "latitude": -25.27,
                "longitude": 133.77
                }
        }
	],
	"description": "LU Crashers.",
	"name": "LU Crashers"
}
`
	
var Users = {
    list: [],
    error: null,
    searchAttrs: {},
    loadSearchUser:  '/app.php/mapusers/xhr/searchUser',
    loadSearchLocation: '/app.php/mapusers/xhr/searchLocation',
    
    searchUsers: function(attrs) {
    	var data = {}
    	var url = null
    	if (!attrs) {
    		attrs = {}
    	}
    	if (attrs.radius !== undefined) {
    		data.radius = String(attrs.radius)
    	}
    	if (attrs.limit !== undefined) {
    		data.limit = String(attrs.limit)
    	}
    	if (!attrs.location) {
    		if (attrs.user !== undefined) {
    			data.name = attrs.user
    		}
    		url = this.loadSearchUser
    	} else {
    		data.location = attrs.location
    		url = this.loadSearchLocation
    	}
    	console.log("searchUsers qs=", data)
    	return m.request({
            method: "GET",
            url: url,
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            data: data
        })
        .then(function(result) {
            console.log("searchUser: ", result)
            Users.list = result
             // console.log('Users.list = ', Users.list)
        })
        .catch(function(e) {
            Users.error = e.message
            console.log("search get error: ", Users.error)
            Users.list = JSON.parse(crashersJson).crashers
        	console.log('Mock Users.list = ', Users.list)
        	return Promise.resolve(Users.list)
        })
    }
}

module.exports = Users