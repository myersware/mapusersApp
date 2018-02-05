var m = require("mithril")
var User = require("../models/User")
var UserControl = require("./UserControl")

var UserMap = {
	map: null,
	lat: 20.0,
    lng: -20.0,
    mapCenter: {lat: this.lat, lng: this.lng},
	url: "http://myersware.com",
	title: "page title",
	distance: 100,
	positions: [],
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
	oninit: User.loadList,
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
        item.label = {
                fontFamily: 'Fontawesome',
                text: '\uf041', // code for font-awesome icon
                'font-size': '64px',
                color: item.color
        };
        item.icon = {
            path: google.maps.SymbolPath.CIRCLE, // or any others
            scale: 8,
            strokeOpacity: 0.05
        };
        // console.log('item.label=', item.label);
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
	onupdate: function(vnode) {
		var opts = {
				center: new google.maps.LatLng(0,0),
				zoom: 4,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		vnode.state.map = new google.maps.Map(document.getElementById("user-map"), opts)
		vnode.state.map.addListener('center_changed', function() {
	          console.log("center_changed")
	        });
		var items = User.list;
		let firstItem = true;
        for (const item of items) {
            console.log('insert new ', item);
            if (firstItem) {
                this.mapCenter = {lat: Number(item.geo.latitude), lng: Number(item.geo.longitude)};
                firstItem = false;
            }
            // this.getIconUrl(item);
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
	            };
	            if (item.geo.latitude) {
	            	var pos = {lat: Number(item.geo.latitude), lng: Number(item.geo.longitude)}
	                this.positions.push(pos);
	                var marker = new google.maps.Marker({
	                    position: pos,
	                    icon: item.icon,
	                    label: item.label,
	                    map: this.map,
	                    markerInfo: item,
	                    markerContext: this
	                  });
	                marker.gmMarker = marker
	                google.maps.event.addListener(marker, 'click', this.markerClicked);
	            }
            }
            // this.selectOptions.push([item.id, item.forum, item.iconUrl]);
            // this.updateItem(item, true);
        }
        // map won't have markers yet, so wait a bit to set bounds
        setTimeout(() => {
            console.log('Async Task Calling Callback');
            this.fitBounds(this.map);
          }, 500);
    },
	view: function(vnode) {
		return m(".user-map-div", 
				[
					  m("h1", "Forum User Locations"),
					  m("#user-form", m(UserControl)),
					  m("#user-map", ""),
					  m(".user-map-info", 
					    m("div",
					    		[
					                m("a", {href: vnode.state.info.profileUrl + vnode.state.info.id},
					                		vnode.state.info.forum_name, "@", vnode.state.info.location
					                ),
					                m("br"),
					                m("span", "Distance: ", vnode.state.info.distance, " km")
					              ]
					        )
					    )
					]
		)
	}
}

module.exports = UserMap
