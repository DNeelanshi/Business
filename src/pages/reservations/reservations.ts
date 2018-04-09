import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams,LoadingController} from 'ionic-angular';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';
import * as moment from 'moment';

/**
 * Generated class for the ReservationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-reservations',
    templateUrl: 'reservations.html',
})
export class ReservationsPage {
    totalpageno: any;
    reservationsdata: any;
    pageno = 1;

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
        console.log('ionViewDidLoad ReservationsPage');
        this.GetList();
    }

    GetList() {
        console.log('hereeee');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        let options = this.appsetting.header();
        let postdata = {
            role: user.role,
            user_id: user._id,
            page:this.pageno
        }
        let serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(() => {
        this.http.post(this.appsetting.url + 'orders/getorders', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            Loading.dismiss();
            if (response.status == true) {
                this.reservationsdata = '';
                response.data.forEach(function (value, key) {
                    console.log(value);
                    value.orderstart = moment(value.orderstart).format('MM-DD-YYYY');
                    value.bookingtime = moment(value.orderstart).format('HH:mm A');
                })
                this.reservationsdata = response.data;
                this.totalpageno = response.page;
                console.log(this.reservationsdata);
            } else {
                //this.common.presentAlert('Book now', 'Something went wrong!');
            }
        })
        })
    }

/*********** function to accept the reservations *******************/
    Accept(orderid) {
        console.log('Accept clicked');
        console.log(orderid);
        //return false;
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        let options = this.appsetting.header();
        let postdata = {
            order_id: orderid,
            orderstatus: 1
        }
        let serialized = this.appsetting.serializeObj(postdata);
                this.http.post(this.appsetting.url + 'orders/changeOrderStatus', serialized, options).map(res => res.json()).subscribe(response => {
                    console.log(response);
                    if (response.status == true) {
                    this.common.presentAlert('Reservation', 'Reservation accepted successfully!');
                    this.GetList();
                    } else {
                        this.common.presentAlert('Reservation', 'Something went wrong!');
                    }
                })
    }
    
    /*********** function to accept the reservations *******************/
    Decline(orderid) {
        console.log('Decline clicked');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        let options = this.appsetting.header();
        let postdata = {
            order_id: orderid,
            orderstatus: 0
        }
        let serialized = this.appsetting.serializeObj(postdata);
                this.http.post(this.appsetting.url + 'orders/changeOrderStatus', serialized, options).map(res => res.json()).subscribe(response => {
                    console.log(response);
                    if (response.status == true) {
                        this.GetList();
                        this.common.presentAlert('Reservation', 'Reservation declined!');
                    } else {
                        this.common.presentAlert('Reservation', 'Something went wrong!');
                    }
                })
    }
      /****** functions used for pagination ************/
    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        this.pageno = this.pageno + 1;
        console.log(this.totalpageno)
        console.log(this.pageno)
        if (this.pageno < this.totalpageno) {
            this.GetList();
        } else {
            console.log('No more data to load');
        }
        setTimeout(() => {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    }
     /****** functions used for getlist on refresh ************/
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        this.ionViewDidLoad();
        this.GetList();
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
}
