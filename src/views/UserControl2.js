var m = require("mithril")
var UserList = require("./UserList")

var map = [
  m("h1", 
    "Forum User Locations"
  ), 
  m(UserList),
  m("div id='.user-map-list'"),
  m("div", 
    m("div",
      [
        m("h2[*ngif='searchErrorMessage']", 
          "Search error {{ searchErrorMessage }}"
        ),
        m("mat-form-field",
          [
            m("input[[(ngmodel)]='searchUser'][matinput=''][placeholder='User forum name']"),
            m("mat-error[*ngif='searchErrorMessage']", 
              "{{searchErrorMessage}}"
            )
          ]
        ),
        m(".button-row", 
          m("button[(click)='doSearchUser()'][[disabled]='!searchUser || !searchRadius'][color='primary'][mat-raised-button='']", 
            "Search by forum user name"
          )
        ),
        m("mat-form-field",
          [
            m("input[[(ngmodel)]='searchLocation'][matinput=''][placeholder='Search location']"),
            m("mat-error[*ngif='searchErrorMessage']", 
              "{{searchErrorMessage}}"
            )
          ]
        ),
        m(".button-row", 
          m("button[(click)='doSearchLocation(this.searchLocation)'][[disabled]='!searchLocation || !searchRadius'][color='primary'][mat-raised-button='']", 
            "Search by location"
          )
        ),
        m("div",
          [
            "Radius(km)={{ searchRadius }}",
            m("mat-slider[(input)='this.onSliderChange($event)'][[(ngmodel)]='searchRadius'][max='20000'][min='100'][step='100'][value='200']")
          ]
        ),
        m("div",
          [
            "Limit to {{ searchLimit }} closest:",
            m("mat-slider[(input)='this.onLimitChange($event)'][[(ngmodel)]='searchLimit'][max='100'][min='10'][step='10'][value='20']")
          ]
        ),
        m("h2", 
          "Search near selected user"
        ),
        m("div", 
          m("mat-form-field[*ngif='selectOptions']", 
            m("mat-select[(selectionchange)='showLocation()'][[(ngmodel)]='selectedLocation'][name='selectUser'][placeholder='Pick a user']", 
              m("mat-option[*ngfor='let opt of selectOptions'][[value]='opt[0]']", 
                "{{ opt[1] }}"
              )
            )
          )
        ),
        m("ngui-map[(click)='log($event)'][(idle)='onIdle($event)'][(mapready$)='onInit($event)'][[fullscreencontrol]='true'][[fullscreencontroloptions]='{position: \'TOP_CENTER\'}'][[scrollwheel]='false'][[zoom]='3'][[zoomcontroloptions]='{position: \'TOP_CENTER\'}'][center='{{ mapCenter }}']",
          [
            m("marker[(click)='markerClicked($event, pos)'][*ngfor='let pos of positions'][[icon]='pos.item.icon'][[label]='pos.item.label'][[position]='pos.latlng']"),
            m("info-window[id='iw-user']", 
              m("[*ngif='infoWindow.display']",
                [
                  m("a[href='{{ infoWindow.profileUrl }}']", 
                    "{{ infoWindow.forum_name }} @ {{ infoWindow.location }}"
                  ),
                  m("br"),
                  "Distance: {{ infoWindow.distance }} km"
                ]
              )
            )
          ]
        )
      ]
    )
  )
]

module.exports = {
    view: function() {
    	return m(".user-map", map)
    }
}