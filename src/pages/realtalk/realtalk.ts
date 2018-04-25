import {Component, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import {Common} from '../../providers/common';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {FormsModule, Validators, FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { LocationComponent } from '../../components/location/location';


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
    ourtalks: any;
    mytalks: any;
    totalpageno(arg0: any): any {
        throw new Error("Method not implemented.");
    }
    autocomplete: {query: string;};
    autocompleteItems: any[];
    realTalk: FormGroup;
    talk: any = 'mytalk';
    subcat: any = [];
    service = new google.maps.places.AutocompleteService();
    geocoder = new google.maps.Geocoder();
    latitude: number;
    longitude: number;
    pageno: any = 1;
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
        public location:LocationComponent
    ) {
        console.log(this.location.geolocation);
        this.autocompleteItems = [];
        this.realTalk = this.formBuilder.group({
            topicname: ['', [Validators.required]],
            location: ['', [Validators.required]],
            category: ['', [Validators.required]],
            message: ['', [Validators.required]]
        })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RealtalkPage');
        this.getSubCatList();
        if(this.talk == 'mytalk'){
            this.MyTalk();
        }
        
        
    }
    /********* function used for get subcatlist to show on top of the page ***********/
    getSubCatList() {
        this.subcat = [];
        var temp = this;
        this.http.get(this.appsetting.url + 'categories/get').map(res => res.json()).subscribe(response => {
            console.log(response);
            response.forEach(function (value, key) {
                value.sub_category.forEach(function (val, ke) {
                    if (!val.sub_category_image) {
                        val.sub_category_image = 'assets/imgs/iconnot.png';
                        temp.subcat.push(val);
                    } else {
                        temp.subcat.push(val);
                    }
                })
            })
            //this.subcat = response;
            console.log(this.subcat);
        })
    }
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
        console.log(formValue.value);
        let options = this.appsetting.header();
        console.log(formValue.value.category);
        var a = formValue.value.category.split(',');
        console.log(a);

        var postdata = {
            created_by: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            topic_name: formValue.value.topicname,
            loc_address: formValue.value.location,
            message: formValue.value.message,
            category_name: a[1],
            category_id: a[0],
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
                    this.MyTalk();
                } else {
                    this.common.presentAlert('Talk', response.msg);
                }

            })
        })
    }

    MyTalk() {
        let options = this.appsetting.header();
        var postdata = {
            user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            page: this.pageno

        }

        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Please wait...'
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.url + 'talks/getTalksAgainstUser', serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    this.talk = 'mytalk';
                    response.data.forEach(function (value, key) {
                        if (JSON.parse(localStorage.getItem('CurrentUser')).profile_pic) {
                            value.profile_pic = JSON.parse(localStorage.getItem('CurrentUser')).profile_pic;
                        } else {
                            value.profile_pic = 'assets/imgs/user.png';
                        }
                    })

                    this.mytalks = response.data;
                    this.totalpageno = response.Toatalpage;
                } else {
                    this.common.presentAlert('Talk', response.message);
                }

            })
        })
    }

    GetOurTalks() {
        let options = this.appsetting.header();
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(() => {
            this.http.get(this.appsetting.url + 'talks/getallTalks', options).map(res => res.json()).subscribe(response => {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    this.talk = 'ourtalk';
                    this.ourtalks = response.data;
                    this.totalpageno = response.Toatalpage;
                } else {
                    this.common.presentAlert('Talk', response.message);
                }

            })
        })
    }

    /****** functions used for pagination ************/
    doInfiniteOurTalks(infiniteScroll) {
        console.log('Begin async operation');
        this.pageno = this.pageno + 1;
        console.log(this.totalpageno)
        console.log(this.pageno)
        if (this.pageno <= this.totalpageno) {

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
