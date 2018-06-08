import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';
import {ViewproductPage} from '../viewproduct/viewproduct';

/**
 * Generated class for the ViewfavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-viewfavorites',
    templateUrl: 'viewfavorites.html',
})
export class ViewfavoritesPage {
    favouritelist: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public appsetting: Appsetting,
        public http: Http,
        public common: Common,
        public loadingCtrl:LoadingController
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ViewfavoritesPage');
         clearInterval(this.common.interval);
        this.ViewFavourites();
    }
    /*********** function to accept the reservations *******************/
    ViewFavourites() {
        console.log('History function');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        let options = this.appsetting.header();
        let postdata = {
            user_id: user._id
        }
        let serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(() => {
        this.http.post(this.appsetting.url + 'user/get_favarite_business', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            Loading.dismiss();
            if (response.status == true) {
                this.favouritelist = response.data;
                console.log(this.favouritelist.length);
            } else {
                //this.common.presentAlert('Book now', 'Something went wrong!');
            }
        })
        })
    }

    MakeAsUnfavourite(businessID) {
        console.log(businessID);
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        let options = this.appsetting.header();
        let postdata = {
            user_id: user._id,
            favorite_business_id: businessID
        }
        let serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'user/delete_favarite_business ', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if (response.status == true) {
                localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                this.ViewFavourites();

            }
        })
    }

  viewproduct(dat) {
        console.log(dat);
        this.navCtrl.push(ViewproductPage, {restdata: dat});
    }
}
