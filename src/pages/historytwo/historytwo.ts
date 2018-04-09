import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Appsetting} from '../../providers/appsetting';

import {Common} from '../../providers/common';
import {Http} from '@angular/http';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-historytwo',
    templateUrl: 'historytwo.html',
})
export class HistorytwoPage {
    history: any;
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
        console.log('ionViewDidLoad HistorytwoPage');
         this.History();
    }
    /*********** function to accept the reservations *******************/
    History() {
        console.log('History function');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        let options = this.appsetting.header();
        let postdata = {
            page:this.pageno,
            role: user.role,
            user_id: user._id
        }
        let serialized = this.appsetting.serializeObj(postdata);
                this.http.post(this.appsetting.url + 'orders/getoldreservation ', serialized, options).map(res => res.json()).subscribe(response => {
                    console.log(response);
                    if (response.status == true) {
                        this.history = response.data;
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
            this.History();
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
        this.History();
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
}
