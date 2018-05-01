import { Component } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation';
/**
 * Generated class for the LocationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 declare var google;
@Component({
  selector: 'location',
  templateUrl: 'location.html'
})
export class LocationComponent {
    longitude: number;
    latitude: number;
    CurrentLatLong;
  text: string;

  constructor(public geolocation: Geolocation,) {
    console.log('Hello LocationComponent Component');
    this.text = 'Hello World';
    this.currentLocation();

    
  }
currentLocation(){
     if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
           // callback(position.coords.latitude);
            return position.coords.latitude
          }, function() {
            
          });
        } else {
          // Browser doesn't support Geolocation
          //handleLocationError(false, infoWindow, map.getCenter());
        }
//        console.log(this.CurrentLatLong)
//        return 'hello location';
}

LatLong(lat,long){
    console.log(lat);
}
}
