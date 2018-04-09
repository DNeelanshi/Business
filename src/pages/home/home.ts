import {Component, NgZone} from '@angular/core';
import {NavController, ModalController, ViewController, ToastController, LoadingController} from 'ionic-angular';
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

declare var google;
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    favourite: any;
    modaldata: any;
    totalpageno: any;
    pageno: any = 1;
    restaurantlist: any = [];
    searchQuery: string = '';
    /**** parameters for autocomplete *****/
    autocompleteItems;//variable used for autocomplete on address field
    public autocomplete: any = {};//variable used for autocomplete on address field
    service = new google.maps.places.AutocompleteService();
    geocoder = new google.maps.Geocoder();
    public latitude: number;
    public longitude: number;
    subcat: any = [];
    premiumBusiness: any = [];
    fav = 0;
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
        private geolocation: Geolocation
    ) {
        console.log('rahul');
        console.log(JSON.parse(localStorage.getItem('CurrentUser')));
        this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        } else {
            this.common.tryagain();
        }
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        this.currentLocation();
    }

    ionViewDidLoad() {
        //alert('ionViewDidLoad');
        console.log((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString());
        this.getSubCatList();
        console.log('ionViewDidLoad HomePage');
        this.Getlist(1, 30.723839099999996, 76.8465082);
        this.latitude = 30.723839099999996;
        this.longitude = 76.8465082;
        
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
            this.Getlist(this.pageno, resp.coords.latitude, resp.coords.longitude);
            var geocoder = new google.maps.Geocoder;
            var latlng = {lat: resp.coords.latitude, lng: resp.coords.longitude};
            geocoder.geocode({'location': latlng}, function (results, status) {
                if (status === 'OK') {
                    console.log(results[0]);
                    if (results[0]) {
                        temp.autocomplete.query = results[0].formatted_address;
                    } else {
                        temp.autocomplete.query = '';
                    }
                } else {
                    console.log('Error getting address by location');
                }
            });
        }).catch((error) => {
            console.log('Error getting location', error);
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
    
    /****** functions used for run ionViewDidLoad() function after clear the search bar ************/
    ionClear() {
        this.ionViewDidLoad();
    }
    
    /****** functions used for getlist of restaurants by default when user visit on page ************/
    Getlist(pageno, lat, long) {
        this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
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
                    //this.geolocation.getCurrentPosition().then((resp) => {
                    // alert('here');
                    this.restaurantlist = [];
                    temp.premiumBusiness = [];
                    //                        console.log(resp.coords.latitude);
                    //                        console.log(resp.coords.longitude);
                     for (var i = 0; i < response.data.length; i++) {
                         if(this.favourite.length>0){
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
                         }else{
                             response.data[i].business_data[0].fav = 0;
                         }
                    }
                    response.data.forEach(function (value, key) {
                        console.log(value);
                        console.log(key);
                        //                            console.log(value.business_data[0].location.coordinates[1]);
                        //                            console.log(typeof (value.business_data[0].business_type));
                        console.log()
                        if (value.business_data[0].business_type == 1) {
                            console.log('if');
                            temp.premiumBusiness.push(value);
                        } else {
                            console.log('else');
                            temp.restaurantlist.push(value);
                        }

                         value.business_data[0].distance = temp.common.distance(lat, long, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')
                    })
                    //})
                    this.totalpageno = response.pages;
                    console.log(this.restaurantlist);
                    console.log(temp.premiumBusiness);
                }
            })
        })
    }
    /****** function used for autocomplete prediction ***********/
    updateSearch() {
        console.log('update');
        console.log(this.autocomplete.query);
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        let me = this;
        this.service.getPlacePredictions({input: this.autocomplete.query}, function (predictions, status) {
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
    }
    /****** function used for choose item from autocomplete prediction ***********/
    chooseItem(item) {
        var temp = this;
        console.log(item);
        this.autocomplete.query = item;
        this.autocompleteItems = [];
        this.geocoder.geocode({'address': item}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
                console.log(results[0].geometry.location.lat());
                console.log(results[0].geometry.location.lng());
                temp.latitude = results[0].geometry.location.lat();
                temp.longitude = results[0].geometry.location.lng();
                temp.Getlist(temp.pageno, temp.latitude, temp.longitude);

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
    /******** function used for open filter modal after click on header *****************/
    filterModal() {
        var temp = this;
        let modal = this.modalCtrl.create(FilterPage, {serviceslist: this.subcat});
        modal.onDidDismiss(data => {
            if (data.type == 'search') {
                console.log('Search');
                if (data.searchedlist) {
                    console.log(data.searchedlist);
                    let options = this.appsetting.header();
                    let postdata = {
                        sub_cat_id: data.searchedlist.services,
                        max_distance: data.searchedlist.range,
                        zip_code: '',
                        business_online: data.searchedlist.online,
                        lat: this.latitude,
                        long: this.longitude
                    }
                    let serialized = this.appsetting.serializeObj(postdata);
                    this.http.post(this.appsetting.url + 'users/filterall', serialized, options).map(res => res.json()).subscribe(response => {
                        console.log(response);
                        if (response.status == true) {
                            if (response.data.length > 0) {
                                console.log(response.data);
                                this.restaurantlist = null;
                                this.geolocation.getCurrentPosition().then((resp) => {
                                    console.log(resp.coords.latitude);
                                    console.log(resp.coords.longitude);
                                    response.data.forEach(function (value, key) {
                                        console.log(value.business_data[0].location.coordinates[1]);
                                        value.business_data[0].distance = temp.common.distance(resp.coords.latitude, resp.coords.longitude, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')
                                    })
                                }).catch((error) => {
                                    console.log('Error getting location', error);
                                });
                                this.restaurantlist = response.data;
                            } else {
                                this.restaurantlist = response.data;
                            }
                        }
                    })
                }
            } else {
                console.log('reset');
                localStorage.removeItem('filterdata');
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
            console.log(this.modaldata);
            if (data.bookingdata) {
                console.log(new Date(data.bookingdata.date).toISOString());

                //                console.log(new Date(data.bookingdata.startTime).toISOString());
                //                console.log(new Date(data.bookingdata.endTime).toISOString());
                var da = new Date(data.bookingdata.date).toISOString();
                var t = da.charAt(10);
                var z = da.match(/.{1,16}/g);
                console.log(da.charAt(10));
                console.log(da.match(/.{1,16}/g));
                console.log(da);
                var startdate = data.bookingdata.date + t + data.bookingdata.startTime + z[1];
                console.log(startdate);
                var enddate = data.bookingdata.date + t + data.bookingdata.endTime + z[1];
                console.log(enddate);
                //return false;
                let options = this.appsetting.header();
                let postdata = {
                    business_id: this.modaldata.business_data[0]._id,
                    order_to: this.modaldata._id,
                    order_from: user._id,
                    orderdate: da,
                    orderstart: startdate,
                    orderend: enddate,
                    spacial_accomodation:data.bookingdata.specialAccomo
                }
                
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
        });
        modal.present();
    }
    /******** function used for social sharing *****************/
    socialsharing(name, address, image) {
        console.log(name);
        console.log(address);
        console.log(image);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            // Check if sharing via email is supported
            var message = address;//'Amazing restaurant';
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
        this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
        console.log(id);
        var temp = this;
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
                         if(this.favourite.length>0){
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
                         }else{
                             response.data[i].business_data[0].fav = 0;
                         }
                    }
                    
                        response.data.forEach(function (value, key) {
                            console.log(value);
                            console.log(key);
                            console.log(value.business_data[0].location.coordinates[1]);
                            console.log(typeof (value.business_data[0].business_type));
                            if (value.business_data[0].business_type == 1) {
                                console.log('if');
                                temp.premiumBusiness.push(value);
                            } else {
                                console.log('else');
                                temp.restaurantlist.push(value);
                            }
                            //value.business_data[0].distance = temp.common.distance(resp.coords.latitude, resp.coords.longitude, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')
                            //})
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
                if(value.opening_time.includes("AM") == true || value.opening_time.includes("PM") == true){
                value.opening_time = value.opening_time;
                }else{
                    value.opening_time = value.opening_time + ' PM';
                }
            } else {
             if(value.opening_time.includes("AM") == true || value.opening_time.includes("PM") == true){
                value.opening_time = value.opening_time;
                }else{
                    value.opening_time = value.opening_time + ' AM';
                }
                
            }
            var ct = value.closing_time.split(':');
            if (ct[0] > 11) {
                if(value.closing_time.includes("AM") == true || value.closing_time.includes("PM") == true){
                value.closing_time = value.closing_time;
                }else{
                     value.closing_time = value.closing_time + ' PM';
                }
            } else {
            if(value.closing_time.includes("AM") == true || value.closing_time.includes("PM") == true){
                value.closing_time = value.closing_time;
                }else{
                     value.closing_time = value.closing_time + ' AM';
                }
            }
        })
        console.log(dat);
        //return false;
        this.navCtrl.push(ViewproductPage, {restdata: dat});
    }
    
    view() {
        this.navCtrl.push(ReviewPage);
    }

    /*********** function to favourite a restaurant *******************/

    MarkAsFavourite(businessID) {
        console.log('MarkAsFavourite function');
        console.log(businessID);
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
                this.Getlist(this.pageno, this.latitude, this.longitude);
            } else {
                this.http.post(this.appsetting.url + 'user/delete_favarite_business ', serialized, options).map(res => res.json()).subscribe(response => {
                    console.log(response);
                    if (response.status == true) {
                        localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                        this.Getlist(this.pageno, this.latitude, this.longitude);
                    }
                })
            }
        })
    }
     /****** functions used only for getdata of restaurants when infinite scroll hit ************/
    Getdata(pageno, lat, long) {
        this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
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
                    //this.geolocation.getCurrentPosition().then((resp) => {
                    // alert('here');
//                    this.restaurantlist = [];
//                    temp.premiumBusiness = [];
                    //                        console.log(resp.coords.latitude);
                    //                        console.log(resp.coords.longitude);
                     for (var i = 0; i < response.data.length; i++) {
                         if(this.favourite.length>0){
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
                         }else{
                             response.data[i].business_data[0].fav = 0;
                         }
                    }
                    response.data.forEach(function (value, key) {
                        console.log(value);
                        console.log(key);
                        //                            console.log(value.business_data[0].location.coordinates[1]);
                        //                            console.log(typeof (value.business_data[0].business_type));
                        console.log()
                        if (value.business_data[0].business_type == 1) {
                            console.log('if');
                            temp.premiumBusiness.push(value);
                        } else {
                            console.log('else');
                            temp.restaurantlist.push(value);
                        }

                         value.business_data[0].distance = temp.common.distance(lat, long, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')
                    })
                    //})
                    this.totalpageno = response.pages;
                    console.log(this.restaurantlist);
                    console.log(temp.premiumBusiness);
                }
            })
        })
    }
    
     /****** functions used for getlist on refresh ************/
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        //this.getSubCatList();
        this.pageno = 1;
        this.Getlist(this.pageno, this.latitude, this.longitude);
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
        if (this.pageno <= this.totalpageno) {
            this.Getdata(this.pageno, this.latitude, this.longitude);
        } else {
            console.log('No more data to load');
        }
        setTimeout(() => {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    }
}
