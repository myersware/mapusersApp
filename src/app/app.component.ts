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
                </div>
            </info-window>
          </ngui-map>

          `
      })

export class AppComponent {
    mapCenter = [];
    foundUser = false;
    searchLocation: string;
    searchUser: string;
    selectOptions = [];
    selectedLocation = 0;
    searchErrorMessage: string;
    searchRadius = 50;
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
    lat = 20.0;
    lng = -20.0;
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
            location: null,
            iconUrl: null,
            profileUrl: null,
            label: null,
    };

    log(event, str) {
        if (event instanceof MouseEvent) {
          return false;
        }
        console.log('event .... >', event, str);
    }

    onMapReady(map) {
        console.log('map', map);
        console.log('markers', map.markers);  // to get all markers as an array
    }
    onIdle(event) {
        console.log('map', event.target);
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
            this.mapCenter = [Number(thisLoc.geo.latitude), Number(thisLoc.geo.longitude)];
        } else {
            this.mapCenter = [this.lat, this.lng];
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
                .set('radius', String(this.searchRadius));
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
                        this.mapCenter = [Number(this.info.geo.latitude), Number(this.info.geo.longitude)];
                    } else {
                        this.mapCenter = [this.lat, this.lng];
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
                .set('radius', String(this.searchRadius));
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
                            this.mapCenter = [Number(item.geo.latitude), Number(item.geo.longitude)];
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

    markerClicked(event, marker) {
        // console.log('clicked marker event=', event, ', marker=', marker);  // marker is {latlng, item}
        this.infoWindow.geo = {latitude: event.target.getPosition().lat(),
                longitude: event.target.getPosition().lng()};
        this.infoWindow.forum_name = marker.item.forum;
        this.infoWindow.label = marker.item.label;
        this.infoWindow.location = marker.item.location;
        this.infoWindow.profileUrl = '/memberlist.php?mode=viewprofile&u=' + marker.item.id;
        this.infoWindow.display = true;
        console.log('info=', this.infoWindow);
        this.mapCenter = [Number(this.infoWindow.geo.latitude), Number(this.infoWindow.geo.longitude)];
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
