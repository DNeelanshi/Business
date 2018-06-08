import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {Http} from '@angular/http';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import * as moment from 'moment';
import {HomePage} from '../home/home';
/**
 * Generated class for the Reviews2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-reviews2',
    templateUrl: 'reviews2.html',
})
export class Reviews2Page {
    businessData: any;
    currentuser: any;
    data: any = {};
    replybtn: any = false;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private http: Http,
        public appsetting: Appsetting,
        public common: Common,
        public loadingCtrl:LoadingController

    ) {
    
        this.getUser();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Reviews2Page');
    }
    getUser() {
        if (localStorage.getItem('CurrentUser')) {
            console.log(JSON.parse(localStorage.getItem('CurrentUser'))._id);
            let options = this.appsetting.header();
            var postdata = {
                user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            }
            var serialized = this.appsetting.serializeObj(postdata);
             var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.url + 'users/userinfo', serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                    this.currentuser = null;
                    var sum = 0;
                    var length = response.data.review.length;
                    response.data.review.forEach(function (value, key) {
                        console.log(value);
                        sum += value.stars;
                        
                        response.userinfo.forEach(function (val, ke) {
                            console.log(val);
                            if(val != null){
                            if (val._id == value.user_id) {
                                value.firstname = val.firstname;
                                value.lastname = val.lastname;
                                if(val.profile_pic){
                                value.profilePic = val.profile_pic;
                                }else{
                                    value.profilePic = 'assets/imgs/user.png';
                                }
                            }
                            }
                        })
                   
                    
                        /****** code to get date and time difference ************/
                        var a = new Date();
                        console.log(new Date(value.created_at))
                        var startDate = moment(new Date(value.created_at), "DD.MM.YYYY");
                        var endDate = moment(a, "DD.MM.YYYY");
                        var milliseconds = endDate.diff(startDate);
                        var duration = moment.duration(milliseconds, 'milliseconds');
                        var aba = duration.hours()+':'+duration.minutes();
                        console.log(moment(aba, ["HH:mm"]).format("HH:mm"));
                        console.log('Hours' + duration.hours())
                        console.log('minutes' + duration.minutes());
                        if(duration.hours()>24){
                            value.days = duration.asDays();
                            value.time = 'day';
                        }else{
                            value.days = duration.hours()+':'+duration.minutes();
                            value.time = 'time';
                        }
                    })
                    response.data.review.avg = sum / length;
                    this.data.rating = response.data.review.avg;
                    this.currentuser = response.data;
                    this.businessData = response.data.business_data[0];
                    console.log(this.businessData);
                    console.log(this.currentuser);

                }
            })
        })
        }
    }

    Reply(index) {
        console.log(index);
        this.replybtn = index;
    }
    
    ReplyComment(comment,id) {
        console.log(comment);
        console.log(id);
        if(comment != undefined || comment != ''){
            let options = this.appsetting.header();
            var postdata = {
                review_id: id,
                comment:comment
            }
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.url + 'replyoncomment', serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
//                    this.navCtrl.push(HomePage);
                    this.data.comment = '';
                    this.getUser();
                }else{
                    this.common.presentAlert('Review', response.msg);
                }
            })
        })
        }else{
            this.common.presentAlert('Review', 'Write something to reply!');
        }
    }
}
