import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {Http} from '@angular/http';
import {ReviewPage} from '../review/review';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-history',
    templateUrl: 'history.html',
})
export class HistoryPage {
    historydata: any;
    totalpageno: any;
   
    pageno = 1;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public appsetting: Appsetting,
        public http: Http,
        public common: Common,
    ) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HistoryPage');
        this.History();
    }
    /*********** function to accept the reservations *******************/
    History() {
        console.log('History function');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        let options = this.appsetting.header();
        let postdata = {
            page: this.pageno,
            role: user.role,
            user_id: user._id
        }
        
        let serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'orders/getoldreservation ', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if (response.status == true) {
                response.data.forEach(function(value,key){
                    console.log(value);
                    
                    var sum = 0;
                    if(value.order_data[0].review){
                        if (value.order_data[0].review.length > 0) {
                            value.order_data[0].review.forEach(function (val, ke) {
                                console.log(val);
                                sum += val.stars;
                                console.log(sum);
                                value.order_data[0].avg = sum / value.order_data[0].review.length;
                            })
                        } else {
                            value.order_data[0].avg = 0;
                        }
                    }else{
                        value.order_data[0].avg = 0;
                    }
                    
                })
                this.historydata = response.data;
                this.totalpageno = response.page;
            } else {
                this.common.presentAlert('History', 'No data found!');
            }
        })
    }
    
    Review(resid) {
        this.navCtrl.push(ReviewPage, {prod_id: resid});
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
