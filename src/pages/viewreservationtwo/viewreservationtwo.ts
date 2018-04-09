import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';

/**
 * Generated class for the ViewreservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-viewreservationtwo',
    templateUrl: 'viewreservationtwo.html',
})
export class ViewreservationtwoPage {
    reservations: any;
    pageno = 1;
    totalpageno;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public appsetting: Appsetting,
        public http: Http,
        public common: Common,
    ) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ViewreservationtwoPage');
        this.Reservations();
    }
    
    /*********** function to accept the reservations *******************/
    Reservations() {
        
        console.log('reservations function');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        let options = this.appsetting.header();
        let postdata = {
            role: user.role,
            user_id: user._id,
            page:this.pageno
        }
        let serialized = this.appsetting.serializeObj(postdata);
                this.http.post(this.appsetting.url + 'orders/getreservation', serialized, options).map(res => res.json()).subscribe(response => {
                    console.log(response);
                    if (response.status == true) {
                     this.reservations = response.data;
                     console.log(response.page);
                     this.totalpageno = response.page;
                     
                    } else {
                        //this.common.presentAlert('Book now', 'Something went wrong!');
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
            this.Reservations();
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
        this.Reservations();
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
}
