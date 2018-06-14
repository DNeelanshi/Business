webpackJsonp([33],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooknowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(52);
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
        //alert('rahul');
        console.log(new Date());
        this.currentdate = __WEBPACK_IMPORTED_MODULE_7_moment__(new Date().toISOString()).locale('es').format();
        console.log(this.currentdate);
        var time = __WEBPACK_IMPORTED_MODULE_7_moment__(new Date().toISOString()).locale('es').format('hh:mm');
        console.log(time);
        var a = __WEBPACK_IMPORTED_MODULE_7_moment__(new Date().toISOString()).locale('es').format('DD-MM-YYYY');
        console.log(a);
        var b = a.split('-');
        console.log(b);
        this.day = b[0];
        this.month = b[1];
        this.year = b[2];
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
            //endTime: ['', [Validators.required]],
            specialAccomo: [''],
        });
    };
    BooknowPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    BooknowPage.prototype.MakeBooking = function (BookingForm) {
        var _this = this;
        console.log(BookingForm.value);
        var startTime = BookingForm.value.startTime.split(':');
        console.log(startTime);
        console.log(startTime[0]);
        var splitdate = BookingForm.value.date.split('-');
        console.log(splitdate);
        console.log('year:' + splitdate[0] + ' month:' + splitdate[1] + ' date:' + splitdate[2]);
        console.log(new Date(splitdate[0], splitdate[1] - 1, splitdate[2], startTime[0], startTime[1]));
        // var a = BookingForm.value.date+' '+BookingForm.value.startTime;
        var endTime = new Date(splitdate[0], splitdate[1] - 1, splitdate[2], startTime[0], startTime[1]);
        var compareTo = new Date();
        //var mins = moment.utc(moment(endTime, "HH:mm:ss").diff(moment(BookingForm.value.startTime, "HH:mm:ss"))).format("mm")
        console.log('enddate:' + endTime);
        console.log('startdate:' + compareTo);
        //return false;
        var isAfter = __WEBPACK_IMPORTED_MODULE_7_moment__(endTime).isAfter(compareTo);
        console.log(isAfter);
        //return false;
        console.log(window.navigator.onLine);
        if (localStorage.getItem('CurrentUser')) {
            if (isAfter == true) {
                console.log('true');
                this.viewCtrl.dismiss({ bookingdata: BookingForm.value });
            }
            else {
                this.common.presentAlert('Book Now', 'Time must be greater than current time!');
            }
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
    };
    BooknowPage.prototype.changedate = function (event) {
        console.log(event);
        console.log(typeof (event.day));
        console.log(event.month);
        console.log(event.year);
        console.log(typeof (parseInt(this.day)));
        console.log(typeof (parseInt(this.month)));
        console.log(typeof (parseInt(this.year)));
        if (event.day == parseInt(this.day) && event.month == parseInt(this.month) && event.year == parseInt(this.year)) {
            var b = __WEBPACK_IMPORTED_MODULE_7_moment__(new Date()).format('HH:mm');
            // this.currentdate1 = '2037'
            this.BookingForm.patchValue({
                startTime: b
            });
            console.log(this.currentdate1);
            console.log('matched');
        }
        else {
            this.currentdate1 = '2037';
            this.BookingForm.patchValue({
                startTime: ''
            });
            console.log('not matched');
        }
    };
    BooknowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-booknow',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/booknow/booknow.html"*/'<!--\n  Generated template for the BooknowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n      <button ion-button menuToggle style="display:block !important;">\n          <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>booknow</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="overouter" (click)="dismiss()"></div>\n    <div class="centerbox">\n    <form class="formsec" [formGroup]="BookingForm" (submit)="MakeBooking(BookingForm)">\n      <div class="topsec">\n        <div class="image-wrapper">\n          <img src="assets/imgs/bookpopup.png">\n        </div>\n        <p>Please let us know if you\'re celebrating or \n          have a special accommodation!</p>\n          <h2>Add Booking Day / Time</h2>\n         \n            <ion-grid>\n              <ion-row>\n                <ion-col col-12 class="left right">\n                  <ion-item class="clandr">\n                    <ion-datetime class="inputtxt" placeholder="Date" displayFormat="DDDD  MM-DD-YYYY" pickerFormat="MM-DD-YYYY" min="{{currentdate}}" formControlName="date" (ionChange)="changedate($event)"></ion-datetime>\n                    <img src="assets/imgs/calander.png" item-end>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 class="left">\n                  <ion-item>\n                    <ion-datetime class="inputtxt" placeholder="Time" displayFormat="hh:mm A" pickerFormat="hh:mm A" formControlName="startTime"></ion-datetime>\n                  </ion-item>\n                </ion-col>\n<!--                <ion-col col-6 class="right">\n                  <ion-item>\n                    <ion-datetime class="inputtxt" placeholder="End Time" displayFormat="HH:mm" pickerFormat="HH:mm" formControlName="endTime"></ion-datetime>\n                  </ion-item>\n                </ion-col>-->\n              </ion-row>\n            </ion-grid>\n            <h2>Special accommodations</h2>\n            <ion-item class="discripation">\n              <ion-textarea class="inputtxt" placeholder="Write special accommodations..." formControlName="specialAccomo"></ion-textarea>\n            </ion-item>\n        </div>\n        <div class="btnsec">\n            <button type="button" clear color="green" (click)="dismiss()">Cancel</button>\n          <button type="submit" clear color="green" style="border-right:1px solid #bdbdbd;" [disabled]="!BookingForm.valid">Confirm</button>\n          \n        </div>\n      </form>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/booknow/booknow.html"*/,
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

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(13);
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
        this.details = [];
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
        //this.data.rate = this.resdetail.avg;
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
        if (localStorage.getItem('CurrentUser')) {
            if (window.navigator.onLine == true) {
                var options_1 = this.appsetting.header();
                var postdata = {
                    user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                    business_id: this.navParams.get('prod_id').business_data[0]._id,
                    stars: MakeReview.value.rating,
                    comment: MakeReview.value.comment,
                    status: true
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
        }
        else {
            this.common.presentAlert('Review', 'Please login to review!');
        }
    };
    ReviewPage.prototype.GetReview = function () {
        var _this = this;
        var temp = this;
        var sum = 0;
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
                    console.log(temp.resdetail.review.length);
                    if (_this.resdetail.review.length > 0) {
                        _this.resdetail.review.forEach(function (value, key) {
                            console.log(value);
                            if (value.status == true) {
                                response.userinfo.forEach(function (val, ke) {
                                    console.log(val);
                                    if (val != null) {
                                        if (value.user_id == val._id) {
                                            value.firstname = val.firstname;
                                            value.lastname = val.lastname;
                                            value.profile_pic = val.profile_pic;
                                        }
                                    }
                                });
                                temp.details.push(value);
                                console.log(value);
                                sum += value.stars;
                                console.log(sum);
                                temp.data.rate = sum / temp.details.length;
                                // temp.details.push(value);
                            }
                        });
                    }
                    console.log(_this.details);
                }
                else {
                }
            });
        });
    };
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-review',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/review/review.html"*/'<!--\n  Generated template for the ReviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title>Write Review</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="top">\n		<ion-list style="margin: 0;">\n		  <ion-item>\n		    <ion-avatar item-start>\n		      <img [src]="resdetail?.business_image[0].business_image">\n		    </ion-avatar>\n		    <h2 color="green">{{resdetail?.business_data[0].business_name}}</h2>\n			<h3 *ngIf="truncating && resdetail?.business_data[0].business_description.length > limit" [innerHTML]="resdetail?.business_data[0].business_description | truncate : 80">\n                        </h3>\n                    <h3 *ngIf="truncating && resdetail?.business_data[0].business_description.length < limit" [innerHTML]="resdetail?.business_data[0].business_description">\n                        </h3>\n                    <button ion-button clear *ngIf="truncating && resdetail?.business_data[0].business_description.length > limit" ion-button (click)="truncating = false">Show more</button>\n                    <h3 *ngIf="!truncating && resdetail?.business_data[0].business_description.length > limit" [innerHTML]="resdetail?.business_data[0].business_description">\n                             <button ion-button (click)="truncating = true">show less</button>\n                        </h3>\n                    <button ion-button clear *ngIf="!truncating && resdetail?.business_data[0].business_description.length > limit" ion-button (click)="truncating = true">Show less</button>\n		      <div class="btn" item-end *ngIf="resdetail?.review">\n		      	<rating readOnly="true" max="5" emptyStarIconName="star-outline" starIconName="star" nullable="false" [(ngModel)]="data.rate" name="rate">\n                        </rating>\n                          <h4 *ngIf="details?.length>0">{{details?.length}} Reviews</h4>\n                          <h4 *ngIf="details?.length == 0">0 Review</h4>\n		      </div>     \n		 \n		  </ion-item>\n		</ion-list>\n	</div>\n    <div class="bottom">\n		<ion-list>\n		  <ion-item *ngFor="let reviews of details">\n		    <ion-thumbnail item-start *ngIf="reviews.status == true">\n		        <img *ngIf="reviews.profile_pic" [src]="reviews.profile_pic">\n                        <img *ngIf="!reviews.profile_pic" src="assets/imgs/user.png">\n		    </ion-thumbnail>\n                      <h2 *ngIf="reviews.status == true">\n                          <strong *ngIf="reviews.firstname">{{reviews.firstname}} {{reviews.lastname}}</strong>\n                           <strong *ngIf="!reviews.firstname">Unknown user</strong>\n                          <span>{{reviews.created_at | date:"shortDate"}}</span></h2>\n		    <rating *ngIf="reviews.status == true" readOnly="true" max="5" emptyStarIconName="star-outline" starIconName="star" nullable="false" [(ngModel)]="reviews.stars" name="rate">\n                        </rating>\n                      <p *ngIf="reviews.status == true" style="padding-bottom: 10px;">{{reviews.comment}}</p>\n                    <div class="rply" *ngIf="reviews.status == true">\n                        <h5>REPLY</h5>       \n                        <p *ngIf="reviews.reply.length>0">{{reviews.reply[0].comment}}</p>\n                    </div>\n		  </ion-item>\n<!--		   <ion-item>\n		    <ion-thumbnail item-start>\n	          <img src="assets/img/southfood.png">\n	        </ion-thumbnail>\n		    <h2>Good Chef <span>12/06/2017</span></h2>\n		    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n		  </ion-item>\n		   <ion-item>\n		    <ion-thumbnail item-start>\n		        <img src="assets/img/southfod.png">\n		    </ion-thumbnail>\n		    <h2>Good Chef <span>12/06/2017</span></h2>\n		    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n		  </ion-item>-->\n		</ion-list>\n	</div>\n    <form class="bottom_sec" [formGroup]="ReviewForm" (submit)="MakeReview(ReviewForm)">\n  <h2>Please rate your experience</h2>\n  <rating readOnly="false" max="5" emptyStarIconName="star-outline" starIconName="star" formControlName="rating"\n        nullable="false" (ngModelChange)="onModelChange($event)">\n</rating>\n<!--  <ul>\n    <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n    <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n  </ul>-->\n  <ion-item>\n    <ion-textarea placeholder="Share your review" formControlName="comment"></ion-textarea>\n  </ion-item>\n  <div class="btnsec">\n    <button type="submit" ion-button color="green" class="btn1" [disabled]="!ReviewForm.valid">Post Review</button>\n  </div>\n    </form>\n</ion-content>\n<!-- <ion-footer>\n  <ion-toolbar style="padding: 6px;">\n		<div class="text">\n			 <ion-textarea class="enter" placeholder="Enter your text"></ion-textarea>\n		</div>\n		<div>\n			<div class="star">\n				<ul>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n			     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n			    </ul>\n			</div>\n			<ion-buttons end>\n		      <button ion-button icon-only class="btnprofile">Submit</button>     \n		    </ion-buttons>\n		</div>\n		\n  </ion-toolbar>\n</ion-footer> -->\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/review/review.html"*/,
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

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appsetting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(131);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], Appsetting);
    return Appsetting;
}());

//# sourceMappingURL=appsetting.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(248);
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
        console.log(lat1, lon1);
        console.log(lat2, lon2);
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
        //        var temp = this;
        //        var origin1 = new google.maps.LatLng(32.9697, lon1);
        //        var destinationB = new google.maps.LatLng(lat2, lon2);
        //        var service = new google.maps.DistanceMatrixService();
        //        service.getDistanceMatrix(
        //            {
        //                origins: [origin1],
        //                destinations: [destinationB],
        //                travelMode: 'DRIVING',
        //                unitSystem: google.maps.UnitSystem.IMPERIAL,
        //                avoidHighways: false,
        //                avoidTolls: false,
        //            }, callback);
        //
        //     function callback(response, status) {
        //            console.log(status)
        //            if (status == 'OK') {
        //                console.log(response)
        //                console.log(response.rows[0].elements[0].distance.text.split(' '));
        //                var a = response.rows[0].elements[0].distance.text.split(' ');
        //                console.log(a[0]);
        //                
        //            }
        //        }
    };
    Common.prototype.teyhave = function (event) {
        console.log(event);
        //alert('teyhave');
        this.dist = event;
        console.log(this.dist);
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
        console.log(link.match('https:'));
        if (link.match('https:') != null || link.match('http:') != null) {
            var browser = this.iab.create(link, '_blank', InAppBrowserOptions);
            browser.show();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: '',
                message: 'Invalid url',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'submit',
                        handler: function () {
                            console.log('Submit clicked');
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    Common = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getstart_getstart__ = __webpack_require__(56);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logintwo_logintwo__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addbusiness_addbusiness__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgot_forgot__ = __webpack_require__(55);
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
                    //console.log('Tokenid-->' + token);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signuptwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/signuptwo/signuptwo.html"*/'<!--\n  Generated template for the SignuptwoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title text-center>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="loginform formmain">\n    <h5>Benefits of becoming an “ME” Valued Business</h5>\n    <ul>\n\n      <li>Gain maximum exposure for your business</li>\n\n      <li>Connect directly with your potential customers in our fun and active RealTalk! Chat Room</li>\n\n      <li>Create a better online customer experience by scheduling appointment or reservations</li>\n\n      <li>…and much more!</li>\n    </ul>\n\n    <form [formGroup]="SignupForm" (submit)="CreateAccount(SignupForm)">\n      <ion-list no-lines>\n        \n          <ion-item>\n            <ion-input type="text" placeholder="First Name" formControlName="fname"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/Generic.gif"></ion-icon>\n             <span tem-content *ngIf="!isValid(\'fname\')" class="validationpop animated bounce">Firstname required.</span>\n          </ion-item>\n           \n       \n       \n          <ion-item>\n            <ion-input type="text" placeholder="Last Name" formControlName="lname"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/Generic.gif"></ion-icon>\n             <span tem-content *ngIf="!isValid(\'lname\')" class="validationpop animated bounce">Lastname required.</span>\n          </ion-item>\n            \n       \n       \n          <ion-item>\n            <ion-input type="tel" placeholder="Phone Number" formControlName="phone" maxLength="12"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/phn.png"></ion-icon>\n            <span tem-content *ngIf="!isValid(\'phone\')" class="validationpop animated bounce">Invalid phone number.</span>\n          </ion-item>\n          \n    \n          <ion-item>\n            <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/email.png"></ion-icon>\n            <span tem-content *ngIf="!isValid(\'email\')" class="validationpop animated bounce">Invalid email.</span>\n          </ion-item>\n          \n      \n          <ion-item>\n            <ion-input type="{{type}}" placeholder="Password" formControlName="password" (input)="pass_strength(SignupForm.controls.password)"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n            <button item-end type="button" color="dark" class="eyebutton" (click)="showPassword()" ion-button icon-only clear>\n                <ion-icon name="{{iconname}}"></ion-icon>\n          </button>\n          <span tem-content *ngIf="!isValid(\'password\')" class="validationpop animated bounce">Password should at least 6 char.</span>\n          </ion-item>\n            \n<!--           <div id="strength">\n                    <p class="strnth">Password strength:</p>\n                        <ul id="strengthBar">\n                            <li class="point" [style.background-color]="bar0"></li>\n                            <li class="point" [style.background-color]="bar1"></li>\n                            <li class="point" [style.background-color]="bar2"></li>\n                            <li class="point" [style.background-color]="bar3"></li>\n                            <li class="point" [style.background-color]="bar4"></li>\n                        </ul>\n                    </div>-->\n    \n          <ion-item>\n            <ion-input type="{{Ctype}}" placeholder="Confirm Password" formControlName="cpassword"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n            \n            <button item-end type="button" color="dark" class="eyebutton" (click)="showCPassword()" ion-button icon-only clear>\n                <ion-icon name="{{iconname1}}"></ion-icon>\n          </button>\n          <span tem-content *ngIf="SignupForm.hasError(\'mismatchedPasswords\')"  class="validationpop animated bounce">Password mismatch.</span>\n          </ion-item>\n           \n       \n        <button type="submit" class="btn1" ion-button color="green" block  [disabled]="!SignupForm.valid">Sign up</button>\n<!--        <button type="button" class="forgot" ion-button clear block color="dark" (click)="forgot()">Forgot Password?</button>-->\n      </ion-list>\n    </form>\n  </div>\n\n  <div class="haveacc">Have an account? <span color="dark" (click)="login()" style="font-weight: 600;">Sign In</span></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/signuptwo/signuptwo.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_forgot__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__ = __webpack_require__(54);
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
                    // console.log('Tokenid-->'+token);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title text-center>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="loginform formmain">\n<!--    <h5>Benefits of becoming a “ME” Valued Business</h5>\n    <ul>\n\n      <li>Gain maximum exposure for your business</li>\n\n      <li>Connect directly with your potential customers in our fun and active RealTalk! Chat Room</li>\n\n      <li>Create a better online customer experience by scheduling appointment or reservations</li>\n\n      <li>…and much more!</li>\n    </ul>-->\n\n    <form [formGroup]="SignupForm" (submit)="CreateAccount(SignupForm)">\n      <ion-list no-lines>\n       \n          <ion-item>\n            <ion-input type="text" placeholder="First Name" formControlName="fname"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/Generic.gif"></ion-icon>\n            <span item-content *ngIf="!isValid(\'fname\')" class="validationpop animated bounce">Firstname required.</span>\n          </ion-item>\n            \n       \n          <ion-item>\n            <ion-input type="text" placeholder="Last Name" formControlName="lname"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/Generic.gif"></ion-icon>\n            <span item-content *ngIf="!isValid(\'lname\')" class="validationpop animated bounce">Lastname required.</span>\n          </ion-item>\n            \n      \n          <ion-item>\n            <ion-input type="tel" placeholder="Phone number" formControlName="phone" maxLength="12"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/phn.png"></ion-icon>\n            <span item-content *ngIf="!isValid(\'phone\')" class="validationpop animated bounce">Phone number required.</span>\n          </ion-item>\n          \n        \n          <ion-item>\n            <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/email.png"></ion-icon>\n            <span item-content *ngIf="!isValid(\'email\')" class="validationpop animated bounce">Invalid email.</span>\n          </ion-item>\n          \n        \n          <ion-item>\n            <ion-input type="{{type}}" placeholder="Password" formControlName="password" (input)="pass_strength(SignupForm.controls.password)"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n            <span item-content *ngIf="!isValid(\'password\')" class="validationpop animated bounce">Password should at least 6 char.</span>\n          <button item-end type="button" color="dark" class="eyebutton" (click)="showPassword()" ion-button icon-only clear>\n                <ion-icon name="{{iconname}}"></ion-icon>\n          </button>\n          </ion-item>\n          \n        \n<!--          <div id="strength">\n                    <p class="strnth">Password strength:</p>\n                        <ul id="strengthBar">\n                            <li class="point" [style.background-color]="bar0"></li>\n                            <li class="point" [style.background-color]="bar1"></li>\n                            <li class="point" [style.background-color]="bar2"></li>\n                            <li class="point" [style.background-color]="bar3"></li>\n                            <li class="point" [style.background-color]="bar4"></li>\n                        </ul>\n                    </div>-->\n       \n          <ion-item>\n            <ion-input type="{{Ctype}}" placeholder="Confirm Password" formControlName="cpassword"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n            <button item-end type="button" color="dark" class="eyebutton" (click)="showCPassword()" ion-button icon-only clear>\n                <ion-icon name="{{iconname1}}"></ion-icon>\n          </button>\n          <span item-content *ngIf="!isValid(\'cpassword\')" class="validationpop animated bounce">Password mismatch.</span>\n          </ion-item>\n            \n       \n        <button type="submit" class="btn1" ion-button color="green" block [disabled]="!SignupForm.valid">Signup</button>\n<!--        <button class="forgot" ion-button clear block color="dark" (click)="forgot()">Forgot Password?</button>-->\n      </ion-list>\n    </form>\n  </div>\n\n  <div class="haveacc">Have an account? <span color="dark" (click)="login()">Sign In</span></div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/signup/signup.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(13);
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
            filterformdata.value.online = '';
        }
        else if (filterformdata.value.online1 == true) {
            filterformdata.value.online = 1;
        }
        else if (filterformdata.value.offline == true) {
            filterformdata.value.online = 0;
        }
        if (filterformdata.value.online1 == false && filterformdata.value.offline == false) {
            filterformdata.value.online = '';
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/filter/filter.html"*/'<!--\n  Generated template for the FilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n   \n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-buttons left (click)="dismiss()">\n    <button ion-button clear>\n      <ion-icon ion-icon icon-only name="close" style="font-size:30px; font-weight: 700;"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title text-center>filter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<form [formGroup]="FilterForm" (submit)="Search(FilterForm)" style="height: 100%; margin-top: 44px;">\n<ion-content padding>\n  <div class="loginform">\n \n      <ion-list no-lines>\n        <div class="inputouter">\n          <h2>Category</h2>\n          <ion-item>\n            <ion-select formControlName="services">\n              <ion-option selected *ngFor="let service of services" value="{{service._id}}">{{service.sub_category_title}}</ion-option>\n<!--              <ion-option>Option 1</ion-option>\n              <ion-option>Option 2</ion-option>-->\n            </ion-select>\n          </ion-item>\n        </div>\n\n        <div class="inputouter">\n          <h2>Miles</h2>\n          <ion-item>\n            <ion-range min="1" step="5" max="100" formControlName="range" [(ngModel)]="range" name="range">\n               <p range-left *ngIf="!range">0 miles</p>\n               <p range-left *ngIf="range">{{range}} miles</p>\n               <p range-right>100 miles</p>\n            </ion-range>\n          </ion-item>\n        </div>\n\n        <div class="inputouter">\n          <h2>Zip Code</h2>\n          <ion-item>\n            <ion-input type="tel" placeholder="Zip Code" formControlName="zipcode"></ion-input>\n          </ion-item>\n        </div>\n\n<!--        <div class="inputouter">\n          <h2>City/State</h2>\n          <ion-item>\n            <ion-input type="text" placeholder="City" formControlName="city"></ion-input>\n          </ion-item>\n        </div>-->\n\n\n        <div class="inputouter">\n          <h2>Online</h2>\n         \n            <ion-list radio-group>\n              <ion-item class="rdo" style="padding-left: 0 !important;">\n               \n                <ion-checkbox color="green" checked="false" formControlName="online1"></ion-checkbox>\n                <ion-label>Yes</ion-label>\n              </ion-item>\n            \n              <ion-item class="rdo" style="padding-left: 25px !important;">\n                <ion-checkbox  color="green" formControlName="offline"></ion-checkbox>\n                <ion-label>No</ion-label>\n              </ion-item>\n            </ion-list>\n         \n        </div>\n      </ion-list>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <button type="submit" ion-button color="green" class="btn2">Search</button>\n  <button type="button" ion-button color="green" class="btn2" (click)="Reset()">Reset</button>\n</ion-footer>\n           </form>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/filter/filter.html"*/,
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, viewCtrl, formBuilder, appsetting, http, loadingCtrl, common, toastCtrl, zone, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.geolocation = geolocation;
        this.autocomplete = {}; //variable used for autocomplete on address field
        this.service = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        /************ end ************/
        this.bit = false;
        this.data = {};
        this.categorydata = [];
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
        localStorage.removeItem('filterdata');
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
        // this.currentLocation();
        if (localStorage.getItem('Seachdata')) {
            var searchdata = JSON.parse(localStorage.getItem('Seachdata'));
            console.log(searchdata);
            if (searchdata.type == "name") {
                this.SearchForm.patchValue({
                    category: searchdata.category
                });
            }
            else if (searchdata.type == "category") {
                this.SearchForm.patchValue({
                    category: searchdata.sub_category_title
                });
            }
            else {
                console.log('location');
                this.bit = true;
                this.SearchForm.patchValue({
                    category: searchdata.category,
                });
                this.autocomplete.query = searchdata.location;
            }
        }
    };
    SearchPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.SearchForm = this.formBuilder.group({
            category: [''],
            location: [''],
        });
    };
    SearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage.prototype.currentLocation = function () {
        var temp = this;
        console.log('current location');
        this.bit = false;
        //document.getElementsByName("fname");
        document.getElementById('inputaaa').focus();
        // this.geolocation.getCurrentPosition().then((resp) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log('getCurrentPosition');
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                temp.latitude = position.coords.latitude; // resp.coords.latitude
                temp.longitude = position.coords.longitude; // resp.coords.longitude
                temp.autocompleteItems = [];
                var geocoder = new google.maps.Geocoder;
                var latlng = pos;
                geocoder.geocode({ 'location': latlng }, function (results, status) {
                    if (status === 'OK') {
                        console.log(results[0]);
                        if (results[0]) {
                            //temp.autocomplete.query = results[0].formatted_address;
                            temp.SearchForm.patchValue({ location: results[0].formatted_address });
                        }
                        else {
                            temp.autocomplete.query = '';
                        }
                    }
                    else {
                        console.log('Error getting address by location');
                    }
                });
            });
            //        }).catch((error) => {
            //            console.log('Error getting locatio            n', error);
            //        });
        }
    };
    SearchPage.prototype.Search = function (filterformdata) {
        console.log(filterformdata.value);
        filterformdata.value.latitude = this.latitude;
        filterformdata.value.longitude = this.longitude;
        filterformdata.value.type = 'name';
        this.viewCtrl.dismiss({ searchedlist: filterformdata.value, type: 'name' });
        localStorage.setItem('Seachdata', JSON.stringify(filterformdata.value));
    };
    /****** function used for autocomplete prediction ***********/
    SearchPage.prototype.updateSearch = function () {
        console.log('update');
        this.categorydata = [];
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
    SearchPage.prototype.chooseItem = function (item, formdata) {
        var temp = this;
        console.log(item);
        console.log(formdata.value);
        this.autocomplete.query = item;
        this.autocompleteItems = [];
        this.geocoder.geocode({ 'address': item }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
                console.log(results[0].geometry.location.lat());
                console.log(results[0].geometry.location.lng());
                temp.latitude = results[0].geometry.location.lat();
                temp.longitude = results[0].geometry.location.lng();
                formdata.value.latitude = results[0].geometry.location.lat();
                formdata.value.longitude = results[0].geometry.location.lng();
                formdata.value.type = 'location';
                temp.viewCtrl.dismiss({ searchedlist: formdata.value, type: 'location' });
                localStorage.setItem('Seachdata', JSON.stringify(formdata.value));
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    /****** functions used for run ionViewDidLoad() function after clear the search bar ************/
    SearchPage.prototype.ionClear = function () {
        console.log('clear');
        this.autocomplete.query = '';
        this.autocomplete.query = null;
        this.autocomplete.query = {};
    };
    SearchPage.prototype.ionClearCategory = function (event) {
        console.log(event);
        this.data.term = '';
        this.categorydata = [];
        this.disable = false;
    };
    SearchPage.prototype.CategorySearch = function (selectedItem) {
        console.log(selectedItem);
        //console.log(formdata.value);
        selectedItem.latitude = this.latitude;
        selectedItem.longitude = this.longitude;
        selectedItem.type = 'category';
        this.data.term = selectedItem.sub_category_title;
        this.categorydata = [];
        var options = this.appsetting.header();
        this.viewCtrl.dismiss({ searchedlist: selectedItem, type: 'category' });
        localStorage.setItem('Seachdata', JSON.stringify(selectedItem));
    };
    SearchPage.prototype.categories = function (d) {
        var _this = this;
        console.log(d);
        var temp = this;
        if (d.length > 2) {
            this.disable = true;
            this.autocompleteItems = [];
            this.http.get(this.appsetting.url + 'categories/get').map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                _this.categorydata = [];
                response.forEach(function (value, key) {
                    value.sub_category.forEach(function (val, ke) {
                        if (!val.sub_category_image) {
                            val.sub_category_image = 'assets/imgs/iconnot.png';
                            // console.log(val);
                            if (val.status == true) {
                                temp.categorydata.push(val);
                            }
                            else {
                            }
                        }
                        else {
                            if (val.status == true) {
                                temp.categorydata.push(val);
                            }
                            else {
                            }
                        }
                    });
                });
                _this.categorydata.sort(function (a, b) {
                    if (a.sub_category_title < b.sub_category_title)
                        return -1;
                    else if (a.sub_category_title > b.sub_category_title)
                        return 1;
                    return 0;
                });
            });
        }
        else {
            this.disable = false;
        }
    };
    SearchPage.prototype.funClicked = function () {
        this.bit = true;
        this.autocomplete.query = '';
    };
    SearchPage.prototype.Reset = function () {
        this.viewCtrl.dismiss({ searchedlist: '', type: 'reset' });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/search/search.html"*/'<!--\n  Generated template for the FilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n   \n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-buttons left (click)="dismiss()">\n    <button ion-button clear>\n      <ion-icon ion-icon icon-only name="close" style="font-size:30px; font-weight: 700;"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title text-center>Search</ion-title>\n  </ion-navbar>\n \n  \n</ion-header>\n\n<!--<form style="height: 100%; margin-top: 44px;">-->\n<ion-content>\n       <form [formGroup]="SearchForm" (submit)="Search(SearchForm)">\n    <div class="searchouter" color="green">\n             <ion-searchbar id="inputaaa" class="bfr searchbar" placeholder="e.g. name, category" name="category" [(ngModel)]="data.term" (click)="currentLocation()" (input)="categories(data.term)" (ionClear)="ionClearCategory($event)" formControlName="category"></ion-searchbar>\n             <div class="buttonout" *ngIf="bit == false" (click)="funClicked()">\n             <button type="button" class="btn1" ion-button icon-start color="green" block><ion-icon><img src="assets/imgs/currentloc.png" style="width:15px;float: left;"></ion-icon>Current Location</button>\n             </div>\n             <div *ngIf="bit == true">\n             <ion-searchbar class="bfr searchbar changeimg" placeholder="Neighborhood,city,state..." name="query" [(ngModel)]="autocomplete.query" (input)="updateSearch()" (ionClear)="ionClear($event)" formControlName="location"></ion-searchbar>\n<!--             <button type="button" class="btn1" ion-button icon-start block (click)="currentLocation()"><ion-icon><img src="assets/imgs/currentloc.png" style="width:15px;float: left;"></ion-icon>Current Location</button>-->\n          </div>\n             \n    </div>\n    </form>\n    \n    \n    \n  <div class="loginform">\n      <ion-list no-lines style="padding-left: 16px;margin:0px !important;">\n        <div class="inputouter">\n            <ion-item (click)="currentLocation()" *ngIf="bit == true" class="currentloc">\n                <ion-icon item-start><img src="assets/imgs/locate.png" style="width:15px;float: left;"></ion-icon>\n               Current Location\n            </ion-item>\n<!--          <ion-item>\n             <ion-searchbar id="input" class="bfr searchbar" placeholder="e.g. name, category" name="category" [(ngModel)]="data.term" (input)="categories(data.term)" (ionClear)="ionClearCategory($event)"></ion-searchbar>\n             <button *ngIf="bit == false" type="button" class="btn1" ion-button icon-start color="green" block (click)="funClicked()"><ion-icon name="locate"></ion-icon>Current location</button>\n          </ion-item>-->\n<!--            <ion-item *ngIf="bit == true">\n             <ion-searchbar id="input" class="bfr searchbar" placeholder="neighbourhood,city,state..." name="query" [(ngModel)]="autocomplete.query" (input)="updateSearch()" (ionClear)="ionClear($event)"></ion-searchbar>\n             <button type="button" class="btn1" ion-button icon-start color="green" block (click)="LocateMe()"><ion-icon name="locate"></ion-icon>Current location</button>\n          </ion-item>-->\n            <ion-list class="searchtogle animated" *ngIf="disable == true">\n            <ion-item *ngFor="let sub of categorydata | filter:data.term" (click)="CategorySearch(sub)">\n                {{sub.sub_category_title}}\n            </ion-item>\n            </ion-list>\n            <ion-list class="searchtogle animated">\n            <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item,SearchForm)">\n                {{ item }}\n        </ion-item>\n        </ion-list>\n        </div>\n      </ion-list>\n\n  </div>\n</ion-content>\n<!--<ion-footer>\n  <button type="submit" ion-button color="green" class="btn2">Search</button>\n  <button type="button" ion-button color="green" class="btn2" (click)="Reset()">Reset</button>\n</ion-footer>\n           </form>-->\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/search/search.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditbusinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reservations_reservations__ = __webpack_require__(51);
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
        this.category = [];
        // services:any = [];
        this.bit = 0;
        this.businesslogo = null;
        this.ImageToSend = [];
        this.base64Image = [];
        this.senddays = []; //variable used for send days as comma separated
        this.sendopeningtime = []; //variable used for send openingtime as comma separated
        this.sendclosingtime = []; //variable used for  send closingtime as comma separated
        this.data = {}; //variable used for ngModel
        this.service = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.services = []; //variable used for store services
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //to display days form
        // alert('rahul editbusiness');
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
            businesstype: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            businessname: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            address: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            // days: [''],
            // services: ['', [Validators.required]],
            service: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            instagramlink: [''],
            facebooklink: [''],
            twitterlink: [''],
            veteranowned: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            onlinemarketplace: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            accept: [false],
            reservation: [false],
            zipcode: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            websiteurl: [''],
            //Controls for manage day,opening and closing hours.
            monday: [false],
            mondayopeninghours: [''],
            mondayclosinghours: [''],
            tuesday: [false],
            tuesdayopeninghours: [''],
            tuesdayclosinghours: [''],
            wednesday: [false],
            wednesdayopeninghours: [''],
            wednesdayclosinghours: [''],
            thursday: [false],
            thursdayopeninghours: [''],
            thursdayclosinghours: [''],
            friday: [false],
            fridayopeninghours: [''],
            fridayclosinghours: [''],
            saturday: [false],
            saturdayopeninghours: [''],
            saturdayclosinghours: [''],
            sunday: [false],
            sundayopeninghours: [''],
            sundayclosinghours: [''],
        });
    };
    EditbusinessPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var temp = this;
        console.log('ionViewDidLoad EditbusinessPage');
        this.http.get(this.appsetting.url + 'categories/get').map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            response.forEach(function (value, key) {
                temp.category.push(value);
                value.sub_category.forEach(function (val, ke) {
                    temp.services.push(val);
                });
            });
            _this.services.sort(function (a, b) {
                if (a.sub_category_title < b.sub_category_title)
                    return -1;
                else if (a.sub_category_title > b.sub_category_title)
                    return 1;
                return 0;
            });
            _this.getUser();
        });
        //        this.http.get(this.appsetting.url + 'categories/get').map(res => res.json()).subscribe(response => {
        //            console.log(response);
        //            this.category = response;
        //            this.getUser();
        //        })
    };
    EditbusinessPage.prototype.checkbox1 = function (legal) {
        console.log(legal.value);
        if (legal.value == false) {
            return { monday: false };
        }
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
                //this.data.category = this.businessdata.category;
                _this.category_id = _this.businessdata.category_id;
                _this.category_title = _this.businessdata.category;
                _this.service_title = _this.businessdata.sub_cat;
                //this.selectedCat(this.businessdata.category_id);
                console.log(_this.businessdata.opening_days_and_timings);
                _this.businessdata.opening_days_and_timings.forEach(function (value, key) {
                    //temp.daytime.push(value);
                    temp.senddays.push(value.day);
                    temp.sendopeningtime.push(value.opening_time);
                    temp.sendclosingtime.push(value.closing_time);
                    if (value.day == "Monday") {
                        console.log('monday');
                        temp.EditbusinessForm.patchValue({
                            monday: true,
                            mondayopeninghours: value.opening_time,
                            mondayclosinghours: value.closing_time
                        });
                    }
                    if (value.day == "Tuesday") {
                        temp.EditbusinessForm.patchValue({
                            tuesday: true,
                            tuesdayopeninghours: value.opening_time,
                            tuesdayclosinghours: value.closing_time
                        });
                    }
                    if (value.day == "Wednesday") {
                        temp.EditbusinessForm.patchValue({
                            wednesday: true,
                            wednesdayopeninghours: value.opening_time,
                            wednesdayclosinghours: value.closing_time
                        });
                    }
                    if (value.day == "Thursday") {
                        temp.EditbusinessForm.patchValue({
                            thursday: true,
                            thursdayopeninghours: value.opening_time,
                            thursdayclosinghours: value.closing_time
                        });
                    }
                    if (value.day == "Friday") {
                        temp.EditbusinessForm.patchValue({
                            friday: true,
                            fridayopeninghours: value.opening_time,
                            fridayclosinghours: value.closing_time
                        });
                    }
                    if (value.day == "Saturday") {
                        temp.EditbusinessForm.patchValue({
                            saturday: true,
                            saturdayopeninghours: value.opening_time,
                            saturdayclosinghours: value.closing_time
                        });
                    }
                    if (value.day == "Sunday") {
                        temp.EditbusinessForm.patchValue({
                            sunday: true,
                            sundayopeninghours: value.opening_time,
                            sundayclosinghours: value.closing_time
                        });
                    }
                });
                //console.log(this.daytime);
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
                    // category: this.businessdata.category_id,
                    // category_id: this.businessdata.category,
                    // days: '',
                    // openinghours: '',
                    // closinghours: '',
                    service: _this.businessdata.sub_cat_id,
                    //service_title: this.businessdata.sub_cat,
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
            console.log(value);
            console.log(key);
            value.sub_category.forEach(function (val, ke) {
                if (val._id == id) {
                    console.log(value);
                    console.log(val);
                    temp.category_id = value._id;
                    temp.category_title = value.title;
                    //temp.service_id = id;
                    temp.service_title = val.sub_category_title;
                }
            });
        });
        console.log(this.category_id);
        console.log(this.category_title);
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
    //    selectedService(serviceid) {
    //        var temp = this;
    //        console.log(serviceid);
    //        this.services.forEach(function (value, key) {
    //            console.log(value);
    //            console.log(key);
    //            if (value._id == serviceid) {
    //                console.log(value);
    //                temp.data.service_title = value.sub_category_title;
    //            }
    //
    //        })
    //    }
    /****** function used for manage selected days,opening and closing time ***********/
    // closingtime(timedata) {
    //     var temp = this;
    //     console.log(timedata.value);
    //     console.log(timedata.value.days);
    //     console.log(timedata.value.closinghours);
    //     console.log(timedata.value.openinghours);
    //     var a = timedata.value.openinghours.split(':');
    //     var b = timedata.value.closinghours.split(':');
    //      if(b[0]>a[0]){
    //     if (a[0] > 11) {
    //         timedata.value.openinghours = timedata.value.openinghours + ' PM';
    //     } else {
    //         timedata.value.openinghours = timedata.value.openinghours + ' AM';
    //     }
    //     console.log(timedata.value.openinghours);
    //     if (b[0] > 11) {
    //         timedata.value.closinghours = timedata.value.closinghours + ' PM';
    //     } else {
    //         timedata.value.closinghours = timedata.value.closinghours + ' AM';
    //     }
    //     console.log(timedata.value.closinghours);
    //     var dayOpeningClosing = {
    //         day: timedata.value.days,
    //         opening_time: timedata.value.openinghours,
    //         closing_time: timedata.value.closinghours
    //     }
    //     this.senddays.push(timedata.value.days);
    //     var ot = timedata.value.openinghours.split(' ');
    //     var ct = timedata.value.closinghours.split(' ');
    //     this.sendopeningtime.push(ot[0]);
    //     this.sendclosingtime.push(ct[0]);
    //     console.log(this.senddays.join(','));
    //     console.log(this.sendopeningtime.join(','));
    //     console.log(this.sendclosingtime.join(','));
    //     this.daytime.push(dayOpeningClosing);
    //     console.log(this.daytime);
    //     this.data.openinghours = '';
    //     this.data.closinghours = '';
    //     this.data.days = '';
    //      }else {
    //         this.common.presentAlert('Edit business', 'Closing time must be greater than opening time!');
    //     }
    // }
    /****** function used for  delete selected day,openingtime and closing time.***********/
    // DeleteTimes(event, ind) {
    //     var temp = this;
    //     console.log(event.day);
    //     console.log(ind);
    //     /**** pop a value from array by index ************/
    //     console.log(temp.daytime);
    //     temp.daytime.splice(ind, 1);
    //     temp.senddays.splice(ind, 1);
    //     temp.sendopeningtime.splice(ind, 1);
    //     temp.sendclosingtime.splice(ind, 1);
    //     console.log(this.daytime.length);
    //     console.log(this.daytime);
    //     if (this.daytime.length == 0) {
    //         this.data.days = '';
    //         this.data.openinghours = '';
    //         this.data.closinghours = '';
    //     }
    // }
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
                _this.common.presentAlert('Add business', 'You can add more pictures if you want to get the premium membership,<br> call now 123-4567890');
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
        this.senddays = [];
        this.sendopeningtime = [];
        this.sendclosingtime = [];
        if (formdata.value.monday == true && formdata.value.mondayopeninghours != "" && formdata.value.mondayclosinghours != "") {
            this.senddays.push('Monday');
            this.sendopeningtime.push(formdata.value.mondayopeninghours);
            this.sendclosingtime.push(formdata.value.mondayclosinghours);
        }
        if (formdata.value.tuesday == true && formdata.value.tuesdayopeninghours != "" && formdata.value.tuesdayclosinghours != "") {
            this.senddays.push('Tuesday');
            this.sendopeningtime.push(formdata.value.tuesdayopeninghours);
            this.sendclosingtime.push(formdata.value.tuesdayclosinghours);
        }
        if (formdata.value.wednesday == true && formdata.value.wednesdayopeninghours != "" && formdata.value.wednesdayclosinghours != "") {
            this.senddays.push('Wednesday');
            this.sendopeningtime.push(formdata.value.wednesdayopeninghours);
            this.sendclosingtime.push(formdata.value.wednesdayclosinghours);
        }
        if (formdata.value.thursday == true && formdata.value.thursdayopeninghours != "" && formdata.value.thursdayclosinghours != "") {
            this.senddays.push('Thursday');
            this.sendopeningtime.push(formdata.value.thursdayopeninghours);
            this.sendclosingtime.push(formdata.value.thursdayclosinghours);
        }
        if (formdata.value.friday == true && formdata.value.fridayopeninghours != "" && formdata.value.fridayclosinghours != "") {
            this.senddays.push('Friday');
            this.sendopeningtime.push(formdata.value.fridayopeninghours);
            this.sendclosingtime.push(formdata.value.fridayclosinghours);
        }
        if (formdata.value.saturday == true && formdata.value.saturdayopeninghours != "" && formdata.value.saturdayclosinghours != "") {
            this.senddays.push('Saturday');
            this.sendopeningtime.push(formdata.value.saturdayopeninghours);
            this.sendclosingtime.push(formdata.value.saturdayclosinghours);
        }
        if (formdata.value.sunday == true && formdata.value.sundayopeninghours != "" && formdata.value.sundayclosinghours != "") {
            this.senddays.push('Sunday');
            this.sendopeningtime.push(formdata.value.sundayopeninghours);
            this.sendclosingtime.push(formdata.value.sundayclosinghours);
        }
        var postdata;
        console.log(this.senddays.join(','));
        console.log(this.sendopeningtime.join(','));
        console.log(this.sendclosingtime.join(','));
        if (this.senddays.length > 0) {
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
                    category: this.category_title,
                    category_id: this.category_id,
                    sub_cat: this.service_title,
                    sub_cat_id: formdata.value.service,
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], EditbusinessPage.prototype, "mapElement", void 0);
    EditbusinessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-editbusiness',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/editbusiness/editbusiness.html"*/'<!--\n  Generated template for the EditbusinessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="green">\n        <button ion-button menuToggle style="display:block !important;">\n            <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n        <ion-title>Edit business</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="EditbusinessForm" (submit)="EditBusiness(EditbusinessForm)">\n        <ion-list no-lines>\n            <div class="outersec">\n                <ion-item>\n                    <ion-input type="text" disabled placeholder="Business Name" formControlName="businessname" ></ion-input>\n                </ion-item>\n                <img src="assets/imgs/editname.png">\n            </div>\n\n            <!--        <ion-item>\n                      <ion-label>City</ion-label>\n                      <ion-select>\n                        <ion-option value="1">City 1</ion-option>\n                        <ion-option value="2">City 2</ion-option>\n                        <ion-option value="3">City 3</ion-option>\n                        <ion-option value="4">City 4</ion-option>\n                      </ion-select>\n                    </ion-item>-->\n\n            <ion-input type="hidden" formControlName="businesstype" ></ion-input>\n\n            <ion-item>\n                <ion-input type="tel" placeholder="Phone Number" formControlName="phone"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-input type="text" placeholder="Address" formControlName="address" [(ngModel)]="autocomplete.query" (input)="updateSearch()"></ion-input>\n            </ion-item>\n            <div *ngIf="autocompleteItems != \'\'" class="suggestion">\n                <ion-label *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">{{ item }}</ion-label>\n            </div>\n            <ion-item>\n                \n                <ion-input type="text" placeholder="Zip code" formControlName="zipcode" maxLength="8"></ion-input>\n            </ion-item>\n            <ion-item class="area">\n                <ion-textarea  placeholder="Description" formControlName="description"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Category</ion-label>\n                <ion-select class="catoption" formControlName="service" (ionChange)="selectedCat($event)">\n                    <ion-option *ngFor="let cat of services" value ="{{cat._id}}">{{cat.sub_category_title}}\n<!--                        <ion-input type="hidden" value="{{cat.sub_category_title}}" formControlName="service_title"></ion-input>-->\n                    </ion-option>\n                </ion-select>\n                <!--                <ion-select formControlName="category" [(ngModel)]="data.category" (ionChange)="selectedCat($event)">\n                                    <ion-option *ngFor="let cat of category" value ="{{cat._id}}">{{cat.title}}\n                                        <ion-input type="hidden" [(ngModel)]="data.category_id" formControlName="category_id"></ion-input></ion-option>\n                                </ion-select>-->\n            </ion-item>\n\n            <h2 style="margin-bottom: 7px !important;">Add opening and closing hours.</h2>\n            <div class="day-frmt">\n                    <ion-item class="check_box">\n                        <ion-label>Monday</ion-label>\n                        <ion-checkbox color="green" formControlName="monday" required="false"></ion-checkbox>\n                    </ion-item>\n                    <ion-grid class="paddingnone">\n                    <ion-row>\n                        <ion-col col-6 class="padding-left">\n                            <ion-item>\n                                <ion-label>From</ion-label>\n                                <ion-datetime  displayFormat="hh:mm A" formControlName="mondayopeninghours"></ion-datetime>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-6 class="padding-right">\n                            <ion-item>\n                                <ion-label>To</ion-label>\n                                <ion-datetime displayFormat="hh:mm A" formControlName="mondayclosinghours"></ion-datetime>\n                            </ion-item>\n                        </ion-col> \n                    </ion-row>\n                </ion-grid>\n    \n                <ion-item class="check_box">\n                        <ion-label>Tuesday</ion-label>\n                        <ion-checkbox color="green" formControlName="tuesday" required="false"></ion-checkbox>\n                    </ion-item>\n                    <ion-grid class="paddingnone">\n                    <ion-row>\n                        <ion-col col-6 class="padding-left">\n                            <ion-item>\n                                <ion-label>From</ion-label>\n                                <ion-datetime  displayFormat="hh:mm A" formControlName="tuesdayopeninghours"></ion-datetime>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-6 class="padding-right">\n                            <ion-item>\n                                <ion-label>To</ion-label>\n                                <ion-datetime displayFormat="hh:mm A" formControlName="tuesdayclosinghours"></ion-datetime>\n                            </ion-item>\n                        </ion-col> \n                    </ion-row>\n                </ion-grid>\n    \n                <ion-item class="check_box">\n                        <ion-label>Wednesday</ion-label>\n                        <ion-checkbox color="green" formControlName="wednesday" required="false"></ion-checkbox>\n                    </ion-item>\n                    <ion-grid class="paddingnone">\n                    <ion-row>\n                        <ion-col col-6 class="padding-left">\n                            <ion-item>\n                                <ion-label>From</ion-label>\n                                <ion-datetime  displayFormat="hh:mm A" formControlName="wednesdayopeninghours"></ion-datetime>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-6 class="padding-right">\n                            <ion-item>\n                                <ion-label>To</ion-label>\n                                <ion-datetime displayFormat="hh:mm A" formControlName="wednesdayclosinghours"></ion-datetime>\n                            </ion-item>\n                        </ion-col> \n                    </ion-row>\n                </ion-grid>\n    \n                <ion-item class="check_box">\n                        <ion-label>Thursday</ion-label>\n                        <ion-checkbox color="green" formControlName="thursday" required="false"></ion-checkbox>\n                    </ion-item>\n                    <ion-grid class="paddingnone">\n                    <ion-row>\n                        <ion-col col-6 class="padding-left">\n                            <ion-item>\n                                <ion-label>From</ion-label>\n                                <ion-datetime  displayFormat="hh:mm A" formControlName="thursdayopeninghours"></ion-datetime>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-6 class="padding-right">\n                            <ion-item>\n                                <ion-label>To</ion-label>\n                                <ion-datetime displayFormat="hh:mm A" formControlName="thursdayclosinghours"></ion-datetime>\n                            </ion-item>\n                        </ion-col> \n                    </ion-row>\n                </ion-grid>\n    \n                <ion-item class="check_box">\n                        <ion-label>Friday</ion-label>\n                        <ion-checkbox color="green" formControlName="friday" required="false"></ion-checkbox>\n                    </ion-item>\n                    <ion-grid class="paddingnone">\n                    <ion-row>\n                        <ion-col col-6 class="padding-left">\n                            <ion-item>\n                                <ion-label>From</ion-label>\n                                <ion-datetime  displayFormat="hh:mm A" formControlName="fridayopeninghours"></ion-datetime>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-6 class="padding-right">\n                            <ion-item>\n                                <ion-label>To</ion-label>\n                                <ion-datetime displayFormat="hh:mm A" formControlName="fridayclosinghours"></ion-datetime>\n                            </ion-item>\n                        </ion-col> \n                    </ion-row>\n                </ion-grid>\n    \n                <ion-item class="check_box">\n                        <ion-label>Saturday</ion-label>\n                        <ion-checkbox color="green" formControlName="saturday" required="false"></ion-checkbox>\n                    </ion-item>\n                    <ion-grid class="paddingnone">\n                    <ion-row>\n                        <ion-col col-6 class="padding-left">\n                            <ion-item>\n                                <ion-label>From</ion-label>\n                                <ion-datetime  displayFormat="hh:mm A" formControlName="saturdayopeninghours"></ion-datetime>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-6 class="padding-right">\n                            <ion-item>\n                                <ion-label>To</ion-label>\n                                <ion-datetime displayFormat="hh:mm A" formControlName="saturdayclosinghours"></ion-datetime>\n                            </ion-item>\n                        </ion-col> \n                    </ion-row>\n                </ion-grid>\n    \n                <ion-item class="check_box">\n                        <ion-label>Sunday</ion-label>\n                        <ion-checkbox color="green" formControlName="sunday" required="false"></ion-checkbox>\n                    </ion-item>\n                    <ion-grid class="paddingnone">\n                    <ion-row>\n                        <ion-col col-6 class="padding-left">\n                            <ion-item>\n                                <ion-label>From</ion-label>\n                                <ion-datetime  displayFormat="hh:mm A" formControlName="sundayopeninghours"></ion-datetime>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-6 class="padding-right">\n                            <ion-item>\n                                <ion-label>To</ion-label>\n                                <ion-datetime displayFormat="hh:mm A" formControlName="sundayclosinghours"></ion-datetime>\n                            </ion-item>\n                        </ion-col> \n                    </ion-row>\n                </ion-grid>\n            </div>\n            <!-- <div class="tagsec" *ngIf="daytime.length>0">\n                <div class="inner-sec" *ngFor="let d of daytime;let i = index">\n                     <p style="margin-bottom:1px;">{{d.day}}</p>\n                    <p><span>{{d.opening_time}}</span> to <span>{{d.closing_time}}</span></p>\n                    <ion-icon name="close" (click)="DeleteTimes(d,i)"></ion-icon>\n                </div>\n            </div> -->\n<!--            <ion-item *ngIf="services">\n                <ion-label>Services</ion-label>\n                <ion-select class="catoption" formControlName="services" (ionChange)="selectedService($event)">\n                    <ion-option *ngFor="let service of services" value="{{service._id}}">{{service.sub_category_title}}\n                                                <ion-input type="hidden" [(ngModel)]="data.service_title" formControlName="services_title"></ion-input>\n                </ion-option>\n            </ion-select>\n        </ion-item>-->\n        <!--            <ion-item *ngIf="services">\n                        <ion-label>Services</ion-label>\n                        <ion-select formControlName="services" [(ngModel)]="data.service">\n                            <ion-option *ngFor="let service of services">{{service.sub_category_title}}\n                                <ion-input type="hidden" value="{{service._id}}" formControlName="services_id"></ion-input>\n                            </ion-option>\n                        </ion-select>\n                    </ion-item>-->\n\n        <h2 *ngIf="businessdata?.business_type == 1 ||businessdata?.business_type == 2">Social Links</h2>\n        <ion-item *ngIf="businessdata?.business_type == 1 ||businessdata?.business_type == 2">\n            <img src="assets/imgs/instgrm.png" item-start class="social">\n            <ion-input type="text" placeholder="https://www.instagram.com/" formControlName="instagramlink" autocapitalize="off"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="businessdata?.business_type == 1 ||businessdata?.business_type == 2">\n            <img src="assets/imgs/fb.png" item-start class="social">\n            <ion-input type="text" placeholder="https://www.facebook.com/" formControlName="facebooklink" autocapitalize="off"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="businessdata?.business_type == 1 ||businessdata?.business_type == 2">\n            <img src="assets/imgs/twtr.png" item-start class="social">\n            <ion-input type="text" placeholder="https://www.twitter.com/" formControlName="twitterlink" autocapitalize="off"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input type="text" placeholder="https://www.websitename.com/" formControlName="websiteurl" autocapitalize="off"></ion-input>\n        </ion-item>\n\n        <h2>Is this a veteran owned business?</h2>\n\n        <ion-list radio-group style="margin:0 !important;" formControlName="veteranowned">\n            <ion-item class="rdo" style="padding-left: 25px !important;">\n                <ion-radio value="true"></ion-radio>\n                <ion-label>Yes</ion-label>\n            </ion-item>\n            <ion-item class="rdo" style="padding-left: 25px !important;">\n                <ion-radio value="false"></ion-radio>\n                <ion-label>No</ion-label>\n            </ion-item>\n        </ion-list>\n\n        <h2>Do you own an online marketplace?</h2>\n\n        <ion-list radio-group style="margin:0 !important;" formControlName="onlinemarketplace">\n            <ion-item class="rdo" style="padding-left: 25px !important;">\n                <ion-radio value="true"></ion-radio>\n                <ion-label>Yes</ion-label>\n            </ion-item>\n\n            <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                <ion-radio value="false"></ion-radio>\n                <ion-label>No</ion-label>\n            </ion-item>\n        </ion-list>\n\n        <h2>Do you accept?</h2>\n\n        <ion-list style="margin:0 !important;">\n            <ion-item class="chck">\n                <ion-checkbox formControlName="accept" style="margin-right: 9px !important;"></ion-checkbox>\n                <ion-label>Appointments</ion-label>\n            </ion-item>\n\n            <ion-item class="chck">\n\n                <ion-checkbox formControlName="reservation" style="margin-right: 9px !important;"></ion-checkbox>\n                <ion-label>Reservations</ion-label>\n            </ion-item>\n        </ion-list>\n    </ion-list>\n    <div class="photosec">\n        <h2 style="position:relative;">Add Photo <span>( Multiple photos )</span>\n            <button type="button" ion-button color="green" (click)="presentActionSheet()"><ion-icon name="add"></ion-icon></button>\n        </h2>\n        <ion-grid class="paddingnone" *ngIf="base64Image">\n            <ion-row>\n                <ion-col col-4 *ngFor="let img of base64Image;let i = index">\n                         <div class="image-wrapper">\n                        <img src="{{img.business_image}}">\n                        <img src="assets/imgs/crosimg.png" class="delete-img" (click)="DeleteImage(i,img._id)">\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <!--        <h2 style="position:relative;">Add Logo <span>( Single photo )</span>\n                    <button *ngIf="businesslogo == null" type="button" ion-button color="green" (click)="presentActionSheet1()"><ion-icon name="add"></ion-icon></button>\n                </h2>\n                <ion-grid class="paddingnone" *ngIf="businesslogo != null">\n                          <ion-row>\n                        <ion-col col-4>\n                            <div class="image-wrapper">\n                                <img src="{{businesslogo}}">\n                                <img src="assets/imgs/crosimg.png" class="delete-img" (click)="DeleteLogo">\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>-->\n        <div class="btnsec">\n            <button type="submit" ion-button color="green" full class="btn1" [disabled]="!EditbusinessForm.valid">SAVE</button>\n        </div>\n    </div>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/editbusiness/editbusiness.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], EditbusinessPage);
    return EditbusinessPage;
}());

//# sourceMappingURL=editbusiness.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofiletwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword_changepassword__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reservations_reservations__ = __webpack_require__(51);
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
        this.base64Image = 'assets/imgs/user.png';
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
        clearInterval(this.common.interval);
    };
    EditprofiletwoPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.getUser();
        this.Editprofile = this.formBuilder.group({
            fname: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]],
            lname: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, this.emailValidator.bind(this)]],
            phone: [''],
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
                if (response.data.phone_number) {
                    var a = response.data.phone_number;
                    console.log(typeof (a));
                    console.log(a.toString());
                    var mystring = a.toString();
                    console.log(mystring.replace(/\D+/g, "").replace(/([0-9]{1,3})([0-9]{3})([0-9]{4}$)/gi, "($1)-$2-$3"));
                    response.data.phone_number = mystring.replace(/\D+/g, "").replace(/([0-9]{1,3})([0-9]{3})([0-9]{4}$)/gi, "($1)-$2-$3");
                    //console.log(a);
                }
                _this.Editprofile.patchValue({
                    fname: response.data.firstname,
                    lname: response.data.lastname,
                    email: response.data.email,
                    phone: response.data.phone_number,
                });
            }
        });
    };
    EditprofiletwoPage.prototype.phonePattern = function (formdata) {
        console.log(formdata.value.phone);
        if (formdata.value.phone) {
            var a = formdata.value.phone;
            console.log(typeof (a));
            console.log(a.toString());
            var mystring = a.toString();
            console.log(mystring.replace(/\D+/g, "").replace(/([0-9]{1,3})([0-9]{3})([0-9]{4}$)/gi, "($1)-$2-$3"));
            formdata.value.phone = mystring.replace(/\D+/g, "").replace(/([0-9]{1,3})([0-9]{3})([0-9]{4}$)/gi, "($1)-$2-$3");
        }
        this.Editprofile.patchValue({
            phone: formdata.value.phone,
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
                    if (response.data.role == "member") {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__reservations_reservations__["a" /* ReservationsPage */]);
                    }
                }
            });
        });
    };
    EditprofiletwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-editprofiletwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/editprofiletwo/editprofiletwo.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>edit profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="Editprofile">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n     <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n    \n  <div class="head-sec">\n    <div class="image-wrapper">\n      <img [src]="base64Image">\n    </div>\n      <ion-fab center>\n    <h2 ion-fab mini icon-only>EDIT</h2>\n    <ion-fab-list side="left">\n      <button ion-fab (click)="chooseImage(0)"><ion-icon name="images"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n      <button ion-fab (click)="chooseImage(1)"><ion-icon name="camera"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n   \n  </div>\n    \n  <div class="input-sec">\n    <ion-list>\n\n      <ion-item>\n          <ion-label stacked>First name</ion-label>\n          <ion-input type="text" placeholder="Enter first name" formControlName="fname"></ion-input>\n        </ion-item>\n      <span *ngIf="!isValid(\'fname\')" class="validationpop animated bounce">First name required.</span>\n      <ion-item>\n          <ion-label stacked>Last name</ion-label>\n          <ion-input type="text" placeholder="Enter last name" formControlName="lname"></ion-input>\n        </ion-item>\n      <span *ngIf="!isValid(\'lname\')" class="validationpop animated bounce">Last name required.</span>\n        <ion-item>\n          <ion-label stacked>Email</ion-label>\n          <ion-input type="email" placeholder="kristonpeeter@yahoo.com" formControlName="email" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Phone Number</ion-label>\n          <ion-input type="tel" placeholder="(XXX)-XXX-XXXX" formControlName="phone" (input)="phonePattern(Editprofile)"></ion-input>\n        </ion-item>\n        <h2>User Setting</h2>\n        <ion-item *ngIf=\'profiledata?.regitration_type == "simple_registarion"\' (click)="changepwd()">\n          <p>Change Password</p>\n          <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n        \n\n    </ion-list>\n  </div>\n        </form> \n<!--    <ion-fab center>\n    <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="bottom">\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="images"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n      <button ion-fab><ion-icon name="camera"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>-->\n</ion-content>\n<ion-footer>\n  <button type="submit" (click)="editProfile(Editprofile)" ion-button full color="green" class="btn2">SAVE</button>\n</ion-footer>\n\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/editprofiletwo/editprofiletwo.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _k || Object])
    ], EditprofiletwoPage);
    return EditprofiletwoPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=editprofiletwo.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_review__ = __webpack_require__(101);
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
        clearInterval(this.common.interval);
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
                        if (value.order_data.length > 0) {
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
                        }
                    });
                    _this.historydata = response.data;
                    _this.totalpageno = response.page;
                }
                else {
                    //this.common.presentAlert('History', 'No data found!');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>history</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor="let history of historydata">\n          <ion-thumbnail item-start>\n            <img *ngIf="history.order_data[0].business_data.length>0" [src]="history.order_data[0].business_image[0].business_image">\n             <img  *ngIf="history.order_data[0].business_data.length == 0" src="assets/imgs/noimage.jpg">\n          </ion-thumbnail>\n            <h2 *ngIf="history.order_data[0].business_data.length>0">{{history.order_data[0].business_data[0].business_name}}</h2>\n            <h2 *ngIf="history.order_data[0].business_data.length == 0">Unknown business</h2>\n          <p *ngIf="history.order_data[0].business_data.length>0">{{history.order_data[0].business_data[0].sub_cat}}</p>\n          <rating *ngIf="history.order_data.length>0" readOnly="true" max="5" emptyStarIconName="star-outline" starIconName="star" nullable="false" [(ngModel)]="history.order_data[0].avg" name="rate">\n           </rating>\n          <rating *ngIf="history.order_data.length == 0" readOnly="true" max="5" emptyStarIconName="star-outline" starIconName="star" nullable="false" name="rate">\n           </rating>\n          <button class="btneq" ion-button color="yellow" (click)="Review(history.order_data[0])">Review</button>\n          <p *ngIf="history.order_data[0].business_data.length>0" [innerHTML]="history.order_data[0].business_data[0].business_description"></p>\n          <p *ngIf="history.order_data[0].business_data.length>0"><span>{{history.order_data[0].business_data[0].updated_at | date}}</span> <span class="time">{{history.order_data[0].business_data[0].updated_at | date:\'shortTime\'}}</span></p>\n        </ion-item>\n\n<!--  \n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="assets/imgs/img1.jpg">\n                  </ion-thumbnail>\n                  <h2>Sam\'s Auto Repair</h2>\n                  <p>Auto Repair</p>\n                  <ul>\n                    <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n                    <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n                    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n                    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n                    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n                  </ul>\n                  <button class="btneq" ion-button color="yellow" >Edit Review</button>\n                  <p>Lorem Ipsum available, but the majority have suffered</p>\n                  <p><span>15 nov 2017</span> <span class="time">20:15 PM</span></p>\n                </ion-item>-->\n\n      </ion-list>\n    <div *ngIf="historydata?.length<1">\n                <div style="text-align: center !important;padding: 40% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n                    <img style="width:100px;margin: auto;display: block;" src="assets/imgs/sorry11.png">\n                    <span> It\'s empty here!</span>\n                </div>\n            </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/history/history.html"*/,
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

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorytwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(10);
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
    function HistorytwoPage(navCtrl, navParams, appsetting, http, common, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.pageno = 1;
    }
    HistorytwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistorytwoPage');
        clearInterval(this.common.interval);
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
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(function () {
            var serialized = _this.appsetting.serializeObj(postdata);
            _this.http.post(_this.appsetting.url + 'orders/getoldreservation ', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    _this.history = response.data;
                    _this.totalpageno = response.page;
                }
                else {
                    //this.common.presentAlert('Book now', 'Something went wrong!');
                }
            });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-historytwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/historytwo/historytwo.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>history</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n  <ion-list *ngIf="history">\n      \n        <ion-item *ngFor="let reservation of history">\n            <ion-thumbnail item-start>\n                <img *ngIf="reservation?.order_data[0]?.profile_pic" [src]="reservation?.order_data[0]?.profile_pic">\n              <img *ngIf="!reservation?.order_data[0]?.profile_pic" src="assets/imgs/user.svg">\n            </ion-thumbnail>\n          <h2>{{reservation?.order_data[0].firstname}} {{reservation?.order_data[0].lastname}}</h2>\n          <p>{{reservation?.spacial_accomodation}}</p>\n          <div class="left">\n            <p>Booking Date</p>\n            <p>{{reservation?.orderstart | date}}</p>\n          </div>\n          <div class="right">\n            <p>Booking Time</p>\n            <p>{{reservation?.orderstart | date:\'shortTime\'}}</p>\n          </div>\n        </ion-item>\n      \n    </ion-list>\n<ion-list *ngIf="!history">\n    <div style="text-align: center !important;padding: 50% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n                    <img style="width:100px;margin: auto;display: block;" src="assets/imgs/sorry11.png">\n                    <span> it\'s empty here!</span>\n                </div>\n    </ion-list>\n<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/historytwo/historytwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], HistorytwoPage);
    return HistorytwoPage;
}());

//# sourceMappingURL=historytwo.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurtalkreplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
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
        console.log('ionViewDidLoad OurtalkreplyPage');
        console.log(this.navParams.get('topidata'));
        this.topicdata = this.navParams.get('topidata');
        this.Topicdata();
        //        this.common.interval = setInterval(() => {
        //                    this.Topicdata();
        //                }, 10000);
    };
    OurtalkreplyPage.prototype.scrollBottom = function () {
        if (this.content != null) {
            this.content.scrollToBottom(300);
        }
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
                    var startDate = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date(value.comment_time));
                    var endDate = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date());
                    // var milliseconds = endDate.diff(startDate);
                    console.log(endDate.diff(startDate, 'minutes'));
                    console.log(endDate.diff(startDate, 'hours'));
                    console.log(endDate.diff(startDate, 'days'));
                    var aba = endDate.diff(startDate, 'hours') + ':' + endDate.diff(startDate, 'minutes');
                    console.log(endDate.diff(startDate, 'hours') + ':' + endDate.diff(startDate, 'minutes'));
                    console.log(__WEBPACK_IMPORTED_MODULE_6_moment__(aba, ["HH:mm"]).format("HH:mm"));
                    //                        var duration = moment.duration(milliseconds, 'milliseconds');
                    //                        console.log('Hours' + duration.hours())
                    //                        console.log('minutes' + duration.minutes());
                    if (endDate.diff(startDate, 'days') > 0) {
                        value.days = endDate.diff(startDate, 'days');
                        value.time = 'day';
                    }
                    else {
                        if (endDate.diff(startDate, 'hours') > 1) {
                            value.days = __WEBPACK_IMPORTED_MODULE_6_moment__(aba, ["HH:mm"]).format("HH:mm");
                            value.time = 'hours';
                        }
                        else {
                            value.days = __WEBPACK_IMPORTED_MODULE_6_moment__(aba, ["HH:mm"]).format("HH:mm");
                            value.time = 'hour';
                        }
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
                _this.commentdata = '';
                _this.commentdata = response.data[0];
                _this.ourtalk.patchValue({
                    comment: ''
                });
                _this.Topicdata();
            }
            else {
                _this.common.presentAlert('Talk', response.message);
            }
        });
        // })
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], OurtalkreplyPage.prototype, "content", void 0);
    OurtalkreplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ourtalkreply',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/ourtalkreply/ourtalkreply.html"*/'<!--\n  Generated template for the TalkreplyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title>{{topicdata?.topic_name}}</ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list class="mytlk">\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img *ngIf=" topicdata?.talk_data.length>0 && topicdata?.talk_data[0]?.profile_pic !=null" [src]="topicdata?.talk_data[0].profile_pic">\n              <img *ngIf="topicdata?.talk_data.length == 0 || topicdata?.talk_data[0]?.profile_pic == null" src="assets/imgs/user.png">\n            </ion-thumbnail>\n            <h2>{{topicdata?.topic_name}}</h2>\n            <p style="white-space: normal">{{topicdata?.message}}</p>\n            <p>{{topicdata?.loc_address}}</p>\n            <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>{{commentdata?.comments.length}} Reply</p>\n           <p *ngIf="topicdata?.time == \'day\'"><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>{{topicdata?.days}} days ago</p>\n        <p *ngIf="topicdata?.time == \'time\'"><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>{{topicdata?.days}} hour ago</p>\n          </ion-item>\n    </ion-list>\n    <ion-list no-lines  class="bottom-sec" *ngIf="commentdata?.comments.length>0">\n        <ion-item style="padding-right: 8px;" *ngFor="let comment of commentdata?.comments; let last = last">\n          <ion-avatar item-start>{{last ? scrollBottom() : \'\'}}\n            <img *ngIf="comment.profile_pic" [src]="comment.profile_pic">\n            <img *ngIf="!comment.profile_pic" src="assets/imgs/user.png">\n          </ion-avatar>\n                  <h2>\n                      <strong *ngIf="comment.firstname">{{comment.firstname}} {{comment.lastname}}</strong>\n                      <strong *ngIf="!comment.firstname">Unknown user</strong>\n                <span>{{comment.days}} {{comment.time}} ago</span></h2>\n          \n          <p>{{comment.comment_msg}}</p>\n        </ion-item>\n\n<!--        <ion-item style="padding-right: 8px;">\n          <ion-avatar item-start>\n            <img src="assets/imgs/talk.png">\n          </ion-avatar>\n          <h2>Austin Robertson<span>1 Day ago</span></h2>\n          <ul style="margin-top:0 !important;">\n              <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n              <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n            </ul>\n            <p class="revw" style="line-height: 17px !important; margin-top:0 !important;">Rating</p>\n          <p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.</p>\n          <p class="reply"><img src="assets/imgs/reply.png">Reply</p>\n          <ion-item style="padding: 0;">\n            <ion-textarea placeholder=""></ion-textarea>\n          </ion-item>\n          <div class="btnsec">\n            <button ion-button color="green" class="btn1">POST</button>\n          </div>\n        </ion-item>-->\n      </ion-list>\n    <div *ngIf="commentdata?.comments.length == 0">\n       <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n          <img style="margin: auto;display: block;" src="assets/imgs/sorry.png">\n<!--          <span> Oops no one replied on this topic!</span>-->\n    </div>\n    </div>\n</ion-content>\n<ion-footer>\n         <form [formGroup]="ourtalk" class="out">\n              <p class="reply">Reply</p>\n          <ion-item style="padding: 0;">\n            <ion-textarea placeholder="" formControlName="comment"></ion-textarea>\n          </ion-item>\n          <div class="btnsec">\n            <button type="submit" ion-button color="green" class="btn1" block [disabled]="!ourtalk.valid" (click)="PostComment(ourtalk)">REPLY</button>\n          </div>\n         </form>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/ourtalkreply/ourtalkreply.html"*/,
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

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(12);
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
    function PrivacyPage(navCtrl, navParams, http, appsetting, loadingCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
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
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'static/getstaticpagedata', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
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
        });
    };
    PrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-privacy',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/privacy/privacy.html"*/'<!--\n  Generated template for the PrivacyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="green">\n        <button ion-button menuToggle style="display:block !important;">\n            <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n        <ion-title>Privacy Policy</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="banner">\n<!--        <img [src]="privacy?.pageimage" (load)="privacy.loaded = true" [hidden]="!privacy?.loaded" >-->\n<!--        <img src="assets/imgs/loader.gif" [hidden]="privacy?.loaded">-->\n    </div>\n    <div class="contant-sec" padding>\n        <!--    <h2>Dummy text of the printing</h2>-->\n        <div class="pcontent" [innerHTML]="privacy?.pagedata"></div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/privacy/privacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacytwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(12);
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
var PrivacytwoPage = (function () {
    function PrivacytwoPage(navCtrl, navParams, http, appsetting, loadingCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
    }
    PrivacytwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacytwoPage');
        this.get();
    };
    PrivacytwoPage.prototype.get = function () {
        var _this = this;
        var postdata;
        var options = this.appsetting.header();
        postdata = {
            pagename: 'privacy_policy(user)'
        };
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'static/getstaticpagedata', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
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
        });
    };
    PrivacytwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-privacytwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/privacytwo/privacytwo.html"*/'<!--\n  Generated template for the PrivacyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="green">\n        <button ion-button menuToggle style="display:block !important;">\n            <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n        <ion-title>Privacy Policy</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n<!--    <div class="banner">\n        <img [src]="privacy?.pageimage" (load)="privacy.loaded = true" [hidden]="!privacy?.loaded" >\n        <img src="assets/imgs/loader.gif" [hidden]="privacy?.loaded">\n    </div>-->\n    <div class="contant-sec" style="padding:0px 16px;">\n        <!--    <h2>Dummy text of the printing</h2>-->\n        <div class="pcontent" [innerHTML]="privacy?.pagedata"></div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/privacytwo/privacytwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], PrivacytwoPage);
    return PrivacytwoPage;
}());

//# sourceMappingURL=privacytwo.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealtalkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__talkreply_talkreply__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ourtalkreply_ourtalkreply__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(50);
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
    function RealtalkPage(navCtrl, navParams, loadingCtrl, common, toastCtrl, appsetting, http, formBuilder, zone, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.formBuilder = formBuilder;
        this.zone = zone;
        this.geolocation = geolocation;
        this.ourtalks = [];
        this.mytalks = [];
        this.categories = [];
        this.talk = 'mytalk';
        this.subcat = [];
        this.service = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.pageno = 1;
        this.loader = 0;
        //alert('asdfa');
        console.log(this.common.interval);
        clearInterval(this.common.interval);
        this.autocompleteItems = [];
        this.realTalk = this.formBuilder.group({
            topicname: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            location: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            category: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            message: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]]
        });
        this.categories = [
            { name: 'Coffee House Talk' }, { name: 'Family & Parenting' }, { name: 'Food' }, { name: 'Humor & Offbeat' },
            { name: 'Local Conversations' }, { name: 'Local MeetUps Events' }, { name: 'New Music Alert!' }, { name: 'News & Politics' },
            { name: 'Other' }, { name: 'Relationships and Dating' }, { name: 'Shopping and Products' }, { name: 'Sports' },
            { name: 'Theatre, Movies, Entertainment' }, { name: 'Travel' }
        ];
        var reverseSortedArray = this.categories.sort(function (a, b) {
            //               console.log(a);
            //               console.log(b);
            if (a.name < b.name)
                return -1;
            else if (a.name > b.name)
                return 1;
            return 0;
        });
        //              console.log(reverseSortedArray);
        //              console.log(this.categories);
    }
    RealtalkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RealtalkPage');
        clearInterval(this.common.interval);
        //this.getSubCatList();
        if (this.talk == 'mytalk') {
            this.MyTalk();
        }
    };
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
        clearInterval(this.common.interval);
        console.log(formValue.value);
        var options = this.appsetting.header();
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
        clearInterval(this.common.interval);
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
                        //                        var a = new Date();
                        //                        console.log(new Date(value.created_at))
                        //                        var ab = moment(new Date(value.created_at));
                        //                        var b = moment(new Date());
                        //                        console.log(b.diff(ab));
                        //                        
                        var startDate = __WEBPACK_IMPORTED_MODULE_8_moment__(new Date(value.created_at));
                        var endDate = __WEBPACK_IMPORTED_MODULE_8_moment__(new Date());
                        // var milliseconds = endDate.diff(startDate);
                        console.log(endDate.diff(startDate, 'minutes'));
                        console.log(endDate.diff(startDate, 'hours'));
                        console.log(endDate.diff(startDate, 'days'));
                        var aba = endDate.diff(startDate, 'hours') + ':' + endDate.diff(startDate, 'minutes');
                        console.log(endDate.diff(startDate, 'hours') + ':' + endDate.diff(startDate, 'minutes'));
                        console.log(__WEBPACK_IMPORTED_MODULE_8_moment__(aba, ["HH:mm"]).format("HH:mm"));
                        //                        var duration = moment.duration(milliseconds, 'milliseconds');
                        //                        console.log('Hours' + duration.hours())
                        //                        console.log('minutes' + duration.minutes());
                        if (endDate.diff(startDate, 'days') > 0) {
                            value.days = endDate.diff(startDate, 'days');
                            value.time = 'day';
                        }
                        else {
                            if (endDate.diff(startDate, 'hours') > 1) {
                                value.days = __WEBPACK_IMPORTED_MODULE_8_moment__(aba, ["HH:mm"]).format("HH:mm");
                                value.time = 'hours';
                            }
                            else {
                                value.days = __WEBPACK_IMPORTED_MODULE_8_moment__(aba, ["HH:mm"]).format("HH:mm");
                                value.time = 'hour';
                            }
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
        clearInterval(this.common.interval);
        var temp = this;
        if (this.pageno >= this.totalpageno) {
            this.pageno = 1;
        }
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log('getCurrentPosition');
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.latitude = resp.coords.latitude; // resp.coords.latitude
            _this.longitude = resp.coords.longitude; // resp.coords.longitude
            var options = _this.appsetting.header();
            var postdata = {
                page: _this.pageno,
                lat: _this.latitude,
                long: _this.longitude
            };
            var serialized = _this.appsetting.serializeObj(postdata);
            //        var Loading = this.loadingCtrl.create({
            //            spinner: 'bubbles',
            //            content: 'Loading...'
            //        });
            //        Loading.present().then(() => {
            _this.http.post(_this.appsetting.url + 'talks/getallTalks', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
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
                }
            });
        });
    };
    /********* this function is use for infinite scroll **********/
    RealtalkPage.prototype.GetOurTalks1 = function () {
        var _this = this;
        this.loader = 0;
        clearInterval(this.common.interval);
        var temp = this;
        var options = this.appsetting.header();
        var postdata = {
            page: this.pageno,
            lat: this.latitude,
            long: this.longitude
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-realtalk',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/realtalk/realtalk.html"*/'<!--\n  Generated template for the RealtalkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="green">\n        <button ion-button menuToggle style="display:block !important;">\n            <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n        <ion-title>realtalk!</ion-title>\n    </ion-navbar>\n    <div class="segment-sec" color="green">\n        <ion-segment [(ngModel)]="talk">\n            <ion-segment-button value="ourtalk" (click)="GetOurTalks()">\n                Ourtalk\n            </ion-segment-button>\n            <ion-segment-button value="mytalk" (click)="MyTalk()">\n                Mytalk\n            </ion-segment-button>\n            <ion-segment-button value="newtalk">\n                Newtalk\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n\n</ion-header>\n\n\n<ion-content>\n    <div [ngSwitch]="talk">\n        \n        <ion-list *ngSwitchCase="\'ourtalk\'" class="ourtalk">\n            <ion-refresher (ionRefresh)="doRefreshOurTalk($event)">\n            <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Pull to refresh"\n                refreshingSpinner="circles"\n                refreshingText="Refreshing...">\n            </ion-refresher-content>\n        </ion-refresher>\n            \n            <ion-item *ngFor="let ourtalk of ourtalks" (click)="OurTalkReply(ourtalk)">\n                <ion-thumbnail item-start *ngIf="ourtalk.talk_data">\n                    <img *ngIf="ourtalk?.talk_data.length>0 && ourtalk.talk_data[0]?.profile_pic != null" [src]="ourtalk.talk_data[0].profile_pic">\n                    <img *ngIf="ourtalk?.talk_data.length == 0 || ourtalk.talk_data[0]?.profile_pic == null" src="assets/imgs/user.png">\n                </ion-thumbnail>\n                <h2>{{ourtalk?.topic_name}} </h2>\n                <p style="white-space: normal">{{ourtalk?.message}}</p>\n                <p>{{ourtalk?.category_name}}</p>\n                <p *ngIf="ourtalk?.talk_data.length>0">By {{ourtalk?.talk_data[0].firstname}}</p>\n                <p *ngIf="ourtalk?.talk_data.length == 0">By Unknown user</p>\n                <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>{{ourtalk?.comments.length}} Reply</p>\n            </ion-item>\n\n            <div *ngIf="loader == 0">\n                <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n                <img height="100" width="100" src="assets/imgs/loader.gif">\n                </div>\n            </div>\n            <div *ngIf="ourtalks.length<1 && loader != 0">\n                <div style="text-align: center !important;padding: 26% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n                    <img style="margin: auto;display: block;" src="assets/imgs/sorry.png">\n                </div>\n            </div>\n            <!-- \n                        <ion-item>\n                            <ion-thumbnail item-start>\n                                <img src="assets/imgs/talk.png">\n                            </ion-thumbnail>\n                            <h2>Best Pickup lines </h2>\n                            <p>By Anima</p>\n                            <p>2 Friends</p>\n                            <p><ion-icon name="star-outline" color="gray"></ion-icon>1 Review</p>\n                        </ion-item>-->\n            <ion-infinite-scroll (ionInfinite)="doInfiniteOurTalks($event)" *ngIf="pageno<totalpageno">\n                <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'mytalk\'" class="mytlk">\n            <ion-refresher (ionRefresh)="doRefreshMyTalk($event)">\n            <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Pull to refresh"\n                refreshingSpinner="circles"\n                refreshingText="Refreshing...">\n            </ion-refresher-content>\n        </ion-refresher>\n            <ion-item *ngFor="let mytalk of mytalks" (click)="ReplyPage(mytalk)">\n                <ion-thumbnail item-start>\n                    <img *ngIf="mytalk.profile_pic" [src]="mytalk.profile_pic">\n                </ion-thumbnail>\n                <h2>{{mytalk?.topic_name}}</h2>\n                <p style="white-space: normal">{{mytalk?.category_name}}</p>\n                <p style="white-space: normal">{{mytalk?.message}}</p>\n                <p>{{mytalk?.loc_address}}</p>\n                <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>{{mytalk?.comments.length}} Reply</p>\n                <p><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>{{mytalk?.days}} {{mytalk?.time}} ago</p>\n        \n            </ion-item>\n            <div *ngIf="loader == 0">\n                <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n                <img height="100" width="100" src="assets/imgs/loader.gif">\n                </div>\n            </div>\n            <div *ngIf="mytalks.length<1 && loader != 0">\n                <div style="text-align: center !important;padding: 26% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n                    <img style="margin: auto;display: block;" src="assets/imgs/sorry.png">\n     \n                </div>\n            </div>\n\n            <!--            <ion-item>\n                            <ion-thumbnail item-start>\n                                <img src="assets/imgs/talk.png">\n                            </ion-thumbnail>\n                            <h2>Topic Name</h2>\n                            <p>Manhattan, New York, NY</p>\n                            <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>1 Comment</p>\n                            <p><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>2days ago</p>\n                        </ion-item>\n            \n                        <ion-item>\n                            <ion-thumbnail item-start>\n                                <img src="assets/imgs/talk.png">\n                            </ion-thumbnail>\n                            <h2>Topic Name</h2>\n                            <p>Manhattan, New York, NY</p>\n                            <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>1 Comment</p>\n                            <p><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>2days ago</p>\n                        </ion-item>\n            \n                        <ion-item>\n                            <ion-thumbnail item-start>\n                                <img src="assets/imgs/talk.png">\n                            </ion-thumbnail>\n                            <h2>Topic Name</h2>\n                            <p>Manhattan, New York, NY</p>\n                            <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>1 Comment</p>\n                            <p><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>2days ago</p>\n                        </ion-item>-->\n            <ion-infinite-scroll (ionInfinite)="doInfiniteMyTalks($event)" *ngIf="pageno<totalpageno">\n                <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </ion-list>\n\n        <div *ngSwitchCase="\'newtalk\'" class="newtalk" padding>\n            <h2 class="heading">Start a new talk </h2>\n            <form [formGroup]="realTalk" (submit)="postTalk(realTalk)">\n                <ion-list no-lines no-padding>\n                    <h2>Topic Name</h2>\n                    <ion-item>               \n                        <ion-input type="text" placeholder="Enter your topic" formControlName="topicname"></ion-input>\n                    </ion-item>\n                    <h2>Location</h2>\n                    <ion-item>               \n                        <ion-input type="text" placeholder="Enter your location" formControlName="location" (input)="updateSearch(realTalk)"></ion-input>\n                    </ion-item>\n                    <ion-list class="searchtogle animated bounceIn">\n                        <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">\n                            {{ item }}\n                    </ion-item>\n                </ion-list>\n                <h2>Category</h2>\n                <ion-item> \n                    <ion-select placeholder="Select Category" formControlName="category">\n                        <ion-option *ngFor="let cat of categories" value="{{cat.name}}">{{cat.name}}</ion-option>\n                    </ion-select>\n                </ion-item>\n                <!--              <ion-list radio-group class="category">\n                                  <h2>Category</h2>                \n                                  <ion-item>\n                                    <ion-label>Lorem Ipsum</ion-label>\n                                    <ion-radio  value="1"></ion-radio>\n                                  </ion-item>\n                                </ion-list>-->\n                <h2>Message</h2>\n                <ion-item>\n                    <ion-textarea placeholder="Write your message..." formControlName="message"></ion-textarea>\n                </ion-item>\n            </ion-list>\n            <div class="btn-sec">\n                <button type="submit" ion-button color="green" class="btn1" [disabled]="!realTalk.valid">Post</button>\n                <!--            <button ion-button clear color="gray" class="btn1">Cancel</button>-->\n            </div>\n        </form>\n    </div>\n\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/realtalk/realtalk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */]])
    ], RealtalkPage);
    return RealtalkPage;
}());

//# sourceMappingURL=realtalk.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkreplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(10);
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
        this.currentuser = JSON.parse(localStorage.getItem('CurrentUser'));
    }
    TalkreplyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TalkreplyPage');
        console.log(this.navParams.get('topidata'));
        this.topicdata = this.navParams.get('topidata');
        this.Topicdata();
        this.common.interval = setInterval(function () {
            _this.Topicdata();
        }, 10000);
    };
    TalkreplyPage.prototype.scrollBottom = function () {
        if (this.content != null) {
            this.content.scrollToBottom(300);
        }
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
                            value.userid = val._id;
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
                    // var startDate = moment(new Date(value.comment_time), "DD.MM.YYYY");
                    var startDate = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date(value.comment_time));
                    var endDate = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date());
                    // var milliseconds = endDate.diff(startDate);
                    console.log(endDate.diff(startDate, 'minutes'));
                    console.log(endDate.diff(startDate, 'hours'));
                    console.log(endDate.diff(startDate, 'days'));
                    var aba = endDate.diff(startDate, 'hours') + ':' + endDate.diff(startDate, 'minutes');
                    console.log(endDate.diff(startDate, 'hours') + ':' + endDate.diff(startDate, 'minutes'));
                    console.log(__WEBPACK_IMPORTED_MODULE_5_moment__(aba, ["HH:mm"]).format("HH:mm"));
                    //                        var duration = moment.duration(milliseconds, 'milliseconds');
                    //                        console.log('Hours' + duration.hours())
                    //                        console.log('minutes' + duration.minutes());
                    if (endDate.diff(startDate, 'days') > 0) {
                        value.days = endDate.diff(startDate, 'days');
                        value.time = 'day';
                    }
                    else {
                        if (endDate.diff(startDate, 'hours') > 1) {
                            value.days = __WEBPACK_IMPORTED_MODULE_5_moment__(aba, ["HH:mm"]).format("HH:mm");
                            value.time = 'hours';
                        }
                        else {
                            value.days = __WEBPACK_IMPORTED_MODULE_5_moment__(aba, ["HH:mm"]).format("HH:mm");
                            value.time = 'hour';
                        }
                    }
                });
                if (response.data[0].comments.length > 0) {
                    console.log(_this.content);
                    if (_this.content != null) {
                        _this.content.scrollToBottom(300);
                    }
                }
                _this.commentdata = response.data[0];
                console.log(_this.commentdata);
            }
            else {
            }
        });
    };
    TalkreplyPage.prototype.ReportComment = function (event) {
        var _this = this;
        console.log(event);
        var options = this.appsetting.header();
        var postdata = {
            comment_id: event
        };
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'talks/report', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                _this.common.presentAlert('Talk', response.message);
            }
            else {
                _this.common.presentAlert('Talk', response.message);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], TalkreplyPage.prototype, "content", void 0);
    TalkreplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-talkreply',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/talkreply/talkreply.html"*/'<!--\n  Generated template for the TalkreplyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title>{{topicdata?.topic_name}}</ion-title>\n<!--    <button style="height:28px;" start ion-button clear>\n     <img width="11px" src="assets/imgs/back_btn.svg" (click)="back()">\n     </button>-->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list class="mytlk">\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img [src]="topicdata?.profile_pic">\n            </ion-thumbnail>\n            <h2>{{topicdata?.topic_name}}</h2>\n            <p style="white-space: normal">{{topicdata?.message}}</p>\n            <p>{{topicdata?.loc_address}}</p>\n            <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>{{commentdata?.comments.length}} Reply</p>\n           <p *ngIf="topicdata?.time == \'day\'"><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>{{topicdata?.days}} days ago</p>\n        <p *ngIf="topicdata?.time == \'time\'"><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>{{topicdata?.days}} hour ago</p>\n          </ion-item>\n    </ion-list>\n    <ion-list no-lines  class="bottom-sec" *ngIf="commentdata?.comments.length>0">\n        <ion-item style="padding-right: 8px;" *ngFor="let comment of commentdata?.comments; let last = last">\n          <ion-avatar item-start>{{last ? scrollBottom() : \'\'}}\n            <img *ngIf="comment.profile_pic" [src]="comment.profile_pic">\n            <img *ngIf="!comment.profile_pic" src="assets/imgs/user.png">\n          </ion-avatar>\n                  <h2>\n                <strong *ngIf="comment.firstname">{{comment.firstname}} {{comment.lastname}}</strong>\n                <strong *ngIf="!comment.firstname">Unknown user</strong>\n                \n                <span>{{comment.days}} {{comment.time}} ago</span></h2>\n            \n          <p>{{comment.comment_msg}}</p>\n            \n          <button *ngIf="currentuser?._id != comment.userid && comment.report == 0" ion-button class="report" block (click)="ReportComment(comment._id)">Report</button>\n<!--          <p class="reply"><img src="assets/imgs/reply.png">Reply</p>\n          <ion-item style="padding: 0;">\n            <ion-textarea placeholder=""></ion-textarea>\n          </ion-item>\n          <div class="btnsec">\n            <button ion-button color="green" class="btn1">POST</button>\n          </div>-->\n        </ion-item>\n\n<!--        <ion-item style="padding-right: 8px;">\n          <ion-avatar item-start>\n            <img src="assets/imgs/talk.png">\n          </ion-avatar>\n          <h2>Austin Robertson<span>1 Day ago</span></h2>\n          <ul style="margin-top:0 !important;">\n              <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n              <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n            </ul>\n            <p class="revw" style="line-height: 17px !important; margin-top:0 !important;">Rating</p>\n          <p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.</p>\n          <p class="reply"><img src="assets/imgs/reply.png">Reply</p>\n          <ion-item style="padding: 0;">\n            <ion-textarea placeholder=""></ion-textarea>\n          </ion-item>\n          <div class="btnsec">\n            <button ion-button color="green" class="btn1">POST</button>\n          </div>\n        </ion-item>-->\n      </ion-list>\n    <div *ngIf="commentdata?.comments.length == 0">\n       <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n          <img style="margin: auto;display: block;" src="assets/imgs/sorry.png">\n<!--          <span> Oops no one replied on this topic!</span>-->\n    </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/talkreply/talkreply.html"*/,
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

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reviews2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(13);
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
                            var startDate = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date(value.created_at));
                            var endDate = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date());
                            // var milliseconds = endDate.diff(startDate);
                            console.log(endDate.diff(startDate, 'minutes'));
                            console.log(endDate.diff(startDate, 'hours'));
                            console.log(endDate.diff(startDate, 'days'));
                            var aba = endDate.diff(startDate, 'hours') + ':' + endDate.diff(startDate, 'minutes');
                            console.log(endDate.diff(startDate, 'hours') + ':' + endDate.diff(startDate, 'minutes'));
                            console.log(__WEBPACK_IMPORTED_MODULE_5_moment__(aba, ["HH:mm"]).format("HH:mm"));
                            //                        var duration = moment.duration(milliseconds, 'milliseconds');
                            //                        console.log('Hours' + duration.hours())
                            //                        console.log('minutes' + duration.minutes());
                            if (endDate.diff(startDate, 'days') > 0) {
                                value.days = endDate.diff(startDate, 'days');
                                value.time = 'day';
                            }
                            else {
                                if (endDate.diff(startDate, 'hours') > 1) {
                                    value.days = __WEBPACK_IMPORTED_MODULE_5_moment__(aba, ["HH:mm"]).format("HH:mm");
                                    value.time = 'time';
                                }
                                else {
                                    value.days = __WEBPACK_IMPORTED_MODULE_5_moment__(aba, ["HH:mm"]).format("HH:mm");
                                    value.time = 'time';
                                }
                            }
                            //                        var a = new Date();
                            //                        console.log(new Date(value.created_at))
                            //                        var startDate = moment(new Date(value.created_at), "DD.MM.YYYY");
                            //                        var endDate = moment(a, "DD.MM.YYYY");
                            //                        var milliseconds = endDate.diff(startDate);
                            //                        var duration = moment.duration(milliseconds, 'milliseconds');
                            //                        var aba = duration.hours()+':'+duration.minutes();
                            //                        console.log(moment(aba, ["HH:mm"]).format("HH:mm"));
                            //                        console.log('Hours' + duration.hours())
                            //                        console.log('minutes' + duration.minutes());
                            //                        if(duration.hours()>24){
                            //                            value.days = duration.asDays();
                            //                            value.time = 'day';
                            //                        }else{
                            //                            value.days = duration.hours()+':'+duration.minutes();
                            //                            value.time = 'time';
                            //                        }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reviews2',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/reviews2/reviews2.html"*/'<!--\n  Generated template for the Reviews2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="green">\n        <button ion-button menuToggle style="display:block !important;">\n            <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n        <ion-title>{{businessData?.business_name}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="image-wrapper">\n        <img [src]="currentuser?.business_image[0].business_image">\n    </div>\n    <div class="content-sec" padding>\n        <div class="top-sec" >\n            <h2>{{businessData?.business_name}}</h2>\n            <p [innerHTML]="businessData?.business_description"></p>\n            <rating readOnly="true" max="5" emptyStarIconName="star-outline" starIconName="star" [(ngModel)]="data.rating" name="rating"\n                    nullable="false">\n            </rating>\n            <p class="revw">Reviews {{currentuser?.review.length | number:0}}</p>\n        </div>\n        <ion-list no-lines  class="bottom-sec">\n            <ion-item *ngFor="let reviews of currentuser?.review;let i = index">\n                <ion-avatar item-start>\n                    <img [src]="reviews.profilePic">\n                </ion-avatar>\n                <h2>{{reviews.firstname}} {{reviews.lastname}}\n                    <span *ngIf="reviews.time == \'day\'">{{reviews.days}} Day ago</span>\n                    <span *ngIf="reviews.time == \'time\'">{{reviews.days}} Hour ago</span>\n                </h2>\n\n                <rating readOnly="true" max="5" emptyStarIconName="star-outline" starIconName="star" [(ngModel)]="reviews.stars" name="rating"\n                        nullable="false">\n                </rating>\n                <!-- <p class="revw" style="line-height: 17px !important; margin-top:0 !important;">Rating</p>-->\n                <p style="padding-bottom: 10px;">{{reviews.comment}}  </p>\n                \n                <h5>REPLY</h5>\n                <ion-item *ngFor="let replies of reviews.reply">\n                   \n                    <p style="text-align: left; background-color: #f2f2f2; padding: 10px !important;">{{replies.comment}}</p>\n                </ion-item>\n                <div *ngIf="reviews.reply.length<1">\n                    <p class="reply" (click)="Reply(reviews._id)"><img src="assets/imgs/reply.png">Reply</p>\n                    <ion-item *ngIf="replybtn == reviews._id">\n                        <ion-textarea placeholder="" [(ngModel)]="data.comment" required></ion-textarea>\n                    </ion-item>\n                    <div class="btnsec" *ngIf="replybtn == reviews._id">\n                         <button ion-button color="green" class="btn1" (click)="ReplyComment(data.comment,reviews._id)" [disabled]="!data.comment">POST</button>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/reviews2/reviews2.html"*/,
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

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsbusinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(13);
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
var TermsbusinessPage = (function () {
    function TermsbusinessPage(navCtrl, navParams, http, appsetting, common, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
    }
    TermsbusinessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
        clearInterval(this.common.interval);
        this.get();
    };
    TermsbusinessPage.prototype.get = function () {
        var _this = this;
        var options = this.appsetting.header();
        var postdata = {
            pagename: 'terms&condition(user)'
        };
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'static/getstaticpagedata', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
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
        });
    };
    TermsbusinessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-termsbusiness',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/termsbusiness/termsbusiness.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>terms & conditions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="banner">\n<!--        <img [src]="terms?.pageimage" (load)="terms.loaded = true" [hidden]="!terms?.loaded" >-->\n<!--             <img src="assets/imgs/no-image.png" [hidden]="terms?.loaded">-->\n      </div>\n      <div class="contant-sec" padding>\n<!--        <h2>Dummy text of the printing</h2>-->\n<div class="pcontent" [innerHTML]="terms?.pagedata"></div></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/termsbusiness/termsbusiness.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], TermsbusinessPage);
    return TermsbusinessPage;
}());

//# sourceMappingURL=termsbusiness.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewfavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewproduct_viewproduct__ = __webpack_require__(99);
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
        clearInterval(this.common.interval);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-viewfavorites',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewfavorites/viewfavorites.html"*/'<!--\n  Generated template for the ViewfavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n          <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n    <ion-title>view favorites</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list text-wrap *ngIf="favouritelist?.length>0">\n              <div *ngFor="let favlist of favouritelist" style="position:relative">\n        <ion-item  (click)="viewproduct(favlist)">\n          <ion-thumbnail item-start>\n            <img [src]="favlist.business_image[0].business_image">\n            \n          </ion-thumbnail>\n          <h2>{{favlist.business_data[0].business_name}}</h2>\n          <p [innerHTML]="favlist.business_data[0].business_description"></p>\n          \n        </ion-item>\n        <ion-icon name="heart" color="red" class="hrt" (click)="MakeAsUnfavourite(favlist.business_data[0]._id)"></ion-icon>\n        </div>\n<!--        <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/imgs/img1.jpg">\n              <ion-icon name="heart" color="red"></ion-icon>\n            </ion-thumbnail>\n            <h2>Sam\'s Auto Repair</h2>\n            <p>Lorem Ipsum is not simply random text</p>\n            \n          </ion-item>-->\n                  \n      </ion-list>\n   \n    <ion-list text-wrap *ngIf="favouritelist?.length == 0">\n               <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n                    <img style="margin: auto;display: block;" src="assets/imgs/sorry.png">\n                    \n                </div>\n              \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewfavorites/viewfavorites.html"*/,
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

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewreservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(13);
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
        clearInterval(this.common.interval);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-viewreservation',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewreservation/viewreservation.html"*/'<!--\n  Generated template for the ViewreservationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green"> \n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>view reservation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n  <ion-list *ngIf="reservations">\n        <ion-item *ngFor="let reservation of reservations">\n            <ion-thumbnail item-start>\n                <img *ngIf="reservation?.order_data[0]?.profile_pic" [src]="reservation?.order_data[0].profile_pic">\n              <img *ngIf="!reservation?.order_data[0]?.profile_pic>0" src="assets/imgs/user.svg">\n            </ion-thumbnail>\n          <h2 *ngIf="reservation?.order_data.length>0">{{reservation?.order_data[0].firstname}} {{reservation?.order_data[0].lastname}}</h2>\n          <p *ngIf="reservation?.spacial_accomodation">{{reservation?.spacial_accomodation}}</p>\n          <div class="left">\n            <p>Booking Date</p>\n            <p>{{reservation?.orderstart | date}}</p>\n          </div>\n          <div class="right">\n            <p>Booking Time</p>\n            <p>{{reservation?.orderstart | date:\'shortTime\'}}</p>\n          </div>\n        </ion-item>\n    </ion-list>\n<ion-list *ngIf="!reservations">\n    <div style="text-align: center !important;padding: 50% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n          <img style="width:100px;margin: auto;display: block;" src="assets/imgs/sorry11.png">\n          <span>it\'s empty here!</span>\n    </div>\n    </ion-list>\n<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewreservation/viewreservation.html"*/,
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

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewreservationtwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(13);
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
        clearInterval(this.common.interval);
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
                    console.log(response.data[0].orderstart);
                    console.log(__WEBPACK_IMPORTED_MODULE_5_moment__(response.data[0].orderstart));
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-viewreservationtwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewreservationtwo/viewreservationtwo.html"*/'<!--\n  Generated template for the ViewreservationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green"> \n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>view reservation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n  <ion-list *ngIf="reservations">\n      \n        <ion-item *ngFor="let reservation of reservations">\n            <ion-thumbnail item-start>\n              <img *ngIf="reservation?.order_data[0].business_image" [src]="reservation?.order_data[0].business_image[0].business_image\n">\n              <img *ngIf="!reservation?.order_data[0].business_image" src="assets/imgs/profile.png">\n            </ion-thumbnail>\n            <h2>{{reservation?.order_data[0].business_data[0].business_name}}</h2>\n          <p>{{reservation?.order_data[0].business_data[0].sub_cat}}</p>\n          <div class="left">\n            <p>Booking Date</p>\n            <p>{{reservation?.orderstart | date}}</p>\n          </div>\n          <div class="right">\n            <p>Booking Time</p>\n            <p>{{reservation?.orderstart | date:\'shortTime\'}}</p>\n          </div>\n          <img *ngIf="reservation?.orderstatus == 1" src="assets/imgs/accept.png" class="action">\n          <img *ngIf="reservation?.orderstatus == 0" src="assets/imgs/decline.png" class="action">\n          <img *ngIf="reservation?.orderstatus == 2" src="assets/imgs/pending.png" class="action">\n        </ion-item>\n      \n    </ion-list>\n<ion-list *ngIf="!reservations">\n    <div style="text-align: center !important;padding: 40% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n          <img style="width:100px;margin: auto;display: block;" src="assets/imgs/sorry11.png">\n          <span>it\'s empty here!</span>\n    </div>\n    </ion-list>\n<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewreservationtwo/viewreservationtwo.html"*/,
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

/***/ 203:
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
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addbusiness/addbusiness.module": [
		853,
		32
	],
	"../pages/booknow/booknow.module": [
		857,
		31
	],
	"../pages/careernetwork/careernetwork.module": [
		854,
		30
	],
	"../pages/changepassword/changepassword.module": [
		855,
		29
	],
	"../pages/editbusiness/editbusiness.module": [
		856,
		28
	],
	"../pages/editprofile/editprofile.module": [
		859,
		0
	],
	"../pages/editprofiletwo/editprofiletwo.module": [
		858,
		27
	],
	"../pages/filter/filter.module": [
		862,
		26
	],
	"../pages/forgot/forgot.module": [
		860,
		25
	],
	"../pages/forgottwo/forgottwo.module": [
		861,
		24
	],
	"../pages/getstart/getstart.module": [
		864,
		23
	],
	"../pages/history/history.module": [
		863,
		22
	],
	"../pages/historytwo/historytwo.module": [
		865,
		21
	],
	"../pages/login/login.module": [
		867,
		20
	],
	"../pages/logintwo/logintwo.module": [
		866,
		19
	],
	"../pages/newartist/newartist.module": [
		868,
		18
	],
	"../pages/ourtalkreply/ourtalkreply.module": [
		869,
		17
	],
	"../pages/privacy/privacy.module": [
		870,
		16
	],
	"../pages/privacytwo/privacytwo.module": [
		871,
		15
	],
	"../pages/realtalk/realtalk.module": [
		872,
		14
	],
	"../pages/reservations/reservations.module": [
		873,
		13
	],
	"../pages/review/review.module": [
		874,
		12
	],
	"../pages/reviews2/reviews2.module": [
		877,
		11
	],
	"../pages/search/search.module": [
		875,
		10
	],
	"../pages/signup/signup.module": [
		876,
		9
	],
	"../pages/signuptwo/signuptwo.module": [
		879,
		8
	],
	"../pages/talkreply/talkreply.module": [
		878,
		7
	],
	"../pages/terms/terms.module": [
		880,
		6
	],
	"../pages/termsbusiness/termsbusiness.module": [
		881,
		5
	],
	"../pages/viewfavorites/viewfavorites.module": [
		882,
		4
	],
	"../pages/viewproduct/viewproduct.module": [
		884,
		3
	],
	"../pages/viewreservation/viewreservation.module": [
		883,
		2
	],
	"../pages/viewreservationtwo/viewreservationtwo.module": [
		885,
		1
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
webpackAsyncContext.id = 247;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewproduct_viewproduct__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__booknow_booknow__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_review__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_open_native_settings__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_search__ = __webpack_require__(176);
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
    function HomePage(navCtrl, modalCtrl, ViewCtrl, socialSharing, loadingCtrl, common, events, toastCtrl, appsetting, http, zone, geolocation, alertCtrl, formBuilder, openNativeSettings) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.ViewCtrl = ViewCtrl;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.common = common;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.zone = zone;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.openNativeSettings = openNativeSettings;
        this.disable = false;
        this.name = 'By name';
        this.pageno = 1;
        this.restaurantlist = [];
        this.searchQuery = '';
        this.data = {};
        this.subcat = [];
        this.categorydata = [];
        this.premiumBusiness = [];
        this.fav = 0;
        this.rating = {};
        this.show = false;
        this.currentLocation();
        clearInterval(this.common.interval);
        this.getSubCatList();
        if (localStorage.getItem('CurrentUser')) {
            console.log(JSON.parse(localStorage.getItem('CurrentUser')));
            this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
        }
        localStorage.removeItem('Seachdata');
    }
    HomePage.prototype.ngOnInit = function () {
        var temp = this;
        console.log('ngOnInit');
        this.SearchForm = this.formBuilder.group({
            searchname: ['']
        });
        this.SearchcatForm = this.formBuilder.group({
            searchcat: ['']
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        // alert('ionViewDidLoad');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
            //this.currentLocation();
            localStorage.removeItem('filterdata');
            console.log((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString());
            console.log('ionViewDidLoad HomePage');
            //                    this.Getlist(1, 34.0521734, -118.255586);
            //                    this.latitude = 34.0521734;
            //                    this.longitude = -118.255586;
        }
        else {
            this.common.tryagain();
        }
    };
    HomePage.prototype.currentLocation = function () {
        var _this = this;
        var temp = this;
        console.log('current location');
        //alert('current location');
        this.geolocation.getCurrentPosition().then(function (resp) {
            // alert('getCurrentPosition');
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.latitude = resp.coords.latitude; // resp.coords.latitude
            _this.longitude = resp.coords.longitude; // resp.coords.longitude
            _this.currentLat = resp.coords.latitude;
            _this.currentLong = resp.coords.longitude;
            _this.Getlist(_this.pageno, resp.coords.latitude, resp.coords.longitude);
        }).catch(function (error) {
            //alert('Error getting');
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
                        // console.log(val);
                        if (val.status == true) {
                            temp.subcat.push(val);
                        }
                        else {
                            //val.status = false;
                        }
                    }
                    else {
                        if (val.status == true) {
                            temp.subcat.push(val);
                            //temp.categorydata.push(val);
                        }
                        else {
                            //val.status = false;
                        }
                    }
                });
            });
            _this.subcat.sort(function (a, b) {
                if (a.sub_category_title < b.sub_category_title)
                    return -1;
                else if (a.sub_category_title > b.sub_category_title)
                    return 1;
                return 0;
            });
        });
        console.log(this.subcat);
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
            page: parseInt(pageno)
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
                    _this.restaurantlist = [];
                    _this.premiumBusiness = [];
                    for (var i = 0; i < response.data.length; i++) {
                        console.log('for loop');
                        if (response.data[i].business_data[0].business_status == true) {
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
                                if (response.data[i].status == true) {
                                    response.data[i].review.forEach(function (val, ke) {
                                        console.log(val);
                                        sum += val.stars;
                                        console.log(sum);
                                        response.data[i].avg = sum / response.data[i].review.length;
                                    });
                                }
                            }
                            else {
                                response.data[i].avg = 0;
                            }
                            response.data[i].business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, response.data[i].business_data[0].location.coordinates[1], response.data[i].business_data[0].location.coordinates[0], 'K');
                            if (response.data[i].business_data[0].business_type == 1) {
                                console.log('if');
                                temp.premiumBusiness.push(response.data[i]);
                            }
                            else {
                                console.log('else');
                                temp.restaurantlist.push(response.data[i]);
                            }
                        }
                    }
                    _this.totalpageno = response.pages;
                    if (_this.restaurantlist.length < 3) {
                        _this.pageno = _this.pageno + 1;
                        _this.Getdata(_this.pageno, _this.latitude, _this.longitude);
                    }
                    //                    response.data.forEach(function (value, key) {
                    //                        console.log('foreach loop')
                    //                        value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')
                    //
                    //                        if (value.business_data[0].business_status == true) {
                    //                            if (value.business_data[0].business_type == 1) {
                    //                                console.log('if');
                    //                                temp.premiumBusiness.push(value);
                    //                            } else {
                    //                                console.log('else');
                    //                                temp.restaurantlist.push(value);
                    //                                var sum = 0;
                    //                            if (value.review.length > 0) {
                    //                                 if(value.status == true){
                    //                                value.review.forEach(function (val, ke) {    
                    //                                    console.log(val);
                    //                                    sum += val.stars;
                    //                                    console.log(sum);
                    //                                    value.avg = sum / value.review.length;
                    //                                    
                    //                                })
                    //                                }
                    //                            } else {
                    //                                value.avg = 0;
                    //                            }
                    //                                
                    //                            }
                    //                        }
                    //                    })
                    //                    this.totalpageno = response.pages;
                    //                    if(this.restaurantlist.length<3){
                    //                        this.pageno = this.pageno+1;
                    //                        this.Getdata(this.pageno, this.latitude, this.longitude);
                    //                    }
                    console.log(_this.restaurantlist);
                    console.log(temp.premiumBusiness);
                }
            });
        });
    };
    /******** Search modal ************/
    HomePage.prototype.SearchModal = function () {
        var _this = this;
        var temp = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__search_search__["a" /* SearchPage */]);
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.pageno = 1;
            _this.categoryid = '';
            console.log('Search');
            console.log(data);
            if (data != undefined) {
                console.log(data.searchedlist);
                var postdata = void 0;
                var options = _this.appsetting.header();
                if (data.searchedlist.category != undefined) {
                    data.searchedlist.category = data.searchedlist.category;
                }
                else {
                    data.searchedlist.category = '';
                }
                if (data.type == 'name') {
                    _this.latitude = data.searchedlist.latitude;
                    _this.longitude = data.searchedlist.longitude;
                    postdata = {
                        name: data.searchedlist.category,
                        lat: data.searchedlist.latitude,
                        long: data.searchedlist.longitude,
                        page: _this.pageno
                    };
                }
                else if (data.type == 'category') {
                    _this.latitude = data.searchedlist.latitude;
                    _this.longitude = data.searchedlist.longitude;
                    postdata = {
                        name: data.searchedlist.sub_category_title,
                        lat: data.searchedlist.latitude,
                        long: data.searchedlist.longitude,
                        page: _this.pageno
                    };
                }
                else {
                    _this.latitude = data.searchedlist.latitude;
                    _this.longitude = data.searchedlist.longitude;
                    postdata = {
                        name: data.searchedlist.category,
                        lat: data.searchedlist.latitude,
                        long: data.searchedlist.longitude,
                        page: _this.pageno
                    };
                }
                console.log(postdata);
                var serialized = _this.appsetting.serializeObj(postdata);
                _this.http.post(_this.appsetting.url + 'users/GetSearch', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    if (response.status == true) {
                        temp.pageno = parseInt(response.current);
                        _this.totalpageno = response.pages;
                        if (response.data.length > 0) {
                            console.log(response.data);
                            _this.premiumBusiness = [];
                            _this.restaurantlist = [];
                            _this.totalpageno = response.pages;
                            _this.geolocation.getCurrentPosition().then(function (resp) {
                                console.log(resp.coords.latitude);
                                console.log(resp.coords.longitude);
                                for (var i = 0; i < response.data.length; i++) {
                                    if (localStorage.getItem('CurrentUser')) {
                                        if (response.data[i].business_data[0].business_status == true) {
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
                                    }
                                    else {
                                        response.data[i].business_data[0].fav = 0;
                                    }
                                }
                                response.data.forEach(function (value, key) {
                                    if (value.business_data[0].business_status == true) {
                                        console.log(value.business_data[0].location.coordinates[1]);
                                        if (value.business_data[0].business_type == 1) {
                                            console.log('if');
                                            temp.premiumBusiness.push(value);
                                        }
                                        else {
                                            console.log('else');
                                            temp.restaurantlist.push(value);
                                            var sum = 0;
                                            if (value.review.length > 0) {
                                                if (value.status == true) {
                                                    value.review.forEach(function (val, ke) {
                                                        console.log(val);
                                                        sum += val.stars;
                                                        console.log(sum);
                                                        value.avg = sum / value.review.length;
                                                    });
                                                }
                                            }
                                            else {
                                                value.avg = 0;
                                            }
                                        }
                                        value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K');
                                    }
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
        });
        modal.present();
    };
    /******** function used for open filter modal after click on header *****************/
    HomePage.prototype.filterModal = function () {
        var _this = this;
        var temp = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPage */], { serviceslist: this.subcat });
        modal.onDidDismiss(function (data) {
            if (data) {
                if (data.type == 'search') {
                    _this.pageno = 1;
                    console.log('Search');
                    localStorage.removeItem('Seachdata');
                    if (data.searchedlist) {
                        console.log(data.searchedlist);
                        var options = _this.appsetting.header();
                        var postdata = {
                            sub_cat_id: data.searchedlist.services,
                            max_distance: data.searchedlist.range,
                            zip_code: data.searchedlist.zipcode,
                            business_online: data.searchedlist.online,
                            lat: _this.latitude,
                            long: _this.longitude,
                            page: _this.pageno
                        };
                        var serialized = _this.appsetting.serializeObj(postdata);
                        _this.http.post(_this.appsetting.url + 'users/filterall', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response);
                            if (response.status == true) {
                                temp.pageno = parseInt(response.current);
                                _this.totalpageno = response.pages;
                                if (response.data.length > 0) {
                                    console.log(response.data);
                                    _this.premiumBusiness = [];
                                    _this.restaurantlist = [];
                                    _this.totalpageno = response.pages;
                                    _this.geolocation.getCurrentPosition().then(function (resp) {
                                        console.log(resp.coords.latitude);
                                        console.log(resp.coords.longitude);
                                        response.data.forEach(function (value, key) {
                                            if (value.business_data[0].business_status == true) {
                                                console.log(value.business_data[0].location.coordinates[1]);
                                                if (value.business_data[0].business_type == 1) {
                                                    console.log('if');
                                                    temp.premiumBusiness.push(value);
                                                }
                                                else {
                                                    console.log('else');
                                                    temp.restaurantlist.push(value);
                                                    var sum = 0;
                                                    if (value.review.length > 0) {
                                                        if (value.status == true) {
                                                            value.review.forEach(function (val, ke) {
                                                                console.log(val);
                                                                sum += val.stars;
                                                                console.log(sum);
                                                                value.avg = sum / value.review.length;
                                                            });
                                                        }
                                                    }
                                                    else {
                                                        value.avg = 0;
                                                    }
                                                }
                                                value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K');
                                            }
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
                    localStorage.removeItem('Seachdata');
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
                    var da = __WEBPACK_IMPORTED_MODULE_11_moment__(new Date(data.bookingdata.date).toISOString()).locale('es').format();
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
                    var options = _this.appsetting.header();
                    var postdata = {
                        business_id: _this.modaldata.business_data[0]._id,
                        order_to: _this.modaldata._id,
                        order_from: user._id,
                        orderdate: startdate,
                        orderstart: startdate,
                        orderend: '',
                        spacial_accomodation: data.bookingdata.specialAccomo
                    };
                    console.log(postdata);
                    // return false;
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
        console.log(address + ',"Powered by Melanin Enterprise App" Download today from the App Store and Google Play');
        console.log(image);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            // Check if sharing via email is supported
            var message = address + ',"Powered by Melanin Enterprise App" Download today from the App Store and Google Play'; //'Amazing restaurant';
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
        localStorage.removeItem('Seachdata');
        localStorage.removeItem('filterdata');
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
                                if (response.data[i].business_data[0].business_status == true) {
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
                            }
                            else {
                                response.data[i].business_data[0].fav = 0;
                            }
                            if (response.data[i].business_data[0].business_type == 1) {
                                console.log('if');
                                temp.premiumBusiness.push(response.data[i]);
                            }
                            else {
                                console.log('else');
                                temp.restaurantlist.push(response.data[i]);
                                var sum = 0;
                                if (response.data[i].review.length > 0) {
                                    if (response.data[i].status == true) {
                                        response.data[i].review.forEach(function (val, ke) {
                                            console.log(val);
                                            sum += val.stars;
                                            console.log(sum);
                                            response.data[i].avg = sum / response.data[i].review.length;
                                        });
                                    }
                                }
                                else {
                                    response.data[i].avg = 0;
                                }
                            }
                            response.data[i].business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, response.data[i].business_data[0].location.coordinates[1], response.data[i].business_data[0].location.coordinates[0], 'K');
                        }
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
            this.common.ConfirmFunction('Favourite', 'Please login first to make favourite!', __WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]);
        }
    };
    /****** functions used only for getdata of restaurants when infinite scroll hit ************/
    HomePage.prototype.Getdata = function (pageno, lat, long) {
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
                    if (response.data.length > 0) {
                        for (var i = 0; i < response.data.length; i++) {
                            if (localStorage.getItem('CurrentUser')) {
                                if (response.data[i].business_data[0].business_status == true) {
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
                                    var sum = 0;
                                    if (response.data[i].business_data[0].business_type == 1) {
                                        console.log('if');
                                        temp.premiumBusiness.push(response.data[i]);
                                    }
                                    else {
                                        console.log('else');
                                        temp.restaurantlist.push(response.data[i]);
                                        if (response.data[i].review.length > 0) {
                                            if (response.data[i].status == true) {
                                                response.data[i].review.forEach(function (val, ke) {
                                                    console.log(val);
                                                    sum += val.stars;
                                                    console.log(sum);
                                                    response.data[i].avg = sum / response.data[i].review.length;
                                                });
                                            }
                                        }
                                        else {
                                            response.data[i].avg = 0;
                                        }
                                    }
                                    response.data[i].business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, response.data[i].business_data[0].location.coordinates[1], response.data[i].business_data[0].location.coordinates[0], 'K');
                                }
                            }
                            else {
                                response.data[i].business_data[0].fav = 0;
                            }
                        }
                        _this.totalpageno = response.pages;
                        if (_this.restaurantlist.length < 4) {
                            _this.pageno = _this.pageno + 1;
                            _this.Getdata(_this.pageno, _this.latitude, _this.longitude);
                        }
                    }
                    //                    response.data.forEach(function (value, key) {
                    //                        console.log(value);
                    //                        console.log(key);
                    //                        var sum = 0;
                    //                        if (value.business_data[0].business_status == true) {
                    //                            if (value.business_data[0].business_type == 1) {
                    //                                console.log('if');
                    //                                temp.premiumBusiness.push(value);
                    //                            } else {
                    //                                console.log('else');
                    //                                temp.restaurantlist.push(value);
                    //                                 if (value.review.length > 0) {
                    //                                 if(value.status == true){
                    //                                value.review.forEach(function (val, ke) {    
                    //                                    console.log(val);
                    //                                    sum += val.stars;
                    //                                    console.log(sum);
                    //                                    value.avg = sum / value.review.length;
                    //                                    
                    //                                })
                    //                                }
                    //                            } else {
                    //                                value.avg = 0;
                    //                            }
                    //                            }
                    //                            value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')
                    //                        }
                    //                    })
                    //                    this.totalpageno = response.pages;
                    //                    if(this.restaurantlist.length<4){
                    //                        this.pageno = this.pageno+1;
                    //                        this.Getdata(this.pageno, this.latitude, this.longitude);
                    //                    }
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
            this.name = 'Location';
            this.class = 'slideInRight';
            this.show = true;
            console.log('false');
        }
        console.log(this.name);
    };
    HomePage.prototype.Filter = function () {
        var _this = this;
        var temp = this;
        var sum = 0;
        var da = JSON.parse(localStorage.getItem('filterdata'));
        console.log(da);
        var options = this.appsetting.header();
        var postdata = {
            sub_cat_id: da.services,
            max_distance: da.range,
            zip_code: da.zipcode,
            business_online: da.online,
            lat: this.latitude,
            long: this.longitude,
            page: this.pageno
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/filterall', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                //temp.pageno = response.current;
                _this.totalpageno = response.pages;
                if (response.data.length > 0) {
                    console.log(response.data);
                    //                    this.premiumBusiness = [];
                    //                    this.restaurantlist = [];
                    _this.totalpageno = response.pages;
                    _this.geolocation.getCurrentPosition().then(function (resp) {
                        console.log(resp.coords.latitude);
                        console.log(resp.coords.longitude);
                        for (var i = 0; i < response.data.length; i++) {
                            if (localStorage.getItem('CurrentUser')) {
                                if (response.data[i].business_data[0].business_status == true) {
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
                            }
                            else {
                                response.data[i].business_data[0].fav = 0;
                            }
                        }
                        response.data.forEach(function (value, key) {
                            if (value.business_data[0].business_status == true) {
                                console.log(value.business_data[0].location.coordinates[1]);
                                if (value.business_data[0].business_type == 1) {
                                    console.log('if');
                                    temp.premiumBusiness.push(value);
                                }
                                else {
                                    console.log('else');
                                    temp.restaurantlist.push(value);
                                    var sum = 0;
                                    if (value.review.length > 0) {
                                        if (value.status == true) {
                                            value.review.forEach(function (val, ke) {
                                                console.log(val);
                                                sum += val.stars;
                                                console.log(sum);
                                                value.avg = sum / value.review.length;
                                            });
                                        }
                                    }
                                    else {
                                        value.avg = 0;
                                    }
                                }
                                value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K');
                            }
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
    };
    HomePage.prototype.SearchbyCategory = function (formdata) {
        var _this = this;
        var temp = this;
        console.log(formdata);
        this.data.term = formdata.sub_category_title;
        this.categorydata = [];
        var options = this.appsetting.header();
        var postdata = {
            sub_cat_id: formdata._id,
            max_distance: '',
            zip_code: '',
            business_online: '',
            lat: this.latitude,
            long: this.longitude,
            pages: this.pageno
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/filterall', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                //temp.pageno = response.current;
                _this.totalpageno = response.pages;
                if (response.data.length > 0) {
                    console.log(response.data);
                    _this.premiumBusiness = [];
                    _this.restaurantlist = [];
                    _this.totalpageno = response.pages;
                    _this.geolocation.getCurrentPosition().then(function (resp) {
                        console.log(resp.coords.latitude);
                        console.log(resp.coords.longitude);
                        response.data.forEach(function (value, key) {
                            if (value.business_data[0].business_status == true) {
                                console.log(value.business_data[0].location.coordinates[1]);
                                if (value.business_data[0].business_type == 1) {
                                    console.log('if');
                                    temp.premiumBusiness.push(value);
                                }
                                else {
                                    console.log('else');
                                    temp.restaurantlist.push(value);
                                    var sum = 0;
                                    if (value.review.length > 0) {
                                        if (value.status == true) {
                                            value.review.forEach(function (val, ke) {
                                                console.log(val);
                                                sum += val.stars;
                                                console.log(sum);
                                                value.avg = sum / value.review.length;
                                            });
                                        }
                                    }
                                    else {
                                        value.avg = 0;
                                    }
                                }
                                value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K');
                            }
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
    };
    /******* This function is used for infinite scroll if user search *****************/
    HomePage.prototype.SeachInfinite = function () {
        var _this = this;
        var temp = this;
        console.log('Search');
        this.searchd = JSON.parse(localStorage.getItem('Seachdata'));
        console.log(this.searchd);
        if (this.searchd != undefined) {
            console.log(this.searchd);
            var postdata = void 0;
            var options = this.appsetting.header();
            if (this.searchd.type == "name") {
                this.searchd.category = this.searchd.category;
            }
            else if (this.searchd.type == "category") {
                this.searchd.category = this.searchd.sub_category_title;
            }
            else if (this.searchd.type == "location") {
                if (this.searchd.category) {
                    this.searchd.category = this.searchd.category;
                }
                else {
                    this.searchd.category = '';
                }
            }
            else {
                this.searchd.category = '';
            }
            this.latitude = this.searchd.latitude;
            this.longitude = this.searchd.longitude;
            postdata = {
                name: this.searchd.category,
                lat: this.searchd.latitude,
                long: this.searchd.longitude,
                page: this.pageno
            };
            console.log(postdata);
            var serialized = this.appsetting.serializeObj(postdata);
            this.http.post(this.appsetting.url + 'users/GetSearch', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                if (response.status == true) {
                    //this.pageno = response.current;
                    //this.totalpageno = response.pages;
                    if (response.data.length > 0) {
                        console.log(response.data);
                        //                        this.premiumBusiness = [];
                        //                        this.restaurantlist = [];
                        _this.totalpageno = response.pages;
                        _this.geolocation.getCurrentPosition().then(function (resp) {
                            console.log(resp.coords.latitude);
                            console.log(resp.coords.longitude);
                            for (var i = 0; i < response.data.length; i++) {
                                if (localStorage.getItem('CurrentUser')) {
                                    if (response.data[i].business_data[0].business_status == true) {
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
                                }
                                else {
                                    response.data[i].business_data[0].fav = 0;
                                }
                            }
                            response.data.forEach(function (value, key) {
                                if (value.business_data[0].business_status == true) {
                                    console.log(value.business_data[0].location.coordinates[1]);
                                    if (value.business_data[0].business_type == 1) {
                                        console.log('if');
                                        temp.premiumBusiness.push(value);
                                    }
                                    else {
                                        console.log('else');
                                        temp.restaurantlist.push(value);
                                        var sum = 0;
                                        if (value.review.length > 0) {
                                            if (value.status == true) {
                                                value.review.forEach(function (val, ke) {
                                                    console.log(val);
                                                    sum += val.stars;
                                                    console.log(sum);
                                                    value.avg = sum / value.review.length;
                                                });
                                            }
                                        }
                                        else {
                                            value.avg = 0;
                                        }
                                    }
                                    value.business_data[0].distance = temp.common.distance(temp.currentLat, temp.currentLong, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K');
                                }
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
    };
    /************ End *********************/
    /****** functions used for getlist on refresh ************/
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        //this.getSubCatList();
        localStorage.removeItem('filterdata');
        localStorage.removeItem('Seachdata');
        this.pageno = 1;
        this.categoryid = '';
        this.geolocation.getCurrentPosition().then(function (resp) {
            //            this.latitude = 34.0521734;
            //                    this.longitude = -118.255586;
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            _this.Getlist(_this.pageno, _this.latitude, _this.longitude);
        });
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
        if (localStorage.getItem('filterdata')) {
            if (this.pageno <= this.totalpageno) {
                this.Filter();
            }
        }
        else if (localStorage.getItem('Seachdata')) {
            if (this.pageno <= this.totalpageno) {
                this.SeachInfinite();
            }
        }
        else {
            if (this.pageno <= this.totalpageno) {
                this.Getdata(this.pageno, this.latitude, this.longitude);
            }
            else {
                //this.pageno = 1;
                console.log('No more data to load');
            }
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar hideBackButton color="green">\n        <button ion-button menuToggle style="display:block !important;">\n            <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n        <ion-title text-center >Home</ion-title>\n        <ion-buttons right (click)="filterModal()" *ngIf="restaurantlist?.length >0">\n            <button ion-button>\n                <ion-icon><img width="22px" src="assets/imgs/filter.png"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n<!--    <div class="searchouter">\n        <ion-searchbar id="input" class="brfone searchbar" placeholder="Search..." (click)="SearchModal()"></ion-searchbar>\n        <p ion-button [disabled]="!disabled" (click)="ShowHide()">{{name}}</p>\n        <button type="button" ion-button class="disab" [disabled]="disable == true" (click)="ShowHide()">{{name}}</button>\n        <div *ngIf="show == true">\n            <form [formGroup]="SearchForm" (submit)="Searchbyname(SearchForm)">\n            <ion-searchbar id="byname" class="bfr brfone searchbar animated" placeholder="Search by name" formControlName="searchname">\n            </ion-searchbar>\n            </form>\n        </div>\n        <ion-list class="searchtogle animated bounceIn">\n            <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">\n                {{ item }}\n        </ion-item>\n        </ion-list>\n</div>-->\n    <div class="buttonout">\n        <button type="button" class="btn1" ion-button icon-start block (click)="SearchModal()"><ion-icon><img src="assets/imgs/srch.png" style="width:18px;float: left;"></ion-icon>Search...</button>\n    </div>\n    \n<!--    <div class="searchouter">\n        <div>\n            <ion-searchbar class="brfone searchbar animated" placeholder="Search by category" [(ngModel)]="data.term" (input)="categories(data.term)" (ionClear)="ionClearCategory($event)">\n            </ion-searchbar>\n        </div>\n        <ion-list class="searchtogle animated" *ngIf="disable == true">\n            <ion-item *ngFor="let sub of categorydata | filter:data.term" (click)="SearchbyCategory(sub)">\n                {{sub.sub_category_title}}\n        </ion-item>\n        </ion-list>\n    </div>-->\n    \n\n<ion-toolbar>\n    <div class="procatout">\n        <ul class="procat">\n            <li *ngFor="let sub of subcat" (click)="FilterBySubCat(sub._id)" [class.highlighted]="sub._id == categoryid">\n                 <div class="icons">\n                    <img [src]="sub.sub_category_image">\n                </div>\n<!--                <div class="icons">\n                   <svg-icon src="https://gatheringmanal.s3.eu-central-1.amazonaws.com/blogimage/1527222876101Entertainments.svg" [svgStyle]="{ \'width.px\':22 }"></svg-icon>\n                </div>-->\n                <p>{{sub.sub_category_title}}</p>\n                \n            </li>\n        </ul>\n    </div>\n</ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    \n    \n  \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <!--    <ion-scroll direction="x" class="wideslide">\n            <ul class="imglist">\n                <li *ngFor="let premium of premiumBusiness" (click)="viewproduct(premium)">\n                    <div class="boxxgrid">\n                        <div class="imgbox">\n                            <img src="{{premium.business_image[0].business_image}}">\n                            \n                        </div>\n                        <img src="assets/imgs/premium.png" class="premium">\n                    </div>\n                </li>\n                <li>\n                    <div class="boxxgrid">\n                        <div class="imgbox">\n                            <img src="assets/imgs/sqar.png">\n                        </div>\n                        <img src="assets/imgs/premium.png" class="premium">\n                    </div>\n                </li>\n               \n            </ul>\n        </ion-scroll>-->\n    \n    <ion-slides pager *ngIf="premiumBusiness.length>0">\n        <ion-slide *ngFor="let premium of premiumBusiness" (click)="viewproduct(premium)">\n            <img *ngIf="premium.business_image[0]?.business_image" src="{{premium.business_image[0]?.business_image}}">\n            <img *ngIf="premium.business_image[0]?.business_image" src="assets/imgs/PREMIERE.png" class="premium">\n        </ion-slide>\n    </ion-slides>\n\n    <div class="productlist" *ngIf="restaurantlist?.length>0">\n        <ion-list text-wrap>\n            <ion-item *ngFor="let res of restaurantlist">\n                <ion-thumbnail item-start (click)="viewproduct(res)">\n                    <img [src]="res.business_image[0].business_image">\n                </ion-thumbnail>\n                <ion-note class="online" *ngIf="res.business_data[0].own_online_market_place == true"><span class="dot"></span> Online</ion-note>\n<!--                                <span *ngIf="res.business_data[0].own_online_market_place == true">Online</span>-->\n                <h2>{{res.business_data[0].business_name}}</h2>\n                <div class="fullwidth">\n                    <h4 class="listcol">\n                        <rating readOnly="true" max="5" emptyStarIconName="star-outline" starIconName="star" nullable="false" [(ngModel)]="res.avg" name="rate">\n                        </rating>\n                    </h4>\n                    <h4 *ngIf="res.business_data[0].own_online_market_place == true" class="listcol"><span class="proicon"><img src="assets/imgs/hrs.png"></span> Open 24/7</h4>\n                </div>\n                <div class="fullwidth">\n                    <h4 class="listcol"><span class="proicon"><img src="assets/imgs/mile.png"></span> {{res.business_data[0].distance}} Miles</h4>\n                    <h4 class="listcol" *ngIf="res.checkin"><span class="proicon"><img src="assets/imgs/check.png"></span> {{res.checkin.length}} Check-Ins</h4>\n                    <h4 class="listcol" *ngIf="!res.checkin"><span class="proicon"><img src="assets/imgs/check.png"></span> 0 Check-Ins</h4>\n\n                </div>\n                <p>{{res.business_data[0].sub_cat}}</p>\n                <div class="fullwidth">\n                    <h4 class="listcol" (click)="MarkAsFavourite(res.business_data[0]._id)">\n                        <span class="proicon">\n                            <img *ngIf="res.business_data[0].fav == 0" src="assets/imgs/fav.png">\n                            <img *ngIf="res.business_data[0].fav == 1" src="assets/imgs/favactive.png">\n                        </span> Favorite</h4>\n                    <h4 class="listcol" (click)="socialsharing(res.business_data[0].business_name,res.business_data[0].address,res.business_image[0].business_image)"><span class="proicon"><img src="assets/imgs/share.png"></span> Share</h4>\n                </div>\n                <div class="fullwidth">\n                    <button class="btneq" ion-button color="green" (click)="bookModal(res)">Book Now</button>\n                    <button class="btneq yelo" ion-button color="yellow" (click)="view(res)">Review</button>\n                </div>\n                <img *ngIf="res.business_data[0].business_type == 1 || res.business_data[0].business_type == 2" src="assets/imgs/premium.png" class="premim">\n            </ion-item>\n            <!--  <ion-item>\n                <ion-thumbnail item-start>\n                <img src="assets/imgs/img1.jpg">\n                </ion-thumbnail>\n                <h2>Rudford’s Restaurant</h2>\n                <div class="fullwidth">\n                <h4 class="listcol">sdfdssaf</h4>\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/hrs.png"></span> Open 24/7</h4>\n                </div>\n                <div class="fullwidth">\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/mile.png"></span> 7.4 Miles</h4>\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/check.png"></span> 4 Check-Ins</h4>\n                </div>\n                <p>Diners, Breakfast & Brunch, Burgers</p>\n                <div class="fullwidth">\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/favactive.png"></span> Favorite</h4>\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/share.png"></span> Share</h4>\n                </div>\n                <div class="fullwidth">\n                <button class="btneq" ion-button color="green">Book Now</button>\n                <button class="btneq" ion-button color="yellow">Review</button>\n                </div>\n              </ion-item>-->\n        </ion-list>\n    </div>\n    <div *ngIf="restaurantlist?.length == 0">\n        <div style="text-align: center !important;padding: 15% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n            <img style="margin: auto;display: block;" src="assets/imgs/sorry.png">\n            \n        </div>\n    </div>\n    <ion-infinite-scroll *ngIf="pageno<=totalpageno" (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__["a" /* Appsetting */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormBuilder */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_14__ionic_native_open_native_settings__["a" /* OpenNativeSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__ionic_native_open_native_settings__["a" /* OpenNativeSettings */]) === "function" && _q || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(13);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.pageno = 1;
        //alert('reservationsffff');
        this.common.interval = setInterval(function () {
            _this.GetData();
        }, 20000);
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
    /********* this function for autoload ************/
    ReservationsPage.prototype.GetData = function () {
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
        this.http.post(this.appsetting.url + 'orders/getorders', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reservations',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/reservations/reservations.html"*/'<!--\n  Generated template for the ReservationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton color="green">\n    <button ion-button menuToggle style="display:block !important;">\n      <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n    </button>\n  <ion-title>Home</ion-title>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    \n<!--<ion-list *ngIf="reservationsdata">\n  <ion-item-sliding #item>\n    <ion-item *ngFor="let reservation of reservationsdata;let i = index;">\n      Itemhhhhhh{{i}}hhh\n       <img [src]="reservation?.order_data[0]?.profile_pic">\n      <h2>{{reservation?.order_data[0]?.firstname}} {{reservation?.order_data[0]?.lastname}} </h2>\n        <p>{{reservation?.spacial_accomodation}}</p>\n        <div class="left"><p>Booking Date</p> <h5>{{reservation?.orderstart}} </h5></div>\n        <div class="right"><p>Booking Time</p><h5>{{reservation?.orderstart}}</h5></div>\n    </ion-item>\n    <ion-item-options side="left">\n      <button ion-button (click)="favorite(item)">Favorite</button>\n      <button ion-button color="danger" (click)="share(item)">Share</button>\n    </ion-item-options>\n    <ion-item-options side="right">\n      <button ion-button (click)="unread(item)">Unread</button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>-->\n  <ion-list *ngIf="reservationsdata">\n      <ion-item-sliding *ngFor="let reservation of reservationsdata">\n        <ion-item>\n            <ion-thumbnail item-start>\n              <img *ngIf="reservation?.order_data[0]?.profile_pic" [src]="reservation?.order_data[0]?.profile_pic">\n              <img *ngIf="!reservation?.order_data[0]?.profile_pic" src="assets/imgs/user.svg">\n            </ion-thumbnail>\n          <h2>{{reservation?.order_data[0]?.firstname}} {{reservation?.order_data[0]?.lastname}}</h2>\n          <p>{{reservation?.spacial_accomodation}}</p>\n          <div class="left">\n            <p>Booking Date</p>\n            <h5>{{reservation?.bookingdate}}</h5>\n          </div>\n          <div class="right">\n            <p>Booking Time</p>\n            <h5>{{reservation?.bookingtime}}</h5>\n          </div>\n        </ion-item>\n          \n       <ion-item-options side="right" class="btnsec">\n          <button ion-button color="green" (click)="Accept(reservation?._id,1)">\n<!--            <ion-icon><img src="assets/imgs/accept.png"></ion-icon>-->\n  <ion-icon style="font-size: 31px;font-weight: 700;" name="checkmark"></ion-icon>\n            Accept\n          </button>\n          <button ion-button color="reddrk" (click)="Decline(reservation?._id,2)">\n            <ion-icon><img src="assets/imgs/delete.png"></ion-icon>\n            Decline\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n<ion-list *ngIf="!reservationsdata">\n    <div style="text-align: center !important;padding: 50% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n          <img style="width:100px;margin: auto;display: block;" src="assets/imgs/sorry11.png">\n          <span> it\'s empty here!</span>\n    </div>\n    </ion-list>\n<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/reservations/reservations.html"*/,
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

/***/ 513:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-careernetwork',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/careernetwork/careernetwork.html"*/'<!--\n  Generated template for the CareernetworkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>career network</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/careernetwork/careernetwork.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CareernetworkPage);
    return CareernetworkPage;
}());

//# sourceMappingURL=careernetwork.js.map

/***/ }),

/***/ 514:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgottwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/forgottwo/forgottwo.html"*/'<!--\n  Generated template for the ForgottwoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green"> \n    <ion-title>forgot password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="chngpwd">\n        <div class="image-wrapper">\n          <img src="assets/imgs/lock.png">\n        </div>\n         <p>Set a new password.</p>\n         <form class="formmain">\n           <ion-list no-lines>\n               <ion-item>\n                 <ion-input type="email"></ion-input>\n                 <ion-icon class="iconinput" item-start><img style="float: left; margin-top: 4px;" src="assets/imgs/email.png"></ion-icon>\n               </ion-item>\n                      \n             <button class="btn1" ion-button color="green" block>SAVE</button>\n           </ion-list>\n         </form>\n       </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/forgottwo/forgottwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ForgottwoPage);
    return ForgottwoPage;
}());

//# sourceMappingURL=forgottwo.js.map

/***/ }),

/***/ 515:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-newartist',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/newartist/newartist.html"*/'<!--\n  Generated template for the NewartistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>New Artist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/newartist/newartist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], NewartistPage);
    return NewartistPage;
}());

//# sourceMappingURL=newartist.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(521);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_forgot__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__terms_terms__ = __webpack_require__(74);
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
            this.fcm.getToken().then(function (token) {
                var options = _this.appsetting.header();
                var postdata = {
                    email: signindata.value.email,
                    password: signindata.value.password,
                    divice_token: token,
                    role: 'member'
                };
                console.log(postdata);
                var serialized = _this.appsetting.serializeObj(postdata);
                var Loading = _this.loadingCtrl.create({
                    spinner: 'bubbles',
                    content: 'Loading...'
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.url + 'users/loginuser', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
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
            }, function (err) {
                console.log(err);
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
                    var options_1 = _this.appsetting.header();
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
                            _this.http.post(_this.appsetting.url + 'users/fbregistration', serialized, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title text-center>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="loginform formmain">\n    <p style="font-weight: 600;">Thank you for becoming a part of <br> our community!</p>\n    <form [formGroup]="SigninForm" (submit)="Signin(SigninForm)">\n      <ion-list no-lines>\n       \n          <ion-item>\n            <ion-input type="email" placeholder="Email" formControlName="email" autocapitalize="off"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/Generic.gif"></ion-icon>\n            <span item-content *ngIf="!isValid(\'email\')" class="validationpop animated bounce">Invalid email</span>\n          </ion-item>\n          \n        \n       \n          <ion-item>\n            <ion-input type="{{type}}" placeholder="Password" formControlName="password" ></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n            <button item-end type="button" color="dark" class="" (click)="showPassword()" ion-button icon-only clear>\n                <ion-icon  name="{{iconname}}" ></ion-icon>\n            </button>\n            <span item-content *ngIf="!isValid(\'password\')" class="validationpop animated bounce">Invalid Password</span>\n          </ion-item>\n            \n          \n        \n        <button type="submit" class="btn1" ion-button color="green" block [disabled]="!SigninForm.valid">Login</button>\n        <button type="button" class="forgot" ion-button clear block color="dark" (click)="forgot()">Forgot Password?</button>\n        <h2 class="orstrip"><span style="font-weight: 600;">OR</span></h2>\n        <button (click)="Facebooklogin()" type="button" class="btn3" ion-button block >Login with facebook</button>\n      </ion-list>\n    </form>\n  </div>\n\n  <div class="haveacc">Don’t have an account? <span color="dark" (click)="signup()" style="font-weight: 600;">Sign Up</span></div>\n<!--  <div class="haveacc" (click)="term()">Terms and conditions </div>-->\n  <div class="haveacc"><button ion-button clear (click)="home()">Skip</button></div>\n  \n  \n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__["a" /* FCM */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__["a" /* FCM */]) === "function" && _o || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_getstart_getstart__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_logintwo_logintwo__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signuptwo_signuptwo__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_filter_filter__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_realtalk_realtalk__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_careernetwork_careernetwork__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_newartist_newartist__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_viewreservation_viewreservation__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_viewreservationtwo_viewreservationtwo__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_history_history__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_historytwo_historytwo__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_viewfavorites_viewfavorites__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_terms_terms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_privacy_privacy__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_viewproduct_viewproduct__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_booknow_booknow__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_editprofiletwo_editprofiletwo__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_changepassword_changepassword__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_forgot_forgot__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_review_review__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_status_bar__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_reservations_reservations__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_reviews2_reviews2__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_editbusiness_editbusiness__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_addbusiness_addbusiness__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_forgottwo_forgottwo__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_fcm__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_camera__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_facebook__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_geolocation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ionic2_rating__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_social_sharing__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_launch_navigator__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_in_app_browser__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_location_location__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_talkreply_talkreply__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_ourtalkreply_ourtalkreply__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_angular_svg_icon__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_common_http__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__yellowspot_ng_truncate__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_call_number__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_open_native_settings__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_ng2_search_filter__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_search_search__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_termsbusiness_termsbusiness__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_privacytwo_privacytwo__ = __webpack_require__(183);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
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
                __WEBPACK_IMPORTED_MODULE_47__pages_talkreply_talkreply__["a" /* TalkreplyPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_ourtalkreply_ourtalkreply__["a" /* OurtalkreplyPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_termsbusiness_termsbusiness__["a" /* TermsbusinessPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_privacytwo_privacytwo__["a" /* PrivacytwoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_37__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_50__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_42_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_49_angular_svg_icon__["a" /* AngularSvgIconModule */],
                __WEBPACK_IMPORTED_MODULE_51__yellowspot_ng_truncate__["a" /* TruncateModule */],
                __WEBPACK_IMPORTED_MODULE_54_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addbusiness/addbusiness.module#AddbusinessPageModule', name: 'AddbusinessPage', segment: 'addbusiness', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/careernetwork/careernetwork.module#CareernetworkPageModule', name: 'CareernetworkPage', segment: 'careernetwork', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editbusiness/editbusiness.module#EditbusinessPageModule', name: 'EditbusinessPage', segment: 'editbusiness', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booknow/booknow.module#BooknowPageModule', name: 'BooknowPage', segment: 'booknow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofiletwo/editprofiletwo.module#EditprofiletwoPageModule', name: 'EditprofiletwoPage', segment: 'editprofiletwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgottwo/forgottwo.module#ForgottwoPageModule', name: 'ForgottwoPage', segment: 'forgottwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/getstart/getstart.module#GetstartPageModule', name: 'GetstartPage', segment: 'getstart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historytwo/historytwo.module#HistoryPageModule', name: 'HistorytwoPage', segment: 'historytwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logintwo/logintwo.module#LogintwoPageModule', name: 'LogintwoPage', segment: 'logintwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newartist/newartist.module#NewartistPageModule', name: 'NewartistPage', segment: 'newartist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ourtalkreply/ourtalkreply.module#OurtalkreplyPageModule', name: 'OurtalkreplyPage', segment: 'ourtalkreply', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacytwo/privacytwo.module#PrivacytwoPageModule', name: 'PrivacytwoPage', segment: 'privacytwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/realtalk/realtalk.module#RealtalkPageModule', name: 'RealtalkPage', segment: 'realtalk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservations/reservations.module#ReservationsPageModule', name: 'ReservationsPage', segment: 'reservations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/review/review.module#ReviewPageModule', name: 'ReviewPage', segment: 'review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reviews2/reviews2.module#Reviews2PageModule', name: 'Reviews2Page', segment: 'reviews2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/talkreply/talkreply.module#TalkreplyPageModule', name: 'TalkreplyPage', segment: 'talkreply', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signuptwo/signuptwo.module#SignuptwoPageModule', name: 'SignuptwoPage', segment: 'signuptwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/termsbusiness/termsbusiness.module#TermsbusinessPageModule', name: 'TermsbusinessPage', segment: 'termsbusiness', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewfavorites/viewfavorites.module#ViewfavoritesPageModule', name: 'ViewfavoritesPage', segment: 'viewfavorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewreservation/viewreservation.module#ViewreservationPageModule', name: 'ViewreservationPage', segment: 'viewreservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewproduct/viewproduct.module#ViewproductPageModule', name: 'ViewproductPage', segment: 'viewproduct', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_47__pages_talkreply_talkreply__["a" /* TalkreplyPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_ourtalkreply_ourtalkreply__["a" /* OurtalkreplyPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_termsbusiness_termsbusiness__["a" /* TermsbusinessPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_privacytwo_privacytwo__["a" /* PrivacytwoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
                __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_46__components_location_location__["a" /* LocationComponent */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 252,
	"./af.js": 252,
	"./ar": 253,
	"./ar-dz": 254,
	"./ar-dz.js": 254,
	"./ar-kw": 255,
	"./ar-kw.js": 255,
	"./ar-ly": 256,
	"./ar-ly.js": 256,
	"./ar-ma": 257,
	"./ar-ma.js": 257,
	"./ar-sa": 258,
	"./ar-sa.js": 258,
	"./ar-tn": 259,
	"./ar-tn.js": 259,
	"./ar.js": 253,
	"./az": 260,
	"./az.js": 260,
	"./be": 261,
	"./be.js": 261,
	"./bg": 262,
	"./bg.js": 262,
	"./bm": 263,
	"./bm.js": 263,
	"./bn": 264,
	"./bn.js": 264,
	"./bo": 265,
	"./bo.js": 265,
	"./br": 266,
	"./br.js": 266,
	"./bs": 267,
	"./bs.js": 267,
	"./ca": 268,
	"./ca.js": 268,
	"./cs": 269,
	"./cs.js": 269,
	"./cv": 270,
	"./cv.js": 270,
	"./cy": 271,
	"./cy.js": 271,
	"./da": 272,
	"./da.js": 272,
	"./de": 273,
	"./de-at": 274,
	"./de-at.js": 274,
	"./de-ch": 275,
	"./de-ch.js": 275,
	"./de.js": 273,
	"./dv": 276,
	"./dv.js": 276,
	"./el": 277,
	"./el.js": 277,
	"./en-au": 278,
	"./en-au.js": 278,
	"./en-ca": 279,
	"./en-ca.js": 279,
	"./en-gb": 280,
	"./en-gb.js": 280,
	"./en-ie": 281,
	"./en-ie.js": 281,
	"./en-il": 282,
	"./en-il.js": 282,
	"./en-nz": 283,
	"./en-nz.js": 283,
	"./eo": 284,
	"./eo.js": 284,
	"./es": 285,
	"./es-do": 286,
	"./es-do.js": 286,
	"./es-us": 287,
	"./es-us.js": 287,
	"./es.js": 285,
	"./et": 288,
	"./et.js": 288,
	"./eu": 289,
	"./eu.js": 289,
	"./fa": 290,
	"./fa.js": 290,
	"./fi": 291,
	"./fi.js": 291,
	"./fo": 292,
	"./fo.js": 292,
	"./fr": 293,
	"./fr-ca": 294,
	"./fr-ca.js": 294,
	"./fr-ch": 295,
	"./fr-ch.js": 295,
	"./fr.js": 293,
	"./fy": 296,
	"./fy.js": 296,
	"./gd": 297,
	"./gd.js": 297,
	"./gl": 298,
	"./gl.js": 298,
	"./gom-latn": 299,
	"./gom-latn.js": 299,
	"./gu": 300,
	"./gu.js": 300,
	"./he": 301,
	"./he.js": 301,
	"./hi": 302,
	"./hi.js": 302,
	"./hr": 303,
	"./hr.js": 303,
	"./hu": 304,
	"./hu.js": 304,
	"./hy-am": 305,
	"./hy-am.js": 305,
	"./id": 306,
	"./id.js": 306,
	"./is": 307,
	"./is.js": 307,
	"./it": 308,
	"./it.js": 308,
	"./ja": 309,
	"./ja.js": 309,
	"./jv": 310,
	"./jv.js": 310,
	"./ka": 311,
	"./ka.js": 311,
	"./kk": 312,
	"./kk.js": 312,
	"./km": 313,
	"./km.js": 313,
	"./kn": 314,
	"./kn.js": 314,
	"./ko": 315,
	"./ko.js": 315,
	"./ky": 316,
	"./ky.js": 316,
	"./lb": 317,
	"./lb.js": 317,
	"./lo": 318,
	"./lo.js": 318,
	"./lt": 319,
	"./lt.js": 319,
	"./lv": 320,
	"./lv.js": 320,
	"./me": 321,
	"./me.js": 321,
	"./mi": 322,
	"./mi.js": 322,
	"./mk": 323,
	"./mk.js": 323,
	"./ml": 324,
	"./ml.js": 324,
	"./mn": 325,
	"./mn.js": 325,
	"./mr": 326,
	"./mr.js": 326,
	"./ms": 327,
	"./ms-my": 328,
	"./ms-my.js": 328,
	"./ms.js": 327,
	"./mt": 329,
	"./mt.js": 329,
	"./my": 330,
	"./my.js": 330,
	"./nb": 331,
	"./nb.js": 331,
	"./ne": 332,
	"./ne.js": 332,
	"./nl": 333,
	"./nl-be": 334,
	"./nl-be.js": 334,
	"./nl.js": 333,
	"./nn": 335,
	"./nn.js": 335,
	"./pa-in": 336,
	"./pa-in.js": 336,
	"./pl": 337,
	"./pl.js": 337,
	"./pt": 338,
	"./pt-br": 339,
	"./pt-br.js": 339,
	"./pt.js": 338,
	"./ro": 340,
	"./ro.js": 340,
	"./ru": 341,
	"./ru.js": 341,
	"./sd": 342,
	"./sd.js": 342,
	"./se": 343,
	"./se.js": 343,
	"./si": 344,
	"./si.js": 344,
	"./sk": 345,
	"./sk.js": 345,
	"./sl": 346,
	"./sl.js": 346,
	"./sq": 347,
	"./sq.js": 347,
	"./sr": 348,
	"./sr-cyrl": 349,
	"./sr-cyrl.js": 349,
	"./sr.js": 348,
	"./ss": 350,
	"./ss.js": 350,
	"./sv": 351,
	"./sv.js": 351,
	"./sw": 352,
	"./sw.js": 352,
	"./ta": 353,
	"./ta.js": 353,
	"./te": 354,
	"./te.js": 354,
	"./tet": 355,
	"./tet.js": 355,
	"./tg": 356,
	"./tg.js": 356,
	"./th": 357,
	"./th.js": 357,
	"./tl-ph": 358,
	"./tl-ph.js": 358,
	"./tlh": 359,
	"./tlh.js": 359,
	"./tr": 360,
	"./tr.js": 360,
	"./tzl": 361,
	"./tzl.js": 361,
	"./tzm": 362,
	"./tzm-latn": 363,
	"./tzm-latn.js": 363,
	"./tzm.js": 362,
	"./ug-cn": 364,
	"./ug-cn.js": 364,
	"./uk": 365,
	"./uk.js": 365,
	"./ur": 366,
	"./ur.js": 366,
	"./uz": 367,
	"./uz-latn": 368,
	"./uz-latn.js": 368,
	"./uz.js": 367,
	"./vi": 369,
	"./vi.js": 369,
	"./x-pseudo": 370,
	"./x-pseudo.js": 370,
	"./yo": 371,
	"./yo.js": 371,
	"./zh-cn": 372,
	"./zh-cn.js": 372,
	"./zh-hk": 373,
	"./zh-hk.js": 373,
	"./zh-tw": 374,
	"./zh-tw.js": 374
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
webpackContext.id = 548;

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getstart_getstart__ = __webpack_require__(56);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetstartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logintwo_logintwo__ = __webpack_require__(73);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-getstart',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/getstart/getstart.html"*/'<!--\n  Generated template for the GetstartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n    <ion-title>Getstart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="getbg" scroll="false">\n\n<div class="vcenter">\n    <div class="logo"><img src="assets/imgs/logo.png"></div>\n<p>Melanin Enterprise<br>is designed to enhance the african american social networking experience by providing all-in-one features to meet our entrepreneurial,social,career,& entertainment needs.</p>\n\n<ion-grid style="margin-top:10px;">\n  <ion-row>\n    <ion-col col-6><button class="box" color="green" ion-button block (click)="loginbs()">I AM A BUSINESS</button></ion-col>\n    <ion-col col-6><button class="box ylo" color="yellow" ion-button block (click)="login()">I AM A MEMBER</button></ion-col>\n  </ion-row>\n</ion-grid>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/getstart/getstart.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object])
    ], GetstartPage);
    return GetstartPage;
    var _a, _b;
}());

//# sourceMappingURL=getstart.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_getstart_getstart__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_realtalk_realtalk__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_viewreservation_viewreservation__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_viewreservationtwo_viewreservationtwo__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_history_history__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_viewfavorites_viewfavorites__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_terms_terms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_privacy_privacy__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_editprofiletwo_editprofiletwo__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_reservations_reservations__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_reviews2_reviews2__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_editbusiness_editbusiness__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_addbusiness_addbusiness__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_angular_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_historytwo_historytwo__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_fcm__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_open_native_settings__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_termsbusiness_termsbusiness__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_privacytwo_privacytwo__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





























var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, http, appsetting, common, toastCtrl, events, app, menu, fcm, geolocation, openNativeSettings) {
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
        this.geolocation = geolocation;
        this.openNativeSettings = openNativeSettings;
        if (this.common.interval) {
            clearInterval(this.common.interval);
        }
        //alert('updaated latest 1');
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
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'assets/imgs/home.png' },
                { title: 'Sign in or create account', component: __WEBPACK_IMPORTED_MODULE_4__pages_getstart_getstart__["a" /* GetstartPage */], icon: 'assets/imgs/user.png' },
                { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_26__pages_termsbusiness_termsbusiness__["a" /* TermsbusinessPage */], icon: 'assets/imgs/terms.png' },
                { title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_27__pages_privacytwo_privacytwo__["a" /* PrivacytwoPage */], icon: 'assets/imgs/privacy.png' },
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
            var alert = this.alertCtrl.create({
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
            alert.present();
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
                        response.data.profile_pic = 'assets/imgs/user.png';
                    }
                    _this.currentuser = null;
                    _this.currentuser = response.data;
                    console.log(_this.currentuser);
                    if (_this.currentuser.role == "member") {
                        _this.pages = [
                            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'assets/imgs/home.png' },
                            { title: 'Real Talk', component: __WEBPACK_IMPORTED_MODULE_6__pages_realtalk_realtalk__["a" /* RealtalkPage */], icon: 'assets/imgs/realtalk.png' },
                            //                {title: 'Career Network', component: 'career', icon: 'assets/imgs/career.png'},
                            { title: 'Edit Profile', component: __WEBPACK_IMPORTED_MODULE_13__pages_editprofiletwo_editprofiletwo__["a" /* EditprofiletwoPage */], icon: 'assets/imgs/editb.png' },
                            //                {title: 'Edit Business Information', component: EditbusinessPage, icon: 'assets/imgs/editprofile.png'},
                            //                {title: 'Reviews', component: Reviews2Page, icon: 'assets/imgs/reviews.png'},
                            //                {title: 'New Artist', component: 'artist', icon: 'assets/imgs/artist.png'},
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
                            { title: 'Advertising', component: 'advertising', icon: 'assets/imgs/add.png' },
                            //                {title: 'Career Network',  component: 'career', icon: 'assets/imgs/career.png'},
                            { title: 'Edit Profile', component: __WEBPACK_IMPORTED_MODULE_13__pages_editprofiletwo_editprofiletwo__["a" /* EditprofiletwoPage */], icon: 'assets/imgs/editb.png' },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/app/app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n  <ion-header>\n    <ion-toolbar class="toolbarhead" color="green">\n      <div class="menuprofile" *ngIf="currentuser">\n        <div class="profile_strip">\n          <div class="profile_pic">\n            <div class="profile_picinn">\n            <img src="{{currentuser?.profile_pic}}"> \n            </div>\n          </div>\n          <h2>{{currentuser?.firstname}}</h2>\n          <p>{{currentuser?.email}}</p>\n        </div>\n      </div>\n        \n        <div class="menuprofile" *ngIf="!currentuser">\n        <div class="profile_strip">\n          <div class="profile_pic">\n            <div class="profile_picinn">\n            <img src="assets/imgs/user.png"> \n            </div>\n          </div>\n<!--          <h2>{{currentuser?.firstname}}</h2>\n          <p>{{currentuser?.email}}</p>-->\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list no-lines class="sidemenu" *ngIf="currentuser">\n      <button menuClose color="black" ion-item *ngFor="let p of pages" (click)="openPage(p)" [class.active]="checkActivePage(p)">\n        <ion-icon><img width="20px" src="{{p.icon}}"></ion-icon>\n        {{p.title}}\n      </button>\n        <button class="logoutclass" menuClose color="black" ion-item (click)="logout()">\n        <ion-icon><img width="20px" src="assets/imgs/logout.png"></ion-icon>\n        Logout\n      </button>\n    </ion-list>\n      \n      <ion-list no-lines class="sidemenu" *ngIf="currentuser == null">\n      <button menuClose color="black" ion-item *ngFor="let p of pages" (click)="openPage(p)" [class.active]="checkActivePage(p)">\n        <ion-icon><img width="20px" src="{{p.icon}}"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_17__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__angular_http__["b" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_18__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_18__providers_appsetting__["a" /* Appsetting */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_19__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_19__providers_common__["a" /* Common */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_21_ionic_angular_index__["k" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_21_ionic_angular_index__["k" /* MenuController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_23__ionic_native_fcm__["a" /* FCM */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_23__ionic_native_fcm__["a" /* FCM */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_25__ionic_native_open_native_settings__["a" /* OpenNativeSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_25__ionic_native_open_native_settings__["a" /* OpenNativeSettings */]) === "function" && _q || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 571:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(50);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'location',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/components/location/location.html"*/'<!-- Generated template for the LocationComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/components/location/location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], LocationComponent);
    return LocationComponent;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddbusinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservations_reservations__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logintwo_logintwo__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
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
        var _this = this;
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
        this.category = []; //variable used for store category list
        this.services = []; //variable used for store services
        /**** end *****/
        this.postalcode = 0;
        // alert('updated ggg');
        // alert('rahul add business');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            this.common.tryagain();
        }
        console.log(this.daytime);
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        var temp = this;
        console.log('ionViewDidLoad AddbusinessPage');
        this.http.get(this.appsetting.url + 'categories/get').map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            response.forEach(function (value, key) {
                temp.category.push(value);
                value.sub_category.forEach(function (val, ke) {
                    //console.log(val);
                    temp.services.push(val);
                });
            });
            _this.services.sort(function (a, b) {
                if (a.sub_category_title < b.sub_category_title)
                    return -1;
                else if (a.sub_category_title > b.sub_category_title)
                    return 1;
                return 0;
            });
        });
    }
    AddbusinessPage.prototype.ionViewDidLoad = function () {
        console.log(new Date());
        this.currentdate = __WEBPACK_IMPORTED_MODULE_9_moment__(new Date().toISOString()).locale('es').format();
        console.log(this.currentdate);
        console.log(this.services);
    };
    AddbusinessPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.AddbusinessForm = this.formBuilder.group({
            //businesstype: ['', [Validators.required]],
            businessname: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            address: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            //            days: [''],
            // openinghours: [''],
            // closinghours: [''],
            services: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            instagramlink: [''],
            facebooklink: [''],
            twitterlink: [''],
            veteranowned: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            onlinemarketplace: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            accept: [false],
            reservation: [false],
            zipcode: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            websiteurl: [''],
            /******* controls for days,opening and closing hours *************/
            monday: [false],
            mondayopeninghours: [''],
            mondayclosinghours: [''],
            tuesday: [false],
            tuesdayopeninghours: [''],
            tuesdayclosinghours: [''],
            wednesday: [false],
            wednesdayopeninghours: [''],
            wednesdayclosinghours: [''],
            thursday: [false],
            thursdayopeninghours: [''],
            thursdayclosinghours: [''],
            friday: [false],
            fridayopeninghours: [''],
            fridayclosinghours: [''],
            saturday: [false],
            saturdayopeninghours: [''],
            saturdayclosinghours: [''],
            sunday: [false],
            sundayopeninghours: [''],
            sundayclosinghours: [''],
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
            value.sub_category.forEach(function (val, ke) {
                if (val._id == id) {
                    console.log(value);
                    temp.category_id = value._id;
                    temp.category_title = value.title;
                    //                    temp.service_id = id;
                    temp.service_title = val.sub_category_title;
                }
            });
        });
        console.log(this.category_id);
        console.log(this.category_title);
        console.log(this.services);
    };
    //    selectedService(serviceid) {
    //        var temp = this;
    //        console.log(serviceid);
    //        this.services.forEach(function (value, key) {
    //            console.log(value);
    //            console.log(key);
    //            if (value._id == serviceid) {
    //                console.log(value);
    //                temp.data.service_title = value.sub_category_title;
    //            }
    //
    //        })
    //    }
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
    // closingtime(timedata) {
    //     var temp = this;
    //     console.log(timedata.value);
    //     console.log(timedata.value.days);
    //     console.log(timedata.value.closinghours);
    //     console.log(timedata.value.openinghours);
    //     if (timedata.value.days && timedata.value.closinghours && timedata.value.openinghours) {
    //         var a = timedata.value.openinghours.split(':');
    //         var b = timedata.value.closinghours.split(':');
    //         if (b[0] > a[0]) {
    //             if (a[0] > 11) {
    //                 // console.log(timedata.value.openinghours.includes("PM"));
    //                 timedata.value.openinghours = timedata.value.openinghours + ' PM';
    //             } else {
    //                 //console.log(timedata.value.openinghours.includes("AM"));
    //                 timedata.value.openinghours = timedata.value.openinghours + ' AM';
    //             }
    //             console.log(timedata.value.openinghours);
    //             if (b[0] > 11) {
    //                 timedata.value.closinghours = timedata.value.closinghours + ' PM';
    //             } else {
    //                 timedata.value.closinghours = timedata.value.closinghours + ' AM';
    //             }
    //             console.log(timedata.value.closinghours);
    //             var dayOpeningClosing = {
    //                 day: timedata.value.days,
    //                 openingtime: timedata.value.openinghours,
    //                 closingtime: timedata.value.closinghours
    //             }
    //             //day,opening time and closing time of data to post on api.
    //             this.senddays.push(timedata.value.days);
    //             var ot = timedata.value.openinghours.split(' ');
    //             var ct = timedata.value.closinghours.split(' ');
    //             this.sendopeningtime.push(ot[0]);
    //             this.sendclosingtime.push(ct[0]);
    //             console.log(this.senddays.join(','));
    //             console.log(this.sendopeningtime.join(','));
    //             console.log(this.sendclosingtime.join(','));
    //             /**** array for display day,opeing time and closing time on html after selection **********/
    //             this.daytime.push(dayOpeningClosing);
    //             console.log(this.daytime);
    //             this.data.days = '';
    //             this.data.openinghours = '';
    //             this.data.closinghours = '';
    //         } else {
    //             this.common.presentAlert('Add business', 'Closing time must be greater than opening time!');
    //         }
    //     } else {
    //         this.common.presentAlert('Add business', 'Are you sure you selected day,opening and closing time?');
    //     }
    // }
    /****** function used for  delete selected day,openingtime and closing time.***********/
    // DeleteTimes(event, ind) {
    //     var temp = this;
    //     console.log(event.day);
    //     console.log(ind);
    //     /**** pop a value from array by index ************/
    //     console.log(temp.daytime);
    //     temp.daytime.splice(ind, 1);
    //     temp.senddays.splice(ind, 1);
    //     console.log(this.daytime.length);
    //     if (this.daytime.length == 0) {
    //         this.data.days = '';
    //         this.data.openinghours = '';
    //         this.data.closinghours = '';
    //     }
    // }
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
            targetHeight: 800,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.bit = _this.bit + 1;
            if (_this.bit > 5) {
                _this.common.presentAlert('Add business', 'You can add more pictures if you want to get the premium membership,<br> call now 123-4567890');
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
        this.senddays = [];
        this.sendopeningtime = [];
        this.sendclosingtime = [];
        if (addbusiness.value.monday == true && addbusiness.value.mondayopeninghours != "" && addbusiness.value.mondayclosinghours != "") {
            this.senddays.push('Monday');
            this.sendopeningtime.push(addbusiness.value.mondayopeninghours);
            this.sendclosingtime.push(addbusiness.value.mondayclosinghours);
        }
        if (addbusiness.value.tuesday == true && addbusiness.value.tuesdayopeninghours != "" && addbusiness.value.tuesdayclosinghours != "") {
            this.senddays.push('Tuesday');
            this.sendopeningtime.push(addbusiness.value.tuesdayopeninghours);
            this.sendclosingtime.push(addbusiness.value.tuesdayclosinghours);
        }
        if (addbusiness.value.wednesday == true && addbusiness.value.wednesdayopeninghours != "" && addbusiness.value.wednesdayclosinghours != "") {
            this.senddays.push('Wednesday');
            this.sendopeningtime.push(addbusiness.value.wednesdayopeninghours);
            this.sendclosingtime.push(addbusiness.value.wednesdayclosinghours);
        }
        if (addbusiness.value.thursday == true && addbusiness.value.thursdayopeninghours != "" && addbusiness.value.thursdayclosinghours != "") {
            this.senddays.push('Thursday');
            this.sendopeningtime.push(addbusiness.value.thursdayopeninghours);
            this.sendclosingtime.push(addbusiness.value.thursdayclosinghours);
        }
        if (addbusiness.value.friday == true && addbusiness.value.fridayopeninghours != "" && addbusiness.value.fridayclosinghours != "") {
            this.senddays.push('Friday');
            this.sendopeningtime.push(addbusiness.value.fridayopeninghours);
            this.sendclosingtime.push(addbusiness.value.fridayclosinghours);
        }
        if (addbusiness.value.saturday == true && addbusiness.value.saturdayopeninghours != "" && addbusiness.value.saturdayclosinghours != "") {
            this.senddays.push('Saturday');
            this.sendopeningtime.push(addbusiness.value.saturdayopeninghours);
            this.sendclosingtime.push(addbusiness.value.saturdayclosinghours);
        }
        if (addbusiness.value.sunday == true && addbusiness.value.sundayopeninghours != "" && addbusiness.value.sundayclosinghours != "") {
            this.senddays.push('Sunday');
            this.sendopeningtime.push(addbusiness.value.sundayopeninghours);
            this.sendclosingtime.push(addbusiness.value.sundayclosinghours);
        }
        var postdata;
        console.log(this.senddays.join(','));
        console.log(this.sendopeningtime.join(','));
        console.log(this.sendclosingtime.join(','));
        console.log(addbusiness.value);
        if (this.senddays.length > 0) {
            if (this.ImageToSend.length > 0) {
                postdata = {
                    user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                    role: 'business',
                    business_type: 3,
                    business_name: addbusiness.value.businessname,
                    business_phone_number: addbusiness.value.phone,
                    address: addbusiness.value.address,
                    business_description: addbusiness.value.description,
                    category: this.category_title,
                    category_id: this.category_id,
                    sub_cat: this.service_title,
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
                // return false;
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
                            var alert = _this.alertCtrl.create({
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
                            alert.present();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
    ], AddbusinessPage.prototype, "mapElement", void 0);
    AddbusinessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-addbusiness',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/addbusiness/addbusiness.html"*/'<!--\n  Generated template for the AddbusinessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar color="green">\n        <ion-buttons start>\n            <button ion-button icon-only (click)="login()">\n                    <ion-icon class="bckbtn" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>add business</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="AddbusinessForm" (submit)="AddBusiness(AddbusinessForm)">\n        <ion-list no-lines>\n            <!--            <ion-item>\n                            <ion-label>Business type</ion-label>\n                            <ion-select formControlName="businesstype" (ionChange)="selectedBusiness($event)">\n                                <ion-option value="1">Premium</ion-option>\n                                <ion-option value="">Valued</ion-option>\n                            </ion-select>\n                        </ion-item>-->\n            <ion-item>\n                <ion-input type="text" placeholder="Business Name" formControlName="businessname"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-input type="tel" placeholder="Phone Number" formControlName="phone" maxLength="12"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-input type="text" placeholder="Address" formControlName="address" [(ngModel)]="autocomplete.query" (input)="updateSearch()"></ion-input>\n            </ion-item>\n            <div *ngIf="autocompleteItems != \'\'" class="suggestion">\n                <ion-label *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">{{ item }}</ion-label>\n            </div>\n            <ion-item>\n                <ion-input type="text" placeholder="Zip code" formControlName="zipcode" maxLength="8"></ion-input>\n            </ion-item>\n            <ion-item class="area">\n                <ion-textarea  placeholder="Description" formControlName="description"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Category</ion-label>\n                <ion-select class="catoption" formControlName="services" (ionChange)="selectedCat($event)">\n                    <ion-option *ngFor="let cat of services" value ="{{cat._id}}">{{cat.sub_category_title}}\n<!--                        <ion-input type="hidden" [(ngModel)]="data.category_title" formControlName="services_title"></ion-input>-->\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n\n            <h2 style="margin-bottom: 7px !important;">Add opening and closing hours.</h2>\n\n            <div class="day-frmt">\n                <ion-item class="check_box">\n                    <ion-label>Monday</ion-label>\n                    <ion-checkbox color="green" formControlName="monday"></ion-checkbox>\n                </ion-item>\n                <ion-grid class="paddingnone">\n                <ion-row>\n                    <ion-col col-6 class="padding-left">\n                        <ion-item>\n                            <ion-label>From</ion-label>\n                            <ion-datetime  displayFormat="hh:mm A" formControlName="mondayopeninghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6 class="padding-right">\n                        <ion-item>\n                            <ion-label>To</ion-label>\n                            <ion-datetime displayFormat="hh:mm A" formControlName="mondayclosinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col> \n                </ion-row>\n            </ion-grid>\n\n            <ion-item class="check_box">\n                    <ion-label>Tuesday</ion-label>\n                    <ion-checkbox color="green" formControlName="tuesday"></ion-checkbox>\n                </ion-item>\n                <ion-grid class="paddingnone">\n                <ion-row>\n                    <ion-col col-6 class="padding-left">\n                        <ion-item>\n                            <ion-label>From</ion-label>\n                            <ion-datetime  displayFormat="hh:mm A" formControlName="tuesdayopeninghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6 class="padding-right">\n                        <ion-item>\n                            <ion-label>To</ion-label>\n                            <ion-datetime displayFormat="hh:mm A" formControlName="tuesdayclosinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col> \n                </ion-row>\n            </ion-grid>\n\n            <ion-item class="check_box">\n                    <ion-label>Wednesday</ion-label>\n                    <ion-checkbox color="green" formControlName="wednesday"></ion-checkbox>\n                </ion-item>\n                <ion-grid class="paddingnone">\n                <ion-row>\n                    <ion-col col-6 class="padding-left">\n                        <ion-item>\n                            <ion-label>From</ion-label>\n                            <ion-datetime  displayFormat="hh:mm A" formControlName="wednesdayopeninghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6 class="padding-right">\n                        <ion-item>\n                            <ion-label>To</ion-label>\n                            <ion-datetime displayFormat="hh:mm A" formControlName="wednesdayclosinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col> \n                </ion-row>\n            </ion-grid>\n\n            <ion-item class="check_box">\n                    <ion-label>Thursday</ion-label>\n                    <ion-checkbox color="green" formControlName="thursday"></ion-checkbox>\n                </ion-item>\n                <ion-grid class="paddingnone">\n                <ion-row>\n                    <ion-col col-6 class="padding-left">\n                        <ion-item>\n                            <ion-label>From</ion-label>\n                            <ion-datetime  displayFormat="hh:mm A" formControlName="thursdayopeninghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6 class="padding-right">\n                        <ion-item>\n                            <ion-label>To</ion-label>\n                            <ion-datetime displayFormat="hh:mm A" formControlName="thursdayclosinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col> \n                </ion-row>\n            </ion-grid>\n\n            <ion-item class="check_box">\n                    <ion-label>Friday</ion-label>\n                    <ion-checkbox color="green" formControlName="friday"></ion-checkbox>\n                </ion-item>\n                <ion-grid class="paddingnone">\n                <ion-row>\n                    <ion-col col-6 class="padding-left">\n                        <ion-item>\n                            <ion-label>From</ion-label>\n                            <ion-datetime  displayFormat="hh:mm A" formControlName="fridayopeninghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6 class="padding-right">\n                        <ion-item>\n                            <ion-label>To</ion-label>\n                            <ion-datetime displayFormat="hh:mm A" formControlName="fridayclosinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col> \n                </ion-row>\n            </ion-grid>\n\n            <ion-item class="check_box">\n                    <ion-label>Saturday</ion-label>\n                    <ion-checkbox color="green" formControlName="saturday"></ion-checkbox>\n                </ion-item>\n                <ion-grid class="paddingnone">\n                <ion-row>\n                    <ion-col col-6 class="padding-left">\n                        <ion-item>\n                            <ion-label>From</ion-label>\n                            <ion-datetime  displayFormat="hh:mm A" formControlName="saturdayopeninghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6 class="padding-right">\n                        <ion-item>\n                            <ion-label>To</ion-label>\n                            <ion-datetime displayFormat="hh:mm A" formControlName="saturdayclosinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col> \n                </ion-row>\n            </ion-grid>\n\n            <ion-item class="check_box">\n                    <ion-label>Sunday</ion-label>\n                    <ion-checkbox color="green" formControlName="sunday"></ion-checkbox>\n                </ion-item>\n                <ion-grid class="paddingnone">\n                <ion-row>\n                    <ion-col col-6 class="padding-left">\n                        <ion-item>\n                            <ion-label>From</ion-label>\n                            <ion-datetime  displayFormat="hh:mm A" formControlName="sundayopeninghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6 class="padding-right">\n                        <ion-item>\n                            <ion-label>To</ion-label>\n                            <ion-datetime displayFormat="hh:mm A" formControlName="sundayclosinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col> \n                </ion-row>\n            </ion-grid>\n        </div>\n\n            <!-- <div class="tagsec" *ngIf="daytime.length>0">\n                <div class="inner-sec" *ngFor="let d of daytime;let i = index">\n                     <p style="margin-bottom:1px;">{{d.day}}</p>\n                    <p><span>{{d.openingtime}}</span> to <span>{{d.closingtime}}</span></p>\n                    <ion-icon name="close" (click)="DeleteTimes(d,i)"></ion-icon>\n                </div>\n            </div> -->\n\n<!--            <ion-item *ngIf="services">\n                <ion-label>Services</ion-label>\n                <ion-select class="catoption" formControlName="services" (ionChange)="selectedService($event)">\n                    <ion-option *ngFor="let service of services" value="{{service._id}}">{{service.sub_category_title}}\n                        <ion-input type="hidden" [(ngModel)]="data.service_title" formControlName="services_title"></ion-input>\n                    </ion-option>\n                </ion-select>\n            </ion-item>-->\n\n            <!--            <h2>Social Links</h2>\n            \n                        <ion-item>\n                            <img src="assets/imgs/instgrm.png" item-start class="social">\n                            <ion-input type="text" placeholder="https://www.instagram.com/" formControlName="instagramlink" autocapitalize="off"></ion-input>\n                        </ion-item>\n            \n                        <ion-item>\n                            <img src="assets/imgs/fb.png" item-start class="social">\n                            <ion-input type="text" placeholder="https://www.facebook.com/" formControlName="facebooklink" autocapitalize="off"></ion-input>\n                        </ion-item>\n            \n                        <ion-item>\n                            <img src="assets/imgs/twtr.png" item-start class="social">\n                            <ion-input type="text" placeholder="https://www.twitter.com/" formControlName="twitterlink" autocapitalize="off"></ion-input>\n                        </ion-item>-->\n            <ion-item>\n                \n                <ion-input type="text" placeholder="https://www.websitename.com/" formControlName="websiteurl" autocapitalize="off"></ion-input>\n            </ion-item>\n\n            <h2>Is this a veteran owned business?</h2>\n\n            <ion-list radio-group style="margin:0 !important;" formControlName="veteranowned">\n                <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                    <ion-radio checked="yes" value="yes"></ion-radio>\n                    <ion-label>Yes</ion-label>\n                </ion-item>\n                <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                    <ion-radio value="no"></ion-radio>\n                    <ion-label>No</ion-label>\n                </ion-item>\n            </ion-list>\n\n            <h2>Do you own an online marketplace?</h2>\n\n            <ion-list radio-group style="margin:0 !important;" formControlName="onlinemarketplace">\n                <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                    <ion-radio checked="yes" value="yes"></ion-radio>\n                    <ion-label>Yes</ion-label>\n                </ion-item>\n\n                <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                    <ion-radio value="no"></ion-radio>\n                    <ion-label>No</ion-label>\n                </ion-item>\n            </ion-list>\n\n            <h2>Do you accept?</h2>\n            <ion-list style="margin:0 !important;">\n                <ion-item class="chck">\n                    <ion-checkbox formControlName="accept" style="margin-right: 9px !important;"></ion-checkbox>\n                    <ion-label>Appointments</ion-label>\n                </ion-item>\n                <ion-item class="chck">\n                    <ion-checkbox formControlName="reservation" style="margin-right: 9px !important;"></ion-checkbox>\n                    <ion-label>Reservations</ion-label>\n                </ion-item>\n            </ion-list>\n        </ion-list>\n        <div class="photosec">\n            <h2 style="position:relative;">Add Photo <span>( Multiple photos )</span>\n                <button type="button" ion-button color="green" (click)="presentActionSheet()"><ion-icon name="add"></ion-icon></button>\n            </h2>\n            <ion-grid class="paddingnone" *ngIf="base64Image.length>0">\n                <ion-row>\n                    <ion-col col-4 *ngFor="let img of base64Image">\n                             <div class="image-wrapper">\n                            <img src="{{img}}">\n                        </div>\n                    </ion-col>\n                    <!--            <ion-col col-4>\n                                    <div class="image-wrapper">\n                                      <img src="assets/imgs/sqar.png">\n                                    </div>\n                                  </ion-col>\n                                  <ion-col col-4>\n                                      <div class="image-wrapper">\n                                        <img src="assets/imgs/sqar.png">\n                                      </div>\n                                    </ion-col>-->\n                </ion-row>\n            </ion-grid>\n            <div class="btnsec">\n                <button type="submit" ion-button color="green" [disabled]="!AddbusinessForm.valid" full class="btn1">SAVE</button>\n            </div>\n        </div>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/addbusiness/addbusiness.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _o || Object])
    ], AddbusinessPage);
    return AddbusinessPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=addbusiness.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogintwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signuptwo_signuptwo__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addbusiness_addbusiness__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgot_forgot__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reservations_reservations__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__getstart_getstart__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__terms_terms__ = __webpack_require__(74);
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
        //alert('rahul');
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
            this.fcm.getToken().then(function (token) {
                //                console.log('Tokenid-->' + token);
                var postdata = {
                    email: signindata.value.email,
                    password: signindata.value.password,
                    divice_token: token,
                    role: 'business'
                };
                console.log(postdata);
                var serialized = _this.appsetting.serializeObj(postdata);
                var Loading = _this.loadingCtrl.create({
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
            }, function (err) {
                console.log(err);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-logintwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/logintwo/logintwo.html"*/'<!--\n  Generated template for the LogintwoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n    <ion-navbar color="green">\n        <ion-title text-center>login</ion-title>\n    </ion-navbar>\n\n</ion-header>-->\n<ion-header>\n\n    <ion-toolbar color="green">\n        <ion-buttons start>\n            \n            <button ion-button icon-only (click)="getstart()">\n                    <ion-icon class="bckbtn" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Login</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div class="loginform formmain">\n        <p style="font-weight: 500;">Welcome to Melanin Enterprise. <br>We are glad that you are here!<br>Make yourself at home.</p>\n        <form [formGroup]="SigninForm" (submit)="Signin(SigninForm)">\n            <ion-list no-lines>\n\n                <ion-item>\n                    <ion-input type="email" placeholder="Email" formControlName="email" autocapitalize="off"></ion-input>\n                    <ion-icon class="iconinput" item-start><img src="assets/imgs/Generic.gif"></ion-icon>\n                    <span item-content *ngIf="!isValid(\'email\')" class="validationpop animated bounce">Invalid email</span>\n                </ion-item>\n\n\n\n                <ion-item>\n                    <ion-input type="{{type}}" placeholder="Password" formControlName="password"></ion-input>\n                    <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n                    <button item-end type="button" color="dark" (click)="showPassword()" ion-button icon-only clear>\n                        <ion-icon name="{{iconname}}" ></ion-icon>\n                    </button>\n                    <span item-content *ngIf="!isValid(\'password\')" class="validationpop animated bounce">Invalid Password</span>\n                </ion-item>\n\n                <button type="submit" class="btn1" ion-button color="green" block [disabled]="!SigninForm.valid">Login</button>\n                <button type="button" class="forgot" ion-button clear block color="dark" (click)="forgot()">Forgot Password?</button>\n                <h2 class="orstrip"><span style="font-weight: 600;">OR</span></h2>\n                <button (click)="Facebooklogin()" type="button" class="btn3" ion-button block >Login with facebook</button>\n            </ion-list>\n        </form>\n    </div>\n\n    <div class="haveacc">Don’t have an account? <span color="dark" (click)="signup()" style="font-weight: 600;">Sign Up</span></div>\n<!--    <div class="haveacc" (click)="term()">Terms and Conditions</div>-->\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/logintwo/logintwo.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_common__["a" /* Common */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__["a" /* FCM */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__["a" /* FCM */]) === "function" && _o || Object])
    ], LogintwoPage);
    return LogintwoPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=logintwo.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(13);
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
    function TermsPage(navCtrl, navParams, http, appsetting, common, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
        clearInterval(this.common.interval);
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
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'static/getstaticpagedata', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
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
        });
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/terms/terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>terms & conditions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="banner">\n<!--        <img [src]="terms?.pageimage" (load)="terms.loaded = true" [hidden]="!terms?.loaded" >-->\n<!--             <img height="100" width="100" src="assets/imgs/loader.gif" [hidden]="terms?.loaded">-->\n      </div>\n      <div class="contant-sec" padding>\n<!--        <h2>Dummy text of the printing</h2>-->\n<div class="pcontent" [innerHTML]="terms?.pagedata"></div></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__booknow_booknow__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_moment__);
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
 * Generated class for the ViewproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewproductPage = (function () {
    function ViewproductPage(navCtrl, navParams, socialSharing, toastCtrl, modalCtrl, ViewCtrl, appsetting, http, loadingCtrl, common, launchNavigator, geolocation, callNumber) {
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
        this.callNumber = callNumber;
        if (localStorage.getItem('CurrentUser')) {
            this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
            this.currentUser = JSON.parse(localStorage.getItem('CurrentUser'));
        }
        else {
            this.currentUser = '';
        }
        console.log(this.currentUser);
    }
    ViewproductPage.prototype.ionViewDidLoad = function () {
        // alert('updated df');
        var date = new Date();
        var today_date = new Date(__WEBPACK_IMPORTED_MODULE_12_moment__(date).format("YYYY-MM-DD") + "T" + "00:00:00.000Z");
        console.log('ionViewDidLoad ViewproductPage');
        console.log(this.navParams.get('restdata'));
        var resdata = this.navParams.get('restdata').business_data[0].opening_days_and_timings;
        if (this.navParams.get('restdata').business_data[0].business_phone_number) {
            var a = this.navParams.get('restdata').business_data[0].business_phone_number;
            console.log(typeof (a));
            console.log(a.toString());
            var mystring = a.toString();
            console.log(mystring.replace(/\D+/g, "").replace(/([0-9]{1,3})([0-9]{3})([0-9]{4}$)/gi, "($1)-$2-$3"));
            a = mystring.replace(/\D+/g, "").replace(/([0-9]{1,3})([0-9]{3})([0-9]{4}$)/gi, "($1)-$2-$3");
            console.log(a);
            this.navParams.get('restdata').business_data[0].business_phone_number = a;
        }
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
        this.navParams.get('restdata').business_data[0].opening_days_and_timings.forEach(function (value, key) {
            console.log(value);
            value.opening_time = __WEBPACK_IMPORTED_MODULE_12_moment__(value.opening_time, ["h:mm A"]).format("hh:mm A");
            value.closing_time = __WEBPACK_IMPORTED_MODULE_12_moment__(value.closing_time, ["h:mm A"]).format("hh:mm A");
            //            var dt = moment(value.closing_time, ["h:mm A"]).format("hh:mm A");
            //           console.log(dt);
        });
        console.log(this.restaurantdata);
    };
    /******** function used for social sharing *****************/
    ViewproductPage.prototype.socialsharing = function (name, address, image) {
        console.log(name);
        console.log(address + ',"Powered by Melanin Enterprise App" Download today from the App Store and Google Play');
        console.log(image);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            // Check if sharing via email is supported
            var message = address + ',"Powered by Melanin Enterprise App" Download today from the App Store and Google Play'; //'Amazing restaurant';
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
        if (localStorage.getItem('CurrentUser')) {
            var user = JSON.parse(localStorage.getItem('CurrentUser'));
            console.log(user._id);
            var options = this.appsetting.header();
            var postdata = {
                user_id: user._id,
                business_id: this.restaurantdata.business_data[0]._id,
                date: new Date().toISOString()
            };
            var serialized = this.appsetting.serializeObj(postdata);
            this.http.post(this.appsetting.url + 'checkin', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
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
        }
        else {
            this.common.presentAlert(' View detail', 'Login first to check in!');
        }
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
    ViewproductPage.prototype.DialNumber = function (phone) {
        this.callNumber.callNumber(phone, true).then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ViewproductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-viewproduct',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewproduct/viewproduct.html"*/'<!--\n  Generated template for the ViewproductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title text-center>View</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: #dee1e4;">\n  <div class="productslide">\n    <ion-slides pager>\n      <ion-slide *ngFor="let img of restaurantdata?.business_image">\n        <div class="imagebox">\n          <img [src]="img.business_image">\n        </div>\n      </ion-slide>\n<!--      <ion-slide *ngIf="restaurantdata?.business_image1">\n        <div class="imagebox">\n          <img [src]="restaurantdata?.business_image1">\n        </div>\n      </ion-slide>-->\n    </ion-slides>\n  </div>\n\n  <div class="product_content">\n    <ion-list>\n      <ion-item>\n        <h1>{{restaurantdata?.business_data[0].business_name}}</h1>\n        <p>{{restaurantdata?.business_data[0].sub_cat}}</p>\n        <h4 *ngIf="restaurantdata?.checkin"><span class="proicon"><img width="13px" src="assets/imgs/check.png"></span> {{restaurantdata?.checkin.length}} Check-Ins</h4>\n        <h4 *ngIf="!restaurantdata?.checkin"><span class="proicon"><img width="13px" src="assets/imgs/check.png"></span> 0 Check-Ins</h4>\n        <div item-end class="buttonright">\n          <button [disabled]="restaurantdata?.role == \'dummy\'" class="btneq" full ion-button icon-left color="green" (click)="bookModal()">\n<!--              <ion-icon><img width="16px" src="assets/imgs/book.png"></ion-icon>-->\n              Book Now</button>\n          <button class="btneq checkin" full ion-button icon-left light color="grey" (click)="CheckIn()">\n<!--              <ion-icon ><img width="16px" src="assets/imgs/checkin.png"></ion-icon>-->\n              Check In</button>\n        </div>\n      </ion-item>\n      <ion-item-divider color="light">Info</ion-item-divider>\n      <ion-item text-wrap>\n        <div class="contactbox">\n          <h4><img width="20px" src="assets/imgs/contactinfo.png"> Contact Info</h4>\n<!--          <p><img width="12px" src="assets/imgs/city.png"> 508 Virginia </p>-->\n          <p (click)="LaunchNavigator()"><img width="12px" src="assets/imgs/location.png"> {{restaurantdata?.business_data[0].address}} </p>\n          <p *ngIf="restaurantdata?.business_data[0].business_phone_number" (click)="DialNumber(restaurantdata?.business_data[0].business_phone_number)"><img width="12px" src="assets/imgs/phone.png"> {{ restaurantdata?.business_data[0].business_phone_number}}</p>\n        </div>\n        <div class="contactbox">\n          <h4><img width="20px" src="assets/imgs/website.png"> Website Info</h4>\n          <p *ngIf="restaurantdata?.business_data[0].website_url" style="font-size: 14px !important;" (click)="OpenWebsiteInfo(restaurantdata?.business_data[0].website_url)"> {{restaurantdata?.business_data[0].website_url}}</p>\n          </div>\n<!--          <div class="contactbox" style="padding-top: 7px;">\n          <h4><img width="20px" src="assets/imgs/website.png"> Social Info</h4>\n           <p *ngIf="restaurantdata?.business_data[0].facebook_link" (click)="OpenWebsiteInfo(restaurantdata?.business_data[0].facebook_link)"> {{restaurantdata?.business_data[0].facebook_link}}</p>\n          <p *ngIf="restaurantdata?.business_data[0].instagram_link" (click)="OpenWebsiteInfo(restaurantdata?.business_data[0].instagram_link)"> {{restaurantdata?.business_data[0].instagram_link}}</p>\n          <p *ngIf="restaurantdata?.business_data[0].twitter_link" (click)="OpenWebsiteInfo(restaurantdata?.business_data[0].twitter_link)"> {{restaurantdata?.business_data[0].twitter_link}}</p>\n        </div>-->\n      </ion-item>\n      <ion-item>\n          <button class="share" clear ion-button icon-left color="dark" (click)="LaunchNavigator()"><ion-icon ><img width="16px" src="assets/imgs/download.png"></ion-icon>Map view</button>\n        <button class="fav" clear ion-button icon-left color="dark" (click)="MarkAsFavourite(restaurantdata?.business_data[0]._id)">\n            <ion-icon *ngIf="restaurantdata?.fav == 0"><img width="16px" src="assets/imgs/fav.png"></ion-icon>\n            <ion-icon *ngIf="restaurantdata?.fav == 1"><img width="16px" src="assets/imgs/favactive.png"></ion-icon>\n            \n            Favorite</button>\n        <button class="share" clear ion-button icon-left color="dark" (click)="socialsharing(restaurantdata?.business_data[0].business_name,restaurantdata?.business_data[0].address,restaurantdata?.business_image[0])"><ion-icon ><img width="16px" src="assets/imgs/share.png"></ion-icon>Share</button>\n      </ion-item>\n      \n      <ion-item-divider color="light" *ngIf="(restaurantdata?.business_data[0].facebook_link != \'\') || (restaurantdata?.business_data[0].twitter_link != \'\') || (restaurantdata?.business_data[0].instagram_link != \'\')">Social Info</ion-item-divider>\n      <ion-list class="social">\n        <ion-item *ngIf="restaurantdata?.business_data[0].facebook_link" (click)="OpenWebsiteInfo(restaurantdata?.business_data[0].facebook_link)">\n          <ion-icon name="logo-facebook" item-start style=\'color: #315C96;\'></ion-icon>\n            {{restaurantdata?.business_data[0].facebook_link}}\n        </ion-item>\n          <ion-item *ngIf="restaurantdata?.business_data[0].twitter_link" (click)="OpenWebsiteInfo(restaurantdata?.business_data[0].twitter_link)">\n          <ion-icon name="logo-twitter" item-start style=\'color: #00A6EF;\'></ion-icon>\n             {{restaurantdata?.business_data[0].twitter_link}}\n        </ion-item>\n          <ion-item *ngIf="restaurantdata?.business_data[0].instagram_link" (click)="OpenWebsiteInfo(restaurantdata?.business_data[0].instagram_link)">\n              <ion-icon name="" item-start>\n                  <img width="25px" src="assets/imgs/insta.png" />\n              </ion-icon>\n             {{restaurantdata?.business_data[0].instagram_link}}\n        </ion-item>\n      </ion-list>\n      \n      <ion-item-divider color="light">HOURS OF OPERATION</ion-item-divider>\n      <ion-item text-wrap>\n          <div class="timesec" *ngIf="restaurantdata?.business_data[0].opening_days_and_timings.length>0">\n          <h4 *ngFor="let days of restaurantdata?.business_data[0].opening_days_and_timings"><span>{{days.day}}</span> {{days.opening_time}} to {{days.closing_time}} </h4>\n        </div>\n          <div class="timesec" *ngIf="restaurantdata?.business_data[0].opening_days_and_timings.length == 0">\n          <h4>Not added yet!</h4>\n        </div>\n      </ion-item>\n      <ion-item-divider *ngIf="(restaurantdata?.role == \'dummy\') && (restaurantdata?.Claimed_requests?.length == 0) && currentUser != \'\'" color="light">IS THIS YOUR BUSINESS?</ion-item-divider>\n      <ion-item text-wrap *ngIf="(restaurantdata?.role == \'dummy\') && (restaurantdata?.Claimed_requests?.length == 0) && currentUser != \'\'">\n        <p>Claim your business to respond to reviews and messages.\n        </p>\n        <button class="btneq" full ion-button color="green" (click)="ClaimYourBusiness(restaurantdata?.business_data[0]._id)">Claim this Business</button>\n      </ion-item>\n      <ion-item-divider color="light">Description</ion-item-divider>\n      <ion-item text-wrap>\n        <p [innerHTML]="restaurantdata?.business_data[0].business_description">\n        </p>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewproduct/viewproduct.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__["a" /* LaunchNavigator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__["a" /* LaunchNavigator */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__["a" /* CallNumber */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__["a" /* CallNumber */]) === "function" && _o || Object])
    ], ViewproductPage);
    return ViewproductPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=viewproduct.js.map

/***/ })

},[516]);
//# sourceMappingURL=main.js.map