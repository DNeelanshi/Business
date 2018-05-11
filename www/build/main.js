webpackJsonp([31],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__booknow_booknow__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ViewproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewproductPage = (function () {
    function ViewproductPage(navCtrl, navParams, socialSharing, toastCtrl, modalCtrl, ViewCtrl, appsetting, http, loadingCtrl, common, launchNavigator, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.ViewCtrl = ViewCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.common = common;
        this.launchNavigator = launchNavigator;
        this.geolocation = geolocation;
        if (localStorage.getItem('CurrentUser')) {
            this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
        }
    }
    ViewproductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewproductPage');
        console.log(this.navParams.get('restdata'));
        var resdata = this.navParams.get('restdata').business_data[0].opening_days_and_timings;
        this.restaurantdata = this.navParams.get('restdata');
        if (this.favourite) {
            if (this.favourite.length > 0) {
                for (var j = 0; j < this.favourite.length; j++) {
                    console.log(this.favourite[j].favorite_business_id);
                    if (this.restaurantdata.business_data[0]._id == this.favourite[j].favorite_business_id) {
                        console.log('matched');
                        this.restaurantdata.fav = 1;
                        break;
                    }
                    else {
                        console.log('not matched');
                        this.restaurantdata.fav = 0;
                        // break;
                    }
                }
            }
            else {
                this.restaurantdata.fav = 0;
            }
        }
        else {
            this.restaurantdata.fav = 0;
        }
        console.log(this.restaurantdata);
    };
    /******** function used for social sharing *****************/
    ViewproductPage.prototype.socialsharing = function (name, address, image) {
        console.log(name);
        console.log(address);
        console.log(image);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            // Check if sharing via email is supported
            var message = address; //'Amazing restaurant';
            var subject = name; //'Restaurant name';
            var file = '';
            var url = image.business_image; //'https://www.google.co.in';
            this.socialSharing.share(message, subject, file, url).then(function (res) {
                // Sharing via email is possible
                console.log(JSON.stringify(res));
            }).catch(function (err) {
                // Sharing via email is not possible
                console.log(JSON.stringify(err));
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    /******** function used for open booking modal *****************/
    ViewproductPage.prototype.bookModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__booknow_booknow__["a" /* BooknowPage */]);
        modal.onDidDismiss(function (data) {
            console.log(data);
            console.log(_this.modaldata);
            if (localStorage.getItem('CurrentUser')) {
                var user = JSON.parse(localStorage.getItem('CurrentUser'));
                if (data.bookingdata) {
                    console.log(new Date(data.bookingdata.date).toISOString());
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
                    var options = _this.appsetting.header();
                    var postdata = {
                        business_id: _this.restaurantdata.business_data[0]._id,
                        order_to: _this.restaurantdata._id,
                        order_from: user._id,
                        orderdate: da,
                        orderstart: startdate,
                        orderend: enddate
                    };
                    var serialized = _this.appsetting.serializeObj(postdata);
                    _this.http.post(_this.appsetting.url + 'orders/addOrders', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        if (response.status == true) {
                            _this.common.presentConfirm('Book now', response.message, __WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                        }
                        else {
                            _this.common.presentAlert('Book now', 'Something went wrong!');
                        }
                    });
                }
            }
            else {
                _this.common.ConfirmFunction('Book Now', 'Please login first to confirm booking!', __WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
            }
        });
        modal.present();
    };
    ViewproductPage.prototype.CheckIn = function () {
        var _this = this;
        console.log('Check in');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        console.log(user._id);
        var options = this.appsetting.header();
        var postdata = {
            user_id: user._id,
            business_id: this.restaurantdata.business_data[0]._id,
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + '/checkin', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                _this.restaurantdata = response.data;
                if (_this.favourite) {
                    if (_this.favourite.length > 0) {
                        for (var j = 0; j < _this.favourite.length; j++) {
                            console.log(_this.favourite[j].favorite_business_id);
                            if (_this.restaurantdata.business_data[0]._id == _this.favourite[j].favorite_business_id) {
                                console.log('matched');
                                _this.restaurantdata.fav = 1;
                                break;
                            }
                            else {
                                console.log('not matched');
                                _this.restaurantdata.fav = 0;
                                // break;
                            }
                        }
                    }
                    else {
                        _this.restaurantdata.fav = 0;
                    }
                }
                else {
                    _this.restaurantdata.fav = 0;
                }
                _this.common.presentAlert('Check in', response.msg);
            }
            else {
                _this.common.presentAlert('Check in', response.msg);
            }
        });
    };
    ViewproductPage.prototype.ClaimYourBusiness = function (businessid) {
        var _this = this;
        console.log('Claim this business');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        console.log(user._id);
        var options = this.appsetting.header();
        var postdata = {
            user_id: user._id,
            business_id: businessid
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/getClaimRequest', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                _this.common.presentAlert('Claim this business', response.message);
            }
            else {
                _this.common.presentAlert('Claim this business', response.message);
            }
        });
    };
    /*********** function to favourite a restaurant *******************/
    ViewproductPage.prototype.MarkAsFavourite = function (businessID) {
        var _this = this;
        console.log('MarkAsFavourite function');
        console.log(businessID);
        if (localStorage.getItem('CurrentUser')) {
            var user = JSON.parse(localStorage.getItem('CurrentUser'));
            var options_1 = this.appsetting.header();
            var postdata = {
                user_id: user._id,
                favorite_business_id: businessID
            };
            var serialized_1 = this.appsetting.serializeObj(postdata);
            this.http.post(this.appsetting.url + 'user/add_to_favarite', serialized_1, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                if (response.status == true) {
                    localStorage.setItem('CurrentUser', JSON.stringify(response.data[0]));
                    console.log(JSON.parse(localStorage.getItem('CurrentUser')).favorite);
                    _this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                    //console.log(this.favourite);
                    console.log(_this.restaurantdata._id);
                    if (_this.favourite.length > 0) {
                        for (var j = 0; j < _this.favourite.length; j++) {
                            console.log(_this.favourite[j].favorite_business_id);
                            if (businessID == _this.favourite[j].favorite_business_id) {
                                console.log('matched');
                                _this.restaurantdata.fav = 1;
                                break;
                            }
                            else {
                                console.log('not matched');
                                _this.restaurantdata.fav = 0;
                                // break;
                            }
                        }
                    }
                    else {
                        _this.restaurantdata.fav = 0;
                    }
                    console.log(_this.restaurantdata);
                }
                else {
                    _this.http.post(_this.appsetting.url + 'user/delete_favarite_business ', serialized_1, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        if (response.status == true) {
                            localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                            console.log(JSON.parse(localStorage.getItem('CurrentUser')).favorite);
                            _this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                            if (_this.favourite.length > 0) {
                                for (var j = 0; j < _this.favourite.length; j++) {
                                    console.log(_this.favourite[j].favorite_business_id);
                                    if (businessID == _this.favourite[j].favorite_business_id) {
                                        console.log('matched');
                                        _this.restaurantdata.fav = 1;
                                        break;
                                    }
                                    else {
                                        console.log('not matched');
                                        _this.restaurantdata.fav = 0;
                                        // break;
                                    }
                                }
                            }
                            else {
                                _this.restaurantdata.fav = 0;
                            }
                        }
                        else {
                            _this.common.presentAlert('View detail', 'Something went wrong!');
                        }
                    });
                }
            });
        }
        else {
            this.common.ConfirmFunction('Favourite', 'Please login first to make favourite!', __WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
        }
    };
    /*********** Function for launch navigator after click on address ***************/
    ViewproductPage.prototype.LaunchNavigator = function () {
        var _this = this;
        console.log(this.restaurantdata.business_data[0].location.coordinates);
        //return false;
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log('getCurrentPosition');
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            var start = [resp.coords.latitude, resp.coords.longitude];
            var options = {
                start: start,
            };
            var lat = _this.restaurantdata.business_data[0].location.coordinates[1];
            var long = _this.restaurantdata.business_data[0].location.coordinates[0];
            var destination = [lat, long];
            _this.launchNavigator.navigate(destination, options)
                .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
        });
    };
    /******** Function for open website url in browser ************/
    ViewproductPage.prototype.OpenWebsiteInfo = function (link) {
        console.log(link);
        this.common.InappBrowser(link);
    };
    ViewproductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewproduct',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewproduct/viewproduct.html"*/'<!--\n  Generated template for the ViewproductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title text-center>View</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: #dee1e4;">\n  <div class="productslide">\n    <ion-slides pager>\n      <ion-slide *ngFor="let img of restaurantdata?.business_image">\n        <div class="imagebox">\n          <img [src]="img.business_image">\n        </div>\n      </ion-slide>\n<!--      <ion-slide *ngIf="restaurantdata?.business_image1">\n        <div class="imagebox">\n          <img [src]="restaurantdata?.business_image1">\n        </div>\n      </ion-slide>-->\n    </ion-slides>\n  </div>\n\n  <div class="product_content">\n    <ion-list>\n      <ion-item>\n        <h1>{{restaurantdata?.business_data[0].business_name}}</h1>\n        <p>{{restaurantdata?.business_data[0].sub_cat}}</p>\n        <h4 *ngIf="restaurantdata?.checkin"><span class="proicon"><img width="13px" src="assets/imgs/check.png"></span> {{restaurantdata?.checkin.length}} Check-Ins</h4>\n        <h4 *ngIf="!restaurantdata?.checkin"><span class="proicon"><img width="13px" src="assets/imgs/check.png"></span> 0 Check-Ins</h4>\n        <div item-end class="buttonright">\n          <button [disabled]="restaurantdata?.role == \'dummy\'" class="btneq" full ion-button icon-left color="green" (click)="bookModal()">\n<!--              <ion-icon><img width="16px" src="assets/imgs/book.png"></ion-icon>-->\n              Book Now</button>\n          <button [disabled]="restaurantdata?.role == \'dummy\'" class="btneq checkin" full ion-button icon-left light color="grey" (click)="CheckIn()">\n<!--              <ion-icon ><img width="16px" src="assets/imgs/checkin.png"></ion-icon>-->\n              Check In</button>\n        </div>\n      </ion-item>\n      <ion-item-divider color="light">Info</ion-item-divider>\n      <ion-item text-wrap>\n        <div class="contactbox">\n          <h4><img width="20px" src="assets/imgs/contactinfo.png"> Contact Info</h4>\n<!--          <p><img width="12px" src="assets/imgs/city.png"> 508 Virginia </p>-->\n          <p (click)="LaunchNavigator()"><img width="12px" src="assets/imgs/location.png"> {{restaurantdata?.business_data[0].address}} </p>\n          <p><img width="12px" src="assets/imgs/phone.png"> Phone: {{restaurantdata?.business_data[0].business_phone_number}}</p>\n        </div>\n        <div class="contactbox">\n          <h4><img width="20px" src="assets/imgs/website.png"> Website Info</h4>\n          <p *ngIf="restaurantdata?.business_data[0].website_url" style="font-size: 14px !important;" (click)="OpenWebsiteInfo(restaurantdata?.business_data[0].website_url)"> {{restaurantdata?.business_data[0].website_url}}</p>\n<!--          <p *ngIf="restaurantdata?.business_data[0].facebook_link"> {{restaurantdata?.business_data[0].facebook_link}}</p>\n          <p *ngIf="restaurantdata?.business_data[0].instagram_link"> {{restaurantdata?.business_data[0].instagram_link}}</p>\n          <p *ngIf="restaurantdata?.business_data[0].twitter_link"> {{restaurantdata?.business_data[0].twitter_link}}</p>-->\n        </div>\n      </ion-item>\n      <ion-item>\n          <button class="share" clear ion-button icon-left color="dark" (click)="LaunchNavigator()"><ion-icon ><img width="16px" src="assets/imgs/download.png"></ion-icon>Map view</button>\n        <button class="fav" clear ion-button icon-left color="dark" (click)="MarkAsFavourite(restaurantdata?.business_data[0]._id)">\n            <ion-icon *ngIf="restaurantdata?.fav == 0"><img width="16px" src="assets/imgs/fav.png"></ion-icon>\n            <ion-icon *ngIf="restaurantdata?.fav == 1"><img width="16px" src="assets/imgs/favactive.png"></ion-icon>\n            \n            Favorite</button>\n        <button class="share" clear ion-button icon-left color="dark" (click)="socialsharing(restaurantdata?.business_data[0].business_name,restaurantdata?.business_data[0].address,restaurantdata?.business_image[0])"><ion-icon ><img width="16px" src="assets/imgs/share.png"></ion-icon>Share</button>\n      </ion-item>\n      <ion-item-divider color="light">Time</ion-item-divider>\n      <ion-item text-wrap>\n        <div class="timesec">\n          <h4 *ngFor="let days of restaurantdata?.business_data[0].opening_days_and_timings"><span>{{days.day}}</span> {{days.opening_time}} to {{days.closing_time}} </h4>\n        </div>\n      </ion-item>\n      <ion-item-divider color="light">IS THIS YOUR BUSINESS?</ion-item-divider>\n      <ion-item text-wrap>\n        <p>Claim your business to respond to reviews and messages.\n        </p>\n        <button [disabled]="restaurantdata?.role != \'dummy\'" class="btneq" full ion-button color="green" (click)="ClaimYourBusiness(restaurantdata?.business_data[0]._id)">Claim this Business</button>\n      </ion-item>\n      <ion-item-divider color="light">Description</ion-item-divider>\n      <ion-item text-wrap>\n        <p [innerHTML]="restaurantdata?.business_data[0].business_description">\n        </p>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewproduct/viewproduct.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ViewproductPage);
    return ViewproductPage;
}());

//# sourceMappingURL=viewproduct.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooknowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the BooknowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BooknowPage = (function () {
    function BooknowPage(navCtrl, navParams, viewCtrl, formBuilder, appsetting, http, loadingCtrl, common, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.data = {};
        console.log('rahul');
        console.log(new Date());
        this.currentdate = __WEBPACK_IMPORTED_MODULE_7_moment___default()(new Date().toISOString()).locale('es').format();
        console.log(this.currentdate);
        var a = new Date();
        console.log(a.getTime());
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            this.common.tryagain();
        }
    }
    BooknowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BooknowPage');
    };
    BooknowPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.BookingForm = this.formBuilder.group({
            date: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            startTime: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            endTime: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            specialAccomo: [''],
        });
    };
    BooknowPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    BooknowPage.prototype.MakeBooking = function (BookingForm) {
        var _this = this;
        console.log(BookingForm.value);
        // return false;
        var startTime = BookingForm.value.startTime.split(':');
        console.log(startTime);
        console.log(startTime[0]);
        var endTime = BookingForm.value.endTime.split(':');
        console.log(endTime[0]);
        if (startTime[0] < endTime[0]) {
            console.log('true');
            console.log(window.navigator.onLine);
            if (localStorage.getItem('CurrentUser')) {
                this.viewCtrl.dismiss({ bookingdata: BookingForm.value });
            }
            else {
                var alert_1 = this.alertCtrl.create({
                    title: 'Book now',
                    message: 'Please login first to confirm booking!',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Login',
                            handler: function () {
                                console.log('login clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Book now',
                message: 'End time must be greater than start time!',
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () {
                            console.log('Ok clicked');
                        }
                    }
                ]
            });
            alert_2.present();
            console.log('Please select time greater than start time');
        }
    };
    BooknowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-booknow',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/booknow/booknow.html"*/'<!--\n  Generated template for the BooknowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n      <button ion-button menuToggle style="display:block !important;">\n          <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>booknow</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="overouter" (click)="dismiss()"></div>\n    <div class="centerbox">\n    <form class="formsec" [formGroup]="BookingForm" (submit)="MakeBooking(BookingForm)">\n      <div class="topsec">\n        <div class="image-wrapper">\n          <img src="assets/imgs/bookpopup.png">\n        </div>\n        <p>Please let us know if you\'re celebrating or \n          have a special accommodation!</p>\n          <h2>Add Booking Day / Time</h2>\n         \n            <ion-grid>\n              <ion-row>\n                <ion-col col-12 class="left right">\n                  <ion-item class="clandr">\n                    <ion-datetime class="inputtxt" placeholder="Date" displayFormat="DDDD  MM-DD-YYYY" pickerFormat="MM-DD-YYYY" min="2018" max="2037" formControlName="date"></ion-datetime>\n                    <img src="assets/imgs/calander.png" item-end>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-6 class="left">\n                  <ion-item>\n                    <ion-datetime class="inputtxt" placeholder="Start Time" displayFormat="HH:mm A" pickerFormat="HH:mm A" min="{{currentdate}}" formControlName="startTime"></ion-datetime>\n                  </ion-item>\n                </ion-col>\n\n                <ion-col col-6 class="right">\n                  <ion-item>\n                    <ion-datetime class="inputtxt" placeholder="End Time" displayFormat="HH:mm A" min="{{currentdate}}" formControlName="endTime"></ion-datetime>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <h2>Special accomodations</h2>\n            <ion-item class="discripation">\n              <ion-textarea class="inputtxt" placeholder="Write special accomodations..." formControlName="specialAccomo"></ion-textarea>\n            </ion-item>\n        </div>\n        <div class="btnsec">\n            <button type="button" clear color="green" (click)="dismiss()">Cancel</button>\n          <button type="submit" clear color="green" style="border-right:1px solid #bdbdbd;" [disabled]="!BookingForm.valid">Confirm</button>\n          \n        </div>\n      </form>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/booknow/booknow.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], BooknowPage);
    return BooknowPage;
}());

//# sourceMappingURL=booknow.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewPage = (function () {
    function ReviewPage(navCtrl, navParams, viewCtrl, formBuilder, appsetting, http, loadingCtrl, common, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.data = {};
        this.limit = 40;
        this.truncating = true;
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            this.common.tryagain();
        }
    }
    ReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewPage');
        this.GetReview();
        console.log(this.navParams.get('prod_id'));
        this.resdetail = this.navParams.get('prod_id');
        this.data.rate = this.resdetail.avg;
        console.log(this.navParams.get('prod_id').business_data[0]._id);
        console.log(JSON.parse(localStorage.getItem('CurrentUser')));
    };
    ReviewPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.ReviewForm = this.formBuilder.group({
            rating: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            comment: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
    };
    ReviewPage.prototype.onModelChange = function (event) {
        console.log(event);
    };
    ReviewPage.prototype.MakeReview = function (MakeReview) {
        var _this = this;
        console.log(MakeReview.value);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            var options_1 = this.appsetting.header();
            var postdata = {
                user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                business_id: this.navParams.get('prod_id').business_data[0]._id,
                stars: MakeReview.value.rating,
                comment: MakeReview.value.comment
            };
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.url + 'postReview', serialized, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.status == true) {
                        _this.common.presentAlert('Review', response.msg);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                    }
                    else {
                        _this.common.presentAlert('Review', response.msg);
                    }
                });
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    ReviewPage.prototype.GetReview = function () {
        var _this = this;
        var options = this.appsetting.header();
        var postdata = {
            business_id: this.navParams.get('prod_id').business_data[0]._id,
        };
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'getReview', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    if (_this.resdetail.review.length > 0) {
                        _this.resdetail.review.forEach(function (value, key) {
                            console.log(value);
                            response.userinfo.forEach(function (val, ke) {
                                console.log(val);
                                if (value.user_id == val._id) {
                                    value.firstname = val.firstname;
                                    value.lastname = val.lastname;
                                    value.profile_pic = val.profile_pic;
                                }
                            });
                        });
                        console.log(_this.resdetail);
                    }
                }
                else {
                }
            });
        });
    };
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-review',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/review/review.html"*/'<!--\n  Generated template for the ReviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title>Write Review</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="top">\n		<ion-list style="margin: 0;">\n		  <ion-item>\n		    <ion-avatar item-start>\n		      <img [src]="resdetail?.business_image[0].business_image">\n		    </ion-avatar>\n		    <h2 color="green">{{resdetail?.business_data[0].business_name}}</h2>\n			<h3 *ngIf="truncating && resdetail?.business_data[0].business_description.length > limit" [innerHTML]="resdetail?.business_data[0].business_description | truncate : 80">\n                        </h3>\n                    <button ion-button clear *ngIf="truncating && resdetail?.business_data[0].business_description.length > limit" ion-button (click)="truncating = false">Show more</button>\n                    <h3 *ngIf="!truncating && resdetail?.business_data[0].business_description.length > limit" [innerHTML]="resdetail?.business_data[0].business_description">\n                             <button ion-button (click)="truncating = true">show less</button>\n                        </h3>\n                    <button ion-button clear *ngIf="!truncating && resdetail?.business_data[0].business_description.length > limit" ion-button (click)="truncating = true">Show less</button>\n		      <div class="btn" item-end *ngIf="resdetail?.review">\n		      	<rating readOnly="true" max="5" emptyStarIconName="star-outline" starIconName="star" nullable="false" [(ngModel)]="data.rate" name="rate">\n                        </rating>\n                          <h4 *ngIf="resdetail?.review.length>0">{{resdetail?.review.length}} Reviews</h4>\n                          <h4 *ngIf="resdetail?.review.length == 0">0 Review</h4>\n		      </div>     \n		 \n		  </ion-item>\n		</ion-list>\n	</div>\n    <div class="bottom">\n		<ion-list>\n		  <ion-item *ngFor="let reviews of resdetail?.review">\n		    <ion-thumbnail item-start>\n		        <img *ngIf="reviews.profile_pic" [src]="reviews.profile_pic">\n                        <img *ngIf="!reviews.profile_pic" src="assets/imgs/user.png">\n		    </ion-thumbnail>\n		    <h2>{{reviews.firstname}} {{reviews.lastname}} <span>{{reviews.created_at | date:"shortDate"}}</span></h2>\n		    <p style="padding-bottom: 10px;">{{reviews.comment}}</p>\n                    <div class="rply">\n                        <h5>REPLY</h5>       \n                        <p *ngIf="reviews.reply.length>0">{{reviews.reply[0].comment}}</p>\n                    </div>\n		  </ion-item>\n<!--		   <ion-item>\n		    <ion-thumbnail item-start>\n	          <img src="assets/img/southfood.png">\n	        </ion-thumbnail>\n		    <h2>Good Chef <span>12/06/2017</span></h2>\n		    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n		  </ion-item>\n		   <ion-item>\n		    <ion-thumbnail item-start>\n		        <img src="assets/img/southfod.png">\n		    </ion-thumbnail>\n		    <h2>Good Chef <span>12/06/2017</span></h2>\n		    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n		  </ion-item>-->\n		</ion-list>\n	</div>\n    <form [formGroup]="ReviewForm" (submit)="MakeReview(ReviewForm)">\n  <h2>Please rate your experience</h2>\n  <rating readOnly="false" max="5" emptyStarIconName="star-outline" starIconName="star" formControlName="rating"\n        nullable="false" (ngModelChange)="onModelChange($event)">\n</rating>\n<!--  <ul>\n    <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n    <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n  </ul>-->\n  <ion-item>\n    <ion-textarea placeholder="Share your review" formControlName="comment"></ion-textarea>\n  </ion-item>\n  <div class="btnsec">\n    <button type="submit" ion-button color="green" class="btn1" [disabled]="!ReviewForm.valid">Post Review</button>\n  </div>\n    </form>\n</ion-content>\n<!-- <ion-footer>\n  <ion-toolbar style="padding: 6px;">\n		<div class="text">\n			 <ion-textarea class="enter" placeholder="Enter your text"></ion-textarea>\n		</div>\n		<div>\n			<div class="star">\n				<ul>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n			     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n			    </ul>\n			</div>\n			<ion-buttons end>\n		      <button ion-button icon-only class="btnprofile">Submit</button>     \n		    </ion-buttons>\n		</div>\n		\n  </ion-toolbar>\n</ion-footer> -->\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/review/review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appsetting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Appsetting = (function () {
    function Appsetting(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.url = 'http://default-environment.uprbdsfein.us-east-2.elasticbeanstalk.com/api/'; //shop/shippingaddress
        console.log('Hello Appsetting Provider');
    }
    Appsetting.prototype.header = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        //headers.append('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    Appsetting.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    Appsetting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], Appsetting);
    return Appsetting;
}());

//# sourceMappingURL=appsetting.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*********Native plugins *************/
//import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the Appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Common = (function () {
    function Common(http, alertCtrl, app, iab) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.iab = iab;
        console.log('Hello Common Provider');
    }
    Common.prototype.presentAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
        });
        setTimeout(function () {
            alert.dismiss();
        }, 3000);
        return alert.present();
    };
    Common.prototype.distance = function (lat1, lon1, lat2, lon2, unit) {
        console.log(lat1);
        console.log(lon1);
        console.log(lat2);
        console.log(lon2);
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        // if (unit == "N") {dist = dist * 0.8684}
        console.log(dist * 0.62137);
        return (dist * 0.62137).toFixed(1);
    };
    Common.prototype.tryagain = function () {
        var _this = this;
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            console.log('you are offline');
            var alert_1 = this.alertCtrl.create({
                message: '<img src="assets/imgs/network.png">',
                buttons: [{
                        text: 'Try again',
                        role: 'cancel',
                        handler: function () {
                            console.log('try again clicked');
                            _this.tryagain();
                        }
                    }]
            });
            alert_1.present();
        }
    };
    Common.prototype.presentConfirm = function (title, message, page) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Ok',
                    role: 'submit',
                    handler: function () {
                        console.log('Submit clicked');
                        var nav = _this.app.getActiveNav();
                        console.log(nav);
                        nav.push(page);
                    }
                }
            ]
        });
        alert.present();
    };
    Common.prototype.ConfirmFunction = function (title, message, page) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: function () {
                        console.log('login clicked');
                        var nav = _this.app.getActiveNav();
                        console.log(nav);
                        nav.push(page);
                    }
                }
            ]
        });
        alert.present();
    };
    Common.prototype.InappBrowser = function (link) {
        var InAppBrowserOptions = {
            locatio: 'no',
            closebuttoncaption: 'Back to app'
        };
        var browser = this.iab.create(link, '_blank', InAppBrowserOptions);
        browser.show();
    };
    Common = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], Common);
    return Common;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getstart_getstart__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl, navParams, formBuilder, http, appsetting, common, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.appsetting = appsetting;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.type = 'password';
        this.Ctype = 'password';
        this.Ctype1 = 'password';
        this.showPass = false;
        this.showCpass = false;
        this.showCpass1 = false;
        this.iconname = 'eye';
        this.iconname1 = 'eye';
        this.iconname2 = 'eye';
        this.myColors = [];
        this.bar0 = '#DDD';
        this.bar1 = '#DDD';
        this.bar2 = '#DDD';
        this.bar3 = '#DDD';
        this.bar4 = '#DDD';
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.ChangeForm = this.formBuilder.group({
            oldpassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
            newpassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
            cnewpassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, this.equalto('newpassword')]],
        });
    };
    ChangepasswordPage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return { invalidEmail: true };
        }
    };
    ChangepasswordPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    ChangepasswordPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid) {
                return { 'equalTo': { isValid: isValid } };
            }
            else {
                return null;
            }
            ;
        };
    };
    ChangepasswordPage.prototype.showPassword = function () {
        console.log('showpassword');
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
            this.iconname = 'eye-off';
        }
        else {
            this.type = 'password';
            this.iconname = 'eye';
        }
    };
    ChangepasswordPage.prototype.showCPassword = function () {
        console.log('showCpassword');
        this.showCpass = !this.showCpass;
        if (this.showCpass) {
            this.Ctype = 'text';
            this.iconname1 = 'eye-off';
        }
        else {
            this.Ctype = 'password';
            this.iconname1 = 'eye';
        }
    };
    ChangepasswordPage.prototype.showCPassword1 = function () {
        console.log('showCpassword');
        this.showCpass1 = !this.showCpass1;
        if (this.showCpass1) {
            this.Ctype1 = 'text';
            this.iconname2 = 'eye-off';
        }
        else {
            this.Ctype1 = 'password';
            this.iconname2 = 'eye';
        }
    };
    ChangepasswordPage.prototype.isValid = function (field) {
        var formField = this.ChangeForm.get(field);
        return formField.valid || formField.pristine;
    };
    ChangepasswordPage.prototype.pass_strength = function (pass) {
        console.log(pass.value);
        var strongRegularExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*()<>{}:;+'~|,-_?/=])(?=.{8,})");
        var mediumRegularExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if (strongRegularExp.test(pass.value)) {
            console.log('strong');
            this.bar0 = '#00FF00';
            this.bar1 = '#00FF00';
            this.bar2 = '#00FF00';
            this.bar3 = '#00FF00';
            this.bar4 = '#00FF00';
        }
        else if (mediumRegularExp.test(pass.value)) {
            console.log('medium');
            this.bar0 = '#FFA500';
            this.bar1 = '#FFA500';
            this.bar2 = '#DDD';
            this.bar3 = '#DDD';
            this.bar4 = '#DDD';
        }
        else {
            console.log('low');
            this.bar0 = '#FF0000';
            this.bar1 = '#DDD';
            this.bar2 = '#DDD';
            this.bar3 = '#DDD';
            this.bar4 = '#DDD';
        }
    };
    ChangepasswordPage.prototype.Changepassword = function (changeform) {
        var _this = this;
        console.log(changeform.value);
        console.log(JSON.parse(localStorage.getItem('CurrentUser')).email);
        var options = this.appsetting.header();
        var postdata = {
            email: JSON.parse(localStorage.getItem('CurrentUser')).email,
            password: changeform.value.oldpassword,
            newpassword: changeform.value.newpassword
        };
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/changepassword', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                localStorage.removeItem('CurrentUser');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__getstart_getstart__["a" /* GetstartPage */]);
            }
            else {
                _this.common.presentAlert('Change password', response.message);
            }
        });
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-changepassword',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/changepassword/changepassword.html"*/'<!--\n  Generated template for the ChangepasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="green">\n        <ion-title>change password</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="chngpwd formmain">\n        <div class="image-wrapper">\n            <img src="assets/imgs/key.png">\n        </div>\n        <p>Set a new password.</p>\n        <form [formGroup]="ChangeForm" (submit)="Changepassword(ChangeForm)">\n            <ion-list no-lines>\n\n                <ion-item>\n                    <ion-input type="{{type}}" placeholder="Old Password" formControlName="oldpassword"></ion-input>\n                    <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n                    <span item-content *ngIf="!isValid(\'oldpassword\')" class="validationpop animated bounce">Password should at least 6 char.</span>\n                <button item-end type="button" color="dark" class="eyebutton" (click)="showPassword()" ion-button icon-only clear>\n                    <ion-icon name="{{iconname}}"></ion-icon>\n                </button>\n                </ion-item>\n                \n<ion-item>\n    <ion-input type="{{Ctype}}" placeholder="New Password" formControlName="newpassword" (input)="pass_strength(ChangeForm.controls.newpassword)"></ion-input>\n                    <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n                    <span item-content *ngIf="( ChangeForm.get(\'newpassword\').hasError(\'required\') ) && ChangeForm.get(\'newpassword\').touched" class="validationpop animated bounce">Password should at least 6 char.</span>\n                <button item-end type="button" color="dark" class="eyebutton" (click)="showCPassword()" ion-button icon-only clear>\n                        <ion-icon name="{{iconname1}}"></ion-icon>\n                    </button>\n                </ion-item>\n               \n<!--                    <div id="strength">\n                        <p class="strnth">Password strength:</p>\n                        <ul id="strengthBar">\n                            <li class="point" [style.background-color]="bar0"></li>\n                            <li class="point" [style.background-color]="bar1"></li>\n                            <li class="point" [style.background-color]="bar2"></li>\n                            <li class="point" [style.background-color]="bar3"></li>\n                            <li class="point" [style.background-color]="bar4"></li>\n                        </ul>\n                    </div>-->\n                    <ion-item>\n                        <ion-input type="{{Ctype1}}" placeholder="Confirm New Password" formControlName="cnewpassword"></ion-input>\n                        <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n                        <button item-end type="button" color="dark" class="eyebutton" (click)="showCPassword1()" ion-button icon-only clear>\n                        <ion-icon name="{{iconname2}}"></ion-icon>\n                    </button>\n                        <span item-content  *ngIf="ChangeForm.get(\'cnewpassword\').hasError(\'equalTo\') && ChangeForm.get(\'cnewpassword\').touched" class="validationpop animated bounce">Password mismatch</span>\n                    </ion-item>\n                    \n<!--                    <ion-item no-lines *ngIf="( ChangeForm.get(\'cnewpassword\').hasError(\'equalTo\') || ChangeForm.get(\'cnewpassword\').hasError(\'required\') ) && ChangeForm.get(\'cnewpassword\').touched">\n\n                   <div class="error" *ngIf="ChangeForm.get(\'cnewpassword\').hasError(\'required\') && ChangeForm.get(\'cnewpassword\').touched">\n                   Confirm password is required\n                   </div>\n                   <div class="error" *ngIf="ChangeForm.get(\'cnewpassword\').hasError(\'equalTo\') && ChangeForm.get(\'cnewpassword\').touched">\n                   Password Mismatch\n                   </div>\n                   </ion-item>-->\n<!--                     <div class=\'form-text error\' color="danger" *ngIf="ChangeForm.controls.cpassword.touched">\n          <div *ngIf="ChangeForm.hasError(\'mismatchedPasswords\')">Passwords do not match.</div>\n        </div>-->\n                    \n                    <button type="submit" class="btn1" ion-button color="green" block [disabled]="!ChangeForm.valid">SAVE</button>\n                </ion-list>\n            </form>\n        </div>\n\n    </ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/changepassword/changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignuptwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logintwo_logintwo__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addbusiness_addbusiness__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgot_forgot__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the SignuptwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignuptwoPage = (function () {
    function SignuptwoPage(navCtrl, navParams, formBuilder, http, appsetting, common, toastCtrl, events, loadingCtrl, fcm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.appsetting = appsetting;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.fcm = fcm;
        this.type = 'password';
        this.Ctype = 'password';
        this.showPass = false;
        this.showCpass = false;
        this.iconname = 'eye';
        this.iconname1 = 'eye';
        this.myColors = [];
        this.bar0 = '#DDD';
        this.bar1 = '#DDD';
        this.bar2 = '#DDD';
        this.bar3 = '#DDD';
        this.bar4 = '#DDD';
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            this.common.tryagain();
        }
    }
    SignuptwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignuptwoPage');
    };
    SignuptwoPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.SignupForm = this.formBuilder.group({
            fname: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            lname: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, this.emailValidator.bind(this)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6)]],
            cpassword: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6)]],
        }, { validator: this.matchingPasswords('password', 'cpassword') });
    };
    SignuptwoPage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return { invalidEmail: true };
        }
    };
    SignuptwoPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    SignuptwoPage.prototype.showPassword = function () {
        console.log('showpassword');
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
            this.iconname = 'eye-off';
        }
        else {
            this.type = 'password';
            this.iconname = 'eye';
        }
    };
    SignuptwoPage.prototype.showCPassword = function () {
        console.log('showCpassword');
        this.showCpass = !this.showCpass;
        if (this.showCpass) {
            this.Ctype = 'text';
            this.iconname1 = 'eye-off';
        }
        else {
            this.Ctype = 'password';
            this.iconname1 = 'eye';
        }
    };
    SignuptwoPage.prototype.isValid = function (field) {
        var formField = this.SignupForm.get(field);
        return formField.valid || formField.pristine;
    };
    SignuptwoPage.prototype.CreateAccount = function (formdata) {
        var _this = this;
        console.log(formdata.value);
        console.log(formdata.value.password.indexOf(' '));
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            if (formdata.value.password.indexOf(' ') != 0) {
                var options_1 = this.appsetting.header();
                this.fcm.getToken().then(function (token) {
                    console.log('Tokenid-->' + token);
                    var postdata = {
                        firstname: formdata.value.fname,
                        lastname: formdata.value.lname,
                        email: formdata.value.email,
                        phone_number: formdata.value.phone,
                        role: 'business',
                        divice_token: token,
                        password: formdata.value.password
                    };
                    var serialized = _this.appsetting.serializeObj(postdata);
                    var Loading = _this.loadingCtrl.create({
                        spinner: 'bubbles',
                        content: 'Loading...'
                    });
                    Loading.present().then(function () {
                        _this.http.post(_this.appsetting.url + 'users/registration', serialized, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response);
                            Loading.dismiss();
                            if (response.status == true) {
                                localStorage.removeItem('filterdata');
                                localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                                _this.events.publish('Loggedin', 'loginpage');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addbusiness_addbusiness__["a" /* AddbusinessPage */]);
                            }
                            else {
                                _this.common.presentAlert('Signup', response.message);
                            }
                        });
                    });
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                this.common.presentAlert('Signup', 'Space not allowed in password.');
            }
            //}).catch((error: any) => console.log(error));
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    SignuptwoPage.prototype.pass_strength = function (pass) {
        console.log(pass.value);
        var strongRegularExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*()<>{}:;+'~|,-_?/=])(?=.{8,})");
        var mediumRegularExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if (strongRegularExp.test(pass.value)) {
            console.log('strong');
            this.bar0 = '#00FF00';
            this.bar1 = '#00FF00';
            this.bar2 = '#00FF00';
            this.bar3 = '#00FF00';
            this.bar4 = '#00FF00';
        }
        else if (mediumRegularExp.test(pass.value)) {
            console.log('medium');
            this.bar0 = '#FFA500';
            this.bar1 = '#FFA500';
            this.bar2 = '#DDD';
            this.bar3 = '#DDD';
            this.bar4 = '#DDD';
        }
        else {
            console.log('low');
            this.bar0 = '#FF0000';
            this.bar1 = '#DDD';
            this.bar2 = '#DDD';
            this.bar3 = '#DDD';
            this.bar4 = '#DDD';
        }
    };
    SignuptwoPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__forgot_forgot__["a" /* ForgotPage */]);
    };
    SignuptwoPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addbusiness_addbusiness__["a" /* AddbusinessPage */]);
    };
    SignuptwoPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__logintwo_logintwo__["a" /* LogintwoPage */]);
    };
    SignuptwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signuptwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/signuptwo/signuptwo.html"*/'<!--\n  Generated template for the SignuptwoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title text-center>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="loginform formmain">\n    <h5>Benefits of becoming an “ME” Valued Business</h5>\n    <ul>\n\n      <li>Gain maximum exposure for your business</li>\n\n      <li>Connect directly with your potential customers in our fun and active RealTalk! Chat Room</li>\n\n      <li>Create a better online customer experience by scheduling appointment or reservations</li>\n\n      <li>…and much more!</li>\n    </ul>\n\n    <form [formGroup]="SignupForm" (submit)="CreateAccount(SignupForm)">\n      <ion-list no-lines>\n        \n          <ion-item>\n            <ion-input type="text" placeholder="First Name" formControlName="fname"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/user.png"></ion-icon>\n             <span tem-content *ngIf="!isValid(\'fname\')" class="validationpop animated bounce">Firstname required.</span>\n          </ion-item>\n           \n       \n       \n          <ion-item>\n            <ion-input type="text" placeholder="Last Name" formControlName="lname"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/user.png"></ion-icon>\n             <span tem-content *ngIf="!isValid(\'lname\')" class="validationpop animated bounce">Lastname required.</span>\n          </ion-item>\n            \n       \n       \n          <ion-item>\n            <ion-input type="tel" placeholder="Phone number" formControlName="phone" maxLength="12"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/phn.png"></ion-icon>\n            <span tem-content *ngIf="!isValid(\'phone\')" class="validationpop animated bounce">Invalid phone number.</span>\n          </ion-item>\n          \n    \n          <ion-item>\n            <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/email.png"></ion-icon>\n            <span tem-content *ngIf="!isValid(\'email\')" class="validationpop animated bounce">Invalid email.</span>\n          </ion-item>\n          \n      \n          <ion-item>\n            <ion-input type="{{type}}" placeholder="Password" formControlName="password" (input)="pass_strength(SignupForm.controls.password)"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n            <button item-end type="button" color="dark" class="eyebutton" (click)="showPassword()" ion-button icon-only clear>\n                <ion-icon name="{{iconname}}"></ion-icon>\n          </button>\n          <span tem-content *ngIf="!isValid(\'password\')" class="validationpop animated bounce">Password should at least 6 char.</span>\n          </ion-item>\n            \n<!--           <div id="strength">\n                    <p class="strnth">Password strength:</p>\n                        <ul id="strengthBar">\n                            <li class="point" [style.background-color]="bar0"></li>\n                            <li class="point" [style.background-color]="bar1"></li>\n                            <li class="point" [style.background-color]="bar2"></li>\n                            <li class="point" [style.background-color]="bar3"></li>\n                            <li class="point" [style.background-color]="bar4"></li>\n                        </ul>\n                    </div>-->\n    \n          <ion-item>\n            <ion-input type="{{Ctype}}" placeholder="Confirm Password" formControlName="cpassword"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n            \n            <button item-end type="button" color="dark" class="eyebutton" (click)="showCPassword()" ion-button icon-only clear>\n                <ion-icon name="{{iconname1}}"></ion-icon>\n          </button>\n          <span tem-content *ngIf="SignupForm.hasError(\'mismatchedPasswords\')"  class="validationpop animated bounce">Password mismatch.</span>\n          </ion-item>\n           \n       \n        <button type="submit" class="btn1" ion-button color="green" block  [disabled]="!SignupForm.valid">Sign up</button>\n<!--        <button type="button" class="forgot" ion-button clear block color="dark" (click)="forgot()">Forgot Password?</button>-->\n      </ion-list>\n    </form>\n  </div>\n\n  <div class="haveacc">Have an account? <span color="dark" (click)="login()" style="font-weight: 600;">Sign In</span></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/signuptwo/signuptwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */]])
    ], SignuptwoPage);
    return SignuptwoPage;
}());

//# sourceMappingURL=signuptwo.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_forgot__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, formBuilder, http, appsetting, common, toastCtrl, events, loadingCtrl, fcm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.appsetting = appsetting;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.fcm = fcm;
        this.type = 'password';
        this.Ctype = 'password';
        this.showPass = false;
        this.showCpass = false;
        this.iconname = 'eye';
        this.iconname1 = 'eye';
        this.myColors = [];
        this.bar0 = '#DDD';
        this.bar1 = '#DDD';
        this.bar2 = '#DDD';
        this.bar3 = '#DDD';
        this.bar4 = '#DDD';
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            this.common.tryagain();
        }
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.SignupForm = this.formBuilder.group({
            fname: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            lname: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, this.emailValidator.bind(this)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(6)]],
            cpassword: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(6)]],
        }, { validator: this.matchingPasswords('password', 'cpassword') });
    };
    SignupPage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return { invalidEmail: true };
        }
    };
    SignupPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    SignupPage.prototype.showPassword = function () {
        console.log('showpassword');
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
            this.iconname = 'eye-off';
        }
        else {
            this.type = 'password';
            this.iconname = 'eye';
        }
    };
    SignupPage.prototype.showCPassword = function () {
        console.log('showCpassword');
        this.showCpass = !this.showCpass;
        if (this.showCpass) {
            this.Ctype = 'text';
            this.iconname1 = 'eye-off';
        }
        else {
            this.Ctype = 'password';
            this.iconname1 = 'eye';
        }
    };
    SignupPage.prototype.isValid = function (field) {
        var formField = this.SignupForm.get(field);
        return formField.valid || formField.pristine;
    };
    SignupPage.prototype.CreateAccount = function (formdata) {
        var _this = this;
        console.log(formdata.value);
        console.log(formdata.value.password.indexOf(' '));
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            if (formdata.value.password.indexOf(' ') != 0) {
                var options_1 = this.appsetting.header();
                this.fcm.getToken().then(function (token) {
                    console.log('Tokenid-->' + token);
                    var postdata = {
                        firstname: formdata.value.fname,
                        lastname: formdata.value.lname,
                        email: formdata.value.email,
                        phone_number: formdata.value.phone,
                        role: 'member',
                        divice_token: token,
                        password: formdata.value.password
                    };
                    var serialized = _this.appsetting.serializeObj(postdata);
                    var Loading = _this.loadingCtrl.create({
                        spinner: 'bubbles',
                        content: 'Loading...'
                    });
                    Loading.present().then(function () {
                        _this.http.post(_this.appsetting.url + 'users/registration', serialized, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response);
                            Loading.dismiss();
                            if (response.status == true) {
                                localStorage.removeItem('filterdata');
                                localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                                _this.events.publish('Loggedin', 'loginpage');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                            }
                            else {
                                _this.common.presentAlert('Signup', response.message);
                            }
                        });
                    });
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                this.common.presentAlert('Signup', 'Space not allowed in password.');
            }
            //}).catch((error: any) => console.log(error));
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    SignupPage.prototype.pass_strength = function (pass) {
        console.log(pass.value);
        var strongRegularExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*()<>{}:;+'~|,-_?/=])(?=.{8,})");
        var mediumRegularExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if (strongRegularExp.test(pass.value)) {
            console.log('strong');
            this.bar0 = '#00FF00';
            this.bar1 = '#00FF00';
            this.bar2 = '#00FF00';
            this.bar3 = '#00FF00';
            this.bar4 = '#00FF00';
        }
        else if (mediumRegularExp.test(pass.value)) {
            console.log('medium');
            this.bar0 = '#FFA500';
            this.bar1 = '#FFA500';
            this.bar2 = '#DDD';
            this.bar3 = '#DDD';
            this.bar4 = '#DDD';
        }
        else {
            console.log('low');
            this.bar0 = '#FF0000';
            this.bar1 = '#DDD';
            this.bar2 = '#DDD';
            this.bar3 = '#DDD';
            this.bar4 = '#DDD';
        }
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SignupPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forgot_forgot__["a" /* ForgotPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title text-center>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="loginform formmain">\n<!--    <h5>Benefits of becoming a “ME” Valued Business</h5>\n    <ul>\n\n      <li>Gain maximum exposure for your business</li>\n\n      <li>Connect directly with your potential customers in our fun and active RealTalk! Chat Room</li>\n\n      <li>Create a better online customer experience by scheduling appointment or reservations</li>\n\n      <li>…and much more!</li>\n    </ul>-->\n\n    <form [formGroup]="SignupForm" (submit)="CreateAccount(SignupForm)">\n      <ion-list no-lines>\n       \n          <ion-item>\n            <ion-input type="text" placeholder="First Name" formControlName="fname"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/user.png"></ion-icon>\n            <span item-content *ngIf="!isValid(\'fname\')" class="validationpop animated bounce">Firstname required.</span>\n          </ion-item>\n            \n       \n          <ion-item>\n            <ion-input type="text" placeholder="Last Name" formControlName="lname"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/user.png"></ion-icon>\n            <span item-content *ngIf="!isValid(\'lname\')" class="validationpop animated bounce">Lastname required.</span>\n          </ion-item>\n            \n      \n          <ion-item>\n            <ion-input type="tel" placeholder="Phone number" formControlName="phone" maxLength="12"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/phn.png"></ion-icon>\n            <span item-content *ngIf="!isValid(\'phone\')" class="validationpop animated bounce">Phone number required.</span>\n          </ion-item>\n          \n        \n          <ion-item>\n            <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/email.png"></ion-icon>\n            <span item-content *ngIf="!isValid(\'email\')" class="validationpop animated bounce">Invalid email.</span>\n          </ion-item>\n          \n        \n          <ion-item>\n            <ion-input type="{{type}}" placeholder="Password" formControlName="password" (input)="pass_strength(SignupForm.controls.password)"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n            <span item-content *ngIf="!isValid(\'password\')" class="validationpop animated bounce">Password should at least 6 char.</span>\n          <button item-end type="button" color="dark" class="eyebutton" (click)="showPassword()" ion-button icon-only clear>\n                <ion-icon name="{{iconname}}"></ion-icon>\n          </button>\n          </ion-item>\n          \n        \n<!--          <div id="strength">\n                    <p class="strnth">Password strength:</p>\n                        <ul id="strengthBar">\n                            <li class="point" [style.background-color]="bar0"></li>\n                            <li class="point" [style.background-color]="bar1"></li>\n                            <li class="point" [style.background-color]="bar2"></li>\n                            <li class="point" [style.background-color]="bar3"></li>\n                            <li class="point" [style.background-color]="bar4"></li>\n                        </ul>\n                    </div>-->\n       \n          <ion-item>\n            <ion-input type="{{Ctype}}" placeholder="Confirm Password" formControlName="cpassword"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n            <button item-end type="button" color="dark" class="eyebutton" (click)="showCPassword()" ion-button icon-only clear>\n                <ion-icon name="{{iconname1}}"></ion-icon>\n          </button>\n          <span item-content *ngIf="!isValid(\'cpassword\')" class="validationpop animated bounce">Password mismatch.</span>\n          </ion-item>\n            \n       \n        <button type="submit" class="btn1" ion-button color="green" block [disabled]="!SignupForm.valid">Signup</button>\n<!--        <button class="forgot" ion-button clear block color="dark" (click)="forgot()">Forgot Password?</button>-->\n      </ion-list>\n    </form>\n  </div>\n\n  <div class="haveacc">Have an account? <span color="dark" (click)="login()">Sign In</span></div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_8__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__["a" /* FCM */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterPage = (function () {
    function FilterPage(navCtrl, navParams, viewCtrl, formBuilder, appsetting, http, loadingCtrl, common, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.common = common;
        this.toastCtrl = toastCtrl;
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            this.common.tryagain();
        }
    }
    FilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterPage');
        console.log(this.navParams.get('serviceslist'));
        this.services = this.navParams.get('serviceslist');
        if (localStorage.getItem('filterdata')) {
            this.filterd = JSON.parse(localStorage.getItem('filterdata'));
            //            if(this.filterd.online == 1){
            //                this.filterd.online = "yes";
            //            }else{
            //                 this.filterd.online = "no";
            //            }
            this.FilterForm.patchValue({
                services: this.filterd.services,
                range: this.filterd.range,
                zipcode: this.filterd.zipcode,
                online1: this.filterd.online1,
                offline: this.filterd.offline
            });
        }
    };
    FilterPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.FilterForm = this.formBuilder.group({
            services: [''],
            range: [''],
            zipcode: [''],
            online: [''],
            online1: [false],
            offline: [false]
        });
    };
    FilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FilterPage.prototype.Search = function (filterformdata) {
        console.log(filterformdata.value);
        if (filterformdata.value.online1 == true && filterformdata.value.offline == true) {
            filterformdata.value.online = 3;
        }
        else if (filterformdata.value.online1 == true) {
            filterformdata.value.online = 1;
        }
        else if (filterformdata.value.offline == true) {
            filterformdata.value.online = 0;
        }
        if (filterformdata.value.online1 == false && filterformdata.value.offline == false) {
            filterformdata.value.online = 3;
        }
        if (filterformdata.value.range != undefined) {
            filterformdata.value.range = filterformdata.value.range;
        }
        else {
            filterformdata.value.range = '';
        }
        console.log(filterformdata.value);
        // return false;
        var options = this.appsetting.header();
        this.viewCtrl.dismiss({ searchedlist: filterformdata.value, type: 'search' });
        localStorage.setItem('filterdata', JSON.stringify(filterformdata.value));
    };
    FilterPage.prototype.Reset = function () {
        this.viewCtrl.dismiss({ searchedlist: '', type: 'reset' });
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-filter',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/filter/filter.html"*/'<!--\n  Generated template for the FilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n   \n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-buttons left (click)="dismiss()">\n    <button ion-button clear>\n      <ion-icon ion-icon icon-only name="close" style="font-size:30px; font-weight: 700;"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title text-center>filter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<form [formGroup]="FilterForm" (submit)="Search(FilterForm)" style="height: 100%; margin-top: 44px;">\n<ion-content padding>\n  <div class="loginform">\n \n      <ion-list no-lines>\n        <div class="inputouter">\n          <h2>Services</h2>\n          <ion-item>\n            <ion-select formControlName="services">\n              <ion-option selected *ngFor="let service of services" value="{{service._id}}">{{service.sub_category_title}}</ion-option>\n<!--              <ion-option>Option 1</ion-option>\n              <ion-option>Option 2</ion-option>-->\n            </ion-select>\n          </ion-item>\n        </div>\n\n        <div class="inputouter">\n          <h2>Miles</h2>\n          <ion-item>\n            <ion-range min="1" step="5" max="100" formControlName="range" [(ngModel)]="range" name="range">\n               <p range-left *ngIf="!range">0 miles</p>\n               <p range-left *ngIf="range">{{range}} miles</p>\n               <p range-right>100 miles</p>\n            </ion-range>\n          </ion-item>\n        </div>\n\n        <div class="inputouter">\n          <h2>Zip Code</h2>\n          <ion-item>\n            <ion-input type="tel" placeholder="Zip Code" formControlName="zipcode"></ion-input>\n          </ion-item>\n        </div>\n\n<!--        <div class="inputouter">\n          <h2>City/State</h2>\n          <ion-item>\n            <ion-input type="text" placeholder="City" formControlName="city"></ion-input>\n          </ion-item>\n        </div>-->\n\n\n        <div class="inputouter">\n          <h2>Online</h2>\n         \n            <ion-list radio-group>\n              <ion-item class="rdo" style="padding-left: 25px !important;">\n               \n                <ion-checkbox checked="false" formControlName="online1"></ion-checkbox>\n                <ion-label>Yes</ion-label>\n              </ion-item>\n            \n              <ion-item class="rdo" style="padding-left: 25px !important;">\n                <ion-checkbox  formControlName="offline"></ion-checkbox>\n                <ion-label>No</ion-label>\n              </ion-item>\n            </ion-list>\n         \n        </div>\n      </ion-list>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <button type="submit" ion-button color="green" class="btn2">Search</button>\n  <button type="button" ion-button color="green" class="btn2" (click)="Reset()">Reset</button>\n</ion-footer>\n           </form>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/filter/filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofiletwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword_changepassword__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the EditprofiletwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofiletwoPage = (function () {
    function EditprofiletwoPage(navCtrl, navParams, camera, actionSheetCtrl, formBuilder, appsetting, common, http, events, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.formBuilder = formBuilder;
        this.appsetting = appsetting;
        this.common = common;
        this.http = http;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.base64Image = 'assets/imgs/profile.png';
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            this.common.tryagain();
        }
    }
    EditprofiletwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofiletwoPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.getUser();
        this.Editprofile = this.formBuilder.group({
            fname: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]],
            lname: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, this.emailValidator.bind(this)]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]],
        });
    };
    EditprofiletwoPage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return { invalidEmail: true };
        }
    };
    EditprofiletwoPage.prototype.isValid = function (field) {
        var formField = this.Editprofile.get(field);
        return formField.valid || formField.pristine;
    };
    EditprofiletwoPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose image',
            buttons: [
                {
                    text: 'Camera',
                    role: 'submit',
                    handler: function () {
                        console.log('submit clicked');
                        _this.chooseImage(1);
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log('Gallery clicked');
                        _this.chooseImage(0);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditprofiletwoPage.prototype.chooseImage = function (Type) {
        var _this = this;
        var options = {
            quality: 10,
            sourceType: Type,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 800,
            targetHeight: 800,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.click = true;
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.ImageToSend = imageData;
            var options = _this.appsetting.header();
            var postdata = {
                user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                profile_picture: imageData
            };
            var serialized = _this.appsetting.serializeObj(postdata);
            var Loading = _this.loadingCtrl.create({
                spinner: 'bubbles',
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.url + 'users/user_profile_pic', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    // alert(JSON.stringify(response));
                    Loading.dismiss();
                    if (response.status == true) {
                        //alert('response');
                        //console.log(response.data.profile_pic);
                        //alert(response.data.profile_pic);
                        _this.events.publish('Loggedin', 'loginpage');
                    }
                });
            });
        }, function (err) {
            // Handle error
            console.log(err);
        });
    };
    EditprofiletwoPage.prototype.changepwd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    EditprofiletwoPage.prototype.getUser = function () {
        var _this = this;
        console.log(JSON.parse(localStorage.getItem('CurrentUser'))._id);
        var options = this.appsetting.header();
        var postdata = {
            user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                console.log('userinfo');
                _this.profiledata = response.data;
                console.log(response.data.profile_pic);
                if (response.data.profile_pic) {
                    _this.base64Image = null;
                    _this.base64Image = response.data.profile_pic;
                }
                console.log('image');
                console.log(_this.base64Image);
                _this.events.publish('Loggedin', 'loginpage');
                var name = response.data.firstname + ' ' + response.data.lastname;
                _this.Editprofile.patchValue({
                    fname: response.data.firstname,
                    lname: response.data.lastname,
                    email: response.data.email,
                    phone: response.data.phone_number,
                });
            }
        });
    };
    EditprofiletwoPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getUser();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    EditprofiletwoPage.prototype.editProfile = function (profiledata) {
        var _this = this;
        console.log(profiledata.value);
        var options = this.appsetting.header();
        if (this.click == true) {
        }
        else {
            this.ImageToSend = "";
        }
        var name;
        var postdata;
        // console.log(profiledata.value.name.indexOf(' '));
        //        if (profiledata.value.name.indexOf(' ') != -1) {
        //            console.log('if');
        //            name = profiledata.value.name.split(' ');
        //            postdata = {
        //                user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
        //                firstname: profiledata.value.fname,
        //                lastname: profiledata.value.lname,
        //                phone_number: profiledata.value.phone
        //
        //            }
        //        } else {
        //            console.log('else');
        postdata = {
            user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            firstname: profiledata.value.fname,
            lastname: profiledata.value.lname,
            phone_number: profiledata.value.phone
        };
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'users/profileupdate', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    _this.events.publish('Loggedin', 'loginpage');
                    _this.common.presentAlert('Profile', response.message);
                    localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
                }
            });
        });
    };
    EditprofiletwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editprofiletwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/editprofiletwo/editprofiletwo.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>edit profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="Editprofile">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n     <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n    \n  <div class="head-sec">\n    <div class="image-wrapper">\n      <img [src]="base64Image">\n    </div>\n      <ion-fab center>\n    <h2 ion-fab mini icon-only>EDIT</h2>\n    <ion-fab-list side="left">\n      <button ion-fab (click)="chooseImage(0)"><ion-icon name="images"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n      <button ion-fab (click)="chooseImage(1)"><ion-icon name="camera"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n   \n  </div>\n    \n  <div class="input-sec">\n    <ion-list>\n\n      <ion-item>\n          <ion-label stacked>First name</ion-label>\n          <ion-input type="text" placeholder="Enter first name" formControlName="fname"></ion-input>\n        </ion-item>\n      <span *ngIf="!isValid(\'fname\')" class="validationpop animated bounce">First name required.</span>\n      <ion-item>\n          <ion-label stacked>Last name</ion-label>\n          <ion-input type="text" placeholder="Enter last name" formControlName="lname"></ion-input>\n        </ion-item>\n      <span *ngIf="!isValid(\'lname\')" class="validationpop animated bounce">Last name required.</span>\n        <ion-item>\n          <ion-label stacked>Email</ion-label>\n          <ion-input type="email" placeholder="kristonpeeter@yahoo.com" formControlName="email" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Phone Number</ion-label>\n          <ion-input type="tel" placeholder="XXX-XXX-XXXX" formControlName="phone" maxLength="12"></ion-input>\n        </ion-item>\n        <h2>User Setting</h2>\n        <ion-item *ngIf=\'profiledata?.regitration_type == "simple_registarion"\' (click)="changepwd()">\n          <p>Change Password</p>\n          <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n        \n\n    </ion-list>\n  </div>\n        </form> \n<!--    <ion-fab center>\n    <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="bottom">\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="images"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n      <button ion-fab><ion-icon name="camera"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>-->\n</ion-content>\n<ion-footer>\n  <button type="submit" (click)="editProfile(Editprofile)" ion-button full color="green" class="btn2">SAVE</button>\n</ion-footer>\n\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/editprofiletwo/editprofiletwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], EditprofiletwoPage);
    return EditprofiletwoPage;
}());

//# sourceMappingURL=editprofiletwo.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditbusinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reservations_reservations__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditbusinessPage = (function () {
    function EditbusinessPage(navCtrl, navParams, http, appsetting, common, formBuilder, camera, actionSheetCtrl, zone, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.common = common;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.logo = "";
        this.bit = 0;
        this.businesslogo = null;
        this.ImageToSend = [];
        this.base64Image = [];
        this.senddays = []; //variable used for send days as comma separated
        this.sendopeningtime = []; //variable used for send openingtime as comma separated
        this.sendclosingtime = []; //variable used for  send closingtime as comma separated
        this.daytime = []; //array used for display selected day,openingtime and closing time.
        this.data = {}; //variable used for ngModel
        this.service = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //to display days form
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            this.common.tryagain();
        }
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    EditbusinessPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.EditbusinessForm = this.formBuilder.group({
            businessname: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            businesstype: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            address: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            category: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            category_id: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            days: [''],
            openinghours: [''],
            closinghours: [''],
            services: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            services_title: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            instagramlink: [''],
            facebooklink: [''],
            twitterlink: [''],
            veteranowned: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            onlinemarketplace: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            accept: [false, [this.checkbox.bind(this)]],
            reservation: [false, [this.checkbox.bind(this)]],
            zipcode: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            websiteurl: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]]
        });
    };
    EditbusinessPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EditbusinessPage');
        this.http.get(this.appsetting.url + 'categories/get').map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            _this.category = response;
            _this.getUser();
        });
    };
    EditbusinessPage.prototype.checkbox = function (legal) {
        console.log(legal.value);
        if (legal.value == false) {
            return { accept: false };
        }
    };
    EditbusinessPage.prototype.getUser = function () {
        var _this = this;
        var temp = this;
        console.log(JSON.parse(localStorage.getItem('CurrentUser'))._id);
        var options = this.appsetting.header();
        var postdata = {
            user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                if (response.data.profile_pic) {
                }
                else {
                    response.data.profile_pic = 'assets/imgs/profile.png';
                }
                _this.businessdata = null;
                _this.businessdata = response.data.business_data[0];
                console.log(_this.businessdata);
                console.log(_this.businessdata.category);
                _this.data.category = _this.businessdata.category;
                // this.data.service_title = this.businessdata.sub_cat;
                _this.selectedCat(_this.businessdata.category_id);
                console.log(_this.businessdata.opening_days_and_timings);
                _this.businessdata.opening_days_and_timings.forEach(function (value, key) {
                    temp.daytime.push(value);
                    temp.senddays.push(value.day);
                    temp.sendopeningtime.push(value.opening_time);
                    temp.sendclosingtime.push(value.closing_time);
                });
                console.log(_this.daytime);
                //this.daytime = this.businessdata.opening_days_and_timings;
                _this.data.veteran = _this.businessdata.veteran_business;
                /********forEach for push the images in an array to display it on this page***********/
                response.data.business_image.forEach(function (value, key) {
                    temp.base64Image.push(value);
                });
                //this.base64Image = response.data.business_image;
                _this.ImageToSend = response.data.business_image;
                _this.bit = response.data.business_image.length;
                _this.latitude = _this.businessdata.location.coordinates[1];
                _this.longitude = _this.businessdata.location.coordinates[0];
                _this.EditbusinessForm.patchValue({
                    businessname: _this.businessdata.business_name,
                    phone: _this.businessdata.business_phone_number,
                    address: _this.businessdata.address,
                    description: _this.businessdata.business_description,
                    category: _this.businessdata.category_id,
                    category_id: _this.businessdata.category,
                    days: '',
                    openinghours: '',
                    closinghours: '',
                    services: _this.businessdata.sub_cat_id,
                    services_title: _this.businessdata.sub_cat,
                    instagramlink: _this.businessdata.instagram_link,
                    facebooklink: _this.businessdata.facebook_link,
                    twitterlink: _this.businessdata.twitter_link,
                    veteranowned: "" + _this.businessdata.veteran_business,
                    onlinemarketplace: "" + _this.businessdata.own_online_market_place,
                    accept: _this.businessdata.accept_appointments,
                    reservation: _this.businessdata.accept_reservations,
                    businesstype: _this.businessdata.business_type,
                    zipcode: _this.businessdata.zip_code,
                    websiteurl: _this.businessdata.website_url
                });
            }
            else {
            }
        });
    };
    /********* function for display services as per category **************/
    EditbusinessPage.prototype.selectedCat = function (id) {
        var temp = this;
        console.log('id');
        console.log(id);
        this.category.forEach(function (value, key) {
            //console.log(value);
            // console.log(key);
            if (value._id == id) {
                temp.services = value.sub_category;
                temp.data.service_title = value.sub_cat;
            }
        });
        console.log(this.services);
    };
    /****** function used for autocomplete prediction ***********/
    EditbusinessPage.prototype.updateSearch = function () {
        console.log('update');
        console.log(this.autocomplete.query);
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query }, function (predictions, status) {
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
    };
    EditbusinessPage.prototype.selectedService = function (serviceid) {
        var temp = this;
        console.log(serviceid);
        this.services.forEach(function (value, key) {
            console.log(value);
            console.log(key);
            if (value._id == serviceid) {
                console.log(value);
                temp.data.service_title = value.sub_category_title;
            }
        });
    };
    /****** function used for manage selected days,opening and closing time ***********/
    EditbusinessPage.prototype.closingtime = function (timedata) {
        var temp = this;
        console.log(timedata.value);
        console.log(timedata.value.days);
        console.log(timedata.value.closinghours);
        console.log(timedata.value.openinghours);
        var a = timedata.value.openinghours.split(':');
        var b = timedata.value.closinghours.split(':');
        if (b[0] > a[0]) {
            if (a[0] > 11) {
                timedata.value.openinghours = timedata.value.openinghours + ' PM';
            }
            else {
                timedata.value.openinghours = timedata.value.openinghours + ' AM';
            }
            console.log(timedata.value.openinghours);
            if (b[0] > 11) {
                timedata.value.closinghours = timedata.value.closinghours + ' PM';
            }
            else {
                timedata.value.closinghours = timedata.value.closinghours + ' AM';
            }
            console.log(timedata.value.closinghours);
            var dayOpeningClosing = {
                day: timedata.value.days,
                opening_time: timedata.value.openinghours,
                closing_time: timedata.value.closinghours
            };
            this.senddays.push(timedata.value.days);
            var ot = timedata.value.openinghours.split(' ');
            var ct = timedata.value.closinghours.split(' ');
            this.sendopeningtime.push(ot[0]);
            this.sendclosingtime.push(ct[0]);
            console.log(this.senddays.join(','));
            console.log(this.sendopeningtime.join(','));
            console.log(this.sendclosingtime.join(','));
            this.daytime.push(dayOpeningClosing);
            console.log(this.daytime);
            this.data.openinghours = '';
            this.data.closinghours = '';
            this.data.days = '';
        }
        else {
            this.common.presentAlert('Edit business', 'Closing time must be greater than opening time!');
        }
    };
    /****** function used for  delete selected day,openingtime and closing time.***********/
    EditbusinessPage.prototype.DeleteTimes = function (event, ind) {
        var temp = this;
        console.log(event.day);
        console.log(ind);
        /**** pop a value from array by index ************/
        console.log(temp.daytime);
        temp.daytime.splice(ind, 1);
        temp.senddays.splice(ind, 1);
        temp.sendopeningtime.splice(ind, 1);
        temp.sendclosingtime.splice(ind, 1);
        console.log(this.daytime.length);
        console.log(this.daytime);
        if (this.daytime.length == 0) {
            this.data.days = '';
            this.data.openinghours = '';
            this.data.closinghours = '';
        }
    };
    /****** function used for choose item from autocomplete prediction ***********/
    EditbusinessPage.prototype.chooseItem = function (item) {
        var temp = this;
        console.log(item);
        this.autocomplete.query = item;
        this.autocompleteItems = [];
        this.geocoder.geocode({ 'address': item }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
                console.log(results[0].geometry.location.lat());
                console.log(results[0].geometry.location.lng());
                temp.latitude = results[0].geometry.location.lat();
                temp.longitude = results[0].geometry.location.lng();
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    EditbusinessPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose image',
            buttons: [
                {
                    text: 'Camera',
                    role: 'submit',
                    handler: function () {
                        console.log('submit clicked');
                        _this.chooseImage(1);
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log('Gallery clicked');
                        _this.chooseImage(0);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditbusinessPage.prototype.chooseImage = function (Type) {
        var _this = this;
        var options = {
            quality: 10,
            sourceType: Type,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 800,
            targetHeight: 500,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.bit = _this.bit + 1;
            //alert(this.bit);
            if (_this.bit > 5) {
                _this.common.presentAlert('Add business', 'You can not upload more than 5 images.');
            }
            else {
                console.log(_this.base64Image.length);
                //alert(this.base64Image.length);
                _this.base64Image.push({ business_image: 'data:image/jpeg;base64,' + imageData });
                // alert('next');
                console.log(_this.base64Image.length);
                //alert(this.base64Image.length);
                _this.ImageToSend.push(imageData);
                var options_1 = _this.appsetting.header();
                var postdata = {
                    user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                    business_image: imageData
                };
                var serialized = _this.appsetting.serializeObj(postdata);
                var Loading = _this.loadingCtrl.create({
                    spinner: 'bubbles',
                    content: 'Please wait...'
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.url + 'users/add_business_image', serialized, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        Loading.dismiss();
                    });
                });
            }
        }, function (err) {
            // Handle error
            console.log(err);
        });
    };
    EditbusinessPage.prototype.EditBusiness = function (formdata) {
        var _this = this;
        console.log(formdata.value);
        var options = this.appsetting.header();
        if (formdata.value.veteranowned == "true") {
            formdata.value.veteranowned = 1;
        }
        else {
            formdata.value.veteranowned = 0;
        }
        if (formdata.value.onlinemarketplace == "true") {
            formdata.value.onlinemarketplace = 1;
        }
        else {
            formdata.value.onlinemarketplace = 0;
        }
        if (formdata.value.accept == true) {
            formdata.value.accept = 1;
        }
        else {
            formdata.value.accept = 0;
        }
        if (formdata.value.reservation == true) {
            formdata.value.reservation = 1;
        }
        else {
            formdata.value.reservation = 0;
        }
        var postdata;
        if (this.daytime.length > 0) {
            if (this.ImageToSend.length > 0) {
                //if(this.logo != ""){
                postdata = {
                    user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                    role: 'business',
                    business_name: formdata.value.businessname,
                    business_type: formdata.value.businesstype,
                    business_phone_number: formdata.value.phone,
                    address: formdata.value.address,
                    business_description: formdata.value.description,
                    category: formdata.value.category_id,
                    category_id: formdata.value.category,
                    sub_cat: formdata.value.services_title,
                    sub_cat_id: formdata.value.services,
                    twitter_link: formdata.value.twitterlink,
                    facebook_link: formdata.value.facebooklink,
                    instagram_link: formdata.value.instagramlink,
                    veteran_business: formdata.value.veteranowned,
                    own_online_market_place: formdata.value.onlinemarketplace,
                    accept_appointments: formdata.value.accept,
                    accept_reservations: formdata.value.reservation,
                    lat: this.latitude,
                    long: this.longitude,
                    opening_days: this.senddays.join(','),
                    opening_time: this.sendopeningtime.join(','),
                    closing_time: this.sendclosingtime.join(','),
                    business_data_id: this.businessdata._id,
                    business_status: 1,
                    zip_code: formdata.value.zipcode,
                    website_url: formdata.value.websiteurl
                };
                console.log(postdata);
                //return false;
                var serialized = this.appsetting.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    content: 'Loading...'
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.url + 'users/editbusiness', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        //alert('success');
                        console.log(response);
                        Loading.dismiss();
                        if (response.status == true) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__reservations_reservations__["a" /* ReservationsPage */]);
                        }
                        else {
                            _this.common.presentAlert('Edit business', response.message);
                        }
                    });
                });
                //            }else{
                //                this.common.presentAlert('Edit business', 'Must upload business logo.');
                //            }
            }
            else {
                this.common.presentAlert('Edit business', 'Must upload at least one business image.');
            }
        }
        else {
            this.common.presentAlert('Edit business', 'Are you sure you selected day,opening and closing time?');
        }
    };
    /*********** this function used for delete image *********/
    EditbusinessPage.prototype.DeleteImage = function (inex, id) {
        var _this = this;
        var temp = this;
        //        alert(inex);
        //        alert(id);
        var options = this.appsetting.header();
        var postdata = {
            user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            imege_id: id
        };
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'users/removeBusinessImage', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                _this.ImageToSend.forEach(function (value, key) {
                    console.log(value);
                    console.log(key);
                    //alert(inex)
                    if (key == inex) {
                        //                        alert('matched')
                        //                        alert('Key--' + key);
                        //                        alert('inex--' + inex);
                        temp.ImageToSend.splice(inex, 1);
                        temp.base64Image.splice(inex, 1);
                    }
                    else {
                        console.log('else');
                        //alert('not matched')
                    }
                });
            });
        });
        console.log(this.base64Image);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], EditbusinessPage.prototype, "mapElement", void 0);
    EditbusinessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editbusiness',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/editbusiness/editbusiness.html"*/'<!--\n  Generated template for the EditbusinessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="green">\n        <button ion-button menuToggle style="display:block !important;">\n            <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n        <ion-title>Edit business</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="EditbusinessForm" (submit)="EditBusiness(EditbusinessForm)">\n        <ion-list no-lines>\n            <div class="outersec">\n                <ion-item>\n                    <ion-input type="text" disabled placeholder="Business Name" formControlName="businessname" ></ion-input>\n                </ion-item>\n                <img src="assets/imgs/editname.png">\n            </div>\n\n            <!--        <ion-item>\n                      <ion-label>City</ion-label>\n                      <ion-select>\n                        <ion-option value="1">City 1</ion-option>\n                        <ion-option value="2">City 2</ion-option>\n                        <ion-option value="3">City 3</ion-option>\n                        <ion-option value="4">City 4</ion-option>\n                      </ion-select>\n                    </ion-item>-->\n\n            <ion-input type="hidden" disabled  formControlName="businesstype" ></ion-input>\n\n            <ion-item>\n                <ion-input type="text" placeholder="Phone Number" formControlName="phone"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-input type="text" placeholder="Address" formControlName="address" [(ngModel)]="autocomplete.query" (input)="updateSearch()"></ion-input>\n            </ion-item>\n            <div *ngIf="autocompleteItems != \'\'" class="suggestion">\n                <ion-label *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">{{ item }}</ion-label>\n            </div>\n            <ion-item>\n                \n                <ion-input type="text" placeholder="Zip code" formControlName="zipcode"></ion-input>\n            </ion-item>\n            <ion-item class="area">\n                <ion-textarea  placeholder="Description" formControlName="description"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Category</ion-label>\n                <ion-select class="catoption" formControlName="category" (ionChange)="selectedCat($event)">\n                    <ion-option *ngFor="let cat of category" value ="{{cat._id}}">{{cat.title}}\n                        <ion-input type="hidden" [(ngModel)]="data.category_title" formControlName="category_id"></ion-input>\n                    </ion-option>\n                </ion-select>\n                <!--                <ion-select formControlName="category" [(ngModel)]="data.category" (ionChange)="selectedCat($event)">\n                                    <ion-option *ngFor="let cat of category" value ="{{cat._id}}">{{cat.title}}\n                                        <ion-input type="hidden" [(ngModel)]="data.category_id" formControlName="category_id"></ion-input></ion-option>\n                                </ion-select>-->\n            </ion-item>\n\n            <h2>Add opening and closing hours.</h2>\n\n            <ion-item>\n                <ion-label>Select Day</ion-label>\n                <ion-select formControlName="days" [(ngModel)]="data.days">\n                    <ion-option *ngFor="let day of days;let i = index">{{day}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-grid class="paddingnone">\n                <ion-row>\n                    <ion-col col-5 class="padding-left">\n                        <ion-item>\n                            <ion-datetime placeholder="Opening Hours" displayFormat="HH:mm A" [(ngModel)]="data.openinghours" formControlName="openinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-5 class="paddingtopbtm">\n                        <ion-item>\n                            <ion-datetime placeholder="Closing Hours" displayFormat="HH:mm A" [(ngModel)]="data.closinghours" formControlName="closinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col> \n                    <ion-col col-2 class="padding-right">\n                        <ion-item class="addbtn">\n                            <button type="button" ion-button clear color="gray" (click)="closingtime(EditbusinessForm)"><ion-icon name="add"></ion-icon></button>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n            <div class="tagsec" *ngIf="daytime.length>0">\n                <div class="inner-sec" *ngFor="let d of daytime;let i = index">\n                     <p style="margin-bottom:1px;">{{d.day}}</p>\n                    <p><span>{{d.opening_time}}</span> to <span>{{d.closing_time}}</span></p>\n                    <ion-icon name="close" (click)="DeleteTimes(d,i)"></ion-icon>\n                </div>\n            </div>\n            <ion-item *ngIf="services">\n                <ion-label>Services</ion-label>\n                <ion-select class="catoption" formControlName="services" (ionChange)="selectedService($event)">\n                    <ion-option *ngFor="let service of services" value="{{service._id}}">{{service.sub_category_title}}\n                        <!--                        <ion-input type="hidden" [(ngModel)]="data.service_title" formControlName="services_title"></ion-input>-->\n                </ion-option>\n            </ion-select>\n        </ion-item>\n        <!--            <ion-item *ngIf="services">\n                        <ion-label>Services</ion-label>\n                        <ion-select formControlName="services" [(ngModel)]="data.service">\n                            <ion-option *ngFor="let service of services">{{service.sub_category_title}}\n                                <ion-input type="hidden" value="{{service._id}}" formControlName="services_id"></ion-input>\n                            </ion-option>\n                        </ion-select>\n                    </ion-item>-->\n\n        <h2 *ngIf="businessdata?.business_type == 1 ||businessdata?.business_type == 2">Social Links</h2>\n        <ion-item *ngIf="businessdata?.business_type == 1 ||businessdata?.business_type == 2">\n            <img src="assets/imgs/instgrm.png" item-start class="social">\n            <ion-input type="text" placeholder="https://www.instagram.com/" formControlName="instagramlink"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="businessdata?.business_type == 1 ||businessdata?.business_type == 2">\n            <img src="assets/imgs/fb.png" item-start class="social">\n            <ion-input type="text" placeholder="https://www.facebook.com/" formControlName="facebooklink"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="businessdata?.business_type == 1 ||businessdata?.business_type == 2">\n            <img src="assets/imgs/twtr.png" item-start class="social">\n            <ion-input type="text" placeholder="https://www.twitter.com/" formControlName="twitterlink"></ion-input>\n        </ion-item>\n        <ion-item>\n            \n            <ion-input type="text" placeholder="https://www.websitename.com/" formControlName="websiteurl"></ion-input>\n        </ion-item>\n\n        <h2>Is this a veteran owned business?</h2>\n\n        <ion-list radio-group style="margin:0 !important;" [(ngModel)]="data.veteran" formControlName="veteranowned">\n            <ion-item class="rdo" style="padding-left: 25px !important;">\n                <ion-radio value="true"></ion-radio>\n                <ion-label>Yes</ion-label>\n            </ion-item>\n            <ion-item class="rdo" style="padding-left: 25px !important;">\n                <ion-radio value="false"></ion-radio>\n                <ion-label>No</ion-label>\n            </ion-item>\n        </ion-list>\n\n        <h2>Do you own an online marketplace?</h2>\n\n        <ion-list radio-group style="margin:0 !important;" [(ngModel)]="data.marketplace" formControlName="onlinemarketplace">\n            <ion-item class="rdo" style="padding-left: 25px !important;">\n                <ion-radio value="true"></ion-radio>\n                <ion-label>Yes</ion-label>\n            </ion-item>\n\n            <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                <ion-radio value="false"></ion-radio>\n                <ion-label>No</ion-label>\n            </ion-item>\n        </ion-list>\n\n        <h2>Do you accept?</h2>\n\n        <ion-list style="margin:0 !important;">\n            <ion-item class="chck">\n                <ion-checkbox formControlName="accept" style="margin-right: 9px !important;"></ion-checkbox>\n                <ion-label>Appointments</ion-label>\n            </ion-item>\n\n            <ion-item class="chck">\n\n                <ion-checkbox formControlName="reservation" style="margin-right: 9px !important;"></ion-checkbox>\n                <ion-label>Reservations</ion-label>\n            </ion-item>\n        </ion-list>\n    </ion-list>\n    <div class="photosec">\n        <h2 style="position:relative;">Add Photo <span>( Multiple photos )</span>\n            <button type="button" *ngIf="bit<=4" ion-button color="green" (click)="presentActionSheet()"><ion-icon name="add"></ion-icon></button>\n        </h2>\n        <ion-grid class="paddingnone" *ngIf="base64Image">\n            <ion-row>\n                <ion-col col-4 *ngFor="let img of base64Image;let i = index">\n                         <div class="image-wrapper">\n                        <img src="{{img.business_image}}">\n                        <img src="assets/imgs/crosimg.png" class="delete-img" (click)="DeleteImage(i,img._id)">\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <!--        <h2 style="position:relative;">Add Logo <span>( Single photo )</span>\n                    <button *ngIf="businesslogo == null" type="button" ion-button color="green" (click)="presentActionSheet1()"><ion-icon name="add"></ion-icon></button>\n                </h2>\n                <ion-grid class="paddingnone" *ngIf="businesslogo != null">\n                          <ion-row>\n                        <ion-col col-4>\n                            <div class="image-wrapper">\n                                <img src="{{businesslogo}}">\n                                <img src="assets/imgs/crosimg.png" class="delete-img" (click)="DeleteLogo">\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>-->\n        <div class="btnsec">\n            <button type="submit" ion-button color="green" full class="btn1">SAVE</button>\n        </div>\n    </div>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/editbusiness/editbusiness.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _l || Object])
    ], EditbusinessPage);
    return EditbusinessPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=editbusiness.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_review__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams, appsetting, http, common, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.pageno = 1;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
        this.History();
    };
    /*********** function to accept the reservations *******************/
    HistoryPage.prototype.History = function () {
        var _this = this;
        console.log('History function');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        var options = this.appsetting.header();
        var postdata = {
            page: this.pageno,
            role: user.role,
            user_id: user._id
        };
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'orders/getoldreservation ', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    response.data.forEach(function (value, key) {
                        console.log(value);
                        var sum = 0;
                        if (value.order_data[0].review) {
                            if (value.order_data[0].review.length > 0) {
                                value.order_data[0].review.forEach(function (val, ke) {
                                    console.log(val);
                                    sum += val.stars;
                                    console.log(sum);
                                    value.order_data[0].avg = sum / value.order_data[0].review.length;
                                });
                            }
                            else {
                                value.order_data[0].avg = 0;
                            }
                        }
                        else {
                            value.order_data[0].avg = 0;
                        }
                    });
                    _this.historydata = response.data;
                    _this.totalpageno = response.page;
                }
                else {
                    _this.common.presentAlert('History', 'No data found!');
                }
            });
        });
    };
    HistoryPage.prototype.Review = function (resid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__review_review__["a" /* ReviewPage */], { prod_id: resid });
    };
    /****** functions used for pagination ************/
    HistoryPage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        this.pageno = this.pageno + 1;
        console.log(this.totalpageno);
        console.log(this.pageno);
        if (this.pageno < this.totalpageno) {
            this.History();
        }
        else {
            console.log('No more data to load');
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    /****** functions used for getlist on refresh ************/
    HistoryPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.History();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-history',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>history</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor="let history of historydata">\n          <ion-thumbnail item-start>\n            <img [src]="history.order_data[0].business_image[0].business_image">\n          </ion-thumbnail>\n          <h2>{{history.order_data[0].business_data[0].business_name}}</h2>\n          <p>{{history.order_data[0].business_data[0].sub_cat}}</p>\n          <rating readOnly="true" max="5" emptyStarIconName="star-outline" starIconName="star" nullable="false" [(ngModel)]="history.order_data[0].avg" name="rate">\n           </rating>\n          <button class="btneq" ion-button color="yellow" (click)="Review(history.order_data[0])">Review</button>\n          <p>{{history.order_data[0].business_data[0].business_description}}</p>\n          <p><span>{{history.order_data[0].business_data[0].updated_at | date}}</span> <span class="time">{{history.order_data[0].business_data[0].updated_at | date:\'shortTime\'}}</span></p>\n        </ion-item>\n\n<!--  \n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="assets/imgs/img1.jpg">\n                  </ion-thumbnail>\n                  <h2>Sam\'s Auto Repair</h2>\n                  <p>Auto Repair</p>\n                  <ul>\n                    <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n                    <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n                    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n                    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n                    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n                  </ul>\n                  <button class="btneq" ion-button color="yellow" >Edit Review</button>\n                  <p>Lorem Ipsum available, but the majority have suffered</p>\n                  <p><span>15 nov 2017</span> <span class="time">20:15 PM</span></p>\n                </ion-item>-->\n\n      </ion-list>\n    <div *ngIf="historydata?.length<1">\n                <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n                    <img style="width:200px;margin: auto;display: block;" src="assets/imgs/sorry.png">\n                    <span> No data found!</span>\n                </div>\n            </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorytwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistorytwoPage = (function () {
    function HistorytwoPage(navCtrl, navParams, appsetting, http, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.common = common;
        this.pageno = 1;
    }
    HistorytwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistorytwoPage');
        this.History();
    };
    /*********** function to accept the reservations *******************/
    HistorytwoPage.prototype.History = function () {
        var _this = this;
        console.log('History function');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        var options = this.appsetting.header();
        var postdata = {
            page: this.pageno,
            role: user.role,
            user_id: user._id
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'orders/getoldreservation ', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                _this.history = response.data;
                _this.totalpageno = response.page;
            }
            else {
                //this.common.presentAlert('Book now', 'Something went wrong!');
            }
        });
    };
    /****** functions used for pagination ************/
    HistorytwoPage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        this.pageno = this.pageno + 1;
        console.log(this.totalpageno);
        console.log(this.pageno);
        if (this.pageno < this.totalpageno) {
            this.History();
        }
        else {
            console.log('No more data to load');
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    /****** functions used for getlist on refresh ************/
    HistorytwoPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.History();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HistorytwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-historytwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/historytwo/historytwo.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>history</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n  <ion-list *ngIf="history">\n      \n        <ion-item *ngFor="let reservation of history">\n            <ion-thumbnail item-start>\n              <img [src]="reservation?.order_data[0].profile_pic">\n            </ion-thumbnail>\n          <h2>{{reservation?.order_data[0].firstname}} {{reservation?.order_data[0].lastname}}</h2>\n          <p>Special Food</p>\n          <div class="left">\n            <p>Booking Date</p>\n            <p>{{reservation?.orderstart | date}}</p>\n          </div>\n          <div class="right">\n            <p>Booking Time</p>\n            <p>{{reservation?.orderstart | date:\'shortTime\'}}</p>\n          </div>\n        </ion-item>\n      \n    </ion-list>\n<ion-list *ngIf="!history">\n    <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n          <img style="width:200px;margin: auto;display: block;" src="assets/imgs/sorry.png">\n          <span> Looks like we couldn\'t booked any restaurant yet!</span>\n    </div>\n    </ion-list>\n<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/historytwo/historytwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */]])
    ], HistorytwoPage);
    return HistorytwoPage;
}());

//# sourceMappingURL=historytwo.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurtalkreplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__realtalk_realtalk__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the TalkreplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OurtalkreplyPage = (function () {
    function OurtalkreplyPage(navCtrl, navParams, loadingCtrl, common, toastCtrl, appsetting, http, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.formBuilder = formBuilder;
        this.pageno = 1;
        this.ourtalk = this.formBuilder.group({
            comment: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
        });
    }
    OurtalkreplyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OurtalkreplyPage');
        console.log(this.navParams.get('topidata'));
        this.topicdata = this.navParams.get('topidata');
        this.Topicdata();
        this.interval = setInterval(function () {
            _this.Topicdata();
        }, 10000);
    };
    OurtalkreplyPage.prototype.scrollBottom = function () {
        this.content.scrollToBottom(300);
    };
    OurtalkreplyPage.prototype.Topicdata = function () {
        var _this = this;
        var temp = this;
        var options = this.appsetting.header();
        var postdata = {
            topic_id: this.navParams.get('topidata')._id,
        };
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'talks/getSingleTalks', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                response.data[0].comments.forEach(function (value, key) {
                    response.data[0].talk_data.forEach(function (val, ke) {
                        if (value.comment_by == val._id) {
                            value.firstname = val.firstname;
                            value.lastname = val.lastname;
                            if (val.profile_pic) {
                                value.profile_pic = val.profile_pic;
                            }
                            else {
                                value.profile_pic = 'assets/imgs/user.png';
                            }
                        }
                    });
                    var a = new Date();
                    console.log(new Date(value.created_at));
                    var startDate = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date(value.comment_time), "DD.MM.YYYY");
                    var endDate = __WEBPACK_IMPORTED_MODULE_6_moment__(a, "DD.MM.YYYY");
                    var milliseconds = endDate.diff(startDate);
                    var duration = __WEBPACK_IMPORTED_MODULE_6_moment__["duration"](milliseconds, 'milliseconds');
                    console.log('Hours' + duration.hours());
                    console.log('minutes' + duration.minutes());
                    if (duration.hours() > 24) {
                        value.days = duration.asDays();
                        value.time = 'day';
                    }
                    else {
                        if (duration.minutes() > 9) {
                            if (duration.hours() > 9) {
                                value.days = duration.hours() + ':' + duration.minutes();
                            }
                            else {
                                value.days = '0' + duration.hours() + ':' + duration.minutes();
                            }
                        }
                        else {
                            if (duration.hours() > 9) {
                                value.days = duration.hours() + ':' + duration.minutes();
                            }
                            else {
                                value.days = '0' + duration.hours() + ':' + duration.minutes();
                            }
                            value.days = '0' + duration.hours() + ':0' + duration.minutes();
                        }
                        value.time = 'hour';
                    }
                });
                if (response.data[0].comments.length > 0) {
                    _this.content.scrollToBottom(300);
                }
                _this.commentdata = response.data[0];
                console.log(_this.commentdata);
            }
            else {
            }
        });
    };
    OurtalkreplyPage.prototype.PostComment = function (formdata) {
        var _this = this;
        console.log(formdata.value);
        var options = this.appsetting.header();
        var postdata = {
            comment_by: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            comment_msg: formdata.value.comment,
            topic_id: this.topicdata._id
        };
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'talks/addComment', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                //this.topicdata.comments = response.data[0].comments;
                _this.ourtalk.patchValue({
                    comment: ''
                });
                _this.Topicdata();
            }
            else {
                _this.common.presentAlert('Login', response.message);
            }
        });
        // })
    };
    OurtalkreplyPage.prototype.back = function () {
        clearInterval(this.interval);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__realtalk_realtalk__["a" /* RealtalkPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], OurtalkreplyPage.prototype, "content", void 0);
    OurtalkreplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ourtalkreply',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/ourtalkreply/ourtalkreply.html"*/'<!--\n  Generated template for the TalkreplyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title>{{topicdata?.topic_name}}</ion-title>\n    <button style="height:28px;" start ion-button clear>\n     <img width="11px" src="assets/imgs/back_btn.svg" (click)="back()">\n     </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list class="mytlk">\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img *ngIf="topicdata?.talk_data[0].profile_pic" [src]="topicdata?.talk_data[0].profile_pic">\n              <img *ngIf="!topicdata?.talk_data[0].profile_pic" src="assets/imgs/user.png">\n            </ion-thumbnail>\n            <h2>{{topicdata?.topic_name}}</h2>\n            <p style="white-space: normal">{{topicdata?.message}}</p>\n            <p>{{topicdata?.loc_address}}</p>\n            <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>{{commentdata?.comments.length}} Comment</p>\n           <p *ngIf="topicdata?.time == \'day\'"><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>{{topicdata?.days}} days ago</p>\n        <p *ngIf="topicdata?.time == \'time\'"><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>{{topicdata?.days}} hour ago</p>\n          </ion-item>\n    </ion-list>\n    <ion-list no-lines  class="bottom-sec" *ngIf="topicdata?.comments?.length>0">\n        <ion-item style="padding-right: 8px;" *ngFor="let comment of commentdata?.comments; let last = last">\n          <ion-avatar item-start>{{last ? scrollBottom() : \'\'}}\n            <img [src]="comment.profile_pic">\n          </ion-avatar>\n          <h2>{{comment.firstname}} {{comment.lastname}}<span>{{comment.days}} {{comment.time}} ago</span></h2>\n          \n          <p>{{comment.comment_msg}}</p>\n        </ion-item>\n\n<!--        <ion-item style="padding-right: 8px;">\n          <ion-avatar item-start>\n            <img src="assets/imgs/talk.png">\n          </ion-avatar>\n          <h2>Austin Robertson<span>1 Day ago</span></h2>\n          <ul style="margin-top:0 !important;">\n              <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n              <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n            </ul>\n            <p class="revw" style="line-height: 17px !important; margin-top:0 !important;">Rating</p>\n          <p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.</p>\n          <p class="reply"><img src="assets/imgs/reply.png">Reply</p>\n          <ion-item style="padding: 0;">\n            <ion-textarea placeholder=""></ion-textarea>\n          </ion-item>\n          <div class="btnsec">\n            <button ion-button color="green" class="btn1">POST</button>\n          </div>\n        </ion-item>-->\n      </ion-list>\n    <div *ngIf="commentdata?.comments?.length == 0">\n       <div style="text-align: center !important;padding: 52% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n          <img style="width:160px;margin: auto;display: block;" src="assets/imgs/sorry.png">\n          <span> Oops no one replied on this topic!</span>\n    </div>\n    </div>\n</ion-content>\n<ion-footer>\n         <form [formGroup]="ourtalk" class="out">\n              <p class="reply">Reply</p>\n          <ion-item style="padding: 0;">\n            <ion-textarea placeholder="" formControlName="comment"></ion-textarea>\n          </ion-item>\n          <div class="btnsec">\n            <button type="submit" ion-button color="green" class="btn1" block [disabled]="!ourtalk.valid" (click)="PostComment(ourtalk)">REPLY</button>\n          </div>\n         </form>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/ourtalkreply/ourtalkreply.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], OurtalkreplyPage);
    return OurtalkreplyPage;
}());

//# sourceMappingURL=ourtalkreply.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkreplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__realtalk_realtalk__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TalkreplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TalkreplyPage = (function () {
    function TalkreplyPage(navCtrl, navParams, loadingCtrl, common, toastCtrl, appsetting, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.pageno = 1;
    }
    TalkreplyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TalkreplyPage');
        console.log(this.navParams.get('topidata'));
        this.topicdata = this.navParams.get('topidata');
        this.Topicdata();
        this.interval = setInterval(function () {
            _this.Topicdata();
        }, 10000);
    };
    TalkreplyPage.prototype.scrollBottom = function () {
        this.content.scrollToBottom(300);
    };
    TalkreplyPage.prototype.Topicdata = function () {
        var _this = this;
        var temp = this;
        var options = this.appsetting.header();
        var postdata = {
            topic_id: this.navParams.get('topidata')._id,
        };
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'talks/getSingleTalks', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                response.data[0].comments.forEach(function (value, key) {
                    response.data[0].talk_data.forEach(function (val, ke) {
                        if (value.comment_by == val._id) {
                            value.firstname = val.firstname;
                            value.lastname = val.lastname;
                            if (val.profile_pic) {
                                value.profile_pic = val.profile_pic;
                            }
                            else {
                                value.profile_pic = 'assets/imgs/user.png';
                            }
                        }
                    });
                    var a = new Date();
                    console.log(new Date(value.created_at));
                    var startDate = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date(value.comment_time), "DD.MM.YYYY");
                    var endDate = __WEBPACK_IMPORTED_MODULE_5_moment__(a, "DD.MM.YYYY");
                    var milliseconds = endDate.diff(startDate);
                    var duration = __WEBPACK_IMPORTED_MODULE_5_moment__["duration"](milliseconds, 'milliseconds');
                    console.log('Hours' + duration.hours());
                    console.log('minutes' + duration.minutes());
                    if (duration.hours() > 24) {
                        value.days = duration.asDays();
                        value.time = 'day';
                    }
                    else {
                        if (duration.minutes() > 9) {
                            if (duration.hours() > 9) {
                                value.days = duration.hours() + ':' + duration.minutes();
                            }
                            else {
                                value.days = '0' + duration.hours() + ':' + duration.minutes();
                            }
                        }
                        else {
                            if (duration.hours() > 9) {
                                value.days = duration.hours() + ':' + duration.minutes();
                            }
                            else {
                                value.days = '0' + duration.hours() + ':' + duration.minutes();
                            }
                            value.days = '0' + duration.hours() + ':0' + duration.minutes();
                        }
                        value.time = 'hour';
                    }
                });
                if (response.data[0].comments.length > 0) {
                    _this.content.scrollToBottom(300);
                }
                _this.commentdata = response.data[0];
                console.log(_this.commentdata);
            }
            else {
            }
        });
    };
    TalkreplyPage.prototype.back = function () {
        clearInterval(this.interval);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__realtalk_realtalk__["a" /* RealtalkPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], TalkreplyPage.prototype, "content", void 0);
    TalkreplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-talkreply',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/talkreply/talkreply.html"*/'<!--\n  Generated template for the TalkreplyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title>{{topicdata?.topic_name}}</ion-title>\n    <button style="height:28px;" start ion-button clear>\n     <img width="11px" src="assets/imgs/back_btn.svg" (click)="back()">\n     </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list class="mytlk">\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img [src]="topicdata?.profile_pic">\n            </ion-thumbnail>\n            <h2>{{topicdata?.topic_name}}</h2>\n            <p style="white-space: normal">{{topicdata?.message}}</p>\n            <p>{{topicdata?.loc_address}}</p>\n            <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>{{commentdata?.comments.length}} Comment</p>\n           <p *ngIf="topicdata?.time == \'day\'"><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>{{topicdata?.days}} days ago</p>\n        <p *ngIf="topicdata?.time == \'time\'"><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>{{topicdata?.days}} hour ago</p>\n          </ion-item>\n    </ion-list>\n    <ion-list no-lines  class="bottom-sec" *ngIf="commentdata?.comments.length>0">\n        <ion-item style="padding-right: 8px;" *ngFor="let comment of commentdata?.comments; let last = last">\n          <ion-avatar item-start>{{last ? scrollBottom() : \'\'}}\n            <img [src]="comment.profile_pic">\n          </ion-avatar>\n          <h2>{{comment.firstname}} {{comment.lastname}}<span>{{comment.days}} {{comment.time}} ago</span></h2>\n          <p>{{comment.comment_msg}}</p>\n<!--          <p class="reply"><img src="assets/imgs/reply.png">Reply</p>\n          <ion-item style="padding: 0;">\n            <ion-textarea placeholder=""></ion-textarea>\n          </ion-item>\n          <div class="btnsec">\n            <button ion-button color="green" class="btn1">POST</button>\n          </div>-->\n        </ion-item>\n\n<!--        <ion-item style="padding-right: 8px;">\n          <ion-avatar item-start>\n            <img src="assets/imgs/talk.png">\n          </ion-avatar>\n          <h2>Austin Robertson<span>1 Day ago</span></h2>\n          <ul style="margin-top:0 !important;">\n              <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n              <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n            </ul>\n            <p class="revw" style="line-height: 17px !important; margin-top:0 !important;">Rating</p>\n          <p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.</p>\n          <p class="reply"><img src="assets/imgs/reply.png">Reply</p>\n          <ion-item style="padding: 0;">\n            <ion-textarea placeholder=""></ion-textarea>\n          </ion-item>\n          <div class="btnsec">\n            <button ion-button color="green" class="btn1">POST</button>\n          </div>\n        </ion-item>-->\n      </ion-list>\n    <div *ngIf="commentdata?.comments.length == 0">\n       <div style="text-align: center !important;padding: 52% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n          <img style="width:200px;margin: auto;display: block;" src="assets/imgs/sorry.png">\n          <span> Oops no one replied on this topic!</span>\n    </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/talkreply/talkreply.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], TalkreplyPage);
    return TalkreplyPage;
}());

//# sourceMappingURL=talkreply.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivacyPage = (function () {
    function PrivacyPage(navCtrl, navParams, http, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
    }
    PrivacyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacyPage');
        this.role = JSON.parse(localStorage.getItem('CurrentUser')).role;
        this.get();
    };
    PrivacyPage.prototype.get = function () {
        var _this = this;
        var postdata;
        console.log(this.role);
        var options = this.appsetting.header();
        if (this.role == 'member') {
            postdata = {
                pagename: 'privacy_policy(user)'
            };
        }
        else {
            postdata = {
                pagename: 'privacy_policy(business)'
            };
        }
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'static/getstaticpagedata', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                if (response.data[0].pageimage) {
                    response.data[0].loaded = true;
                }
                else {
                    response.data[0].loaded = false;
                }
                _this.privacy = response.data[0];
            }
            else {
            }
        });
    };
    PrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-privacy',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/privacy/privacy.html"*/'<!--\n  Generated template for the PrivacyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="green">\n        <button ion-button menuToggle style="display:block !important;">\n            <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n        <ion-title>Privacy Policy</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="banner">\n        <img [src]="privacy?.pageimage" (load)="privacy.loaded = true" [hidden]="!privacy?.loaded" >\n        <img src="assets/imgs/loader.gif" [hidden]="privacy?.loaded">\n    </div>\n    <div class="contant-sec" padding>\n        <!--    <h2>Dummy text of the printing</h2>-->\n        <p [innerHTML]="privacy?.pagedata"></p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/privacy/privacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reviews2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the Reviews2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Reviews2Page = (function () {
    function Reviews2Page(navCtrl, navParams, http, appsetting, common, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.replybtn = false;
        this.getUser();
    }
    Reviews2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Reviews2Page');
    };
    Reviews2Page.prototype.getUser = function () {
        var _this = this;
        if (localStorage.getItem('CurrentUser')) {
            console.log(JSON.parse(localStorage.getItem('CurrentUser'))._id);
            var options_1 = this.appsetting.header();
            var postdata = {
                user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            };
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.url + 'users/userinfo', serialized, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.status == true) {
                        localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                        _this.currentuser = null;
                        var sum = 0;
                        var length = response.data.review.length;
                        response.data.review.forEach(function (value, key) {
                            console.log(value);
                            sum += value.stars;
                            response.userinfo.forEach(function (val, ke) {
                                console.log(val);
                                if (val != null) {
                                    if (val._id == value.user_id) {
                                        value.firstname = val.firstname;
                                        value.lastname = val.lastname;
                                        if (val.profile_pic) {
                                            value.profilePic = val.profile_pic;
                                        }
                                        else {
                                            value.profilePic = 'assets/imgs/user.png';
                                        }
                                    }
                                }
                            });
                            /****** code to get date and time difference ************/
                            var a = new Date();
                            console.log(new Date(value.created_at));
                            var startDate = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date(value.created_at), "DD.MM.YYYY");
                            var endDate = __WEBPACK_IMPORTED_MODULE_5_moment__(a, "DD.MM.YYYY");
                            var milliseconds = endDate.diff(startDate);
                            var duration = __WEBPACK_IMPORTED_MODULE_5_moment__["duration"](milliseconds, 'milliseconds');
                            console.log('Hours' + duration.hours());
                            console.log('minutes' + duration.minutes());
                            if (duration.hours() > 24) {
                                value.days = duration.asDays();
                                value.time = 'day';
                            }
                            else {
                                value.days = duration.hours() + ':' + duration.minutes();
                                value.time = 'time';
                            }
                        });
                        response.data.review.avg = sum / length;
                        _this.data.rating = response.data.review.avg;
                        _this.currentuser = response.data;
                        _this.businessData = response.data.business_data[0];
                        console.log(_this.businessData);
                        console.log(_this.currentuser);
                    }
                });
            });
        }
    };
    Reviews2Page.prototype.Reply = function (index) {
        console.log(index);
        this.replybtn = index;
    };
    Reviews2Page.prototype.ReplyComment = function (comment, id) {
        var _this = this;
        console.log(comment);
        console.log(id);
        if (comment != undefined || comment != '') {
            var options_2 = this.appsetting.header();
            var postdata = {
                review_id: id,
                comment: comment
            };
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.url + 'replyoncomment', serialized, options_2).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.status == true) {
                        //                    this.navCtrl.push(HomePage);
                        _this.data.comment = '';
                        _this.getUser();
                    }
                    else {
                        _this.common.presentAlert('Review', response.msg);
                    }
                });
            });
        }
        else {
            this.common.presentAlert('Review', 'Write something to reply!');
        }
    };
    Reviews2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reviews2',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/reviews2/reviews2.html"*/'<!--\n  Generated template for the Reviews2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="green">\n        <button ion-button menuToggle style="display:block !important;">\n            <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n        <ion-title>{{businessData?.business_name}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="image-wrapper">\n        <img [src]="currentuser?.business_image[0].business_image">\n    </div>\n    <div class="content-sec" padding>\n        <div class="top-sec" >\n            <h2>{{businessData?.business_name}}</h2>\n            <p>{{businessData?.business_description}}</p>\n            <rating readOnly="true" max="5" emptyStarIconName="star-outline" starIconName="star" [(ngModel)]="data.rating" name="rating"\n                    nullable="false">\n            </rating>\n            <p class="revw">Reviews {{currentuser?.review.length | number:0}}</p>\n        </div>\n        <ion-list no-lines  class="bottom-sec">\n            <ion-item *ngFor="let reviews of currentuser?.review;let i = index">\n                <ion-avatar item-start>\n                    <img [src]="reviews.profilePic">\n                </ion-avatar>\n                <h2>{{reviews.firstname}} {{reviews.lastname}}\n                    <span *ngIf="reviews.time == \'day\'">{{reviews.days}} Day ago</span>\n                    <span *ngIf="reviews.time== \'time\'">{{reviews.days}} Hour ago</span>\n                </h2>\n\n                <rating readOnly="true" max="5" emptyStarIconName="star-outline" starIconName="star" [(ngModel)]="reviews.stars" name="rating"\n                        nullable="false">\n                </rating>\n                <!-- <p class="revw" style="line-height: 17px !important; margin-top:0 !important;">Rating</p>-->\n                <p style="padding-bottom: 10px;">{{reviews.comment}}  </p>\n                \n                <h5>REPLY</h5>\n                <ion-item *ngFor="let replies of reviews.reply">\n                   \n                    <p style="text-align: left; background-color: #f2f2f2; padding: 10px !important;">{{replies.comment}}</p>\n                </ion-item>\n                <div *ngIf="reviews.reply.length<1">\n                    <p class="reply" (click)="Reply(reviews._id)"><img src="assets/imgs/reply.png">Reply</p>\n                    <ion-item *ngIf="replybtn == reviews._id">\n                        <ion-textarea placeholder="" [(ngModel)]="data.comment" required></ion-textarea>\n                    </ion-item>\n                    <div class="btnsec" *ngIf="replybtn == reviews._id">\n                         <button ion-button color="green" class="btn1" (click)="ReplyComment(data.comment,reviews._id)" [disabled]="!data.comment">POST</button>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/reviews2/reviews2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], Reviews2Page);
    return Reviews2Page;
}());

//# sourceMappingURL=reviews2.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewfavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewproduct_viewproduct__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ViewfavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewfavoritesPage = (function () {
    function ViewfavoritesPage(navCtrl, navParams, appsetting, http, common, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
    }
    ViewfavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewfavoritesPage');
        this.ViewFavourites();
    };
    /*********** function to accept the reservations *******************/
    ViewfavoritesPage.prototype.ViewFavourites = function () {
        var _this = this;
        console.log('History function');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        var options = this.appsetting.header();
        var postdata = {
            user_id: user._id
        };
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'user/get_favarite_business', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    _this.favouritelist = response.data;
                    console.log(_this.favouritelist.length);
                }
                else {
                    //this.common.presentAlert('Book now', 'Something went wrong!');
                }
            });
        });
    };
    ViewfavoritesPage.prototype.MakeAsUnfavourite = function (businessID) {
        var _this = this;
        console.log(businessID);
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        var options = this.appsetting.header();
        var postdata = {
            user_id: user._id,
            favorite_business_id: businessID
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'user/delete_favarite_business ', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                _this.ViewFavourites();
            }
        });
    };
    ViewfavoritesPage.prototype.viewproduct = function (dat) {
        console.log(dat);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__viewproduct_viewproduct__["a" /* ViewproductPage */], { restdata: dat });
    };
    ViewfavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewfavorites',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewfavorites/viewfavorites.html"*/'<!--\n  Generated template for the ViewfavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n          <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n    <ion-title>view favorites</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list text-wrap *ngIf="favouritelist?.length>0">\n              <div *ngFor="let favlist of favouritelist" style="position:relative">\n        <ion-item  (click)="viewproduct(favlist)">\n          <ion-thumbnail item-start>\n            <img [src]="favlist.business_image[0].business_image">\n            \n          </ion-thumbnail>\n          <h2>{{favlist.business_data[0].business_name}}</h2>\n          <p>{{favlist.business_data[0].business_description}}</p>\n          \n        </ion-item>\n        <ion-icon name="heart" color="red" class="hrt" (click)="MakeAsUnfavourite(favlist.business_data[0]._id)"></ion-icon>\n        </div>\n<!--        <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/imgs/img1.jpg">\n              <ion-icon name="heart" color="red"></ion-icon>\n            </ion-thumbnail>\n            <h2>Sam\'s Auto Repair</h2>\n            <p>Lorem Ipsum is not simply random text</p>\n            \n          </ion-item>-->\n                  \n      </ion-list>\n    <ion-list text-wrap *ngIf="favouritelist?.length == 0">\n              <p>Oops! Looks like you didn\'t make favourite yet.</p>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewfavorites/viewfavorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], ViewfavoritesPage);
    return ViewfavoritesPage;
}());

//# sourceMappingURL=viewfavorites.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewreservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ViewreservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewreservationPage = (function () {
    function ViewreservationPage(navCtrl, navParams, appsetting, http, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.common = common;
        this.pageno = 1;
    }
    ViewreservationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewreservationPage');
        this.Reservations();
    };
    /*********** function to accept the reservations *******************/
    ViewreservationPage.prototype.Reservations = function () {
        var _this = this;
        console.log('reservations function');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        var options = this.appsetting.header();
        var postdata = {
            role: user.role,
            user_id: user._id,
            page: this.pageno
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'orders/getreservation', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                _this.reservations = response.data;
                _this.totalpageno = response.page;
            }
            else {
                //this.common.presentAlert('Book now', 'Something went wrong!');
            }
        });
    };
    /****** functions used for pagination ************/
    ViewreservationPage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        this.pageno = this.pageno + 1;
        console.log(this.totalpageno);
        console.log(this.pageno);
        if (this.pageno < this.totalpageno) {
            this.Reservations();
        }
        else {
            console.log('No more data to load');
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    /****** functions used for getlist on refresh ************/
    ViewreservationPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.ionViewDidLoad();
        this.Reservations();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ViewreservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewreservation',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewreservation/viewreservation.html"*/'<!--\n  Generated template for the ViewreservationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green"> \n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>view reservation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n  <ion-list *ngIf="reservations">\n      \n        <ion-item *ngFor="let reservation of reservations">\n            <ion-thumbnail item-start>\n                <img *ngIf="reservation?.order_data.length>0" [src]="reservation?.order_data[0].profile_pic">\n              <img *ngIf="!reservation?.order_data.length>0" src="assets/imgs/profile.png">\n            </ion-thumbnail>\n          <h2 *ngIf="reservation?.order_data.length>0">{{reservation?.order_data[0].firstname}} {{reservation?.order_data[0].lastname}}</h2>\n          <p *ngIf="reservation?.spacial_accomodation">{{reservation?.spacial_accomodation}}</p>\n          <div class="left">\n            <p>Booking Date</p>\n            <p>{{reservation?.orderstart | date}}</p>\n          </div>\n          <div class="right">\n            <p>Booking Time</p>\n            <p>{{reservation?.orderstart | date:\'shortTime\'}}</p>\n          </div>\n        </ion-item>\n      \n    </ion-list>\n<ion-list *ngIf="!reservations">\n    <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n          <img style="width:200px;margin: auto;display: block;" src="assets/imgs/sorry.png">\n          <span> Looks like we couldn\'t find any reservations!</span>\n    </div>\n    </ion-list>\n<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewreservation/viewreservation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */]])
    ], ViewreservationPage);
    return ViewreservationPage;
}());

//# sourceMappingURL=viewreservation.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewreservationtwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ViewreservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewreservationtwoPage = (function () {
    function ViewreservationtwoPage(navCtrl, navParams, appsetting, http, common, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.pageno = 1;
    }
    ViewreservationtwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewreservationtwoPage');
        this.Reservations();
    };
    /*********** function to accept the reservations *******************/
    ViewreservationtwoPage.prototype.Reservations = function () {
        var _this = this;
        console.log('reservations function');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        var options = this.appsetting.header();
        var postdata = {
            role: user.role,
            user_id: user._id,
            page: this.pageno
        };
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'orders/getreservation', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    _this.reservations = response.data;
                    console.log(response.page);
                    _this.totalpageno = response.page;
                }
                else {
                    //this.common.presentAlert('Book now', 'Something went wrong!');
                }
            });
        });
    };
    /****** functions used for pagination ************/
    ViewreservationtwoPage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        this.pageno = this.pageno + 1;
        console.log(this.totalpageno);
        console.log(this.pageno);
        if (this.pageno < this.totalpageno) {
            this.Reservations();
        }
        else {
            console.log('No more data to load');
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    /****** functions used for getlist on refresh ************/
    ViewreservationtwoPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.ionViewDidLoad();
        this.Reservations();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ViewreservationtwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewreservationtwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewreservationtwo/viewreservationtwo.html"*/'<!--\n  Generated template for the ViewreservationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green"> \n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>view reservation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n  <ion-list *ngIf="reservations">\n      \n        <ion-item *ngFor="let reservation of reservations">\n            <ion-thumbnail item-start>\n              <img *ngIf="reservation?.order_data[0].business_image" [src]="reservation?.order_data[0].business_image[0].business_image\n">\n              <img *ngIf="!reservation?.order_data[0].business_image" src="assets/imgs/profile.png">\n            </ion-thumbnail>\n            <h2>{{reservation?.order_data[0].business_data[0].business_name}}</h2>\n          <p>{{reservation?.order_data[0].business_data[0].sub_cat}}</p>\n          <div class="left">\n            <p>Booking Date</p>\n            <p>{{reservation?.orderstart | date}}</p>\n          </div>\n          <div class="right">\n            <p>Booking Time</p>\n            <p>{{reservation?.orderstart | date:\'shortTime\'}}</p>\n          </div>\n          <img *ngIf="reservation?.orderstatus == 1" src="assets/imgs/accept.png" class="action">\n          <img *ngIf="reservation?.orderstatus == 0" src="assets/imgs/decline.png" class="action">\n          <img *ngIf="reservation?.orderstatus == 2" src="assets/imgs/pending.png" class="action">\n        </ion-item>\n      \n    </ion-list>\n<ion-list *ngIf="!reservations">\n    <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n          <img style="width:200px;margin: auto;display: block;" src="assets/imgs/sorry.png">\n          <span> Looks like we couldn\'t find any reservations!</span>\n    </div>\n    </ion-list>\n<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewreservationtwo/viewreservationtwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], ViewreservationtwoPage);
    return ViewreservationtwoPage;
}());

//# sourceMappingURL=viewreservationtwo.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addbusiness/addbusiness.module": [
		846,
		30
	],
	"../pages/booknow/booknow.module": [
		848,
		29
	],
	"../pages/careernetwork/careernetwork.module": [
		847,
		28
	],
	"../pages/changepassword/changepassword.module": [
		866,
		27
	],
	"../pages/editbusiness/editbusiness.module": [
		850,
		26
	],
	"../pages/editprofile/editprofile.module": [
		851,
		1
	],
	"../pages/editprofiletwo/editprofiletwo.module": [
		849,
		25
	],
	"../pages/filter/filter.module": [
		852,
		24
	],
	"../pages/forgot/forgot.module": [
		854,
		23
	],
	"../pages/forgottwo/forgottwo.module": [
		853,
		22
	],
	"../pages/getstart/getstart.module": [
		855,
		21
	],
	"../pages/history/history.module": [
		856,
		20
	],
	"../pages/historytwo/historytwo.module": [
		857,
		19
	],
	"../pages/login/login.module": [
		858,
		18
	],
	"../pages/logintwo/logintwo.module": [
		859,
		17
	],
	"../pages/newartist/newartist.module": [
		860,
		16
	],
	"../pages/ourtalkreply/ourtalkreply.module": [
		861,
		15
	],
	"../pages/privacy/privacy.module": [
		863,
		14
	],
	"../pages/realtalk/realtalk.module": [
		864,
		13
	],
	"../pages/reservations/reservations.module": [
		862,
		12
	],
	"../pages/review/review.module": [
		865,
		11
	],
	"../pages/reviews2/reviews2.module": [
		868,
		10
	],
	"../pages/signup/signup.module": [
		874,
		9
	],
	"../pages/signuptwo/signuptwo.module": [
		869,
		8
	],
	"../pages/talkreply/talkreply.module": [
		867,
		7
	],
	"../pages/terms/terms.module": [
		870,
		6
	],
	"../pages/termsbusiness/termsbusiness.module": [
		871,
		0
	],
	"../pages/viewfavorites/viewfavorites.module": [
		873,
		5
	],
	"../pages/viewproduct/viewproduct.module": [
		872,
		4
	],
	"../pages/viewreservation/viewreservation.module": [
		875,
		3
	],
	"../pages/viewreservationtwo/viewreservationtwo.module": [
		876,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 243;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewproduct_viewproduct__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__booknow_booknow__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_review__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, ViewCtrl, socialSharing, loadingCtrl, common, toastCtrl, appsetting, http, zone, geolocation, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.ViewCtrl = ViewCtrl;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.zone = zone;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.name = 'By name';
        this.pageno = 1;
        this.restaurantlist = [];
        this.searchQuery = '';
        this.data = {};
        this.autocomplete = {}; //variable used for autocomplete on address field
        this.service = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.subcat = [];
        this.premiumBusiness = [];
        this.fav = 0;
        this.rating = {};
        this.show = false;
        console.log('rahul');
        if (localStorage.getItem('CurrentUser')) {
            console.log(JSON.parse(localStorage.getItem('CurrentUser')));
            this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
        }
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        //alert('ionViewDidLoad');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
            this.currentLocation();
            console.log((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString());
            this.getSubCatList();
            console.log('ionViewDidLoad HomePage');
            //        this.Getlist(1, 30.723839099999996, 76.8465082);
            //        this.latitude = 30.723839099999996;
            //        this.longitude = 76.8465082;
        }
        else {
            this.common.tryagain();
        }
    };
    HomePage.prototype.currentLocation = function () {
        var _this = this;
        var temp = this;
        console.log('current location');
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log('getCurrentPosition');
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.latitude = resp.coords.latitude; // resp.coords.latitude
            _this.longitude = resp.coords.longitude; // resp.coords.longitude
            _this.currentLat = resp.coords.latitude;
            _this.currentLong = resp.coords.longitude;
            _this.Getlist(_this.pageno, resp.coords.latitude, resp.coords.longitude);
            var geocoder = new google.maps.Geocoder;
            var latlng = { lat: resp.coords.latitude, lng: resp.coords.longitude };
            geocoder.geocode({ 'location': latlng }, function (results, status) {
                if (status === 'OK') {
                    console.log(results[0]);
                    if (results[0]) {
                        temp.autocomplete.query = results[0].formatted_address;
                    }
                    else {
                        temp.autocomplete.query = '';
                    }
                }
                else {
                    console.log('Error getting address by location');
                }
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    /********* function used for get subcatlist to show on top of the page ***********/
    HomePage.prototype.getSubCatList = function () {
        var _this = this;
        this.subcat = [];
        var temp = this;
        this.http.get(this.appsetting.url + 'categories/get').map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            response.forEach(function (value, key) {
                value.sub_category.forEach(function (val, ke) {
                    if (!val.sub_category_image) {
                        val.sub_category_image = 'assets/imgs/iconnot.png';
                        temp.subcat.push(val);
                    }
                    else {
                        temp.subcat.push(val);
                    }
                });
            });
            //this.subcat = response;
            console.log(_this.subcat);
        });
    };
    /****** functions used for run ionViewDidLoad() function after clear the search bar ************/
    HomePage.prototype.ionClear = function () {
        console.log('clear');
        this.autocomplete.query = '';
    };
    /****** functions used for getlist of restaurants by default when user visit on page ************/
    HomePage.prototype.Getlist = function (pageno, lat, long) {
        var _this = this;
        console.log('Getlist');
        var temp = this;
        var options = this.appsetting.header();
        var postdata = {
            lat: lat,
            long: long,
            page: pageno
        };
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'users/getbusinessbyloc', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    console.log(response.data);
                    console.log(_this.latitude);
                    console.log(_this.longitude);
                    // this.geolocation.getCurrentPosition().then((resp) => {
                    // alert('here');
                    _this.restaurantlist = [];
                    temp.premiumBusiness = [];
                    //                        console.log(resp.coords.latitude);
                    //                        console.log(resp.coords.longitude);
                    for (var i = 0; i < response.data.length; i++) {
                        if (localStorage.getItem('CurrentUser')) {
                            _this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                            if (_this.favourite.length > 0) {
                                for (var j = 0; j < _this.favourite.length; j++) {
                                    if ((response.data[i].business_data[0]._id) == (_this.favourite[j].favorite_business_id)) {
                                        console.log('matched');
                                        response.data[i].business_data[0].fav = 1;
                                        break;
                                    }
                                    else {
                                        console.log('not matched');
                                        response.data[i].business_data[0].fav = 0;
                                        // break;
                                    }
                                }
                            }
                            else {
                                response.data[i].business_data[0].fav = 0;
                            }
                        }
                        else {
                            response.data[i].business_data[0].fav = 0;
                        }
                        var sum = 0;
                        if (response.data[i].review.length > 0) {
                            response.data[i].review.forEach(function (val, ke) {
                                console.log(val);
                                sum += val.stars;
                                console.log(sum);
                                response.data[i].avg = sum / response.data[i].review.length;
                            });
                        }
                        else {
                            response.data[i].avg = 0;
                        }
                    }
                    response.data.forEach(function (value, key) {
                        console.log(value);
                        console.log(key);
                        //                            console.log(value.business_data[0].location.coordinates[1]);
                        //                            console.log(typeof (value.business_data[0].business_type));
                        console.log();
                        if (value.business_data[0].business_type == 1) {
                            console.log('if');
                            temp.premiumBusiness.push(value);
                        }
                        else {
                            console.log('else');
                            temp.restaurantlist.push(value);
                        }
                        value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K');
                    });
                    //})
                    _this.totalpageno = response.pages;
                    console.log(_this.restaurantlist);
                    console.log(temp.premiumBusiness);
                }
            });
        });
    };
    /****** function used for autocomplete prediction ***********/
    HomePage.prototype.updateSearch = function () {
        console.log('update');
        console.log(this.autocomplete.query);
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query }, function (predictions, status) {
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
    };
    /****** function used for choose item from autocomplete prediction ***********/
    HomePage.prototype.chooseItem = function (item) {
        var temp = this;
        console.log(item);
        this.autocomplete.query = item;
        this.autocompleteItems = [];
        this.geocoder.geocode({ 'address': item }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
                console.log(results[0].geometry.location.lat());
                console.log(results[0].geometry.location.lng());
                temp.latitude = results[0].geometry.location.lat();
                temp.longitude = results[0].geometry.location.lng();
                temp.pageno = 1;
                temp.Getlist(temp.pageno, temp.latitude, temp.longitude);
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    /******** function used for open filter modal after click on header *****************/
    HomePage.prototype.filterModal = function () {
        var _this = this;
        var temp = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPage */], { serviceslist: this.subcat });
        modal.onDidDismiss(function (data) {
            if (data) {
                if (data.type == 'search') {
                    console.log('Search');
                    if (data.searchedlist) {
                        console.log(data.searchedlist);
                        var options = _this.appsetting.header();
                        var postdata = {
                            sub_cat_id: data.searchedlist.services,
                            max_distance: data.searchedlist.range,
                            zip_code: '',
                            business_online: data.searchedlist.online,
                            lat: _this.latitude,
                            long: _this.longitude
                        };
                        var serialized = _this.appsetting.serializeObj(postdata);
                        _this.http.post(_this.appsetting.url + 'users/filterall', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response);
                            if (response.status == true) {
                                if (response.data.length > 0) {
                                    console.log(response.data);
                                    _this.premiumBusiness = [];
                                    _this.restaurantlist = [];
                                    _this.geolocation.getCurrentPosition().then(function (resp) {
                                        console.log(resp.coords.latitude);
                                        console.log(resp.coords.longitude);
                                        response.data.forEach(function (value, key) {
                                            console.log(value.business_data[0].location.coordinates[1]);
                                            if (value.business_data[0].business_type == 1) {
                                                console.log('if');
                                                temp.premiumBusiness.push(value);
                                            }
                                            else {
                                                console.log('else');
                                                temp.restaurantlist.push(value);
                                            }
                                            value.business_data[0].distance = temp.common.distance(resp.coords.latitude, resp.coords.longitude, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K');
                                        });
                                    }).catch(function (error) {
                                        console.log('Error getting location', error);
                                    });
                                    // this.restaurantlist = response.data;
                                }
                                else {
                                    _this.restaurantlist = [];
                                    _this.premiumBusiness = [];
                                }
                            }
                        });
                    }
                }
                else {
                    console.log('reset');
                    localStorage.removeItem('filterdata');
                    _this.geolocation.getCurrentPosition().then(function (resp) {
                        console.log('getCurrentPosition');
                        console.log(resp.coords.latitude);
                        console.log(resp.coords.longitude);
                        _this.latitude = resp.coords.latitude; // resp.coords.latitude
                        _this.longitude = resp.coords.longitude; // resp.coords.longitude
                        _this.pageno = 1;
                        _this.Getlist(_this.pageno, resp.coords.latitude, resp.coords.longitude);
                    }).catch(function (error) {
                        console.log('Error getting location', error);
                    });
                }
            }
        });
        modal.present();
    };
    /******** function used for open booking modal *****************/
    HomePage.prototype.bookModal = function (resdata) {
        var _this = this;
        console.log(resdata);
        this.modaldata = resdata;
        var temp = this;
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__booknow_booknow__["a" /* BooknowPage */]);
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                console.log(_this.modaldata);
                if (data.bookingdata) {
                    console.log(new Date());
                    console.log(new Date(data.bookingdata.date).toISOString());
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
                    var options = _this.appsetting.header();
                    var postdata = {
                        business_id: _this.modaldata.business_data[0]._id,
                        order_to: _this.modaldata._id,
                        order_from: user._id,
                        orderdate: da,
                        orderstart: startdate,
                        orderend: enddate,
                        spacial_accomodation: data.bookingdata.specialAccomo
                    };
                    var serialized = _this.appsetting.serializeObj(postdata);
                    _this.http.post(_this.appsetting.url + 'orders/addOrders', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        if (response.status == true) {
                            _this.common.presentAlert('Book now', response.message);
                        }
                        else {
                            _this.common.presentAlert('Book now', 'No result found!');
                        }
                    });
                }
            }
        });
        modal.present();
    };
    /******** function used for social sharing *****************/
    HomePage.prototype.socialsharing = function (name, address, image) {
        console.log(name);
        console.log(address);
        console.log(image);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            // Check if sharing via email is supported
            var message = address; //'Amazing restaurant';
            var subject = name; //'Restaurant name';
            var file = '';
            var url = image.business_image; //'https://www.google.co.in';
            this.socialSharing.share(message, subject, file, url).then(function (res) {
                // Sharing via email is possible
                console.log(JSON.stringify(res));
            }).catch(function (err) {
                // Sharing via email is not possible
                console.log(JSON.stringify(err));
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    /********* function used for filter by subcat(by clicking on top scroll bar) *************/
    HomePage.prototype.FilterBySubCat = function (id) {
        var _this = this;
        console.log(id);
        var temp = this;
        this.categoryid = id;
        var options = this.appsetting.header();
        var postdata = {
            lat: this.latitude,
            long: this.longitude,
            sub_cat_id: id
        };
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'users/filterbysubcategory', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    console.log(response.data);
                    if (response.data.length > 0) {
                        _this.premiumBusiness = [];
                        _this.restaurantlist = [];
                        for (var i = 0; i < response.data.length; i++) {
                            if (localStorage.getItem('CurrentUser')) {
                                _this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                                if (_this.favourite.length > 0) {
                                    for (var j = 0; j < _this.favourite.length; j++) {
                                        if ((response.data[i].business_data[0]._id) == (_this.favourite[j].favorite_business_id)) {
                                            console.log('matched');
                                            response.data[i].business_data[0].fav = 1;
                                            break;
                                        }
                                        else {
                                            console.log('not matched');
                                            response.data[i].business_data[0].fav = 0;
                                            // break;
                                        }
                                    }
                                }
                                else {
                                    response.data[i].business_data[0].fav = 0;
                                }
                            }
                            else {
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
                            }
                            else {
                                console.log('else');
                                temp.restaurantlist.push(value);
                            }
                            value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K');
                            //})
                        });
                        _this.totalpageno = response.pages;
                    }
                    else {
                        temp.premiumBusiness = [];
                        temp.restaurantlist = [];
                    }
                }
            });
        });
    };
    HomePage.prototype.viewproduct = function (dat) {
        console.log(dat);
        dat.business_data[0].opening_days_and_timings.forEach(function (value, key) {
            console.log(value);
            var ot = value.opening_time.split(':');
            console.log(value.opening_time.includes("AM"));
            if (ot[0] > 11) {
                if (value.opening_time.includes("AM") == true || value.opening_time.includes("PM") == true) {
                    value.opening_time = value.opening_time;
                }
                else {
                    value.opening_time = value.opening_time + ' PM';
                }
            }
            else {
                if (value.opening_time.includes("AM") == true || value.opening_time.includes("PM") == true) {
                    value.opening_time = value.opening_time;
                }
                else {
                    value.opening_time = value.opening_time + ' AM';
                }
            }
            var ct = value.closing_time.split(':');
            if (ct[0] > 11) {
                if (value.closing_time.includes("AM") == true || value.closing_time.includes("PM") == true) {
                    value.closing_time = value.closing_time;
                }
                else {
                    value.closing_time = value.closing_time + ' PM';
                }
            }
            else {
                if (value.closing_time.includes("AM") == true || value.closing_time.includes("PM") == true) {
                    value.closing_time = value.closing_time;
                }
                else {
                    value.closing_time = value.closing_time + ' AM';
                }
            }
        });
        console.log(dat);
        //return false;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viewproduct_viewproduct__["a" /* ViewproductPage */], { restdata: dat });
    };
    HomePage.prototype.view = function (resid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__review_review__["a" /* ReviewPage */], { prod_id: resid });
    };
    /*********** function to favourite a restaurant *******************/
    HomePage.prototype.MarkAsFavourite = function (businessID) {
        var _this = this;
        console.log('MarkAsFavourite function');
        console.log(businessID);
        if (localStorage.getItem('CurrentUser')) {
            var user = JSON.parse(localStorage.getItem('CurrentUser'));
            var options_1 = this.appsetting.header();
            var postdata = {
                user_id: user._id,
                favorite_business_id: businessID
            };
            var serialized_1 = this.appsetting.serializeObj(postdata);
            this.http.post(this.appsetting.url + 'user/add_to_favarite', serialized_1, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                if (response.status == true) {
                    localStorage.setItem('CurrentUser', JSON.stringify(response.data[0]));
                    // this.pageno = 1;
                    //                this.Getlist(this.pageno, this.latitude, this.longitude);
                    _this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                    for (var i = 0; i < _this.restaurantlist.length; i++) {
                        if (_this.favourite.length > 0) {
                            for (var j = 0; j < _this.favourite.length; j++) {
                                if ((_this.restaurantlist[i].business_data[0]._id) == (_this.favourite[j].favorite_business_id)) {
                                    console.log('matched');
                                    _this.restaurantlist[i].business_data[0].fav = 1;
                                    break;
                                }
                                else {
                                    console.log('not matched');
                                    _this.restaurantlist[i].business_data[0].fav = 0;
                                    // break;
                                }
                            }
                        }
                        else {
                            _this.restaurantlist[i].business_data[0].fav = 0;
                        }
                    }
                    console.log(_this.restaurantlist);
                }
                else {
                    _this.http.post(_this.appsetting.url + 'user/delete_favarite_business ', serialized_1, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        if (response.status == true) {
                            localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                            //this.pageno = 1;
                            //this.Getlist(this.pageno, this.latitude, this.longitude);
                            _this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                            for (var i = 0; i < _this.restaurantlist.length; i++) {
                                if (_this.favourite.length > 0) {
                                    for (var j = 0; j < _this.favourite.length; j++) {
                                        if ((_this.restaurantlist[i].business_data[0]._id) == (_this.favourite[j].favorite_business_id)) {
                                            console.log('matched');
                                            _this.restaurantlist[i].business_data[0].fav = 1;
                                            break;
                                        }
                                        else {
                                            console.log('not matched');
                                            _this.restaurantlist[i].business_data[0].fav = 0;
                                            // break;
                                        }
                                    }
                                }
                                else {
                                    _this.restaurantlist[i].business_data[0].fav = 0;
                                }
                            }
                            console.log(_this.restaurantlist);
                        }
                    });
                }
            });
        }
        else {
            this.common.ConfirmFunction('Favourite', 'Please login first to make favourite!', __WEBPACK_IMPORTED_MODULE_11__login_login__["a" /* LoginPage */]);
        }
    };
    /****** functions used only for getdata of restaurants when infinite scroll hit ************/
    HomePage.prototype.Getdata = function (pageno, lat, long) {
        var _this = this;
        console.log('Getlist');
        var temp = this;
        var sum = 0;
        var options = this.appsetting.header();
        var postdata = {
            lat: lat,
            long: long,
            page: pageno
        };
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'users/getbusinessbyloc', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    console.log(response.data);
                    console.log(_this.latitude);
                    console.log(_this.longitude);
                    //this.geolocation.getCurrentPosition().then((resp) => {
                    // alert('here');
                    //                    this.restaurantlist = [];
                    //                    temp.premiumBusiness = [];
                    //                        console.log(resp.coords.latitude);
                    //                        console.log(resp.coords.longitude);
                    for (var i = 0; i < response.data.length; i++) {
                        if (localStorage.getItem('CurrentUser')) {
                            _this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                            if (_this.favourite.length > 0) {
                                for (var j = 0; j < _this.favourite.length; j++) {
                                    if ((response.data[i].business_data[0]._id) == (_this.favourite[j].favorite_business_id)) {
                                        console.log('matched');
                                        response.data[i].business_data[0].fav = 1;
                                        break;
                                    }
                                    else {
                                        console.log('not matched');
                                        response.data[i].business_data[0].fav = 0;
                                        // break;
                                    }
                                }
                            }
                            else {
                                response.data[i].business_data[0].fav = 0;
                            }
                        }
                        else {
                            response.data[i].business_data[0].fav = 0;
                        }
                        if (response.data[i].review.length > 0) {
                            response.data[i].review.forEach(function (val, ke) {
                                console.log(val);
                                sum += val.stars;
                                console.log(sum);
                                response.data[i].avg = sum / response.data[i].review.length;
                            });
                        }
                        else {
                            response.data[i].avg = 0;
                        }
                    }
                    response.data.forEach(function (value, key) {
                        console.log(value);
                        console.log(key);
                        if (value.business_data[0].business_type == 1) {
                            console.log('if');
                            temp.premiumBusiness.push(value);
                        }
                        else {
                            console.log('else');
                            temp.restaurantlist.push(value);
                        }
                        value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K');
                    });
                    _this.totalpageno = response.pages;
                    console.log(_this.restaurantlist);
                    console.log(temp.premiumBusiness);
                }
            });
        });
    };
    HomePage.prototype.ShowHide = function () {
        console.log(this.name);
        if (this.show == true) {
            this.show = false;
            this.name = 'By name';
            this.class = 'slideOutRight';
            console.log('true');
        }
        else {
            this.name = 'By location';
            this.class = 'slideInRight';
            this.show = true;
            console.log('false');
        }
        console.log(this.name);
    };
    HomePage.prototype.Searchbyname = function (text) {
        var _this = this;
        console.log(text);
        var temp = this;
        this.categoryid = '';
        var sum = 0;
        var options = this.appsetting.header();
        var postdata = {
            name: text
        };
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'users/Searchbyname', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    _this.premiumBusiness = [];
                    _this.restaurantlist = [];
                    for (var i = 0; i < response.data.length; i++) {
                        if (localStorage.getItem('CurrentUser')) {
                            _this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                            if (_this.favourite.length > 0) {
                                for (var j = 0; j < _this.favourite.length; j++) {
                                    if ((response.data[i].business_data[0]._id) == (_this.favourite[j].favorite_business_id)) {
                                        console.log('matched');
                                        response.data[i].business_data[0].fav = 1;
                                        break;
                                    }
                                    else {
                                        console.log('not matched');
                                        response.data[i].business_data[0].fav = 0;
                                        // break;
                                    }
                                }
                            }
                            else {
                                response.data[i].business_data[0].fav = 0;
                            }
                        }
                        else {
                            response.data[i].business_data[0].fav = 0;
                        }
                        if (response.data[i].review.length > 0) {
                            response.data[i].review.forEach(function (val, ke) {
                                console.log(val);
                                sum += val.stars;
                                console.log(sum);
                                response.data[i].avg = sum / response.data[i].review.length;
                            });
                        }
                        else {
                            response.data[i].avg = 0;
                        }
                    }
                    response.data.forEach(function (value, key) {
                        console.log(value);
                        console.log(key);
                        if (value.business_data[0].business_type == 1) {
                            console.log('if');
                            temp.premiumBusiness.push(value);
                        }
                        else {
                            console.log('else');
                            temp.restaurantlist.push(value);
                        }
                        value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K');
                    });
                }
                else {
                    _this.common.presentAlert('Search', response.message);
                }
            });
        });
    };
    /****** functions used for getlist on refresh ************/
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        //this.getSubCatList();
        this.pageno = 1;
        this.categoryid = '';
        this.Getlist(this.pageno, this.latitude, this.longitude);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    /****** functions used for pagination ************/
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        this.pageno = this.pageno + 1;
        console.log(this.totalpageno);
        console.log(this.pageno);
        if (this.pageno <= this.totalpageno) {
            this.Getdata(this.pageno, this.latitude, this.longitude);
        }
        else {
            //this.pageno = 1;
            console.log('No more data to load');
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar hideBackButton color="green">\n        <button ion-button menuToggle style="display:block !important;">\n            <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n        <ion-title text-center >Home</ion-title>\n        <ion-buttons right (click)="filterModal()">\n                     <button ion-button>\n                <ion-icon><img width="22px" src="assets/imgs/filter.png"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n    <div class="searchouter">\n        <ion-searchbar class="bfr searchbar" placeholder="Search location" [(ngModel)]="autocomplete.query" (input)="updateSearch()" (ionClear)="ionClear($event)"></ion-searchbar>        \n        <p (click)="ShowHide()">{{name}}</p>\n        <div *ngIf="show == true">\n            <ion-searchbar class="bfr brfone searchbar animated" [(ngModel)]="data.text" name="text" placeholder="Search by name">\n\n            </ion-searchbar>\n            <ion-icon class="gosrch" name="arrow-dropright-circle" (click)="Searchbyname(data.text)"></ion-icon>\n\n        </div>\n        <ion-list class="searchtogle animated bounceIn">\n            <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">\n                {{ item }}\n        </ion-item>\n    </ion-list>\n</div>\n\n<ion-toolbar>\n    <div class="procatout">\n        <ul class="procat">\n            <li *ngFor="let sub of subcat" (click)="FilterBySubCat(sub._id)" [class.highlighted]="sub._id == categoryid">\n                <!-- <div class="icons"><img [src]="sub.sub_category_image"></div>-->\n                <div class="icons">\n                    <svg-icon src="assets/imgs/default-wax.svg" [svgStyle]="{ \'width.px\':22 }"></svg-icon>\n</div>\n                <p>{{sub.sub_category_title}}</p>\n            </li>\n        </ul>\n    </div>\n</ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    \n    \n  \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <!--    <ion-scroll direction="x" class="wideslide">\n            <ul class="imglist">\n                <li *ngFor="let premium of premiumBusiness" (click)="viewproduct(premium)">\n                    <div class="boxxgrid">\n                        <div class="imgbox">\n                            <img src="{{premium.business_image[0].business_image}}">\n                            \n                        </div>\n                        <img src="assets/imgs/premium.png" class="premium">\n                    </div>\n                </li>\n                <li>\n                    <div class="boxxgrid">\n                        <div class="imgbox">\n                            <img src="assets/imgs/sqar.png">\n                        </div>\n                        <img src="assets/imgs/premium.png" class="premium">\n                    </div>\n                </li>\n               \n            </ul>\n        </ion-scroll>-->\n    \n    <ion-slides pager *ngIf="premiumBusiness.length>0">\n        <ion-slide *ngFor="let premium of premiumBusiness" (click)="viewproduct(premium)">\n            <img src="{{premium.business_image[0].business_image}}">\n            <img src="assets/imgs/PREMIERE.png" class="premium">\n        </ion-slide>\n    </ion-slides>\n\n    <div class="productlist" *ngIf="restaurantlist?.length>0">\n        <ion-list text-wrap>\n            <ion-item *ngFor="let res of restaurantlist">\n                <ion-thumbnail item-start (click)="viewproduct(res)">\n                    <img [src]="res.business_image[0].business_image">\n                </ion-thumbnail>\n                <ion-note class="online" *ngIf="res.business_data[0].own_online_market_place == true"><span class="dot"></span> Online</ion-note>\n                <!--                <span *ngIf="res.business_data[0].own_online_market_place == true">Online</span>-->\n                <h2>{{res.business_data[0].business_name}}</h2>\n                <div class="fullwidth">\n                    <h4 class="listcol">\n                        <rating readOnly="true" max="5" emptyStarIconName="star-outline" starIconName="star" nullable="false" [(ngModel)]="res.avg" name="rate">\n                        </rating>\n                    </h4>\n                    <h4 *ngIf="res.business_data[0].own_online_market_place == true" class="listcol"><span class="proicon"><img src="assets/imgs/hrs.png"></span> Open 24/7</h4>\n                </div>\n                <div class="fullwidth">\n                    <h4 class="listcol"><span class="proicon"><img src="assets/imgs/mile.png"></span> {{res.business_data[0].distance}} Miles</h4>\n                    <h4 class="listcol" *ngIf="res.checkin"><span class="proicon"><img src="assets/imgs/check.png"></span> {{res.checkin.length}} Check-Ins</h4>\n                    <h4 class="listcol" *ngIf="!res.checkin"><span class="proicon"><img src="assets/imgs/check.png"></span> 0 Check-Ins</h4>\n\n                </div>\n                <p>{{res.business_data[0].sub_cat}}</p>\n                <div class="fullwidth">\n                    <h4 class="listcol" (click)="MarkAsFavourite(res.business_data[0]._id)">\n                        <span class="proicon">\n                            <img *ngIf="res.business_data[0].fav == 0" src="assets/imgs/fav.png">\n                            <img *ngIf="res.business_data[0].fav == 1" src="assets/imgs/favactive.png">\n                        </span> Favorite</h4>\n                    <h4 class="listcol" (click)="socialsharing(res.business_data[0].business_name,res.business_data[0].address,res.business_image[0].business_image)"><span class="proicon"><img src="assets/imgs/share.png"></span> Share</h4>\n                </div>\n                <div class="fullwidth">\n                    <button class="btneq" ion-button color="green" (click)="bookModal(res)">Book Now</button>\n                    <button class="btneq yelo" ion-button color="yellow" (click)="view(res)">Review</button>\n                </div>\n                <img *ngIf="res.business_data[0].business_type == 1 || res.business_data[0].business_type == 2" src="assets/imgs/premium.png" class="premim">\n            </ion-item>\n\n            <!--  <ion-item>\n                <ion-thumbnail item-start>\n                <img src="assets/imgs/img1.jpg">\n                </ion-thumbnail>\n                <h2>Rudford’s Restaurant</h2>\n                <div class="fullwidth">\n                <h4 class="listcol">sdfdssaf</h4>\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/hrs.png"></span> Open 24/7</h4>\n                </div>\n                <div class="fullwidth">\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/mile.png"></span> 7.4 Miles</h4>\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/check.png"></span> 4 Check-Ins</h4>\n                </div>\n                <p>Diners, Breakfast & Brunch, Burgers</p>\n                <div class="fullwidth">\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/favactive.png"></span> Favorite</h4>\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/share.png"></span> Share</h4>\n                </div>\n                <div class="fullwidth">\n                <button class="btneq" ion-button color="green">Book Now</button>\n                <button class="btneq" ion-button color="yellow">Review</button>\n                </div>\n              </ion-item>-->\n\n\n\n        </ion-list>\n    </div>\n    <div *ngIf="restaurantlist?.length == 0">\n        <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n            <img style="width:200px;margin: auto;display: block;" src="assets/imgs/sorry.png">\n            <span> No data found!</span>\n        </div>\n    </div>\n    <ion-infinite-scroll *ngIf="pageno<=totalpageno" (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_forgot__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__terms_terms__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(platform, navCtrl, navParams, alertCtrl, formBuilder, appsetting, http, events, common, toastCtrl, loadingCtrl, fb, fcm) {
        //alert('login oage');
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.appsetting = appsetting;
        this.http = http;
        this.events = events;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.fcm = fcm;
        this.type = 'password';
        this.showPass = false;
        this.iconname = 'eye';
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            this.common.tryagain();
        }
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SigninPage');
        this.platform.ready().then(function () {
            var lastTimeBackPress = 0;
            var timePeriodToExit = 2000;
            _this.platform.registerBackButtonAction(function () {
                // get current active page
                var view = _this.navCtrl.getActive();
                if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                    _this.platform.exitApp(); //Exit from app
                }
                else {
                    // alert('Press back again to exit App?');
                    var toast = _this.toastCtrl.create({
                        message: 'Press back again to exit from app?',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    lastTimeBackPress = new Date().getTime();
                }
            });
        });
    };
    LoginPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.SigninForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, this.emailValidator.bind(this)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
        });
        // this.tryagain();
    };
    LoginPage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return { invalidEmail: true };
        }
    };
    LoginPage.prototype.isValid = function (field) {
        var formField = this.SigninForm.get(field);
        return formField.valid || formField.pristine;
    };
    LoginPage.prototype.showPassword = function () {
        console.log('showpassword');
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
            this.iconname = 'eye-off';
        }
        else {
            this.type = 'password';
            this.iconname = 'eye';
        }
    };
    LoginPage.prototype.Signin = function (signindata) {
        var _this = this;
        console.log(signindata.value);
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            // this.fcm.getToken().then(token => {
            //   console.log('Tokenid-->'+token);
            // alert(token)
            var options_1 = this.appsetting.header();
            var postdata = {
                email: signindata.value.email,
                password: signindata.value.password,
                divice_token: 'g',
                role: 'member'
            };
            console.log(postdata);
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.url + 'users/loginuser', serialized, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.status == true) {
                        localStorage.setItem('CurrentUser', JSON.stringify(response.userinfo));
                        _this.events.publish('Loggedin', 'loginpage');
                        _this.appsetting.userprofile = response.userinfo;
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                    else {
                        _this.common.presentAlert('Login', response.message);
                    }
                });
            });
            //            }, err => {
            //                console.log(err);
            //            })
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    LoginPage.prototype.home = function () {
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            this.events.publish('skip', 'skip');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    LoginPage.prototype.Facebooklogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            console.log('Logged into Facebook!', JSON.stringify(res));
            var userId = res.authResponse.userID;
            var accesstoken = res.authResponse.accessToken;
            console.log(accesstoken);
            console.log(userId);
            _this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                _this.userData = {
                    id: profile['id'],
                    email: profile['email'],
                    first_name: profile['first_name'],
                    last_name: profile['last_name'],
                    picture: profile['picture_large']['data']['url'],
                    username: profile['name']
                };
                console.log('User profile');
                console.log(_this.userData);
                console.log('User profile stringify');
                console.log(JSON.stringify(_this.userData));
                console.log('rahul');
                console.log(window.navigator.onLine);
                if (window.navigator.onLine == true) {
                    var options_2 = _this.appsetting.header();
                    _this.fcm.getToken().then(function (token) {
                        //                    alert(token);
                        //                })
                        var postdata = {
                            fb_id: _this.userData.id,
                            firstname: _this.userData.first_name,
                            lastname: _this.userData.last_name,
                            email: _this.userData.email,
                            role: 'member',
                            regitration_type: 'facebook',
                            divice_token: token,
                            profile_pic: _this.userData.picture,
                            password: _this.userData.id,
                        };
                        console.log('postdata------->');
                        console.log(postdata);
                        var serialized = _this.appsetting.serializeObj(postdata);
                        var Loading = _this.loadingCtrl.create({
                            spinner: 'bubbles',
                            content: 'Loading...'
                        });
                        Loading.present().then(function () {
                            _this.http.post(_this.appsetting.url + 'users/fbregistration', serialized, options_2).map(function (res) { return res.json(); }).subscribe(function (response) {
                                console.log(response);
                                Loading.dismiss();
                                if (response.status == true) {
                                    // alert('succes facebook');
                                    if (response.data) {
                                        localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                                        _this.events.publish('Loggedin', 'loginpage');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                                    }
                                    else {
                                        localStorage.setItem('CurrentUser', JSON.stringify(response.userinfo));
                                        _this.events.publish('Loggedin', 'loginpage');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                                    }
                                }
                                else {
                                    //alert('fail facebook');
                                    _this.common.presentAlert('Signin', response.message);
                                }
                            });
                        });
                    }).catch(function (error) { return console.log(error); });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Check your internet connection',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                    });
                    toast.present();
                }
            });
        })
            .catch(function (e) {
            console.log('Error logging into Facebook', JSON.stringify(e));
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forgot_forgot__["a" /* ForgotPage */]);
    };
    LoginPage.prototype.term = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__terms_terms__["a" /* TermsPage */], { role: 'member' });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title text-center>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="loginform formmain">\n    <p style="font-weight: 600;">Thank you for becoming a part of <br> our community!</p>\n    <form [formGroup]="SigninForm" (submit)="Signin(SigninForm)">\n      <ion-list no-lines>\n       \n          <ion-item>\n            <ion-input type="email" placeholder="Email" formControlName="email" autocapitalize="off"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/user.png"></ion-icon>\n            <span item-content *ngIf="!isValid(\'email\')" class="validationpop animated bounce">Invalid email</span>\n          </ion-item>\n          \n        \n       \n          <ion-item>\n            <ion-input type="{{type}}" placeholder="Password" formControlName="password" ></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n            <button item-end type="button" color="dark" class="" (click)="showPassword()" ion-button icon-only clear>\n                <ion-icon  name="{{iconname}}" ></ion-icon>\n            </button>\n            <span item-content *ngIf="!isValid(\'password\')" class="validationpop animated bounce">Invalid Password</span>\n          </ion-item>\n            \n          \n        \n        <button type="submit" class="btn1" ion-button color="green" block [disabled]="!SigninForm.valid">Login</button>\n        <button type="button" class="forgot" ion-button clear block color="dark" (click)="forgot()">Forgot Password?</button>\n        <h2 class="orstrip"><span style="font-weight: 600;">OR</span></h2>\n        <button (click)="Facebooklogin()" type="button" class="btn3" ion-button block >Login with facebook</button>\n      </ion-list>\n    </form>\n  </div>\n\n  <div class="haveacc">Don’t have an account? <span color="dark" (click)="signup()" style="font-weight: 600;">Sign Up</span></div>\n  <div class="haveacc" (click)="term()">Terms and conditions </div>\n  <div class="haveacc"><button ion-button clear (click)="home()">Skip</button></div>\n  \n  \n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__["a" /* FCM */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareernetworkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CareernetworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CareernetworkPage = (function () {
    function CareernetworkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CareernetworkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CareernetworkPage');
    };
    CareernetworkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-careernetwork',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/careernetwork/careernetwork.html"*/'<!--\n  Generated template for the CareernetworkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>career network</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/careernetwork/careernetwork.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CareernetworkPage);
    return CareernetworkPage;
}());

//# sourceMappingURL=careernetwork.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgottwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ForgottwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgottwoPage = (function () {
    function ForgottwoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgottwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgottwoPage');
    };
    ForgottwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgottwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/forgottwo/forgottwo.html"*/'<!--\n  Generated template for the ForgottwoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green"> \n    <ion-title>forgot password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="chngpwd">\n        <div class="image-wrapper">\n          <img src="assets/imgs/lock.png">\n        </div>\n         <p>Set a new password.</p>\n         <form class="formmain">\n           <ion-list no-lines>\n               <ion-item>\n                 <ion-input type="email"></ion-input>\n                 <ion-icon class="iconinput" item-start><img style="float: left; margin-top: 4px;" src="assets/imgs/email.png"></ion-icon>\n               </ion-item>\n                      \n             <button class="btn1" ion-button color="green" block>SAVE</button>\n           </ion-list>\n         </form>\n       </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/forgottwo/forgottwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ForgottwoPage);
    return ForgottwoPage;
}());

//# sourceMappingURL=forgottwo.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewartistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewartistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewartistPage = (function () {
    function NewartistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewartistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewartistPage');
    };
    NewartistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-newartist',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/newartist/newartist.html"*/'<!--\n  Generated template for the NewartistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>New Artist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/newartist/newartist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], NewartistPage);
    return NewartistPage;
}());

//# sourceMappingURL=newartist.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(513);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_getstart_getstart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_logintwo_logintwo__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signuptwo_signuptwo__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_filter_filter__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_realtalk_realtalk__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_careernetwork_careernetwork__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_newartist_newartist__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_viewreservation_viewreservation__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_viewreservationtwo_viewreservationtwo__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_history_history__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_historytwo_historytwo__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_viewfavorites_viewfavorites__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_terms_terms__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_privacy_privacy__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_viewproduct_viewproduct__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_booknow_booknow__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_editprofiletwo_editprofiletwo__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_changepassword_changepassword__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_forgot_forgot__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_review_review__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_status_bar__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_reservations_reservations__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_reviews2_reviews2__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_editbusiness_editbusiness__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_addbusiness_addbusiness__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_forgottwo_forgottwo__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_password_strength_bar__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_password_strength_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_ng2_password_strength_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_fcm__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_facebook__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_geolocation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ionic2_rating__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_social_sharing__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_launch_navigator__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_in_app_browser__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_location_location__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_talkreply_talkreply__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_ourtalkreply_ourtalkreply__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_angular_svg_icon__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_common_http__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__yellowspot_ng_truncate__ = __webpack_require__(842);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// import { ReviewPage } from '../pages/review/review';


















// Import ionic2-rating module










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_getstart_getstart__["a" /* GetstartPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_realtalk_realtalk__["a" /* RealtalkPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_careernetwork_careernetwork__["a" /* CareernetworkPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_newartist_newartist__["a" /* NewartistPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_viewreservation_viewreservation__["a" /* ViewreservationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_historytwo_historytwo__["a" /* HistorytwoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_viewfavorites_viewfavorites__["a" /* ViewfavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_viewproduct_viewproduct__["a" /* ViewproductPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_booknow_booknow__["a" /* BooknowPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_editprofiletwo_editprofiletwo__["a" /* EditprofiletwoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_reservations_reservations__["a" /* ReservationsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_reviews2_reviews2__["a" /* Reviews2Page */],
                __WEBPACK_IMPORTED_MODULE_34__pages_editbusiness_editbusiness__["a" /* EditbusinessPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_logintwo_logintwo__["a" /* LogintwoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signuptwo_signuptwo__["a" /* SignuptwoPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_addbusiness_addbusiness__["a" /* AddbusinessPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_forgottwo_forgottwo__["a" /* ForgottwoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_viewreservationtwo_viewreservationtwo__["a" /* ViewreservationtwoPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_talkreply_talkreply__["a" /* TalkreplyPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_ourtalkreply_ourtalkreply__["a" /* OurtalkreplyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_37__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_51__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_38_ng2_password_strength_bar__["PasswordStrengthBarModule"],
                __WEBPACK_IMPORTED_MODULE_43_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_50_angular_svg_icon__["a" /* AngularSvgIconModule */],
                __WEBPACK_IMPORTED_MODULE_52__yellowspot_ng_truncate__["a" /* TruncateModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addbusiness/addbusiness.module#AddbusinessPageModule', name: 'AddbusinessPage', segment: 'addbusiness', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/careernetwork/careernetwork.module#CareernetworkPageModule', name: 'CareernetworkPage', segment: 'careernetwork', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booknow/booknow.module#BooknowPageModule', name: 'BooknowPage', segment: 'booknow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofiletwo/editprofiletwo.module#EditprofiletwoPageModule', name: 'EditprofiletwoPage', segment: 'editprofiletwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editbusiness/editbusiness.module#EditbusinessPageModule', name: 'EditbusinessPage', segment: 'editbusiness', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgottwo/forgottwo.module#ForgottwoPageModule', name: 'ForgottwoPage', segment: 'forgottwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/getstart/getstart.module#GetstartPageModule', name: 'GetstartPage', segment: 'getstart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historytwo/historytwo.module#HistoryPageModule', name: 'HistorytwoPage', segment: 'historytwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logintwo/logintwo.module#LogintwoPageModule', name: 'LogintwoPage', segment: 'logintwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newartist/newartist.module#NewartistPageModule', name: 'NewartistPage', segment: 'newartist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ourtalkreply/ourtalkreply.module#OurtalkreplyPageModule', name: 'OurtalkreplyPage', segment: 'ourtalkreply', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservations/reservations.module#ReservationsPageModule', name: 'ReservationsPage', segment: 'reservations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/realtalk/realtalk.module#RealtalkPageModule', name: 'RealtalkPage', segment: 'realtalk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/review/review.module#ReviewPageModule', name: 'ReviewPage', segment: 'review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/talkreply/talkreply.module#TalkreplyPageModule', name: 'TalkreplyPage', segment: 'talkreply', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reviews2/reviews2.module#Reviews2PageModule', name: 'Reviews2Page', segment: 'reviews2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signuptwo/signuptwo.module#SignuptwoPageModule', name: 'SignuptwoPage', segment: 'signuptwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/termsbusiness/termsbusiness.module#TermsbusinessPageModule', name: 'TermsbusinessPage', segment: 'termsbusiness', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewproduct/viewproduct.module#ViewproductPageModule', name: 'ViewproductPage', segment: 'viewproduct', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewfavorites/viewfavorites.module#ViewfavoritesPageModule', name: 'ViewfavoritesPage', segment: 'viewfavorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewreservation/viewreservation.module#ViewreservationPageModule', name: 'ViewreservationPage', segment: 'viewreservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewreservationtwo/viewreservationtwo.module#ViewreservationtwoPageModule', name: 'ViewreservationtwoPage', segment: 'viewreservationtwo', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_getstart_getstart__["a" /* GetstartPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_realtalk_realtalk__["a" /* RealtalkPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_careernetwork_careernetwork__["a" /* CareernetworkPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_newartist_newartist__["a" /* NewartistPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_viewreservation_viewreservation__["a" /* ViewreservationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_historytwo_historytwo__["a" /* HistorytwoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_viewfavorites_viewfavorites__["a" /* ViewfavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_viewproduct_viewproduct__["a" /* ViewproductPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_booknow_booknow__["a" /* BooknowPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_editprofiletwo_editprofiletwo__["a" /* EditprofiletwoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_reservations_reservations__["a" /* ReservationsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_reviews2_reviews2__["a" /* Reviews2Page */],
                __WEBPACK_IMPORTED_MODULE_34__pages_editbusiness_editbusiness__["a" /* EditbusinessPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_logintwo_logintwo__["a" /* LogintwoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signuptwo_signuptwo__["a" /* SignuptwoPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_addbusiness_addbusiness__["a" /* AddbusinessPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_forgottwo_forgottwo__["a" /* ForgottwoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_viewreservationtwo_viewreservationtwo__["a" /* ViewreservationtwoPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_talkreply_talkreply__["a" /* TalkreplyPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_ourtalkreply_ourtalkreply__["a" /* OurtalkreplyPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
                __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_47__components_location_location__["a" /* LocationComponent */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ReservationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservationsPage = (function () {
    function ReservationsPage(navCtrl, navParams, appsetting, http, common, loadingCtrl, alertCtrl) {
        //alert('reservationsffff');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.pageno = 1;
    }
    ReservationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservationsPage');
        this.GetList();
    };
    ReservationsPage.prototype.GetList = function () {
        var _this = this;
        console.log('hereeee');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        var options = this.appsetting.header();
        var postdata = {
            role: user.role,
            user_id: user._id,
            page: this.pageno
        };
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'orders/getorders', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    _this.reservationsdata = '';
                    response.data.forEach(function (value, key) {
                        console.log(value);
                        var datetime = value.orderstart;
                        value.bookingtime = __WEBPACK_IMPORTED_MODULE_5_moment__(datetime).format('hh:mm A');
                        value.bookingdate = __WEBPACK_IMPORTED_MODULE_5_moment__(datetime).format('MM-DD-YYYY');
                        // value.bookingtime = parseInt( value.orderstart);
                        console.log(value.bookingtime);
                    });
                    _this.reservationsdata = response.data;
                    _this.totalpageno = response.page;
                    //                this.reservationsdata[0].bookingtime =  parseInt(this.reservationsdata[0].bookingtime);
                    console.log(_this.reservationsdata);
                }
                else {
                    _this.reservationsdata = '';
                    //this.common.presentAlert('Book now', 'Something went wrong!');
                }
            });
        });
    };
    /*********** function to accept the reservations *******************/
    ReservationsPage.prototype.Accept = function (orderid) {
        var _this = this;
        console.log('Accept clicked');
        console.log(orderid);
        //return false;
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        var options = this.appsetting.header();
        var postdata = {
            order_id: orderid,
            orderstatus: 1
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'orders/changeOrderStatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                _this.common.presentAlert('Reservation', 'Reservation accepted successfully!');
                _this.GetList();
            }
            else {
                _this.common.presentAlert('Reservation', 'Something went wrong!');
            }
        });
    };
    /*********** function to accept the reservations *******************/
    ReservationsPage.prototype.Decline = function (orderid, dec) {
        var _this = this;
        console.log('Decline clicked');
        if (dec != 2) {
            var user = JSON.parse(localStorage.getItem('CurrentUser'));
            var options = this.appsetting.header();
            var postdata = {
                order_id: orderid,
                orderstatus: 0
            };
            var serialized = this.appsetting.serializeObj(postdata);
            this.http.post(this.appsetting.url + 'orders/changeOrderStatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                if (response.status == true) {
                    _this.GetList();
                    _this.common.presentAlert('Reservation', 'Reservation declined!');
                }
                else {
                    _this.common.presentAlert('Reservation', 'Something went wrong!');
                }
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Reservation',
                message: 'Are you sure you want to decline?',
                buttons: [
                    {
                        text: 'Disagree',
                        role: 'cancel',
                        handler: function () {
                            console.log('alertCtrl clicked');
                        }
                    },
                    {
                        text: 'Agree',
                        handler: function () {
                            console.log('Agree clicked');
                            _this.Decline(orderid, 1);
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    /****** functions used for pagination ************/
    ReservationsPage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        this.pageno = this.pageno + 1;
        console.log(this.totalpageno);
        console.log(this.pageno);
        if (this.pageno < this.totalpageno) {
            this.GetList();
        }
        else {
            console.log('No more data to load');
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    /****** functions used for getlist on refresh ************/
    ReservationsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.ionViewDidLoad();
        this.GetList();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ReservationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reservations',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/reservations/reservations.html"*/'<!--\n  Generated template for the ReservationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton color="green">\n    <button ion-button menuToggle style="display:block !important;">\n      <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n    </button>\n  <ion-title>Home</ion-title>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    \n<!--<ion-list *ngIf="reservationsdata">\n  <ion-item-sliding #item>\n    <ion-item *ngFor="let reservation of reservationsdata;let i = index;">\n      Itemhhhhhh{{i}}hhh\n       <img [src]="reservation?.order_data[0]?.profile_pic">\n      <h2>{{reservation?.order_data[0]?.firstname}} {{reservation?.order_data[0]?.lastname}} </h2>\n        <p>{{reservation?.spacial_accomodation}}</p>\n        <div class="left"><p>Booking Date</p> <h5>{{reservation?.orderstart}} </h5></div>\n        <div class="right"><p>Booking Time</p><h5>{{reservation?.orderstart}}</h5></div>\n    </ion-item>\n    <ion-item-options side="left">\n      <button ion-button (click)="favorite(item)">Favorite</button>\n      <button ion-button color="danger" (click)="share(item)">Share</button>\n    </ion-item-options>\n    <ion-item-options side="right">\n      <button ion-button (click)="unread(item)">Unread</button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>-->\n  <ion-list *ngIf="reservationsdata">\n      <ion-item-sliding *ngFor="let reservation of reservationsdata">\n        <ion-item>\n            <ion-thumbnail item-start>\n              <img [src]="reservation?.order_data[0]?.profile_pic">\n            </ion-thumbnail>\n          <h2>{{reservation?.order_data[0]?.firstname}} {{reservation?.order_data[0]?.lastname}}</h2>\n          <p>{{reservation?.spacial_accomodation}}</p>\n          <div class="left">\n            <p>Booking Date</p>\n            <h5>{{reservation?.bookingdate}}</h5>\n          </div>\n          <div class="right">\n            <p>Booking Time</p>\n            <h5>{{reservation?.bookingtime}}</h5>\n          </div>\n        </ion-item>\n          \n       <ion-item-options side="right" class="btnsec">\n          <button ion-button color="green" (click)="Accept(reservation?._id,1)">\n<!--            <ion-icon><img src="assets/imgs/accept.png"></ion-icon>-->\n  <ion-icon style="font-size: 31px;font-weight: 700;" name="checkmark"></ion-icon>\n            Accept\n          </button>\n          <button ion-button color="reddrk" (click)="Decline(reservation?._id,2)">\n            <ion-icon><img src="assets/imgs/delete.png"></ion-icon>\n            Decline\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n<ion-list *ngIf="!reservationsdata">\n    <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n          <img style="width:200px;margin: auto;display: block;" src="assets/imgs/sorry.png">\n          <span> Looks like you have no reservations yet!</span>\n    </div>\n    </ion-list>\n<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/reservations/reservations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ReservationsPage);
    return ReservationsPage;
}());

//# sourceMappingURL=reservations.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getstart_getstart__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = (function () {
    function ForgotPage(navCtrl, navParams, formBuilder, http, appsetting, common, toastCtrl, loadingCtrl, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.appsetting = appsetting;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            this.common.tryagain();
        }
    }
    ForgotPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.ForgotForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, this.emailValidator.bind(this)]],
        });
    };
    ForgotPage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return { invalidEmail: true };
        }
    };
    ForgotPage.prototype.isValid = function (field) {
        var formField = this.ForgotForm.get(field);
        return formField.valid || formField.pristine;
    };
    ForgotPage.prototype.forgotpassword = function (formdata) {
        var _this = this;
        console.log(formdata.value);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            var options_1 = this.appsetting.header();
            var postdata = {
                email: formdata.value.email,
            };
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.url + 'users/forgetpassword', serialized, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.status == true) {
                        if (response.data) {
                            localStorage.setItem('CurrentUser', JSON.stringify(response.data.all));
                        }
                        _this.events.publish('Loggedin', 'loginpage');
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Forgot Password',
                            message: 'Please check your email to reset password',
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'submit',
                                    handler: function () {
                                        console.log('Submit clicked');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__getstart_getstart__["a" /* GetstartPage */]);
                                    }
                                }
                            ]
                        });
                        alert_1.present();
                    }
                    else {
                        _this.common.presentAlert('Forgot Password', response.message);
                    }
                });
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPage');
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/forgot/forgot.html"*/'<!--\n  Generated template for the ForgotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green"> \n    <ion-title>forgot password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="chngpwd">\n        <div class="image-wrapper">\n          <img src="assets/imgs/lock.png">\n        </div>\n         <p>Set a new password.</p>\n         <form class="formmain" [formGroup]="ForgotForm" (submit)="forgotpassword(ForgotForm)" >\n           <ion-list no-lines>\n<!--               <ion-item>\n                 <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n                 <ion-icon class="iconinput" item-start><img src="assets/imgs/email.png"></ion-icon>\n                 <span tem-content *ngIf="!isValid(\'email\')" class="validationpop animated bounce">Invalid email.</span>\n               </ion-item>-->\n               \n               <ion-item>\n            <ion-input type="email" placeholder="Email" formControlName="email" ></ion-input>\n            <ion-icon class="iconinput" item-start><img style="float: left; margin-top: 4px;" src="assets/imgs/email.png"></ion-icon>\n            <span item-content *ngIf="!isValid(\'email\')" class="validationpop animated bounce">Invalid email</span>\n          </ion-item>\n               \n             <button type="submit" class="btn1" ion-button color="green" block [disabled]="!ForgotForm.valid">SUBMIT</button>\n           </ion-list>\n         </form>\n         \n       </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/forgot/forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 248,
	"./af.js": 248,
	"./ar": 249,
	"./ar-dz": 250,
	"./ar-dz.js": 250,
	"./ar-kw": 251,
	"./ar-kw.js": 251,
	"./ar-ly": 252,
	"./ar-ly.js": 252,
	"./ar-ma": 253,
	"./ar-ma.js": 253,
	"./ar-sa": 254,
	"./ar-sa.js": 254,
	"./ar-tn": 255,
	"./ar-tn.js": 255,
	"./ar.js": 249,
	"./az": 256,
	"./az.js": 256,
	"./be": 257,
	"./be.js": 257,
	"./bg": 258,
	"./bg.js": 258,
	"./bm": 259,
	"./bm.js": 259,
	"./bn": 260,
	"./bn.js": 260,
	"./bo": 261,
	"./bo.js": 261,
	"./br": 262,
	"./br.js": 262,
	"./bs": 263,
	"./bs.js": 263,
	"./ca": 264,
	"./ca.js": 264,
	"./cs": 265,
	"./cs.js": 265,
	"./cv": 266,
	"./cv.js": 266,
	"./cy": 267,
	"./cy.js": 267,
	"./da": 268,
	"./da.js": 268,
	"./de": 269,
	"./de-at": 270,
	"./de-at.js": 270,
	"./de-ch": 271,
	"./de-ch.js": 271,
	"./de.js": 269,
	"./dv": 272,
	"./dv.js": 272,
	"./el": 273,
	"./el.js": 273,
	"./en-au": 274,
	"./en-au.js": 274,
	"./en-ca": 275,
	"./en-ca.js": 275,
	"./en-gb": 276,
	"./en-gb.js": 276,
	"./en-ie": 277,
	"./en-ie.js": 277,
	"./en-nz": 278,
	"./en-nz.js": 278,
	"./eo": 279,
	"./eo.js": 279,
	"./es": 280,
	"./es-do": 281,
	"./es-do.js": 281,
	"./es-us": 282,
	"./es-us.js": 282,
	"./es.js": 280,
	"./et": 283,
	"./et.js": 283,
	"./eu": 284,
	"./eu.js": 284,
	"./fa": 285,
	"./fa.js": 285,
	"./fi": 286,
	"./fi.js": 286,
	"./fo": 287,
	"./fo.js": 287,
	"./fr": 288,
	"./fr-ca": 289,
	"./fr-ca.js": 289,
	"./fr-ch": 290,
	"./fr-ch.js": 290,
	"./fr.js": 288,
	"./fy": 291,
	"./fy.js": 291,
	"./gd": 292,
	"./gd.js": 292,
	"./gl": 293,
	"./gl.js": 293,
	"./gom-latn": 294,
	"./gom-latn.js": 294,
	"./gu": 295,
	"./gu.js": 295,
	"./he": 296,
	"./he.js": 296,
	"./hi": 297,
	"./hi.js": 297,
	"./hr": 298,
	"./hr.js": 298,
	"./hu": 299,
	"./hu.js": 299,
	"./hy-am": 300,
	"./hy-am.js": 300,
	"./id": 301,
	"./id.js": 301,
	"./is": 302,
	"./is.js": 302,
	"./it": 303,
	"./it.js": 303,
	"./ja": 304,
	"./ja.js": 304,
	"./jv": 305,
	"./jv.js": 305,
	"./ka": 306,
	"./ka.js": 306,
	"./kk": 307,
	"./kk.js": 307,
	"./km": 308,
	"./km.js": 308,
	"./kn": 309,
	"./kn.js": 309,
	"./ko": 310,
	"./ko.js": 310,
	"./ky": 311,
	"./ky.js": 311,
	"./lb": 312,
	"./lb.js": 312,
	"./lo": 313,
	"./lo.js": 313,
	"./lt": 314,
	"./lt.js": 314,
	"./lv": 315,
	"./lv.js": 315,
	"./me": 316,
	"./me.js": 316,
	"./mi": 317,
	"./mi.js": 317,
	"./mk": 318,
	"./mk.js": 318,
	"./ml": 319,
	"./ml.js": 319,
	"./mr": 320,
	"./mr.js": 320,
	"./ms": 321,
	"./ms-my": 322,
	"./ms-my.js": 322,
	"./ms.js": 321,
	"./mt": 323,
	"./mt.js": 323,
	"./my": 324,
	"./my.js": 324,
	"./nb": 325,
	"./nb.js": 325,
	"./ne": 326,
	"./ne.js": 326,
	"./nl": 327,
	"./nl-be": 328,
	"./nl-be.js": 328,
	"./nl.js": 327,
	"./nn": 329,
	"./nn.js": 329,
	"./pa-in": 330,
	"./pa-in.js": 330,
	"./pl": 331,
	"./pl.js": 331,
	"./pt": 332,
	"./pt-br": 333,
	"./pt-br.js": 333,
	"./pt.js": 332,
	"./ro": 334,
	"./ro.js": 334,
	"./ru": 335,
	"./ru.js": 335,
	"./sd": 336,
	"./sd.js": 336,
	"./se": 337,
	"./se.js": 337,
	"./si": 338,
	"./si.js": 338,
	"./sk": 339,
	"./sk.js": 339,
	"./sl": 340,
	"./sl.js": 340,
	"./sq": 341,
	"./sq.js": 341,
	"./sr": 342,
	"./sr-cyrl": 343,
	"./sr-cyrl.js": 343,
	"./sr.js": 342,
	"./ss": 344,
	"./ss.js": 344,
	"./sv": 345,
	"./sv.js": 345,
	"./sw": 346,
	"./sw.js": 346,
	"./ta": 347,
	"./ta.js": 347,
	"./te": 348,
	"./te.js": 348,
	"./tet": 349,
	"./tet.js": 349,
	"./th": 350,
	"./th.js": 350,
	"./tl-ph": 351,
	"./tl-ph.js": 351,
	"./tlh": 352,
	"./tlh.js": 352,
	"./tr": 353,
	"./tr.js": 353,
	"./tzl": 354,
	"./tzl.js": 354,
	"./tzm": 355,
	"./tzm-latn": 356,
	"./tzm-latn.js": 356,
	"./tzm.js": 355,
	"./uk": 357,
	"./uk.js": 357,
	"./ur": 358,
	"./ur.js": 358,
	"./uz": 359,
	"./uz-latn": 360,
	"./uz-latn.js": 360,
	"./uz.js": 359,
	"./vi": 361,
	"./vi.js": 361,
	"./x-pseudo": 362,
	"./x-pseudo.js": 362,
	"./yo": 363,
	"./yo.js": 363,
	"./zh-cn": 364,
	"./zh-cn.js": 364,
	"./zh-hk": 365,
	"./zh-hk.js": 365,
	"./zh-tw": 366,
	"./zh-tw.js": 366
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 540;

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetstartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logintwo_logintwo__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GetstartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GetstartPage = (function () {
    function GetstartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // alert('get started page');
    }
    GetstartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GetstartPage');
    };
    GetstartPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    GetstartPage.prototype.loginbs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__logintwo_logintwo__["a" /* LogintwoPage */]);
    };
    GetstartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-getstart',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/getstart/getstart.html"*/'<!--\n  Generated template for the GetstartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n    <ion-title>Getstart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="getbg" scroll="false">\n\n<div class="vcenter">\n<!--<div class="logo"><img src="assets/imgs/logo.png"></div>\n<h4>Welcome to Melanin Enterprise</h4>\n<p>The only social network designed specifically for \nblack people to discover and support black \nowned businesses and new music artists, find \ncareers, and meet new friends!</p>-->\n\n<ion-grid style="margin-top:30px;">\n  <ion-row>\n    <ion-col col-6><button class="box" color="green" ion-button block (click)="loginbs()">I AM A BUSINESS</button></ion-col>\n    <ion-col col-6><button class="box ylo" color="yellow" ion-button block (click)="login()">I AM A MEMBER</button></ion-col>\n  </ion-row>\n</ion-grid>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/getstart/getstart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], GetstartPage);
    return GetstartPage;
}());

//# sourceMappingURL=getstart.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_getstart_getstart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_realtalk_realtalk__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_viewreservation_viewreservation__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_viewreservationtwo_viewreservationtwo__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_history_history__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_viewfavorites_viewfavorites__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_terms_terms__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_privacy_privacy__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_editprofiletwo_editprofiletwo__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_reservations_reservations__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_reviews2_reviews2__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_editbusiness_editbusiness__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_addbusiness_addbusiness__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_angular_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_historytwo_historytwo__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_fcm__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























//import { InAppBrowser } from '@ionic-native/in-app-browser';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, http, appsetting, common, toastCtrl, events, app, menu, 
        // private iab: InAppBrowser,
        fcm) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.appsetting = appsetting;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.app = app;
        this.menu = menu;
        this.fcm = fcm;
        alert('updaated latest 1');
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.overlaysWebView(true);
            // statusBar.backgroundColorByHexString('#ffffff');
            var a = statusBar.hide();
            // ionicConfigProvider.views.swipeBackEnabled(false)
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // statusBar.styleDefault();
            splashScreen.hide();
            _this.menu.swipeEnable(false);
        });
        this.initializeApp();
        if (localStorage.getItem('CurrentUser')) {
            this.getUser();
            this.role = JSON.parse(localStorage.getItem('CurrentUser')).role;
        }
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.app.getRootNav();
        this.events.subscribe('Loggedin', function (Loggedin) {
            console.log(Loggedin);
            console.log('Loggedin');
            _this.getUser();
        });
        // used for an example of ngFor and navigation
        this.events.subscribe('skip', function (skip) {
            console.log('skip');
            _this.currentuser = null;
            _this.pages = [
                { title: 'Sign in or create account', component: __WEBPACK_IMPORTED_MODULE_4__pages_getstart_getstart__["a" /* GetstartPage */], icon: 'assets/imgs/user.png' },
                { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_11__pages_terms_terms__["a" /* TermsPage */], icon: 'assets/imgs/terms.png' },
                { title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_12__pages_privacy_privacy__["a" /* PrivacyPage */], icon: 'assets/imgs/privacy.png' },
            ];
        });
        if (localStorage.getItem('CurrentUser')) {
            console.log(JSON.parse(localStorage.getItem('CurrentUser')));
            var user = JSON.parse(localStorage.getItem('CurrentUser'));
            this.events.publish('Loggedin', 'loginpage');
            console.log(user);
            if (user.role == "business") {
                if (user.business_data.length > 0) {
                    this.rootPage = __WEBPACK_IMPORTED_MODULE_14__pages_reservations_reservations__["a" /* ReservationsPage */];
                }
                else {
                    this.rootPage = __WEBPACK_IMPORTED_MODULE_20__pages_addbusiness_addbusiness__["a" /* AddbusinessPage */];
                }
            }
            else {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            }
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_getstart_getstart__["a" /* GetstartPage */];
        }
        /******** function for handle notifications **************/
        //                this.fcm.onNotification().subscribe(data => {
        //                    if (data.wasTapped) {
        //                        console.log("Received in background");
        //                    } else {
        //                        console.log("Received in foreground");
        //                    };
        //                })
    };
    MyApp.prototype.tryagain = function () {
        var _this = this;
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            console.log('you are offline');
            var alert_1 = this.alertCtrl.create({
                message: '<img src="assets/imgs/network.png">',
                buttons: [{
                        text: 'Try again',
                        role: 'cancel',
                        handler: function () {
                            console.log('try again clicked');
                            _this.tryagain();
                        }
                    }]
            });
            alert_1.present();
        }
    };
    MyApp.prototype.openPage = function (page) {
        console.log(page);
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component == 'artist') {
            this.InappbrowserArtist();
        }
        else if (page.component == 'career') {
            this.InappbrowserCareer();
        }
        else if (page.component == 'advertising') {
            this.InappbrowserAdvertisement();
        }
        else {
            this.nav.setRoot(page.component);
            this.activePage = page;
        }
    };
    MyApp.prototype.checkActivePage = function (page) {
        return page === this.activePage;
    };
    MyApp.prototype.logout = function () {
        localStorage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_getstart_getstart__["a" /* GetstartPage */]);
    };
    MyApp.prototype.getUser = function () {
        var _this = this;
        if (localStorage.getItem('CurrentUser')) {
            console.log(JSON.parse(localStorage.getItem('CurrentUser'))._id);
            var options = this.appsetting.header();
            var postdata = {
                user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            };
            console.log(postdata);
            var serialized = this.appsetting.serializeObj(postdata);
            this.http.post(this.appsetting.url + 'users/userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                if (response.status == true) {
                    localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                    if (response.data.profile_pic) {
                    }
                    else {
                        response.data.profile_pic = 'assets/imgs/profile.png';
                    }
                    _this.currentuser = null;
                    _this.currentuser = response.data;
                    console.log(_this.currentuser);
                    if (_this.currentuser.role == "member") {
                        _this.pages = [
                            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'assets/imgs/home.png' },
                            { title: 'Real Talk', component: __WEBPACK_IMPORTED_MODULE_6__pages_realtalk_realtalk__["a" /* RealtalkPage */], icon: 'assets/imgs/realtalk.png' },
                            { title: 'Career Network', component: 'career', icon: 'assets/imgs/career.png' },
                            { title: 'Edit Profile', component: __WEBPACK_IMPORTED_MODULE_13__pages_editprofiletwo_editprofiletwo__["a" /* EditprofiletwoPage */], icon: 'assets/imgs/editprofile.png' },
                            //                {title: 'Edit Business Information', component: EditbusinessPage, icon: 'assets/imgs/editprofile.png'},
                            //                {title: 'Reviews', component: Reviews2Page, icon: 'assets/imgs/reviews.png'},
                            { title: 'New Artist', component: 'artist', icon: 'assets/imgs/artist.png' },
                            { title: 'View Reservations', component: __WEBPACK_IMPORTED_MODULE_8__pages_viewreservationtwo_viewreservationtwo__["a" /* ViewreservationtwoPage */], icon: 'assets/imgs/reservation.png' },
                            //                {title: 'Reservations', component: ReservationsPage, icon: 'assets/imgs/reservation.png'},
                            { title: 'History', component: __WEBPACK_IMPORTED_MODULE_9__pages_history_history__["a" /* HistoryPage */], icon: 'assets/imgs/history.png' },
                            { title: 'View Favorites', component: __WEBPACK_IMPORTED_MODULE_10__pages_viewfavorites_viewfavorites__["a" /* ViewfavoritesPage */], icon: 'assets/imgs/favorites.png' },
                            { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_11__pages_terms_terms__["a" /* TermsPage */], icon: 'assets/imgs/terms.png' },
                            { title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_12__pages_privacy_privacy__["a" /* PrivacyPage */], icon: 'assets/imgs/privacy.png' }
                        ];
                    }
                    else {
                        _this.pages = [
                            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_14__pages_reservations_reservations__["a" /* ReservationsPage */], icon: 'assets/imgs/home.png' },
                            { title: 'Reservations', component: __WEBPACK_IMPORTED_MODULE_7__pages_viewreservation_viewreservation__["a" /* ViewreservationPage */], icon: 'assets/imgs/reservation.png' },
                            { title: 'History', component: __WEBPACK_IMPORTED_MODULE_22__pages_historytwo_historytwo__["a" /* HistorytwoPage */], icon: 'assets/imgs/history.png' },
                            { title: 'Reviews', component: __WEBPACK_IMPORTED_MODULE_15__pages_reviews2_reviews2__["a" /* Reviews2Page */], icon: 'assets/imgs/reviews.png' },
                            { title: 'Edit Business Info', component: __WEBPACK_IMPORTED_MODULE_16__pages_editbusiness_editbusiness__["a" /* EditbusinessPage */], icon: 'assets/imgs/editprofile.png' },
                            { title: 'Advertising', component: 'advertising', icon: 'assets/imgs/editprofile.png' },
                            { title: 'Career Network', component: 'career', icon: 'assets/imgs/career.png' },
                            { title: 'Edit Profile', component: __WEBPACK_IMPORTED_MODULE_13__pages_editprofiletwo_editprofiletwo__["a" /* EditprofiletwoPage */], icon: 'assets/imgs/editprofile.png' },
                            { title: 'Real Talk', component: __WEBPACK_IMPORTED_MODULE_6__pages_realtalk_realtalk__["a" /* RealtalkPage */], icon: 'assets/imgs/realtalk.png' },
                            { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_11__pages_terms_terms__["a" /* TermsPage */], icon: 'assets/imgs/terms.png' },
                            { title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_12__pages_privacy_privacy__["a" /* PrivacyPage */], icon: 'assets/imgs/privacy.png' }
                            //                {title: 'New Artist',  component: 'artist', icon: 'assets/imgs/artist.png'},
                            //                {title: 'Reservations', component: ReservationsPage, icon: 'assets/imgs/reservation.png'},
                            //                {title: 'View Favorites', component: ViewfavoritesPage, icon: 'assets/imgs/favorites.png'},
                        ];
                    }
                }
            });
        }
    };
    MyApp.prototype.InappbrowserArtist = function () {
        var url;
        if (this.role == 'member') {
            console.log(this.role);
            url = 'https://ionicframework.com/';
        }
        else {
            console.log(this.role);
            url = 'https://google.com/';
        }
        //     let InAppBrowserOptions = {
        //        locatio:'no',
        //        closebuttoncaption:'Back to app'
        //    }
        this.common.InappBrowser(url);
        // const browser = this.iab.create(url,'_blank',InAppBrowserOptions);
        //browser.close();
    };
    MyApp.prototype.InappbrowserCareer = function () {
        var url;
        if (this.role == 'member') {
            url = 'https://ionicframework.com/';
        }
        else {
            url = 'https://google.com/';
        }
        this.common.InappBrowser(url);
    };
    MyApp.prototype.InappbrowserAdvertisement = function () {
        var url;
        if (this.role == 'member') {
            url = 'https://ionicframework.com/';
        }
        else {
            url = 'https://google.com/';
        }
        this.common.InappBrowser(url);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/app/app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n  <ion-header>\n    <ion-toolbar class="toolbarhead" color="green">\n      <div class="menuprofile" *ngIf="currentuser">\n        <div class="profile_strip">\n          <div class="profile_pic">\n            <div class="profile_picinn">\n            <img src="{{currentuser?.profile_pic}}"> \n            </div>\n          </div>\n          <h2>{{currentuser?.firstname}}</h2>\n          <p>{{currentuser?.email}}</p>\n        </div>\n      </div>\n        \n        <div class="menuprofile" *ngIf="!currentuser">\n        <div class="profile_strip">\n          <div class="profile_pic">\n            <div class="profile_picinn">\n            <img src="assets/imgs/profile.png"> \n            </div>\n          </div>\n<!--          <h2>{{currentuser?.firstname}}</h2>\n          <p>{{currentuser?.email}}</p>-->\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list no-lines class="sidemenu" *ngIf="currentuser">\n      <button menuClose color="black" ion-item *ngFor="let p of pages" (click)="openPage(p)" [class.active]="checkActivePage(p)">\n        <ion-icon><img width="20px" src="{{p.icon}}"></ion-icon>\n        {{p.title}}\n      </button>\n        <button menuClose color="black" ion-item (click)="logout()">\n        <ion-icon><img width="20px" src="assets/imgs/logout.png"></ion-icon>\n        Logout\n      </button>\n    </ion-list>\n      \n      <ion-list no-lines class="sidemenu" *ngIf="currentuser == null">\n      <button menuClose color="black" ion-item *ngFor="let p of pages" (click)="openPage(p)" [class.active]="checkActivePage(p)">\n        <ion-icon><img width="20px" src="{{p.icon}}"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_17__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_18__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_19__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_21_ionic_angular_index__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_fcm__["a" /* FCM */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationComponent = (function () {
    function LocationComponent(geolocation) {
        this.geolocation = geolocation;
        console.log('Hello LocationComponent Component');
        this.text = 'Hello World';
        this.currentLocation();
    }
    LocationComponent.prototype.currentLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                // callback(position.coords.latitude);
                return position.coords.latitude;
            }, function () {
            });
        }
        else {
            // Browser doesn't support Geolocation
            //handleLocationError(false, infoWindow, map.getCenter());
        }
        //        console.log(this.CurrentLatLong)
        //        return 'hello location';
    };
    LocationComponent.prototype.LatLong = function (lat, long) {
        console.log(lat);
    };
    LocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'location',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/components/location/location.html"*/'<!-- Generated template for the LocationComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/components/location/location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], LocationComponent);
    return LocationComponent;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddbusinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservations_reservations__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logintwo_logintwo__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddbusinessPage = (function () {
    function AddbusinessPage(navCtrl, navParams, formBuilder, http, appsetting, common, loadingCtrl, zone, camera, actionSheetCtrl, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.appsetting = appsetting;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.data = {}; //variable used for ngModel
        this.bit = 0;
        this.base64Image = []; //variable used for show selected image
        this.ImageToSend = []; //variable used for send base64 image to api
        this.senddays = []; //variable used for send days as comma separated
        this.sendopeningtime = []; //variable used for send openingtime as comma separated
        this.sendclosingtime = []; //variable used for  send closingtime as comma separated
        this.daytime = []; //array used for display selected day,openingtime and closing time.
        this.service = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        /**** end *****/
        this.postalcode = 0;
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //to display days form
        // alert('updated ggg');
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            this.common.tryagain();
        }
        console.log(this.daytime);
        console.log(this.days);
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    AddbusinessPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AddbusinessPage');
        this.http.get(this.appsetting.url + 'categories/get').map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            _this.category = response;
        });
    };
    AddbusinessPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.AddbusinessForm = this.formBuilder.group({
            businesstype: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            businessname: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            address: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            category: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            category_id: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            days: [''],
            openinghours: [''],
            closinghours: [''],
            services: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            services_title: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            instagramlink: [''],
            facebooklink: [''],
            twitterlink: [''],
            veteranowned: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            onlinemarketplace: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            accept: [false, [this.checkbox.bind(this)]],
            reservation: [false, [this.checkbox.bind(this)]],
            zipcode: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            websiteurl: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]]
        });
    };
    /********* function for display services as per category **************/
    AddbusinessPage.prototype.selectedCat = function (id) {
        var temp = this;
        console.log('id');
        console.log(id);
        this.category.forEach(function (value, key) {
            console.log(value);
            console.log(key);
            if (value._id == id) {
                temp.services = value.sub_category;
                temp.data.category_title = value.title;
            }
        });
        console.log(this.services);
    };
    AddbusinessPage.prototype.selectedService = function (serviceid) {
        var temp = this;
        console.log(serviceid);
        this.services.forEach(function (value, key) {
            console.log(value);
            console.log(key);
            if (value._id == serviceid) {
                console.log(value);
                temp.data.service_title = value.sub_category_title;
            }
        });
    };
    AddbusinessPage.prototype.selectedBusiness = function (event) {
        console.log(event);
    };
    AddbusinessPage.prototype.checkbox = function (legal) {
        console.log(legal.value);
        if (legal.value == false) {
            return { accept: false };
        }
    };
    /****** function used for autocomplete prediction ***********/
    AddbusinessPage.prototype.updateSearch = function () {
        console.log('update');
        console.log(this.autocomplete.query);
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query }, function (predictions, status) {
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
    };
    /****** function used for choose item from autocomplete prediction ***********/
    AddbusinessPage.prototype.chooseItem = function (item) {
        var temp = this;
        console.log(item);
        this.autocomplete.query = item;
        this.autocompleteItems = [];
        this.geocoder.geocode({ 'address': item }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
                console.log(results);
                console.log(results[0].geometry.location.lat());
                console.log(results[0].geometry.location.lng());
                temp.latitude = results[0].geometry.location.lat();
                temp.longitude = results[0].geometry.location.lng();
                results[0].address_components.forEach(function (value, key) {
                    console.log(key);
                    console.log(value);
                    value.types.forEach(function (val, key) {
                        console.log(val);
                        console.log(key);
                        if (val == "postal_code") {
                            temp.postalcode = value.long_name;
                            console.log(temp.postalcode);
                        }
                    });
                });
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    AddbusinessPage.prototype.reservation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reservations_reservations__["a" /* ReservationsPage */]);
    };
    /****** function used for manage selected days,opening and closing time ***********/
    AddbusinessPage.prototype.closingtime = function (timedata) {
        var temp = this;
        console.log(timedata.value);
        console.log(timedata.value.days);
        console.log(timedata.value.closinghours);
        console.log(timedata.value.openinghours);
        if (timedata.value.days && timedata.value.closinghours && timedata.value.openinghours) {
            var a = timedata.value.openinghours.split(':');
            var b = timedata.value.closinghours.split(':');
            if (b[0] > a[0]) {
                if (a[0] > 11) {
                    // console.log(timedata.value.openinghours.includes("PM"));
                    timedata.value.openinghours = timedata.value.openinghours + ' PM';
                }
                else {
                    //console.log(timedata.value.openinghours.includes("AM"));
                    timedata.value.openinghours = timedata.value.openinghours + ' AM';
                }
                console.log(timedata.value.openinghours);
                if (b[0] > 11) {
                    timedata.value.closinghours = timedata.value.closinghours + ' PM';
                }
                else {
                    timedata.value.closinghours = timedata.value.closinghours + ' AM';
                }
                console.log(timedata.value.closinghours);
                var dayOpeningClosing = {
                    day: timedata.value.days,
                    openingtime: timedata.value.openinghours,
                    closingtime: timedata.value.closinghours
                };
                //day,opening time and closing time of data to post on api.
                this.senddays.push(timedata.value.days);
                var ot = timedata.value.openinghours.split(' ');
                var ct = timedata.value.closinghours.split(' ');
                this.sendopeningtime.push(ot[0]);
                this.sendclosingtime.push(ct[0]);
                console.log(this.senddays.join(','));
                console.log(this.sendopeningtime.join(','));
                console.log(this.sendclosingtime.join(','));
                /**** array for display day,opeing time and closing time on html after selection **********/
                this.daytime.push(dayOpeningClosing);
                console.log(this.daytime);
                this.data.days = '';
                this.data.openinghours = '';
                this.data.closinghours = '';
            }
            else {
                this.common.presentAlert('Add business', 'Closing time must be greater than opening time!');
            }
        }
        else {
            this.common.presentAlert('Add business', 'Are you sure you selected day,opening and closing time?');
        }
    };
    /****** function used for  delete selected day,openingtime and closing time.***********/
    AddbusinessPage.prototype.DeleteTimes = function (event, ind) {
        var temp = this;
        console.log(event.day);
        console.log(ind);
        /**** pop a value from array by index ************/
        console.log(temp.daytime);
        temp.daytime.splice(ind, 1);
        temp.senddays.splice(ind, 1);
        console.log(this.daytime.length);
        if (this.daytime.length == 0) {
            this.data.days = '';
            this.data.openinghours = '';
            this.data.closinghours = '';
        }
    };
    AddbusinessPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose image',
            buttons: [
                {
                    text: 'Camera',
                    role: 'submit',
                    handler: function () {
                        console.log('submit clicked');
                        _this.chooseImage(1);
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log('Gallery clicked');
                        _this.chooseImage(0);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AddbusinessPage.prototype.chooseImage = function (Type) {
        var _this = this;
        var options = {
            quality: 10,
            sourceType: Type,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 800,
            targetHeight: 500,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.bit = _this.bit + 1;
            if (_this.bit > 10) {
                _this.common.presentAlert('Add business', 'You can not upload more than 10 images.');
            }
            else {
                _this.base64Image.push('data:image/jpeg;base64,' + imageData);
                _this.ImageToSend.push(imageData);
                console.log(_this.base64Image.length);
                var options_1 = _this.appsetting.header();
                var postdata = {
                    user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                    business_image: imageData
                };
                var serialized = _this.appsetting.serializeObj(postdata);
                var Loading = _this.loadingCtrl.create({
                    spinner: 'bubbles',
                    content: 'Please wait...'
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.url + 'users/add_business_image', serialized, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        Loading.dismiss();
                        console.log(response.data.business_image[0]._id);
                        _this.businessid = response.data.business_image[0]._id;
                    });
                });
            }
        }, function (err) {
            // Handle error
            console.log(err);
        });
    };
    AddbusinessPage.prototype.AddBusiness = function (addbusiness) {
        var _this = this;
        console.log(addbusiness.value);
        var options = this.appsetting.header();
        if (addbusiness.value.veteranowned == "yes") {
            addbusiness.value.veteranowned = 1;
        }
        else {
            addbusiness.value.veteranowned = 0;
        }
        if (addbusiness.value.onlinemarketplace == "yes") {
            addbusiness.value.onlinemarketplace = 1;
        }
        else {
            addbusiness.value.onlinemarketplace = 0;
        }
        if (addbusiness.value.accept == true) {
            addbusiness.value.accept = 1;
        }
        else {
            addbusiness.value.accept = 0;
        }
        if (addbusiness.value.reservation == true) {
            addbusiness.value.reservation = 1;
        }
        else {
            addbusiness.value.reservation = 0;
        }
        if (this.postalcode != 0) {
            this.postalcode = this.postalcode;
        }
        else {
            this.postalcode = 0;
        }
        var postdata;
        if (this.daytime.length > 0) {
            if (this.ImageToSend.length > 0) {
                postdata = {
                    user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                    role: 'business',
                    business_type: 3,
                    business_name: addbusiness.value.businessname,
                    business_phone_number: addbusiness.value.phone,
                    address: addbusiness.value.address,
                    business_description: addbusiness.value.description,
                    category: addbusiness.value.category_id,
                    category_id: addbusiness.value.category,
                    sub_cat: addbusiness.value.services_title,
                    sub_cat_id: addbusiness.value.services,
                    twitter_link: addbusiness.value.twitterlink,
                    facebook_link: addbusiness.value.facebooklink,
                    instagram_link: addbusiness.value.instagramlink,
                    veteran_business: addbusiness.value.veteranowned,
                    own_online_market_place: addbusiness.value.onlinemarketplace,
                    accept_appointments: addbusiness.value.accept,
                    accept_reservations: addbusiness.value.reservation,
                    lat: this.latitude,
                    long: this.longitude,
                    opening_days: this.senddays.join(','),
                    opening_time: this.sendopeningtime.join(','),
                    closing_time: this.sendclosingtime.join(','),
                    zip_code: addbusiness.value.zipcode,
                    website_url: addbusiness.value.websiteurl
                };
                console.log('postdata------');
                console.log(postdata);
                var serialized = this.appsetting.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    content: 'Loading...'
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.url + 'users/addbusiness', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        Loading.dismiss();
                        if (response.status == true) {
                            _this.events.publish('Loggedin', 'loginpage');
                            //                            this.navCtrl.push(ReservationsPage);
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Add business',
                                message: 'Your business has been successfully added',
                                buttons: [
                                    {
                                        text: 'Ok',
                                        role: 'submit',
                                        handler: function () {
                                            console.log('ok clicked');
                                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reservations_reservations__["a" /* ReservationsPage */]);
                                        }
                                    }
                                ]
                            });
                            alert_1.present();
                        }
                        else {
                            _this.common.presentAlert('Add business', response.message);
                        }
                    });
                });
            }
            else {
                this.common.presentAlert('Add business', 'Must upload at least one business image.');
            }
        }
        else {
            this.common.presentAlert('Add business', 'Are you sure you selected day,opening and closing time?');
        }
    };
    AddbusinessPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__logintwo_logintwo__["a" /* LogintwoPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddbusinessPage.prototype, "mapElement", void 0);
    AddbusinessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addbusiness',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/addbusiness/addbusiness.html"*/'<!--\n  Generated template for the AddbusinessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar color="green">\n        <ion-buttons start>\n            <button ion-button icon-only (click)="login()">\n                    <ion-icon class="bckbtn" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>add business</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="AddbusinessForm" (submit)="AddBusiness(AddbusinessForm)">\n        <ion-list no-lines>\n            <!--            <ion-item>\n                            <ion-label>Business type</ion-label>\n                            <ion-select formControlName="businesstype" (ionChange)="selectedBusiness($event)">\n                                <ion-option value="1">Premium</ion-option>\n                                <ion-option value="">Valued</ion-option>\n                            </ion-select>\n                        </ion-item>-->\n            <ion-item>\n                <ion-input type="text" placeholder="Business Name" formControlName="businessname"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-input type="tel" placeholder="Phone Number" formControlName="phone" maxLength="12"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-input type="text" placeholder="Address" formControlName="address" [(ngModel)]="autocomplete.query" (input)="updateSearch()"></ion-input>\n            </ion-item>\n            <div *ngIf="autocompleteItems != \'\'" class="suggestion">\n                <ion-label *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">{{ item }}</ion-label>\n            </div>\n            <ion-item>\n                <ion-input type="text" placeholder="Zip code" formControlName="zipcode"></ion-input>\n            </ion-item>\n            <ion-item class="area">\n                <ion-textarea  placeholder="Description" formControlName="description"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Category</ion-label>\n                <ion-select class="catoption" formControlName="category" (ionChange)="selectedCat($event)">\n                    <ion-option *ngFor="let cat of category" value ="{{cat._id}}">{{cat.title}}\n                        <ion-input type="hidden" [(ngModel)]="data.category_title" formControlName="category_id"></ion-input>\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n\n            <h2>Add opening and closing hours.</h2>\n\n            <ion-item>\n                <ion-label>Select Day</ion-label>\n                <ion-select formControlName="days" [(ngModel)]="data.days">\n                    <ion-option *ngFor="let day of days;let i = index">{{day}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-grid class="paddingnone">\n                <ion-row>\n                    <ion-col col-5 class="padding-left">\n                        <ion-item>\n                            <ion-datetime placeholder="Opening Hours" displayFormat="HH:mm A" [(ngModel)]="data.openinghours" formControlName="openinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-5 class="paddingtopbtm">\n                        <ion-item>\n                            <ion-datetime placeholder="Closing Hours" displayFormat="HH:mm A" [(ngModel)]="data.closinghours" formControlName="closinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col> \n                    <ion-col col-2 class="padding-right">\n                        <ion-item class="addbtn">\n                            <button type="button" ion-button clear color="gray" (click)="closingtime(AddbusinessForm)"><ion-icon name="add"></ion-icon></button>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n            <div class="tagsec" *ngIf="daytime.length>0">\n                <div class="inner-sec" *ngFor="let d of daytime;let i = index">\n                     <p style="margin-bottom:1px;">{{d.day}}</p>\n                    <p><span>{{d.openingtime}}</span> to <span>{{d.closingtime}}</span></p>\n                    <ion-icon name="close" (click)="DeleteTimes(d,i)"></ion-icon>\n                </div>\n            </div>\n\n            <ion-item *ngIf="services">\n                <ion-label>Services</ion-label>\n                <ion-select class="catoption" formControlName="services" (ionChange)="selectedService($event)">\n                    <ion-option *ngFor="let service of services" value="{{service._id}}">{{service.sub_category_title}}\n                        <ion-input type="hidden" [(ngModel)]="data.service_title" formControlName="services_title"></ion-input>\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n\n            <!--            <h2>Social Links</h2>\n            \n                        <ion-item>\n                            <img src="assets/imgs/instgrm.png" item-start class="social">\n                            <ion-input type="text" placeholder="https://www.instagram.com/" formControlName="instagramlink" autocapitalize="off"></ion-input>\n                        </ion-item>\n            \n                        <ion-item>\n                            <img src="assets/imgs/fb.png" item-start class="social">\n                            <ion-input type="text" placeholder="https://www.facebook.com/" formControlName="facebooklink" autocapitalize="off"></ion-input>\n                        </ion-item>\n            \n                        <ion-item>\n                            <img src="assets/imgs/twtr.png" item-start class="social">\n                            <ion-input type="text" placeholder="https://www.twitter.com/" formControlName="twitterlink" autocapitalize="off"></ion-input>\n                        </ion-item>-->\n            <ion-item>\n                \n                <ion-input type="text" placeholder="https://www.websitename.com/" formControlName="websiteurl"></ion-input>\n            </ion-item>\n\n            <h2>Is this a veteran owned business?</h2>\n\n            <ion-list radio-group style="margin:0 !important;" formControlName="veteranowned">\n                <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                    <ion-radio checked="yes" value="yes"></ion-radio>\n                    <ion-label>Yes</ion-label>\n                </ion-item>\n\n                <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                    <ion-radio value="no"></ion-radio>\n                    <ion-label>No</ion-label>\n                </ion-item>\n            </ion-list>\n\n            <h2>Do you own an online marketplace?</h2>\n\n            <ion-list radio-group style="margin:0 !important;" formControlName="onlinemarketplace">\n                <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                    <ion-radio checked="yes" value="yes"></ion-radio>\n                    <ion-label>Yes</ion-label>\n                </ion-item>\n\n                <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                    <ion-radio value="no"></ion-radio>\n                    <ion-label>No</ion-label>\n                </ion-item>\n            </ion-list>\n\n            <h2>Do you accept?</h2>\n            <ion-list style="margin:0 !important;">\n                <ion-item class="chck">\n                    <ion-checkbox formControlName="accept" style="margin-right: 9px !important;"></ion-checkbox>\n                    <ion-label>Appointments</ion-label>\n                </ion-item>\n                <ion-item class="chck">\n                    <ion-checkbox formControlName="reservation" style="margin-right: 9px !important;"></ion-checkbox>\n                    <ion-label>Reservations</ion-label>\n                </ion-item>\n            </ion-list>\n        </ion-list>\n        <div class="photosec">\n            <h2 style="position:relative;">Add Photo <span>( Multiple photos )</span>\n                <button *ngIf="bit<=4" type="button" ion-button color="green" (click)="presentActionSheet()"><ion-icon name="add"></ion-icon></button>\n            </h2>\n            <ion-grid class="paddingnone" *ngIf="base64Image.length>0">\n                <ion-row>\n                    <ion-col col-4 *ngFor="let img of base64Image">\n                             <div class="image-wrapper">\n                            <img src="{{img}}">\n                        </div>\n                    </ion-col>\n                    <!--            <ion-col col-4>\n                                    <div class="image-wrapper">\n                                      <img src="assets/imgs/sqar.png">\n                                    </div>\n                                  </ion-col>\n                                  <ion-col col-4>\n                                      <div class="image-wrapper">\n                                        <img src="assets/imgs/sqar.png">\n                                      </div>\n                                    </ion-col>-->\n                </ion-row>\n            </ion-grid>\n            <div class="btnsec">\n                <button type="submit" ion-button color="green" full class="btn1">SAVE</button>\n            </div>\n        </div>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/addbusiness/addbusiness.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AddbusinessPage);
    return AddbusinessPage;
}());

//# sourceMappingURL=addbusiness.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogintwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signuptwo_signuptwo__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addbusiness_addbusiness__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgot_forgot__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reservations_reservations__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__getstart_getstart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__terms_terms__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















/**
 * Generated class for the LogintwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogintwoPage = (function () {
    function LogintwoPage(platform, navCtrl, navParams, alertCtrl, formBuilder, appsetting, http, events, common, toastCtrl, loadingCtrl, fb, fcm) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.appsetting = appsetting;
        this.http = http;
        this.events = events;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.fcm = fcm;
        this.type = 'password';
        this.showPass = false;
        this.iconname = 'eye';
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            this.common.tryagain();
        }
    }
    LogintwoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LogintwoPage');
        this.platform.ready().then(function () {
            var lastTimeBackPress = 0;
            var timePeriodToExit = 2000;
            _this.platform.registerBackButtonAction(function () {
                // get current active page
                var view = _this.navCtrl.getActive();
                if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                    _this.platform.exitApp(); //Exit from app
                }
                else {
                    // alert('Press back again to exit App?');
                    var toast = _this.toastCtrl.create({
                        message: 'Press back again to exit from app?',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    lastTimeBackPress = new Date().getTime();
                }
            });
        });
    };
    LogintwoPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.SigninForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, this.emailValidator.bind(this)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
        });
        // this.tryagain();
    };
    LogintwoPage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return { invalidEmail: true };
        }
    };
    LogintwoPage.prototype.isValid = function (field) {
        var formField = this.SigninForm.get(field);
        return formField.valid || formField.pristine;
    };
    LogintwoPage.prototype.showPassword = function () {
        console.log('showpassword');
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
            this.iconname = 'eye-off';
        }
        else {
            this.type = 'password';
            this.iconname = 'eye';
        }
    };
    LogintwoPage.prototype.Signin = function (signindata) {
        var _this = this;
        console.log(signindata.value);
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            var options_1 = this.appsetting.header();
            //            this.fcm.getToken().then(token => {
            //                console.log('Tokenid-->' + token);
            var postdata = {
                email: signindata.value.email,
                password: signindata.value.password,
                divice_token: 'k',
                role: 'business'
            };
            console.log(postdata);
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.url + 'users/loginuser', serialized, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.status == true) {
                        localStorage.setItem('CurrentUser', JSON.stringify(response.userinfo));
                        _this.events.publish('Loggedin', 'loginpage');
                        _this.appsetting.userprofile = response.userinfo;
                        if (response.userinfo.business_data.length > 0) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__reservations_reservations__["a" /* ReservationsPage */]);
                        }
                        else {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addbusiness_addbusiness__["a" /* AddbusinessPage */]);
                        }
                    }
                    else {
                        _this.common.presentAlert('Login', response.message);
                    }
                });
            });
            //            }, err => {
            //                console.log(err);
            //            })
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    LogintwoPage.prototype.Facebooklogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            console.log('Logged into Facebook!', JSON.stringify(res));
            var userId = res.authResponse.userID;
            var accesstoken = res.authResponse.accessToken;
            _this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                _this.userData = {
                    id: profile['id'],
                    email: profile['email'],
                    first_name: profile['first_name'],
                    last_name: profile['last_name'],
                    picture: profile['picture_large']['data']['url'],
                    username: profile['name']
                };
                console.log('User profile');
                console.log(_this.userData);
                console.log('User profile stringify');
                console.log(JSON.stringify(_this.userData));
                console.log('rahul');
                console.log(window.navigator.onLine);
                if (window.navigator.onLine == true) {
                    var options_2 = _this.appsetting.header();
                    _this.fcm.getToken().then(function (token) {
                        var postdata = {
                            fb_id: _this.userData.id,
                            firstname: _this.userData.first_name,
                            lastname: _this.userData.last_name,
                            email: _this.userData.email,
                            role: 'business',
                            regitration_type: 'facebook',
                            divice_token: token,
                            profile_pic: _this.userData.picture,
                            password: _this.userData.id,
                        };
                        var serialized = _this.appsetting.serializeObj(postdata);
                        var Loading = _this.loadingCtrl.create({
                            spinner: 'bubbles',
                            content: 'Loading...'
                        });
                        Loading.present().then(function () {
                            _this.http.post(_this.appsetting.url + 'users/fbregistration', serialized, options_2).map(function (res) { return res.json(); }).subscribe(function (response) {
                                console.log(response);
                                Loading.dismiss();
                                if (response.status == true) {
                                    //alert('succes facebook');
                                    if (response.data) {
                                        localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                                        _this.events.publish('Loggedin', 'loginpage');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
                                    }
                                    else {
                                        localStorage.setItem('CurrentUser', JSON.stringify(response.userinfo));
                                        _this.events.publish('Loggedin', 'loginpage');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
                                    }
                                }
                                else {
                                    //alert('fail facebook!');
                                    _this.common.presentAlert('Signin', response.message);
                                }
                            });
                        }, function (err) {
                            console.log(err);
                        });
                    });
                    //}).catch((error: any) => console.log(error));
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Check your internet connection',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                    });
                    toast.present();
                }
            });
        })
            .catch(function (e) {
            console.log('Error logging into Facebook', JSON.stringify(e));
        });
    };
    LogintwoPage.prototype.home = function () {
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            this.events.publish('skip', 'skip');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    LogintwoPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signuptwo_signuptwo__["a" /* SignuptwoPage */]);
    };
    LogintwoPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__forgot_forgot__["a" /* ForgotPage */]);
    };
    LogintwoPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addbusiness_addbusiness__["a" /* AddbusinessPage */]);
    };
    LogintwoPage.prototype.getstart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__getstart_getstart__["a" /* GetstartPage */]);
    };
    LogintwoPage.prototype.term = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__terms_terms__["a" /* TermsPage */], { role: 'business' });
    };
    LogintwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-logintwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/logintwo/logintwo.html"*/'<!--\n  Generated template for the LogintwoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n    <ion-navbar color="green">\n        <ion-title text-center>login</ion-title>\n    </ion-navbar>\n\n</ion-header>-->\n<ion-header>\n\n    <ion-toolbar color="green">\n        <ion-buttons start>\n            \n            <button ion-button icon-only (click)="getstart()">\n                    <ion-icon class="bckbtn" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Login</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div class="loginform formmain">\n        <p style="font-weight: 500;">Welcome to Melanin Enterprise. <br>We are glad that you are here!<br>Make yourself at home.</p>\n        <form [formGroup]="SigninForm" (submit)="Signin(SigninForm)">\n            <ion-list no-lines>\n\n                <ion-item>\n                    <ion-input type="email" placeholder="Email" formControlName="email" autocapitalize="off"></ion-input>\n                    <ion-icon class="iconinput" item-start><img src="assets/imgs/user.png"></ion-icon>\n                    <span item-content *ngIf="!isValid(\'email\')" class="validationpop animated bounce">Invalid email</span>\n                </ion-item>\n\n\n\n                <ion-item>\n                    <ion-input type="{{type}}" placeholder="Password" formControlName="password"></ion-input>\n                    <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n                    <button item-end type="button" color="dark" (click)="showPassword()" ion-button icon-only clear>\n                        <ion-icon name="{{iconname}}" ></ion-icon>\n                    </button>\n                    <span item-content *ngIf="!isValid(\'password\')" class="validationpop animated bounce">Invalid Password</span>\n                </ion-item>\n\n                <button type="submit" class="btn1" ion-button color="green" block [disabled]="!SigninForm.valid">Login</button>\n                <button type="button" class="forgot" ion-button clear block color="dark" (click)="forgot()">Forgot Password?</button>\n                <h2 class="orstrip"><span style="font-weight: 600;">OR</span></h2>\n                <button (click)="Facebooklogin()" type="button" class="btn3" ion-button block >Login with facebook</button>\n            </ion-list>\n        </form>\n    </div>\n\n    <div class="haveacc">Don’t have an account? <span color="dark" (click)="signup()" style="font-weight: 600;">Sign Up</span></div>\n    <div class="haveacc" (click)="term()">Terms and Conditions</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/logintwo/logintwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__["a" /* FCM */]])
    ], LogintwoPage);
    return LogintwoPage;
}());

//# sourceMappingURL=logintwo.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = (function () {
    function TermsPage(navCtrl, navParams, http, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
        if (localStorage.getItem('CurrentUser')) {
            this.role = JSON.parse(localStorage.getItem('CurrentUser')).role;
            console.log(JSON.parse(localStorage.getItem('CurrentUser')));
        }
        else {
            this.role = this.navParams.get('role');
        }
        this.get();
    };
    TermsPage.prototype.get = function () {
        var _this = this;
        var postdata;
        console.log(this.role);
        var options = this.appsetting.header();
        if (this.role == 'member') {
            postdata = {
                pagename: 'terms&condition(user)'
            };
        }
        else {
            postdata = {
                pagename: 'terms&condition(business)'
            };
        }
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'static/getstaticpagedata', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                if (response.data[0].pageimage) {
                    response.data[0].loaded = true;
                }
                else {
                    response.data[0].loaded = false;
                }
                _this.terms = response.data[0];
            }
            else {
            }
        });
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/terms/terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>terms & conditions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="banner">\n        <img [src]="terms?.pageimage" (load)="terms.loaded = true" [hidden]="!terms?.loaded" >\n             <img src="assets/imgs/loader.gif" [hidden]="terms?.loaded">\n      </div>\n      <div class="contant-sec" padding>\n<!--        <h2>Dummy text of the printing</h2>-->\n<p [innerHTML]="terms?.pagedata"></p></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealtalkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__talkreply_talkreply__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ourtalkreply_ourtalkreply__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RealtalkPage = (function () {
    function RealtalkPage(navCtrl, navParams, loadingCtrl, common, toastCtrl, appsetting, http, formBuilder, zone) {
        //alert('asdfa');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.formBuilder = formBuilder;
        this.zone = zone;
        this.ourtalks = [];
        this.mytalks = [];
        this.talk = 'mytalk';
        this.subcat = [];
        this.service = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.pageno = 1;
        this.loader = 0;
        this.autocompleteItems = [];
        this.realTalk = this.formBuilder.group({
            topicname: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            location: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            category: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            message: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]]
        });
    }
    RealtalkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RealtalkPage');
        this.getSubCatList();
        if (this.talk == 'mytalk') {
            this.MyTalk();
        }
    };
    /********* function used for get subcatlist to show on top of the page ***********/
    RealtalkPage.prototype.getSubCatList = function () {
        var _this = this;
        this.subcat = [];
        var temp = this;
        this.http.get(this.appsetting.url + 'categories/get').map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            response.forEach(function (value, key) {
                value.sub_category.forEach(function (val, ke) {
                    if (!val.sub_category_image) {
                        val.sub_category_image = 'assets/imgs/iconnot.png';
                        temp.subcat.push(val);
                    }
                    else {
                        temp.subcat.push(val);
                    }
                });
            });
            //this.subcat = response;
            console.log(_this.subcat);
        });
    };
    /****** function used for autocomplete prediction ***********/
    RealtalkPage.prototype.updateSearch = function (formvalue) {
        console.log('update');
        if (formvalue.value.location) {
            var me_1 = this;
            this.service.getPlacePredictions({ input: formvalue.value.location }, function (predictions, status) {
                me_1.autocompleteItems = [];
                console.log('here');
                me_1.zone.run(function () {
                    predictions.forEach(function (prediction) {
                        console.log(prediction);
                        me_1.autocompleteItems.push(prediction.description);
                    });
                    console.log(me_1.autocompleteItems);
                });
            });
        }
        else {
        }
    };
    /****** function used for choose item from autocomplete prediction ***********/
    RealtalkPage.prototype.chooseItem = function (item) {
        var temp = this;
        console.log(item);
        //        this.autocomplete.query = item;
        this.realTalk.patchValue({
            location: item,
        });
        this.autocompleteItems = [];
        this.geocoder.geocode({ 'address': item }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
                console.log(results[0].geometry.location.lat());
                console.log(results[0].geometry.location.lng());
                temp.latitude = results[0].geometry.location.lat();
                temp.longitude = results[0].geometry.location.lng();
                temp.pageno = 1;
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    RealtalkPage.prototype.onSelectChange = function (cat) {
        console.log(cat);
        // this.category = cat;
    };
    RealtalkPage.prototype.postTalk = function (formValue) {
        var _this = this;
        console.log(formValue.value);
        var options = this.appsetting.header();
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
        };
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Please wait...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'talks/addTopic', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    _this.realTalk.patchValue({
                        topicname: '',
                        location: '',
                        category: '',
                        message: ''
                    });
                    _this.MyTalk();
                }
                else {
                    _this.common.presentAlert('Talk', response.msg);
                }
            });
        });
    };
    RealtalkPage.prototype.MyTalk = function () {
        var _this = this;
        var temp = this;
        this.loader = 0;
        var options = this.appsetting.header();
        var postdata = {
            user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            page: this.pageno
        };
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        //        var Loading = this.loadingCtrl.create({
        //            spinner: 'bubbles',
        //            content: 'Please wait...'
        //        });
        //        Loading.present().then(() => {
        this.http.post(this.appsetting.url + 'talks/getTalksAgainstUser', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            //Loading.dismiss();
            if (response.status == true) {
                _this.talk = 'mytalk';
                _this.mytalks = [];
                if (response.data.length > 0) {
                    _this.loader = 1;
                    response.data.forEach(function (value, key) {
                        /****** code to get date and time difference ************/
                        var a = new Date();
                        console.log(new Date(value.created_at));
                        var startDate = __WEBPACK_IMPORTED_MODULE_8_moment__(new Date(value.created_at), "DD.MM.YYYY");
                        var endDate = __WEBPACK_IMPORTED_MODULE_8_moment__(a, "DD.MM.YYYY");
                        var milliseconds = endDate.diff(startDate);
                        var duration = __WEBPACK_IMPORTED_MODULE_8_moment__["duration"](milliseconds, 'milliseconds');
                        console.log('Hours' + duration.hours());
                        console.log('minutes' + duration.minutes());
                        if (duration.hours() > 24) {
                            value.days = duration.asDays();
                            value.time = 'day';
                        }
                        else {
                            if (duration.minutes() > 9) {
                                if (duration.hours() > 9) {
                                    value.days = duration.hours() + ':' + duration.minutes();
                                }
                                else {
                                    value.days = '0' + duration.hours() + ':' + duration.minutes();
                                }
                            }
                            else {
                                if (duration.hours() > 9) {
                                    value.days = duration.hours() + ':' + duration.minutes();
                                }
                                else {
                                    value.days = '0' + duration.hours() + ':' + duration.minutes();
                                }
                                value.days = '0' + duration.hours() + ':0' + duration.minutes();
                            }
                            value.time = 'hour';
                        }
                        if (JSON.parse(localStorage.getItem('CurrentUser')).profile_pic) {
                            value.profile_pic = JSON.parse(localStorage.getItem('CurrentUser')).profile_pic;
                        }
                        else {
                            value.profile_pic = 'assets/imgs/user.png';
                        }
                        //if (value.status == true) {
                        temp.mytalks.push(value);
                        //}
                    });
                    _this.totalpageno = response.Toatalpage;
                    console.log(_this.mytalks);
                }
                else {
                }
            }
            else {
                _this.loader = 1;
                //                this.interval = setInterval(() => {
                //                    this.MyTalk();
                //                }, 5000);
                //this.common.presentAlert('Talk', response.message);
            }
        });
        // })
    };
    RealtalkPage.prototype.GetOurTalks = function () {
        var _this = this;
        this.loader = 0;
        //clearInterval(this.interval);
        var temp = this;
        if (this.pageno >= this.totalpageno) {
            this.pageno = 1;
        }
        var options = this.appsetting.header();
        var postdata = {
            page: this.pageno
        };
        var serialized = this.appsetting.serializeObj(postdata);
        //        var Loading = this.loadingCtrl.create({
        //            spinner: 'bubbles',
        //            content: 'Loading...'
        //        });
        //        Loading.present().then(() => {
        this.http.post(this.appsetting.url + 'talks/getallTalks', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            // Loading.dismiss();
            if (response.status == true) {
                _this.loader = 1;
                _this.talk = 'ourtalk';
                _this.ourtalks = [];
                response.data.forEach(function (value, key) {
                    console.log(value);
                    if (value.status == true) {
                        temp.ourtalks.push(value);
                    }
                });
                console.log(_this.ourtalks);
                _this.totalpageno = response.Toatalpage;
            }
            else {
                _this.loader = 1;
                //                    this.common.presentAlert('Talk', response.message);
            }
            // })
        });
    };
    /********* this function is use for infinite scroll **********/
    RealtalkPage.prototype.GetOurTalks1 = function () {
        var _this = this;
        this.loader = 0;
        //clearInterval(this.interval);
        var temp = this;
        var options = this.appsetting.header();
        var postdata = {
            page: this.pageno
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'talks/getallTalks', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            // Loading.dismiss();
            if (response.status == true) {
                _this.loader = 1;
                _this.talk = 'ourtalk';
                response.data.forEach(function (value, key) {
                    if (value.status == true) {
                        temp.ourtalks.push(value);
                    }
                });
                _this.totalpageno = response.Toatalpage;
            }
            else {
                _this.loader = 1;
                //                    this.common.presentAlert('Talk', response.message);
            }
            // })
        });
    };
    RealtalkPage.prototype.ReplyPage = function (tdata) {
        console.log(tdata);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__talkreply_talkreply__["a" /* TalkreplyPage */], { topidata: tdata });
    };
    RealtalkPage.prototype.OurTalkReply = function (data) {
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__ourtalkreply_ourtalkreply__["a" /* OurtalkreplyPage */], { topidata: data });
    };
    /****** functions used for getlist on refresh ************/
    RealtalkPage.prototype.doRefreshOurTalk = function (refresher) {
        console.log('Begin async operation', refresher);
        //this.getSubCatList();
        this.pageno = 1;
        this.loader = 1;
        this.GetOurTalks();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    /****** functions used for getlist on refresh ************/
    RealtalkPage.prototype.doRefreshMyTalk = function (refresher) {
        console.log('Begin async operation', refresher);
        //this.getSubCatList();
        this.pageno = 1;
        this.loader = 1;
        this.MyTalk();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    /****** functions used for pagination ************/
    RealtalkPage.prototype.doInfiniteOurTalks = function (infiniteScroll) {
        console.log('Begin async operation');
        this.pageno = this.pageno + 1;
        console.log(this.totalpageno);
        console.log(this.pageno);
        if (this.pageno <= this.totalpageno) {
            this.GetOurTalks1();
        }
        else {
            //this.pageno = 1;
            console.log('No more data to load');
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    /****** functions used for pagination ************/
    RealtalkPage.prototype.doInfiniteMyTalks = function (infiniteScroll) {
        console.log('Begin async operation');
        this.pageno = this.pageno + 1;
        console.log(this.totalpageno);
        console.log(this.pageno);
        if (this.pageno <= this.totalpageno) {
            this.MyTalk();
        }
        else {
            console.log('No more data to load');
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    RealtalkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-realtalk',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/realtalk/realtalk.html"*/'<!--\n  Generated template for the RealtalkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="green">\n        <button ion-button menuToggle style="display:block !important;">\n            <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n        <ion-title>realtalk!</ion-title>\n    </ion-navbar>\n    <div class="segment-sec" color="green">\n        <ion-segment [(ngModel)]="talk">\n            <ion-segment-button value="ourtalk" (click)="GetOurTalks()">\n                Ourtalk\n            </ion-segment-button>\n            <ion-segment-button value="mytalk" (click)="MyTalk()">\n                Mytalk\n            </ion-segment-button>\n            <ion-segment-button value="newtalk">\n                Newtalk\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n\n</ion-header>\n\n\n<ion-content>\n    <div [ngSwitch]="talk">\n        \n        <ion-list *ngSwitchCase="\'ourtalk\'" class="ourtalk">\n            <ion-refresher (ionRefresh)="doRefreshOurTalk($event)">\n            <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Pull to refresh"\n                refreshingSpinner="circles"\n                refreshingText="Refreshing...">\n            </ion-refresher-content>\n        </ion-refresher>\n            \n            <ion-item *ngFor="let ourtalk of ourtalks" (click)="OurTalkReply(ourtalk)">\n                <ion-thumbnail item-start>\n                    <img *ngIf="ourtalk?.talk_data.length>0" [src]="ourtalk.talk_data[0].profile_pic">\n                    <img *ngIf="ourtalk?.talk_data.length == 0" src="assets/imgs/user.png">\n                </ion-thumbnail>\n                <h2>{{ourtalk?.topic_name}} </h2>\n                <p style="white-space: normal">{{ourtalk?.message}}</p>\n                <p *ngIf="ourtalk?.talk_data.length>0">By {{ourtalk?.talk_data[0].firstname}}</p>\n                <p *ngIf="ourtalk?.talk_data.length == 0">By Unknown user</p>\n                <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>{{ourtalk?.comments.length}} Comment</p>\n            </ion-item>\n\n            <div *ngIf="loader == 0">\n                <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n                <img src="assets/imgs/loader.gif">\n                </div>\n            </div>\n            <div *ngIf="ourtalks.length<1 && loader != 0">\n                <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n                    <img style="width:200px;margin: auto;display: block;" src="assets/imgs/sorry.png">\n                    <span> No data found!</span>\n                </div>\n            </div>\n            <!-- \n                        <ion-item>\n                            <ion-thumbnail item-start>\n                                <img src="assets/imgs/talk.png">\n                            </ion-thumbnail>\n                            <h2>Best Pickup lines </h2>\n                            <p>By Anima</p>\n                            <p>2 Friends</p>\n                            <p><ion-icon name="star-outline" color="gray"></ion-icon>1 Review</p>\n                        </ion-item>-->\n            <ion-infinite-scroll (ionInfinite)="doInfiniteOurTalks($event)" *ngIf="pageno<totalpageno">\n                <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'mytalk\'" class="mytlk">\n            <ion-refresher (ionRefresh)="doRefreshMyTalk($event)">\n            <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Pull to refresh"\n                refreshingSpinner="circles"\n                refreshingText="Refreshing...">\n            </ion-refresher-content>\n        </ion-refresher>\n            <ion-item *ngFor="let mytalk of mytalks" (click)="ReplyPage(mytalk)">\n                <ion-thumbnail item-start>\n                    <img *ngIf="mytalk.profile_pic" [src]="mytalk.profile_pic">\n                </ion-thumbnail>\n                <h2>{{mytalk?.topic_name}}</h2>\n                <p style="white-space: normal">{{mytalk?.message}}</p>\n                <p>{{mytalk?.loc_address}}</p>\n                <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>{{mytalk?.comments.length}} Comment</p>\n                <p><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>{{mytalk?.days}} {{mytalk?.time}} ago</p>\n        \n            </ion-item>\n            <div *ngIf="loader == 0">\n                <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n                <img src="assets/imgs/loader.gif">\n                </div>\n            </div>\n            <div *ngIf="mytalks.length<1 && loader != 0">\n                <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n                    <img style="width:200px;margin: auto;display: block;" src="assets/imgs/sorry.png">\n                    <span> No data found!</span>\n                </div>\n            </div>\n\n            <!--            <ion-item>\n                            <ion-thumbnail item-start>\n                                <img src="assets/imgs/talk.png">\n                            </ion-thumbnail>\n                            <h2>Topic Name</h2>\n                            <p>Manhattan, New York, NY</p>\n                            <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>1 Comment</p>\n                            <p><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>2days ago</p>\n                        </ion-item>\n            \n                        <ion-item>\n                            <ion-thumbnail item-start>\n                                <img src="assets/imgs/talk.png">\n                            </ion-thumbnail>\n                            <h2>Topic Name</h2>\n                            <p>Manhattan, New York, NY</p>\n                            <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>1 Comment</p>\n                            <p><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>2days ago</p>\n                        </ion-item>\n            \n                        <ion-item>\n                            <ion-thumbnail item-start>\n                                <img src="assets/imgs/talk.png">\n                            </ion-thumbnail>\n                            <h2>Topic Name</h2>\n                            <p>Manhattan, New York, NY</p>\n                            <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>1 Comment</p>\n                            <p><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>2days ago</p>\n                        </ion-item>-->\n            <ion-infinite-scroll (ionInfinite)="doInfiniteMyTalks($event)" *ngIf="pageno<totalpageno">\n                <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </ion-list>\n\n        <div *ngSwitchCase="\'newtalk\'" class="newtalk" padding>\n            <h2 class="heading">Start a new talk </h2>\n            <form [formGroup]="realTalk" (submit)="postTalk(realTalk)">\n                <ion-list no-lines no-padding>\n                    <h2>Topic Name</h2>\n                    <ion-item>               \n                        <ion-input type="text" placeholder="Enter your topic" formControlName="topicname"></ion-input>\n                    </ion-item>\n                    <h2>Location</h2>\n                    <ion-item>               \n                        <ion-input type="text" placeholder="Enter your location" formControlName="location" (input)="updateSearch(realTalk)"></ion-input>\n                    </ion-item>\n                    <ion-list class="searchtogle animated bounceIn">\n                        <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">\n                            {{ item }}\n                    </ion-item>\n                </ion-list>\n                <h2>Category</h2>\n                <ion-item> \n                    <ion-select placeholder="Select Category" formControlName="category">\n                        <ion-option *ngFor="let cat of subcat" value="{{cat._id}},{{cat.sub_category_title}}">{{cat.sub_category_title}}</ion-option>\n                    </ion-select>\n                </ion-item>\n                <!--              <ion-list radio-group class="category">\n                                  <h2>Category</h2>                \n                                  <ion-item>\n                                    <ion-label>Lorem Ipsum</ion-label>\n                                    <ion-radio  value="1"></ion-radio>\n                                  </ion-item>\n                                </ion-list>-->\n                <h2>Message</h2>\n                <ion-item>\n                    <ion-textarea placeholder="Write your message..." formControlName="message"></ion-textarea>\n                </ion-item>\n            </ion-list>\n            <div class="btn-sec">\n                <button type="submit" ion-button color="green" class="btn1" [disabled]="!realTalk.valid">Post</button>\n                <!--            <button ion-button clear color="gray" class="btn1">Cancel</button>-->\n            </div>\n        </form>\n    </div>\n\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/realtalk/realtalk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], RealtalkPage);
    return RealtalkPage;
}());

//# sourceMappingURL=realtalk.js.map

/***/ })

},[508]);
//# sourceMappingURL=main.js.map