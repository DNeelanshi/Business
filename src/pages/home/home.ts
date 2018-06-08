import {Component, NgZone} from '@angular/core';
import {NavController, ModalController, ViewController, ToastController, LoadingController, AlertController} from 'ionic-angular';
import {FilterPage} from "../filter/filter";
import {ViewproductPage} from '../viewproduct/viewproduct';
import {BooknowPage} from '../booknow/booknow';
import {ReviewPage} from '../review/review';
import {SocialSharing} from '@ionic-native/social-sharing';
import {Common} from '../../providers/common';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {Geolocation} from '@ionic-native/geolocation';
import * as moment from 'moment';
import {LoginPage} from '../login/login';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OpenNativeSettings} from '@ionic-native/open-native-settings';
import {SearchPage} from '../search/search';

declare var google;
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})

export class HomePage {
    searchd: any;
    longitude: number;
    latitude: number;
    disable: boolean = false;
    SearchcatForm: FormGroup;
    SearchForm: FormGroup;
    name: string = 'By name';
    categoryid: any;
    class: string;
    currentLong: number;
    currentLat: number;
    favourite: any;
    modaldata: any;
    totalpageno: any;
    pageno: any = 1;
    restaurantlist: any = [];
    searchQuery: string = '';
    data: any = {};

    subcat: any = [];
    categorydata: any = [];
    premiumBusiness: any = [];
    fav = 0;
    rating: any = {};
    show: boolean = false;
    keyword: string;
    constructor(
        public navCtrl: NavController,
        public modalCtrl: ModalController,
        public ViewCtrl: ViewController,
        private socialSharing: SocialSharing,
        public loadingCtrl: LoadingController,
        public common: Common,
        public toastCtrl: ToastController,
        public appsetting: Appsetting,
        public http: Http,
        private zone: NgZone,
        private geolocation: Geolocation,
        public alertCtrl: AlertController,
        public formBuilder: FormBuilder,
        private openNativeSettings: OpenNativeSettings
    ) {
        //alert('constructor');
        this.currentLocation();
        clearInterval(this.common.interval);
        this.getSubCatList();
        if (localStorage.getItem('CurrentUser')) {
            console.log(JSON.parse(localStorage.getItem('CurrentUser')));
            this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
        }
        localStorage.removeItem('Seachdata');

    }
    ngOnInit(): any {
        //alert('ngOnInit');
        var temp = this;
        console.log('ngOnInit');
        this.SearchForm = this.formBuilder.group({
            searchname: ['']
        });
        this.SearchcatForm = this.formBuilder.group({
            searchcat: ['']
        });
        // this.tryagain();

    }
    ionViewDidLoad() {
        // alert('ionViewDidLoad');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
            //this.currentLocation();
            localStorage.removeItem('filterdata');
            console.log((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString());

            console.log('ionViewDidLoad HomePage');
            //        this.Getlist(1, 30.723839099999996, 76.8465082);
            //        this.latitude = 30.723839099999996;
            //        this.longitude = 76.8465082;
        } else {
            this.common.tryagain();
        }


    }

    currentLocation() {
        var temp = this;
        console.log('current location');
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log('getCurrentPosition');
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            this.latitude = resp.coords.latitude;// resp.coords.latitude
            this.longitude = resp.coords.longitude;// resp.coords.longitude
            this.currentLat = resp.coords.latitude;
            this.currentLong = resp.coords.longitude;
            this.Getlist(this.pageno, resp.coords.latitude, resp.coords.longitude);

        }).catch((error) => {
            console.log('Error getting locatio            n', error);
        });
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
                        // console.log(val);
                        if (val.status == true) {
                            temp.subcat.push(val);
                        } else {
                            //val.status = false;
                        }
                    } else {
                        if (val.status == true) {
                            temp.subcat.push(val);
                            //temp.categorydata.push(val);
                        } else {
                            //val.status = false;
                        }
                    }
                })
            })
            this.subcat.sort(function (a, b) {
                if (a.sub_category_title < b.sub_category_title) return -1;
                else if (a.sub_category_title > b.sub_category_title) return 1;
                return 0;
            });

        })
        console.log(this.subcat);
    }


    /****** functions used for getlist of restaurants by default when user visit on page ************/
    Getlist(pageno, lat, long) {
        console.log('Getlist');
        var temp = this;
        let options = this.appsetting.header();
        var postdata = {
            lat: lat,
            long: long,
            page: parseInt(pageno)
        }
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.url + 'users/getbusinessbyloc', serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    console.log(response.data);
                    console.log(this.latitude);
                    console.log(this.longitude);
                    this.restaurantlist = [];
                    this.premiumBusiness = [];

                    for (var i = 0; i < response.data.length; i++) {
                        console.log('for loop')
                        if (response.data[i].business_data[0].business_status == true) {
                            if (localStorage.getItem('CurrentUser')) {
                                this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                                if (this.favourite.length > 0) {
                                    for (var j = 0; j < this.favourite.length; j++) {
                                        if ((response.data[i].business_data[0]._id) == (this.favourite[j].favorite_business_id)) {
                                            console.log('matched');
                                            response.data[i].business_data[0].fav = 1;
                                            break;
                                        } else {
                                            console.log('not matched');
                                            response.data[i].business_data[0].fav = 0;
                                        }
                                    }
                                } else {
                                    response.data[i].business_data[0].fav = 0;
                                }
                            } else {
                                response.data[i].business_data[0].fav = 0;
                            }
                            
                        }
                    }
                    response.data.forEach(function (value, key) {
                        console.log('foreach loop')
                        value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')

                        if (value.business_data[0].business_status == true) {
                            if (value.business_data[0].business_type == 1) {
                                console.log('if');
                                temp.premiumBusiness.push(value);
                            } else {
                                console.log('else');
                                temp.restaurantlist.push(value);
                                var sum = 0;
                            if (value.review.length > 0) {
                                 if(value.status == true){
                                value.review.forEach(function (val, ke) {    
                                    console.log(val);
                                    sum += val.stars;
                                    console.log(sum);
                                    value.avg = sum / value.review.length;
                                    
                                })
                                }
                            } else {
                                value.avg = 0;
                            }
                                
                            }
                        }
                    })
                    this.totalpageno = response.pages;
                    console.log(this.restaurantlist);
                    console.log(temp.premiumBusiness);
                }
            })
        })
    }


    /******** Search modal ************/
    SearchModal() {
        var temp = this;
        let modal = this.modalCtrl.create(SearchPage);
        modal.onDidDismiss(data => {
            console.log(data);
            this.pageno = 1;
            this.categoryid = '';
            console.log('Search');
            console.log(data);
            
            if (data != undefined) {
                console.log(data.searchedlist);
                let postdata;
                let options = this.appsetting.header();
                if (data.searchedlist.category != undefined) {
                    data.searchedlist.category = data.searchedlist.category;
                } else {
                    data.searchedlist.category = '';
                }
                if (data.type == 'name') {
                    this.latitude = data.searchedlist.latitude;
                    this.longitude = data.searchedlist.longitude;
                    postdata = {
                        name: data.searchedlist.category,
                        lat: data.searchedlist.latitude,
                        long: data.searchedlist.longitude,
                        page: this.pageno
                    }
                } else if (data.type == 'category') {
                    this.latitude = data.searchedlist.latitude;
                    this.longitude = data.searchedlist.longitude;
                    postdata = {
                        name: data.searchedlist.sub_category_title,
                        lat: data.searchedlist.latitude,
                        long: data.searchedlist.longitude,
                        page: this.pageno
                    }
                } else {
                    this.latitude = data.searchedlist.latitude;
                    this.longitude = data.searchedlist.longitude;
                    postdata = {
                        name: data.searchedlist.category,
                        lat: data.searchedlist.latitude,
                        long: data.searchedlist.longitude,
                        page: this.pageno
                    }
                }
                console.log(postdata);
                let serialized = this.appsetting.serializeObj(postdata);
                this.http.post(this.appsetting.url + 'users/GetSearch', serialized, options).map(res => res.json()).subscribe(response => {
                    console.log(response);
                    if (response.status == true) {
                        temp.pageno = parseInt(response.current);
                        this.totalpageno = response.pages;
                        if (response.data.length > 0) {
                            console.log(response.data);
                            this.premiumBusiness = [];
                            this.restaurantlist = [];
                            this.totalpageno = response.pages;
                            this.geolocation.getCurrentPosition().then((resp) => {
                                console.log(resp.coords.latitude);
                                console.log(resp.coords.longitude);
                                for (var i = 0; i < response.data.length; i++) {
                                    if (localStorage.getItem('CurrentUser')) {
                                        if (response.data[i].business_data[0].business_status == true) {
                                            this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                                            if (this.favourite.length > 0) {
                                                for (var j = 0; j < this.favourite.length; j++) {
                                                    if ((response.data[i].business_data[0]._id) == (this.favourite[j].favorite_business_id)) {
                                                        console.log('matched');
                                                        response.data[i].business_data[0].fav = 1;
                                                        break;
                                                    } else {
                                                        console.log('not matched');
                                                        response.data[i].business_data[0].fav = 0;
                                                        // break;
                                                    }
                                                }
                                            } else {
                                                response.data[i].business_data[0].fav = 0;
                                            }
                                        }
                                    } else {
                                        response.data[i].business_data[0].fav = 0;
                                    }
                                }
                                response.data.forEach(function (value, key) {
                                    if (value.business_data[0].business_status == true) {
                                        console.log(value.business_data[0].location.coordinates[1]);
                                        if (value.business_data[0].business_type == 1) {
                                            console.log('if');
                                            temp.premiumBusiness.push(value);
                                        } else {
                                            console.log('else');
                                            temp.restaurantlist.push(value);
                                             var sum = 0;
                                            if (value.review.length > 0) {
                                                 if(value.status == true){
                                                value.review.forEach(function (val, ke) {    
                                                    console.log(val);
                                                    sum += val.stars;
                                                    console.log(sum);
                                                    value.avg = sum / value.review.length;

                                                })
                                                }
                                            } else {
                                                value.avg = 0;
                                            }
                                        }
                                        value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')

                                    }
                                })
                            }).catch((error) => {
                                console.log('Error getting location', error);
                            });
                            // this.restaurantlist = response.data;
                        } else {
                            this.restaurantlist = [];
                            this.premiumBusiness = [];
                        }
                    }
                })
            }
        })
        modal.present();
    }
    /******** function used for open filter modal after click on header *****************/
    filterModal() {
        var temp = this;
        let modal = this.modalCtrl.create(FilterPage, {serviceslist: this.subcat});
        modal.onDidDismiss(data => {
            if (data) {
                if (data.type == 'search') {
                    this.pageno = 1;
                    console.log('Search');
                    localStorage.removeItem('Seachdata');
                    if (data.searchedlist) {
                        console.log(data.searchedlist);
                        let options = this.appsetting.header();
                        let postdata = {
                            sub_cat_id: data.searchedlist.services,
                            max_distance: data.searchedlist.range,
                            zip_code: data.searchedlist.zipcode,
                            business_online: data.searchedlist.online,
                            lat: this.latitude,
                            long: this.longitude,
                            page: this.pageno
                        }
                        let serialized = this.appsetting.serializeObj(postdata);
                        this.http.post(this.appsetting.url + 'users/filterall', serialized, options).map(res => res.json()).subscribe(response => {
                            console.log(response);
                            if (response.status == true) {
                                temp.pageno = parseInt(response.current);
                                this.totalpageno = response.pages;
                                if (response.data.length > 0) {
                                    console.log(response.data);
                                    this.premiumBusiness = [];
                                    this.restaurantlist = [];
                                    this.totalpageno = response.pages;
                                    this.geolocation.getCurrentPosition().then((resp) => {
                                        console.log(resp.coords.latitude);
                                        console.log(resp.coords.longitude);
                                        response.data.forEach(function (value, key) {
                                            if (value.business_data[0].business_status == true) {
                                                console.log(value.business_data[0].location.coordinates[1]);
                                                if (value.business_data[0].business_type == 1) {
                                                    console.log('if');
                                                    temp.premiumBusiness.push(value);
                                                } else {
                                                    console.log('else');
                                                    temp.restaurantlist.push(value);
                                                     var sum = 0;
                                                        if (value.review.length > 0) {
                                                             if(value.status == true){
                                                            value.review.forEach(function (val, ke) {    
                                                                console.log(val);
                                                                sum += val.stars;
                                                                console.log(sum);
                                                                value.avg = sum / value.review.length;

                                                            })
                                                            }
                                                        } else {
                                                            value.avg = 0;
                                                        }
                                                }
                                                value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')

                                            }
                                        })
                                    }).catch((error) => {
                                        console.log('Error getting location', error);
                                    });
                                    // this.restaurantlist = response.data;
                                } else {
                                    this.restaurantlist = [];
                                    this.premiumBusiness = [];
                                }
                            }
                        })
                    }
                } else {
                    console.log('reset');
                    localStorage.removeItem('filterdata');
                     localStorage.removeItem('Seachdata');
                    this.geolocation.getCurrentPosition().then((resp) => {
                        console.log('getCurrentPosition');
                        console.log(resp.coords.latitude);
                        console.log(resp.coords.longitude);
                        this.latitude = resp.coords.latitude;// resp.coords.latitude
                        this.longitude = resp.coords.longitude;// resp.coords.longitude
                        this.pageno = 1;
                        this.Getlist(this.pageno, resp.coords.latitude, resp.coords.longitude);
                    }).catch((error) => {
                        console.log('Error getting location', error);
                    });
                }
            }

        });
        modal.present();
    }
    /******** function used for open booking modal *****************/
    bookModal(resdata) {
        console.log(resdata);
        this.modaldata = resdata;
        var temp = this;
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        let modal = this.modalCtrl.create(BooknowPage);
        modal.onDidDismiss(data => {
            console.log(data);
            if (data) {
                console.log(this.modaldata);
                if (data.bookingdata) {
                    console.log(new Date());
                    
                    console.log(new Date(data.bookingdata.date).toISOString());
                    var da = moment(new Date(data.bookingdata.date).toISOString()).locale('es').format();
                    var t = da.charAt(10);
                    var z = da.match(/.{1,16}/g);
                    console.log(da.charAt(10));
                    console.log(da.match(/.{1,16}/g));
                    console.log(da);
                    var startdate = data.bookingdata.date + t + data.bookingdata.startTime + z[1];
                    console.log(startdate);
                    //                    var enddate = data.bookingdata.date + t + data.bookingdata.endTime + z[1];
                    //                    console.log(enddate);
                    //return false;
                    let options = this.appsetting.header();
                    let postdata = {
                        business_id: this.modaldata.business_data[0]._id,
                        order_to: this.modaldata._id,
                        order_from: user._id,
                        orderdate: startdate,
                        orderstart: startdate,
                        orderend: '',// enddate,
                        spacial_accomodation: data.bookingdata.specialAccomo
                    }
                    console.log(postdata);
                   // return false;
                    let serialized = this.appsetting.serializeObj(postdata);
                    this.http.post(this.appsetting.url + 'orders/addOrders', serialized, options).map(res => res.json()).subscribe(response => {
                        console.log(response);
                        if (response.status == true) {
                            this.common.presentAlert('Book now', response.message);
                        } else {
                            this.common.presentAlert('Book now', 'No result found!');
                        }
                    })
                }
            }
        });
        modal.present();
    }
    /******** function used for social sharing *****************/
    socialsharing(name, address, image) {
        console.log(name);
        console.log(address + ',"Powered by Melanin Enterprise App" Download today from the App Store and Google Play');
        console.log(image);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            // Check if sharing via email is supported
            var message = address + ',"Powered by Melanin Enterprise App" Download today from the App Store and Google Play';//'Amazing restaurant';
            var subject = name;//'Restaurant name';
            var file = '';
            var url = image.business_image;//'https://www.google.co.in';
            this.socialSharing.share(message, subject, file, url).then((res) => {
                // Sharing via email is possible
                console.log(JSON.stringify(res));
            }).catch((err) => {
                // Sharing via email is not possible
                console.log(JSON.stringify(err));
            });
        } else {
            let toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(() => {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    }

    /********* function used for filter by subcat(by clicking on top scroll bar) *************/
    FilterBySubCat(id) {
        console.log(id);
        var temp = this;
        this.categoryid = id;
        localStorage.removeItem('Seachdata');
        localStorage.removeItem('filterdata');
        let options = this.appsetting.header();
        var postdata = {
            lat: this.latitude,
            long: this.longitude,
            sub_cat_id: id
        }
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.url + 'users/filterbysubcategory', serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    console.log(response.data);
                    if (response.data.length > 0) {
                        this.premiumBusiness = [];
                        this.restaurantlist = [];

                        for (var i = 0; i < response.data.length; i++) {
                            if (localStorage.getItem('CurrentUser')) {
                                if (response.data[i].business_data[0].business_status == true) {
                                    this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                                    if (this.favourite.length > 0) {
                                        for (var j = 0; j < this.favourite.length; j++) {
                                            if ((response.data[i].business_data[0]._id) == (this.favourite[j].favorite_business_id)) {
                                                console.log('matched');
                                                response.data[i].business_data[0].fav = 1;
                                                break;
                                            } else {
                                                console.log('not matched');
                                                response.data[i].business_data[0].fav = 0;
                                                // break;
                                            }
                                        }
                                    } else {
                                        response.data[i].business_data[0].fav = 0;
                                    }
                                }
                            } else {
                                response.data[i].business_data[0].fav = 0;
                            }
                        }


                        response.data.forEach(function (value, key) {
                            console.log(value);
                            console.log(key);
                            console.log(value.business_data[0].location.coordinates[1]);
                            console.log(typeof (value.business_data[0].business_type));
                            if (value.business_data[0].business_status == true) {
                                if (value.business_data[0].business_type == 1) {
                                    console.log('if');
                                    temp.premiumBusiness.push(value);
                                } else {
                                    console.log('else');
                                    temp.restaurantlist.push(value);
                                     var sum = 0;
                                    if (value.review.length > 0) {
                                         if(value.status == true){
                                        value.review.forEach(function (val, ke) {    
                                            console.log(val);
                                            sum += val.stars;
                                            console.log(sum);
                                            value.avg = sum / value.review.length;

                                        })
                                        }
                                    } else {
                                        value.avg = 0;
                                    }
                                }
                                value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')

                            }
                        })

                        this.totalpageno = response.pages;
                    } else {
                        temp.premiumBusiness = [];
                        temp.restaurantlist = [];
                    }
                }
            })
        })
    }

    viewproduct(dat) {
        console.log(dat);
        dat.business_data[0].opening_days_and_timings.forEach(function (value, key) {
            console.log(value);
            var ot = value.opening_time.split(':');
            console.log(value.opening_time.includes("AM"));
            if (ot[0] > 11) {
                if (value.opening_time.includes("AM") == true || value.opening_time.includes("PM") == true) {
                    value.opening_time = value.opening_time;
                } else {
                    value.opening_time = value.opening_time + ' PM';
                }
            } else {
                if (value.opening_time.includes("AM") == true || value.opening_time.includes("PM") == true) {
                    value.opening_time = value.opening_time;
                } else {
                    value.opening_time = value.opening_time + ' AM';
                }

            }
            var ct = value.closing_time.split(':');
            if (ct[0] > 11) {
                if (value.closing_time.includes("AM") == true || value.closing_time.includes("PM") == true) {
                    value.closing_time = value.closing_time;
                } else {
                    value.closing_time = value.closing_time + ' PM';
                }
            } else {
                if (value.closing_time.includes("AM") == true || value.closing_time.includes("PM") == true) {
                    value.closing_time = value.closing_time;
                } else {
                    value.closing_time = value.closing_time + ' AM';
                }
            }
        })
        console.log(dat);
        //return false;
        this.navCtrl.push(ViewproductPage, {restdata: dat});
    }

    view(resid) {
        this.navCtrl.push(ReviewPage, {prod_id: resid});
    }

    /*********** function to favourite a restaurant *******************/

    MarkAsFavourite(businessID) {
        console.log('MarkAsFavourite function');
        console.log(businessID);
        if (localStorage.getItem('CurrentUser')) {
            var user = JSON.parse(localStorage.getItem('CurrentUser'));
            let options = this.appsetting.header();
            let postdata = {
                user_id: user._id,
                favorite_business_id: businessID
            }
            let serialized = this.appsetting.serializeObj(postdata);
            this.http.post(this.appsetting.url + 'user/add_to_favarite', serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response);
                if (response.status == true) {
                    localStorage.setItem('CurrentUser', JSON.stringify(response.data[0]));
                    // this.pageno = 1;
                    //                this.Getlist(this.pageno, this.latitude, this.longitude);
                    this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                    for (var i = 0; i < this.restaurantlist.length; i++) {
                        if (this.favourite.length > 0) {
                            for (var j = 0; j < this.favourite.length; j++) {
                                if ((this.restaurantlist[i].business_data[0]._id) == (this.favourite[j].favorite_business_id)) {
                                    console.log('matched');
                                    this.restaurantlist[i].business_data[0].fav = 1;
                                    break;
                                } else {
                                    console.log('not matched');
                                    this.restaurantlist[i].business_data[0].fav = 0;
                                    // break;
                                }
                            }
                        } else {
                            this.restaurantlist[i].business_data[0].fav = 0;
                        }
                    }
                    console.log(this.restaurantlist);
                } else {
                    this.http.post(this.appsetting.url + 'user/delete_favarite_business ', serialized, options).map(res => res.json()).subscribe(response => {
                        console.log(response);
                        if (response.status == true) {
                            localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                            //this.pageno = 1;
                            //this.Getlist(this.pageno, this.latitude, this.longitude);
                            this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                            for (var i = 0; i < this.restaurantlist.length; i++) {
                                if (this.favourite.length > 0) {
                                    for (var j = 0; j < this.favourite.length; j++) {
                                        if ((this.restaurantlist[i].business_data[0]._id) == (this.favourite[j].favorite_business_id)) {
                                            console.log('matched');
                                            this.restaurantlist[i].business_data[0].fav = 1;
                                            break;
                                        } else {
                                            console.log('not matched');
                                            this.restaurantlist[i].business_data[0].fav = 0;
                                            // break;
                                        }
                                    }
                                } else {
                                    this.restaurantlist[i].business_data[0].fav = 0;
                                }
                            }
                            console.log(this.restaurantlist);
                        }
                    })
                }

            })
        } else {
            this.common.ConfirmFunction('Favourite', 'Please login first to make favourite!', LoginPage)

        }
    }
    /****** functions used only for getdata of restaurants when infinite scroll hit ************/
    Getdata(pageno, lat, long) {
        console.log('Getlist');
        var temp = this;
        
        let options = this.appsetting.header();
        var postdata = {
            lat: lat,
            long: long,
            page: pageno
        }
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.url + 'users/getbusinessbyloc', serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    console.log(response.data);
                    console.log(this.latitude);
                    console.log(this.longitude);
                    for (var i = 0; i < response.data.length; i++) {
                        if (localStorage.getItem('CurrentUser')) {
                            if (response.data[i].business_data[0].business_status == true) {
                                this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                                if (this.favourite.length > 0) {
                                    for (var j = 0; j < this.favourite.length; j++) {
                                        if ((response.data[i].business_data[0]._id) == (this.favourite[j].favorite_business_id)) {
                                            console.log('matched');
                                            response.data[i].business_data[0].fav = 1;
                                            break;
                                        } else {
                                            console.log('not matched');
                                            response.data[i].business_data[0].fav = 0;
                                            // break;
                                        }
                                    }
                                } else {
                                    response.data[i].business_data[0].fav = 0;
                                }
                            }
                        } else {
                            response.data[i].business_data[0].fav = 0;
                        }
                    }

                    response.data.forEach(function (value, key) {
                        console.log(value);
                        console.log(key);
                        var sum = 0;
                        if (value.business_data[0].business_status == true) {
                            if (value.business_data[0].business_type == 1) {
                                console.log('if');
                                temp.premiumBusiness.push(value);
                            } else {
                                console.log('else');
                                temp.restaurantlist.push(value);
                                 if (value.review.length > 0) {
                                 if(value.status == true){
                                value.review.forEach(function (val, ke) {    
                                    console.log(val);
                                    sum += val.stars;
                                    console.log(sum);
                                    value.avg = sum / value.review.length;
                                    
                                })
                                }
                            } else {
                                value.avg = 0;
                            }
                            }
                            value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')

                        }
                    })

                    this.totalpageno = response.pages;
                    console.log(this.restaurantlist);
                    console.log(temp.premiumBusiness);
                }
            })
        })

    }

    ShowHide() {
        console.log(this.name);
        if (this.show == true) {
            this.show = false;
            this.name = 'By name';
            this.class = 'slideOutRight';
            console.log('true');
        } else {
            this.name = 'Location';
            this.class = 'slideInRight';
            this.show = true;
            console.log('false');

        }
        console.log(this.name);
    }
//    Searchbyname(text) {
//        console.log(text.value);
//        var temp = this;
//        this.categoryid = '';
//        var sum = 0;
//        let options = this.appsetting.header();
//        var postdata = {
//            name: text.value.searchname
//        }
//        console.log(postdata);
//        var serialized = this.appsetting.serializeObj(postdata);
//        var Loading = this.loadingCtrl.create({
//            spinner: 'bubbles',
//            content: 'Loading...'
//        });
//        Loading.present().then(() => {
//            this.http.post(this.appsetting.url + 'users/GetSearch', serialized, options).map(res => res.json()).subscribe(response => {
//                console.log(response);
//                Loading.dismiss();
//                if (response.status == true) {
//                    this.premiumBusiness = [];
//                    this.restaurantlist = [];
//                    this.pageno = 1;
//                    this.totalpageno = 1;
//                    for (var i = 0; i < response.data.length; i++) {
//                        if (localStorage.getItem('CurrentUser')) {
//                            if (response.data[i].business_data[0].business_status == true) {
//                                this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
//                                if (this.favourite.length > 0) {
//                                    for (var j = 0; j < this.favourite.length; j++) {
//                                        if ((response.data[i].business_data[0]._id) == (this.favourite[j].favorite_business_id)) {
//                                            console.log('matched');
//                                            response.data[i].business_data[0].fav = 1;
//                                            break;
//                                        } else {
//                                            console.log('not matched');
//                                            response.data[i].business_data[0].fav = 0;
//                                            // break;
//                                        }
//                                    }
//                                } else {
//                                    response.data[i].business_data[0].fav = 0;
//                                }
//                            }
//                        } else {
//                            response.data[i].business_data[0].fav = 0;
//                        }
//                        if (response.data[i].review.length > 0) {
//                            response.data[i].review.forEach(function (val, ke) {
//                                console.log(val);
//                                sum += val.stars;
//                                console.log(sum);
//                                response.data[i].avg = sum / response.data[i].review.length;
//                            })
//                        } else {
//                            response.data[i].avg = 0;
//                        }
//                    }
//                    response.data.forEach(function (value, key) {
//                        console.log(value);
//                        console.log(key);
//                        if (value.business_data[0].business_status == true) {
//                            if (value.business_data[0].business_type == 1) {
//                                console.log('if');
//                                temp.premiumBusiness.push(value);
//                            } else {
//                                console.log('else');
//                                temp.restaurantlist.push(value);
//                            }
//                            value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')
//
//                        }
//                    })
//                } else {
//                    this.common.presentAlert('Search', response.message);
//                }
//            })
//        })
//    }
    Filter() {
        var temp = this;
        var sum = 0;
        var da = JSON.parse(localStorage.getItem('filterdata'));
        console.log(da);
        let options = this.appsetting.header();
        let postdata = {
            sub_cat_id: da.services,
            max_distance: da.range,
            zip_code: da.zipcode,
            business_online: da.online,
            lat: this.latitude,
            long: this.longitude,
            page: this.pageno
        }
        let serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/filterall', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if (response.status == true) {
                //temp.pageno = response.current;
                this.totalpageno = response.pages;
                if (response.data.length > 0) {
                    console.log(response.data);
//                    this.premiumBusiness = [];
//                    this.restaurantlist = [];
                    this.totalpageno = response.pages;
                    this.geolocation.getCurrentPosition().then((resp) => {
                        console.log(resp.coords.latitude);
                        console.log(resp.coords.longitude);
                        for (var i = 0; i < response.data.length; i++) {
                        if (localStorage.getItem('CurrentUser')) {
                            if (response.data[i].business_data[0].business_status == true) {
                                this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                                if (this.favourite.length > 0) {
                                    for (var j = 0; j < this.favourite.length; j++) {
                                        if ((response.data[i].business_data[0]._id) == (this.favourite[j].favorite_business_id)) {
                                            console.log('matched');
                                            response.data[i].business_data[0].fav = 1;
                                            break;
                                        } else {
                                            console.log('not matched');
                                            response.data[i].business_data[0].fav = 0;
                                            // break;
                                        }
                                    }
                                } else {
                                    response.data[i].business_data[0].fav = 0;
                                }
                            }
                        } else {
                            response.data[i].business_data[0].fav = 0;
                        }
                       
                    }
                        response.data.forEach(function (value, key) {
                            if (value.business_data[0].business_status == true) {
                                console.log(value.business_data[0].location.coordinates[1]);
                                if (value.business_data[0].business_type == 1) {
                                    console.log('if');
                                    temp.premiumBusiness.push(value);
                                } else {
                                    console.log('else');
                                    temp.restaurantlist.push(value);
                                     var sum = 0;
                                    if (value.review.length > 0) {
                                         if(value.status == true){
                                        value.review.forEach(function (val, ke) {    
                                            console.log(val);
                                            sum += val.stars;
                                            console.log(sum);
                                            value.avg = sum / value.review.length;

                                        })
                                        }
                                    } else {
                                        value.avg = 0;
                                    }
                                }
                                value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')

                            }
                        })
                    }).catch((error) => {
                        console.log('Error getting location', error);
                    });
                    // this.restaurantlist = response.data;
                } else {
                    this.restaurantlist = [];
                    this.premiumBusiness = [];
                }
            }
        })
    }

    SearchbyCategory(formdata) {
        var temp = this;
        console.log(formdata);
        this.data.term = formdata.sub_category_title;
        this.categorydata = [];
        let options = this.appsetting.header();
        let postdata = {
            sub_cat_id: formdata._id,
            max_distance: '',
            zip_code: '',
            business_online: '',
            lat: this.latitude,
            long: this.longitude,
            pages: this.pageno
        }
        let serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/filterall', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if (response.status == true) {
                //temp.pageno = response.current;
                this.totalpageno = response.pages;
                if (response.data.length > 0) {
                    console.log(response.data);
                    this.premiumBusiness = [];
                    this.restaurantlist = [];
                    this.totalpageno = response.pages;
                    this.geolocation.getCurrentPosition().then((resp) => {
                        console.log(resp.coords.latitude);
                        console.log(resp.coords.longitude);
                        response.data.forEach(function (value, key) {
                            if (value.business_data[0].business_status == true) {
                                console.log(value.business_data[0].location.coordinates[1]);
                                if (value.business_data[0].business_type == 1) {
                                    console.log('if');
                                    temp.premiumBusiness.push(value);
                                } else {
                                    console.log('else');
                                    temp.restaurantlist.push(value);
                                     var sum = 0;
                                    if (value.review.length > 0) {
                                         if(value.status == true){
                                        value.review.forEach(function (val, ke) {    
                                            console.log(val);
                                            sum += val.stars;
                                            console.log(sum);
                                            value.avg = sum / value.review.length;

                                        })
                                        }
                                    } else {
                                        value.avg = 0;
                                    }
                                }
                                value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')

                            }
                        })
                    }).catch((error) => {
                        console.log('Error getting location', error);
                    });
                    // this.restaurantlist = response.data;
                } else {
                    this.restaurantlist = [];
                    this.premiumBusiness = [];
                }
            }
        })
    }

    /******* This function is used for infinite scroll if user search *****************/
    SeachInfinite() {
        var temp = this;
        console.log('Search');
        this.searchd = JSON.parse(localStorage.getItem('Seachdata'));
        console.log(this.searchd);
        if (this.searchd != undefined) {
            console.log(this.searchd);
            let postdata;
            let options = this.appsetting.header();
            if (this.searchd.type == "name") {
                this.searchd.category = this.searchd.category;
            }else if (this.searchd.type == "category"){
                this.searchd.category = this.searchd.sub_category_title;
            } else if(this.searchd.type == "location"){
                if(this.searchd.category){
                    this.searchd.category = this.searchd.category;
                }else{
                    this.searchd.category = '';
                }
                
            }else{
                this.searchd.category = '';
            }
                this.latitude = this.searchd.latitude;
                this.longitude = this.searchd.longitude;
                postdata = {
                    name: this.searchd.category,
                    lat: this.searchd.latitude,
                    long: this.searchd.longitude,
                    page: this.pageno
                }
            
            console.log(postdata);
            let serialized = this.appsetting.serializeObj(postdata);
            this.http.post(this.appsetting.url + 'users/GetSearch', serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response);
                if (response.status == true) {
                    //this.pageno = response.current;
                    //this.totalpageno = response.pages;
                    if (response.data.length > 0) {
                        console.log(response.data);
//                        this.premiumBusiness = [];
//                        this.restaurantlist = [];
                        this.totalpageno = response.pages;
                        this.geolocation.getCurrentPosition().then((resp) => {
                            console.log(resp.coords.latitude);
                            console.log(resp.coords.longitude);
                            for (var i = 0; i < response.data.length; i++) {
                                if (localStorage.getItem('CurrentUser')) {
                                    if (response.data[i].business_data[0].business_status == true) {
                                        this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                                        if (this.favourite.length > 0) {
                                            for (var j = 0; j < this.favourite.length; j++) {
                                                if ((response.data[i].business_data[0]._id) == (this.favourite[j].favorite_business_id)) {
                                                    console.log('matched');
                                                    response.data[i].business_data[0].fav = 1;
                                                    break;
                                                } else {
                                                    console.log('not matched');
                                                    response.data[i].business_data[0].fav = 0;
                                                    // break;
                                                }
                                            }
                                        } else {
                                            response.data[i].business_data[0].fav = 0;
                                        }
                                    }
                                } else {
                                    response.data[i].business_data[0].fav = 0;
                                }
                            }
                            response.data.forEach(function (value, key) {
                                if (value.business_data[0].business_status == true) {
                                    console.log(value.business_data[0].location.coordinates[1]);
                                    if (value.business_data[0].business_type == 1) {
                                        console.log('if');
                                        temp.premiumBusiness.push(value);
                                    } else {
                                        console.log('else');
                                        temp.restaurantlist.push(value);
                                         var sum = 0;
                                            if (value.review.length > 0) {
                                                 if(value.status == true){
                                                value.review.forEach(function (val, ke) {    
                                                    console.log(val);
                                                    sum += val.stars;
                                                    console.log(sum);
                                                    value.avg = sum / value.review.length;

                                                })
                                                }
                                            } else {
                                                value.avg = 0;
                                            }
                                    }
                                    value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')

                                }
                            })
                        }).catch((error) => {
                            console.log('Error getting location', error);
                        });
                        // this.restaurantlist = response.data;
                    } else {
                        this.restaurantlist = [];
                        this.premiumBusiness = [];
                    }
                }
            })
        }
    }



    /************ End *********************/
    /****** functions used for getlist on refresh ************/
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        //this.getSubCatList();
        localStorage.removeItem('filterdata');
        localStorage.removeItem('Seachdata');
        this.pageno = 1;
        this.categoryid = '';
        this.geolocation.getCurrentPosition().then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.Getlist(this.pageno, this.latitude, this.longitude);
         })
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
    /****** functions used for pagination ************/
    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        this.pageno = this.pageno + 1;
        console.log(this.totalpageno)
        console.log(this.pageno)
        if (localStorage.getItem('filterdata')) {
            if (this.pageno <= this.totalpageno) {
            this.Filter();
            }
        } else if (localStorage.getItem('Seachdata')) {
        if (this.pageno <= this.totalpageno) {
            this.SeachInfinite();
        }
        } else {
            if (this.pageno <= this.totalpageno) {
                this.Getdata(this.pageno, this.latitude, this.longitude);
            } else {
                //this.pageno = 1;
                console.log('No more data to load');
            }
        }
        setTimeout(() => {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    }

}
