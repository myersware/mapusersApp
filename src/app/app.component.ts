import { Component, NgZone, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { NguiMapModule } from '@ngui/map';
import 'rxjs/add/observable/from';
import { HttpClient, HttpErrorResponse, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormsModule, FormControl } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';

@Component({
        selector: 'app-gm',
        styleUrls: ['app.component.css'],
        template: `
          <h1>Forum User Locations</h1>
          <div>
            <div><h2 *ngIf="searchErrorMessage" >Search error {{ searchErrorMessage }}</h2>
            <mat-form-field>
                <input matInput [(ngModel)]="searchUser" placeholder="User forum name">
                <mat-error *ngIf="searchErrorMessage">{{searchErrorMessage}}</mat-error>
            </mat-form-field>
            <div  class="button-row">
            <button mat-raised-button color="primary"
                    (click)="doSearchUser()" [disabled]="!searchUser || !searchRadius">
                Search by forum user name
            </button>
            </div>
            <mat-form-field>
                <input matInput [(ngModel)]="searchLocation" placeholder="Search location">
                <mat-error *ngIf="searchErrorMessage">{{searchErrorMessage}}</mat-error>
            </mat-form-field>
            <div  class="button-row">
            <button mat-raised-button color="primary"
                    (click)="doSearchLocation(this.searchLocation)" [disabled]="!searchLocation || !searchRadius">
                Search by location
            </button>
            </div>
            <div>
             Radius(km)={{ searchRadius }}
            <mat-slider [(ngModel)]="searchRadius" (input)="this.onSliderChange($event)"
                min="100" max="20000" step="100" value="200">
            </mat-slider>
            </div>
            <div>
             Limit to {{ searchLimit }} closest:
            <mat-slider [(ngModel)]="searchLimit" (input)="this.onLimitChange($event)"
                min="10" max="100" step="10" value="20">
            </mat-slider>
            </div>
            <h2>Search near selected user</h2>
            <div>
                <mat-form-field *ngIf="selectOptions">
                    <mat-select placeholder="Pick a user" name="selectUser"
                        [(ngModel)]="selectedLocation" (selectionChange)="showLocation()">
                        <mat-option *ngFor="let opt of selectOptions" [value]="opt[0]">
                            {{ opt[1] }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
          <ngui-map center="{{ mapCenter }}"
             (mapReady$)="onInit($event)"
             (idle)="onIdle($event)"
            [zoom]="3"
            [zoomControlOptions]="{position: 'TOP_CENTER'}"
            [fullscreenControl]="true"
            [fullscreenControlOptions]="{position: 'TOP_CENTER'}"
            (click)="log($event)"
            [scrollwheel]="false">
            <marker *ngFor="let pos of positions" [position]="pos.latlng"
                    [icon]="pos.item.icon" [label]="pos.item.label"
                     (click)="markerClicked($event, pos)">
            </marker>
            <info-window id="iw-user">
                <div *ngIf="infoWindow.display">
                    <a href="{{ infoWindow.profileUrl }}">{{ infoWindow.forum_name }} @ {{ infoWindow.location }}</a>
                    <br>Distance: {{ infoWindow.distance }} km
                </div>
            </info-window>
          </ngui-map>          `
      })

export class AppComponent {
    lat = 20.0;
    lng = -20.0;
    mapCenter = {lat: this.lat, lng: this.lng};
    map;
    foundUser = false;
    searchLocation: string;
    searchUser: string;
    selectOptions = [];
    selectedLocation = 0;
    searchErrorMessage: string;
    searchRadius = 50;
    searchLimit = 20;
    loadSearchUser = '/app.php/mapusers/xhr/searchUser';
    loadSearchLocation = '/app.php/mapusers/xhr/searchLocation';
    initItems: any;
    forum_id: number;
    forum_name: string;
    user_name: string;
    autologin: string;
    role: string;
    location: string;
    markers: Observable<any[]>;
    positions = [];
    users;
    items: any[] = [];
    rawItems: any[];
    info = {
            id: 0,
            display: false,
            forum_name: null,
            color: null,
            geo: null,
            location: null,
            iconUrl: null,
            label: null,
    };
    infoWindow = {
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
    };

    onInit(map) {
        this.map = map;
        this.fitBounds(this.map);
    }
    fitBounds(map) {
        if (!map) {
            return;
        }
        // console.log('fitBounds map=', map);
        if (map.markers) {
            const bounds = new google.maps.LatLngBounds();
            // console.log('map.markers=', map.markers);
            map.markers.forEach(marker => {
              /// console.log('set bounds for marker=', marker);
              bounds.extend(marker.position);
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
    }

    log(event, str) {
        if (event instanceof MouseEvent) {
          return false;
        }
        console.log('event .... >', event, str);
    }

    onIdle(event) {
        // console.log('map idle ', event.target);
        this.map = event.target;
         // this.fitBounds(this.map);
    }
    onMarkerInit(marker) {
        console.log('marker', marker);
    }
    onMapClick(event) {
        this.positions.push(event.latLng);
        event.target.panTo(event.latLng);
    }

    showLocation(event) {
        // console.log('showLocation id=', this.selectedLocation);
        if (this.selectedLocation === 0) { return; }
        const thisLoc = this.users.find(k => Number(k.id) === Number(this.selectedLocation));
        console.log('thisLoc(', this.selectedLocation, ')=', thisLoc);
        if (thisLoc.geo.latitude) {
            this.mapCenter = {lat: Number(thisLoc.geo.latitude), lng: Number(thisLoc.geo.longitude)};
        } else {
            this.mapCenter = {lat: this.lat, lng: this.lng};
        }
        console.log('mapCenter=', this.mapCenter);
    }

    doSearchUser() {
        this.searchErrorMessage = null;
        const headers = new HttpHeaders()
        .set('X-Requested-With', 'XMLHttpRequest')
        .set('responseType', 'json');
        // console.log('added headers=', headers);
        let params = null;
        if (this.searchUser) {
            params = new HttpParams().set('name', this.searchUser)
                .set('radius', String(this.searchRadius))
                .set('limit', String(this.searchLimit));
            console.log('doSearchUser params=', params);
        }
        this.http.get(this.loadSearchUser, {params: params, headers: headers})
        .subscribe(
                data => {
                    console.log('getUser data=', data);
                    this.info = <any>data[0];
                    // console.log('home info=', this.info);
                    this.searchLocation = this.info.location;
                    this.getIconUrl(this.info);
                    // this.positions.push({latlng: [Number(this.info.geo.latitude), Number(this.info.geo.longitude)], item: this.info});
                    console.log('initial position=', this.positions);
                    if (this.info.geo.latitude) {
                        this.mapCenter = {lat: Number(this.info.geo.latitude), lng: Number(this.info.geo.longitude)};
                    } else {
                        this.mapCenter = {lat: Number(this.lat), lng: Number(this.lng)};
                    }
                    console.log('mapCenter=', this.mapCenter);
                    this.foundUser = true;
                    this.doSearchLocation(this.searchLocation);
                }, (err: HttpErrorResponse) => {
                    if (err.error instanceof Error) {
                        console.log('doSearchUser client error=', err);
                        this.searchErrorMessage = err['error']['message'];
                        this.foundUser = false;
                      } else {
                          console.log('doSearchUser server error=', err);
                          this.searchErrorMessage = err['error']['message'];
                          this.foundUser = false;
                      }
                    });
    }

   /**
    * @param center - either null or an address
    */
    doSearchLocation(center) {
        console.log('reloading from Remote..., center=', center);
        this.searchErrorMessage = null;
        this.clearLocations();
        let items;
        const headers = new HttpHeaders()
            .set('X-Requested-With', 'XMLHttpRequest')
            .set('responseType', 'json');
        // console.log('added headers=', headers);
        let params = null;
        if (center) {
            params = new HttpParams().set('address', center)
                .set('radius', String(this.searchRadius))
                .set('limit', String(this.searchLimit));
            console.log('reload params=', params);
        }
        this.http.get(this.loadSearchLocation, {params: params, headers: headers})
        .subscribe(
                data => {
                    console.log('remote data=', data);
                    items = data;
                    this.users = items;
                    // console.log('load items=', items);
                    let firstItem = true;
                    for (const item of items) {
                        // console.log('insert new ', item);
                        if (firstItem) {
                            this.mapCenter = {lat: Number(item.geo.latitude), lng: Number(item.geo.longitude)};
                            firstItem = false;
                        }
                        this.getIconUrl(item);
                        this.info = {id: item.id,
                                geo: {latitude: Number(item.geo.latitude),
                                    longitude: Number(item.geo.longitude)},
                                display: true,
                                color: item.color,
                                forum_name: item.forum,
                                location: item.location,
                                iconUrl: item.iconUrl,
                                label: null,
                        };
                        if (item.geo.latitude) {
                            this.positions.push({latlng: [Number(item.geo.latitude), Number(item.geo.longitude)], item: item});
                        }
                        this.selectOptions.push([item.id, item.forum, item.iconUrl]);
                        // this.updateItem(item, true);
                    }
                    // map won't have markers yet, so wait a bit to set bounds
                    setTimeout(() => {
                        console.log('Async Task Calling Callback');
                        this.fitBounds(this.map);
                      }, 500);
                    // console.log('selectOptions=', this.selectOptions);
                },
                (err: HttpErrorResponse) => {
                    if (err.error instanceof Error) {
                        console.log('doSearchUser client error=', err);
                        this.searchErrorMessage = err['error']['message'];
                        this.foundUser = false;
                      } else {
                          console.log('doSearchUser server error=', err);
                          this.searchErrorMessage = err['error']['message'];
                          this.foundUser = false;
                      }
                    });
    }

    onSliderChange(event: any) {
            console.log(event);
            console.log('radius=', this.searchRadius);
    }

    onLimitChange(event: any) {
        console.log(event);
        console.log('limit=', this.searchLimit);
}

    markerClicked(event, marker) {
        // console.log('clicked marker event=', event, ', marker=', marker);  // marker is {latlng, item}
        this.infoWindow.geo = {latitude: event.target.getPosition().lat(),
                longitude: event.target.getPosition().lng()};
        this.infoWindow.distance = Number(marker.item.distance).toFixed(2);
        this.infoWindow.forum_name = marker.item.forum;
        this.infoWindow.label = marker.item.label;
        this.infoWindow.location = marker.item.location;
        this.infoWindow.profileUrl = '/memberlist.php?mode=viewprofile&u=' + marker.item.id;
        this.infoWindow.display = true;
        console.log('info=', this.infoWindow);
        this.mapCenter = {lat: Number(this.infoWindow.geo.latitude), lng: Number(this.infoWindow.geo.longitude)};
        // console.log('infoWindows=', event.target.nguiMapComponent.infoWindows);
        event.target.nguiMapComponent.openInfoWindow('iw-user', event.target);
    }

    getIconUrl(item) {
        item.label = {
                fontFamily: 'Fontawesome',
                text: '\uf041', // code for font-awesome icon
                'font-size': '64px',
                color: '#' + item.color
        };
        item.icon = {
            path: google.maps.SymbolPath.CIRCLE, // or any others
            scale: 8,
            strokeOpacity: 0.05
        };
        // console.log('item.label=', item.label);
    }

    clearLocations() {
        console.log('clearLocations()');
        this.positions = [];
        this.info = null;
        this.selectOptions = [];
        this.selectOptions.push([0, 'none', '']);
    }

    constructor(private http: HttpClient,
            private __zone: NgZone) {

        this.doSearchUser();
    }

}
