var m = require("mithril")
var Users = require("../models/Users")
var UserControl = require("./UserControl")
var fontawesomeMarkers = require("fontawesome-markers")

var UserMap = {
	map: null,
	lat: 20.0,
    lng: -20.0,
    mapCenter: {lat: this.lat, lng: this.lng},
	distance: 100,
	searchLocation: null,
	searchUser: null,
	searchRadius: 100,
	searchLimit: 20,
	positions: [],
	markers: [],
	selectOptions: null,
	info: {
		id: 4,
        display: false,
        forum_name: "jjm109",
        color: null,
        geo: null,
        distance: 100,
        location: "Paradise, CA",
        label: null,
		profileUrl: '/memberlist.php?mode=viewprofile&u='
	},
	infoWindow: {
            id: 0,
            display: false,
            forum_name: null,
            color: null,
            geo: null,
            distance: null,
            location: null,
            iconUrl: null,
            profileUrl: null,
            label: null,
    },
	fitBounds: function(map) {
        if (!map) {
            return;
        }
        console.log('fitBounds map=', map);
        if (this.positions) {
            const bounds = new google.maps.LatLngBounds();
            // console.log('map.markers=', map.markers);
            this.positions.forEach(marker => {
              console.log('set bounds for marker=', marker);
              bounds.extend(marker);
              // console.log('Extend bounds=', bounds);
            });
         // Don't zoom in too far on only one marker
            if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
               const extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.1, bounds.getNorthEast().lng() + 0.01);
               const extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.1, bounds.getNorthEast().lng() - 0.01);
               bounds.extend(extendPoint1);
               bounds.extend(extendPoint2);
            }
            // console.log('Fit map to bounds=', bounds);
            map.fitBounds(bounds);
        }
    },
    getIconUrl: function(item) {
        item.icon = {
        	path: fontawesomeMarkers.MAP_MARKER,
            scale: 0.3,
            strokeOpacity: 1,
            fillColor: "#" + item.color,
            fillOpacity: 0.7,
        };
    },
    markerClicked: function(event) {
        console.log('clicked marker event=', this);
        var marker = this.markerInfo
        var context = this.markerContext
        // how to reference class variables? Can't use this.
        context.infoWindow.geo = {latitude: event.latLng.lat(),
                longitude: event.latLng.lng()};
        context.infoWindow.distance = Number(marker.distance).toFixed(2);
        context.infoWindow.forum_name = marker.forum;
        context.infoWindow.label = marker.label;
        context.infoWindow.location = marker.location;
        context.infoWindow.profileUrl = '/memberlist.php?mode=viewprofile&u=' + marker.id;
        context.infoWindow.display = true;
        console.log('info=', context.infoWindow);
        context.mapCenter = {lat: Number(context.infoWindow.geo.latitude), lng: Number(context.infoWindow.geo.longitude)};
        
        var contentString = "<div><a href=" + context.infoWindow.profileUrl +
        	">" + context.infoWindow.forum_name + "@" + context.infoWindow.location + "</a>" +
                    "<br>Distance: " + context.infoWindow.distance + " km" +
                "</div>"
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            position: this.position
        });
        infowindow.open(context.map, marker.gmMarker);
    },
    setMapOnAll: function(map) {
        for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(map);
        }
      },
    addMarkers: function(items) {
		this.clearLocations()
		let firstItem = true;
		console.log('set markers for ', items)
        for (const item of items) {
            console.log('insert new ', item)
            if (firstItem) {
            	this.mapCenter = {lat: Number(item.geo.latitude), lng: Number(item.geo.longitude)};
                firstItem = false;
            }
            if (item.geo) {
	            this.info = {id: item.id,
	                    geo: {latitude: Number(item.geo.latitude),
	                        longitude: Number(item.geo.longitude)},
	                    display: true,
	                    color: item.color,
	                    forum_name: item.forum,
	                    location: item.location,
	                    iconUrl: this.getIconUrl(item),
	                    label: null,
	            }
	            if (item.geo.latitude) {
	            	var pos = {lat: Number(item.geo.latitude), lng: Number(item.geo.longitude)}
	            	this.positions.push(pos);
	                var marker = new google.maps.Marker({
	                    position: pos,
	                    icon: item.icon,
	                    map: this.map,
	                    markerInfo: item,
	                    markerContext: this
	                  });
	                marker.gmMarker = marker
	                this.markers.push(marker)  // add to list
	                google.maps.event.addListener(marker, 'click', this.markerClicked);
	            }
            }
            // this.selectOptions.push([item.id, item.forum, item.iconUrl]);
            // this.updateItem(item, true);
        }
		this.fitBounds(this.map)
    },
    clearLocations: function() {
        console.log('clearLocations()');
        this.positions = [];
        this.info = null;
        this.selectOptions = [];
        this.selectOptions.push([0, 'none', '']);
		this.setMapOnAll(null)  // clear all markers from map
		this.markers = []
    },
    doSearchUser: function(attrs) {
    	console.log("doSearchUser parms=", attrs)
        this.searchErrorMessage = null;
        Users.searchUsers({user: attrs.user, 
        	radius: attrs.radius ? String(attrs.radius) : undefined, 
        	limit: attrs.limit? String(attrs.limit) : undefined, 
        	})
        .then((result) => {
            console.log("doSearchUser results: ", result)
            this.addMarkers(Users.list)
        })
    },

   /**
    * @param center - either null or an address
    */
    doSearchLocation: function(attrs) {
    	console.log("doSearchLocation parms=", attrs)
        this.searchErrorMessage = null;
        Users.searchUsers({location: attrs.location, 
        	radius: attrs.radius ? String(attrs.radius) : undefined, 
        	limit: attrs.limit? String(attrs.limit) : undefined, 
        	})
        .then((result) => {
            console.log("doSearchLocation: ", result)
            this.addMarkers(Users.list)
        })
    },
    search: function(searchParms) {
		console.log("search map parms=", searchParms)
		var opts = {
				center: new google.maps.LatLng(20,-20),
				zoom: 4,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		this.map = new google.maps.Map(document.getElementById("user-map"), opts)
		this.map.addListener('center_changed', function() {
			console.log("center_changed")
		})
		this.clearLocations()
		this.searchParms = searchParms  // for use in then statements
		if (searchParms.location) {
			this.doSearchLocation(this.searchParms)
		} else if (searchParms.user) {
			this.doSearchUser(this.searchParms)
		}
	},
	oncreate: function(vnode) {
		console.log('oncreate map')
		var opts = {
				center: new google.maps.LatLng(0,0),
				zoom: 4,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		this.map = new google.maps.Map(document.getElementById("user-map"), opts)
		this.map.addListener('center_changed', function() {
			console.log("center_changed")
		})
		Users.searchUsers().then(() => {
			this.addMarkers(Users.list)
		})
    },
	view: function(vnode) {
		return m("#user-map", "")
	}
}

module.exports = UserMap
