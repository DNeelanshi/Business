import {Component, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import {Common} from '../../providers/common';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {FormsModule, Validators, FormControl, FormBuilder, FormGroup} from '@angular/forms';
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';
import {TalkreplyPage} from '../talkreply/talkreply';
import * as moment from 'moment';
import { OurtalkreplyPage } from '../ourtalkreply/ourtalkreply';
import {Geolocation} from '@ionic-native/geolocation';
/**
 * Generated class for the RealtalkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
    selector: 'page-realtalk',
    templateUrl: 'realtalk.html',
})

export class RealtalkPage {
    ourtalks: any = [];
    mytalks: any = [];
    categories:any = [];
    totalpageno: any;
    interval: any;
    autocomplete: {query: string};
    autocompleteItems: any[];
    realTalk: FormGroup;
    talk: any = 'mytalk';
    subcat: any = [];
    service = new google.maps.places.AutocompleteService();
    geocoder = new google.maps.Geocoder();
    latitude: number;
    longitude: number;
    pageno: any = 1;
    loader: any = 0;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public common: Common,
        public toastCtrl: ToastController,
        public appsetting: Appsetting,
        public http: Http,
        public formBuilder: FormBuilder,
        private zone: NgZone,
        private geolocation: Geolocation,
    ) {
    //alert('asdfa');
    console.log(this.common.interval);
      clearInterval(this.common.interval);
        this.autocompleteItems = [];
        this.realTalk = this.formBuilder.group({
            topicname: ['', [Validators.required]],
            location: ['', [Validators.required]],
            category: ['', [Validators.required]],
            message: ['', [Validators.required]]
        })
        this.categories = [
        {name:'Coffee House Talk'},{name:'Family & Parenting'},{name:'Food'},{name:'Humor & Offbeat'},
        {name:'Local Conversations'},{name:'Local MeetUps Events'},{name:'New Music Alert!'},{name:'News & Politics'},
        {name:'Other'},{name:'Relationships and Dating'},{name:'Shopping and Products'},{name:'Sports'},
        {name:'Theatre, Movies, Entertainment'},{name:'Travel'}
        ]
         var reverseSortedArray =  this.categories.sort(function (a, b) {
//               console.log(a);
//               console.log(b);
                if (a.name < b.name) return -1;
                    else if (a.name > b.name) return 1;
                    return 0;
              });
//              console.log(reverseSortedArray);
//              console.log(this.categories);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RealtalkPage');
       
        clearInterval(this.common.interval);
        //this.getSubCatList();
        if (this.talk == 'mytalk') {
            this.MyTalk();
        }
    }
    /********* function used for get subcatlist to show on top of the page ***********/
//    getSubCatList() {
//        this.subcat = [];
//        var temp = this;
//        this.http.get(this.appsetting.url + 'categories/get').map(res => res.json()).subscribe(response => {
//            console.log(response);
//            response.forEach(function (value, key) {
//                value.sub_category.forEach(function (val, ke) {
//                    if (!val.sub_category_image) {
//                        val.sub_category_image = 'assets/imgs/iconnot.png';
//                        temp.subcat.push(val);
//                    } else {
//                        temp.subcat.push(val);
//                    }
//                })
//            })
//            //this.subcat = response;
//            console.log(this.subcat);
//        })
//    }
    /****** function used for autocomplete prediction ***********/
    updateSearch(formvalue) {
        console.log('update');
        if (formvalue.value.location) {
            let me = this;
            this.service.getPlacePredictions({input: formvalue.value.location}, function (predictions, status) {
                me.autocompleteItems = [];
                console.log('here');
                me.zone.run(function () {
                    predictions.forEach(function (prediction) {
                        console.log(prediction);
                        me.autocompleteItems.push(prediction.description);
                    });
                    console.log(me.autocompleteItems);
                });
            });
        } else {

        }
    }
    /****** function used for choose item from autocomplete prediction ***********/
    chooseItem(item) {
        var temp = this;
        console.log(item);
        //        this.autocomplete.query = item;
        this.realTalk.patchValue({
            location: item,
        });
        this.autocompleteItems = [];
        this.geocoder.geocode({'address': item}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
                console.log(results[0].geometry.location.lat());
                console.log(results[0].geometry.location.lng());
                temp.latitude = results[0].geometry.location.lat();
                temp.longitude = results[0].geometry.location.lng();
                temp.pageno = 1;

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
    onSelectChange(cat) {
        console.log(cat);
        // this.category = cat;
    }
    postTalk(formValue) {
        clearInterval(this.common.interval);
        console.log(formValue.value);
        let options = this.appsetting.header();
        console.log(formValue.value.category);
//        var a = formValue.value.category.split(',');
//        console.log(a);

        var postdata = {
            created_by: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            topic_name: formValue.value.topicname,
            loc_address: formValue.value.location,
            message: formValue.value.message,
            category_name: formValue.value.category,
            //admin_notify:false,
            long: this.longitude,
            lat: this.latitude
        }

        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Please wait...'
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.url + 'talks/addTopic', serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                     this.realTalk.patchValue({
                        topicname: '',
                        location: '',
                        category: '',
                        message: ''
                    })
                    this.MyTalk();
                } else {

                    this.common.presentAlert('Talk', response.msg);
                }

            })
        })
    }

    MyTalk() {
        clearInterval(this.common.interval);
        var temp = this;
        this.loader = 0;
        let options = this.appsetting.header();
        var postdata = {
            user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            page: this.pageno

        }

        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        //        var Loading = this.loadingCtrl.create({
        //            spinner: 'bubbles',
        //            content: 'Please wait...'
        //        });
        //        Loading.present().then(() => {
        this.http.post(this.appsetting.url + 'talks/getTalksAgainstUser', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            //Loading.dismiss();
            if (response.status == true) {
                this.talk = 'mytalk';
                this.mytalks = [];
                if (response.data.length > 0) {
                    this.loader = 1;
                    response.data.forEach(function (value, key) {
                          /****** code to get date and time difference ************/
//                        var a = new Date();
//                        console.log(new Date(value.created_at))
//                        var ab = moment(new Date(value.created_at));
//                        var b = moment(new Date());
//                        console.log(b.diff(ab));
//                        
                        
                        var startDate = moment(new Date(value.created_at));
                        var endDate = moment(new Date());
                       // var milliseconds = endDate.diff(startDate);
                        
                        console.log(endDate.diff(startDate, 'minutes'));
                        console.log(endDate.diff(startDate, 'hours'));
                        console.log(endDate.diff(startDate, 'days'));

                         var aba = endDate.diff(startDate, 'hours')+':'+endDate.diff(startDate, 'minutes');
                         console.log(endDate.diff(startDate, 'hours')+':'+endDate.diff(startDate, 'minutes'));
                         console.log(moment(aba, ["HH:mm"]).format("HH:mm"));
                            
//                        var duration = moment.duration(milliseconds, 'milliseconds');
//                        console.log('Hours' + duration.hours())
//                        console.log('minutes' + duration.minutes());
                        if(endDate.diff(startDate, 'days')>0){
                            value.days = endDate.diff(startDate, 'days');
                            value.time = 'day';
                        }else{
                        if(endDate.diff(startDate, 'hours')>1){
                        value.days = moment(aba, ["HH:mm"]).format("HH:mm");
                         value.time = 'hours';
                        }else{
                            value.days = moment(aba, ["HH:mm"]).format("HH:mm");
                         value.time = 'hour';
                        }
                        }
                        
                        if (JSON.parse(localStorage.getItem('CurrentUser')).profile_pic) {
                            value.profile_pic = JSON.parse(localStorage.getItem('CurrentUser')).profile_pic;
                        } else {
                            value.profile_pic = 'assets/imgs/user.png';
                        }
                        //if (value.status == true) {
                            temp.mytalks.push(value)
                        //}
                    })
                    this.totalpageno = response.Toatalpage;
                    console.log(this.mytalks);
                } else {

                }
            } else {
                this.loader = 1;
//                this.interval = setInterval(() => {
//                    this.MyTalk();
//                }, 5000);
                //this.common.presentAlert('Talk', response.message);
            }

        })
        // })
    }

    GetOurTalks() {
        this.loader = 0;
       clearInterval(this.common.interval);
        var temp = this;
        if(this.pageno >= this.totalpageno){
                    this.pageno = 1;
                }
            this.geolocation.getCurrentPosition().then((resp) => {
            console.log('getCurrentPosition');
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            this.latitude = resp.coords.latitude;// resp.coords.latitude
            this.longitude = resp.coords.longitude;// resp.coords.longitude
      
        let options = this.appsetting.header();
        var postdata = {
            page:this.pageno,
            lat: this.latitude,
            long:this.longitude
        }
        var serialized = this.appsetting.serializeObj(postdata);
        //        var Loading = this.loadingCtrl.create({
        //            spinner: 'bubbles',
        //            content: 'Loading...'
        //        });
        //        Loading.present().then(() => {
        this.http.post(this.appsetting.url + 'talks/getallTalks',serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            // Loading.dismiss();
            if (response.status == true) {
                this.loader = 1;
                this.talk = 'ourtalk';
                this.ourtalks = [];
                
                response.data.forEach(function (value, key) {
                    console.log(value);
                    if (value.status == true) {
                            temp.ourtalks.push(value);
                    }
                })
                console.log(this.ourtalks);
                this.totalpageno = response.Toatalpage;
            } else {
                this.loader = 1;
            }
        })
          })
    }
/********* this function is use for infinite scroll **********/
 GetOurTalks1() {
        this.loader = 0;
       clearInterval(this.common.interval);
        var temp = this;
        let options = this.appsetting.header();
        var postdata = {
            page:this.pageno,
            lat:this.latitude,
            long:this.longitude
        }
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'talks/getallTalks',serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            // Loading.dismiss();
            if (response.status == true) {
                this.loader = 1;
                this.talk = 'ourtalk';
                response.data.forEach(function (value, key) {
                    if (value.status == true) {
                        temp.ourtalks.push(value)
                    }
                })
               
                
                this.totalpageno = response.Toatalpage;
            } else {
                this.loader = 1;
                //                    this.common.presentAlert('Talk', response.message);
            }

            // })
        })
    }
ReplyPage(tdata){
    console.log(tdata);
    this.navCtrl.push(TalkreplyPage,{topidata:tdata});
}
OurTalkReply(data){
    console.log(data);
    this.navCtrl.push(OurtalkreplyPage,{topidata:data});
}
    /****** functions used for getlist on refresh ************/
    doRefreshOurTalk(refresher) {
        console.log('Begin async operation', refresher);
        //this.getSubCatList();
        this.pageno = 1;
        this.loader = 1;
        this.GetOurTalks();
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
 /****** functions used for getlist on refresh ************/
    doRefreshMyTalk(refresher) {
        console.log('Begin async operation', refresher);
        //this.getSubCatList();
        this.pageno = 1;
        this.loader = 1;
        this.MyTalk();
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
    /****** functions used for pagination ************/
    doInfiniteOurTalks(infiniteScroll) {
        console.log('Begin async operation');
        this.pageno = this.pageno + 1;
        console.log(this.totalpageno)
        console.log(this.pageno)
        if (this.pageno <= this.totalpageno) {
         this.GetOurTalks1();
        } else {
            //this.pageno = 1;
            console.log('No more data to load');
        }
        setTimeout(() => {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    }

    /****** functions used for pagination ************/
    doInfiniteMyTalks(infiniteScroll) {
        console.log('Begin async operation');
        this.pageno = this.pageno + 1;
        console.log(this.totalpageno)
        console.log(this.pageno)
        if (this.pageno <= this.totalpageno) {
            this.MyTalk();
        } else {
            console.log('No more data to load');
        }
        setTimeout(() => {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    }
}
