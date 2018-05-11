import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {AlertController} from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the Appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Appsetting {
    url: string = 'http://default-environment.uprbdsfein.us-east-2.elasticbeanstalk.com/api/'; //shop/shippingaddress
    userprofile: any;


    constructor(public http: Http, private alertCtrl: AlertController) {
        console.log('Hello Appsetting Provider');
    }

    public header() {
        let header = new Headers();
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});
        //headers.append('Access-Control-Allow-Origin', '*');
        let options = new RequestOptions({headers: headers});
        return options;
    }
    public serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");

    }

}
