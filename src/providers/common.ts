import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {AlertController, NavController, App} from 'ionic-angular';
import 'rxjs/add/operator/map';
/*********Native plugins *************/
//import { Geolocation } from '@ionic-native/geolocation';
import {InAppBrowser} from '@ionic-native/in-app-browser';
/*
  Generated class for the Appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
declare var google;
@Injectable()
export class Common {
    public interval: any;
    dist:any;
    constructor(
        public http: Http,
        private alertCtrl: AlertController,
        public app: App,
        private iab: InAppBrowser

    ) {
        console.log('Hello Common Provider');
    }
    presentAlert(title, subtitle) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            //buttons: ['Ok']
        });
        setTimeout(function () {
            alert.dismiss();
        }, 3000);
        return alert.present();
    }

    distance(lat1, lon1, lat2, lon2,unit) {
        console.log(lat1, lon1);
        console.log(lat2, lon2)
        console.log(lat1);
        console.log(lon1);
        console.log(lat2);
        console.log(lon2);

        var radlat1 = Math.PI * lat1 / 180
        var radlat2 = Math.PI * lat2 / 180
        var theta = lon1 - lon2
        var radtheta = Math.PI * theta / 180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {dist = dist * 1.609344}
        // if (unit == "N") {dist = dist * 0.8684}
        console.log(dist * 0.62137);
        return (dist * 0.62137).toFixed(1);
//        var temp = this;
//        var origin1 = new google.maps.LatLng(32.9697, lon1);
//        var destinationB = new google.maps.LatLng(lat2, lon2);
//        var service = new google.maps.DistanceMatrixService();
//        service.getDistanceMatrix(
//            {
//                origins: [origin1],
//                destinations: [destinationB],
//                travelMode: 'DRIVING',
//                unitSystem: google.maps.UnitSystem.IMPERIAL,
//                avoidHighways: false,
//                avoidTolls: false,
//            }, callback);
//
//     function callback(response, status) {
//            console.log(status)
//            if (status == 'OK') {
//                console.log(response)
//                console.log(response.rows[0].elements[0].distance.text.split(' '));
//                var a = response.rows[0].elements[0].distance.text.split(' ');
//                console.log(a[0]);
//                
//            }
//        }
       
    }

teyhave(event){
    console.log(event);
    //alert('teyhave');
    this.dist = event;
    console.log(this.dist);
}
    tryagain() {
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        } else {
            console.log('you are offline');
            let alert = this.alertCtrl.create({
                message: '<img src="assets/imgs/network.png">',
                buttons: [{
                    text: 'Try again',
                    role: 'cancel',
                    handler: () => {
                        console.log('try again clicked');
                        this.tryagain();

                    }
                }]
            });
            alert.present();
        }
    }

    presentConfirm(title, message, page) {
        let alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Ok',
                    role: 'submit',
                    handler: () => {
                        console.log('Submit clicked');
                        let nav = this.app.getActiveNav();
                        console.log(nav);
                        nav.push(page);
                    }
                }
            ]
        });
        alert.present();
    }

    ConfirmFunction(title, message, page) {
        let alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: () => {
                        console.log('login clicked');
                        let nav = this.app.getActiveNav();
                        console.log(nav);
                        nav.push(page);

                    }
                }
            ]
        });
        alert.present();
    }
    InappBrowser(link) {
        let InAppBrowserOptions = {
            locatio: 'no',
            closebuttoncaption: 'Back to app'
        }
        console.log(link.match('https:'))
        if (link.match('https:') != null || link.match('http:') != null) {
            const browser = this.iab.create(link, '_blank', InAppBrowserOptions);
            browser.show();
        } else {
            let alert = this.alertCtrl.create({
                title: '',
                message: 'Invalid url',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'submit',
                        handler: () => {
                            console.log('Submit clicked');
                        }
                    }
                ]
            });
            alert.present();
        }

    }
}
