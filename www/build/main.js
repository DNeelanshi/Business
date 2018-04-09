webpackJsonp([28],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appsetting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(188);
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

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(188);
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




/*********Native plugins *************/
//import { Geolocation } from '@ionic-native/geolocation';
/*
  Generated class for the Appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Common = (function () {
    function Common(http, alertCtrl, app) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.app = app;
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
    Common = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */]])
    ], Common);
    return Common;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getstart_getstart__ = __webpack_require__(40);
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
            cnewpassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        }, { validator: this.matchingPasswords('newpassword', 'cnewpassword') });
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
            selector: 'page-changepassword',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/changepassword/changepassword.html"*/'<!--\n  Generated template for the ChangepasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="green">\n        <ion-title>change password</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="chngpwd formmain">\n        <div class="image-wrapper">\n            <img src="assets/imgs/key.png">\n        </div>\n        <p>Set a new password.</p>\n        <form [formGroup]="ChangeForm" (submit)="Changepassword(ChangeForm)">\n            <ion-list no-lines>\n\n                <ion-item>\n                    <ion-input type="{{type}}" placeholder="Old Password" formControlName="oldpassword"></ion-input>\n                    <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n                    <span item-content *ngIf="!isValid(\'oldpassword\')" class="validationpop animated bounce">Password should at least 6 char.</span>\n                <button item-end type="button" color="dark" class="eyebutton" (click)="showPassword()" ion-button icon-only clear>\n                    <ion-icon name="{{iconname}}"></ion-icon>\n                </button>\n                </ion-item>\n                \n<ion-item>\n    <ion-input type="{{Ctype}}" placeholder="New Password" formControlName="newpassword" (input)="pass_strength(ChangeForm.controls.newpassword)"></ion-input>\n                    <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n                    <span item-content *ngIf="!isValid(\'newpassword\')" class="validationpop animated bounce">Password should at least 6 char.</span>\n                <button item-end type="button" color="dark" class="eyebutton" (click)="showCPassword()" ion-button icon-only clear>\n                        <ion-icon name="{{iconname1}}"></ion-icon>\n                    </button>\n                </ion-item>\n                \n<!--                    <div id="strength">\n                        <p class="strnth">Password strength:</p>\n                        <ul id="strengthBar">\n                            <li class="point" [style.background-color]="bar0"></li>\n                            <li class="point" [style.background-color]="bar1"></li>\n                            <li class="point" [style.background-color]="bar2"></li>\n                            <li class="point" [style.background-color]="bar3"></li>\n                            <li class="point" [style.background-color]="bar4"></li>\n                        </ul>\n                    </div>-->\n                    <ion-item>\n                        <ion-input type="{{Ctype1}}" placeholder="Confirm New Password" formControlName="cnewpassword"></ion-input>\n                        <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n                        <button item-end type="button" color="dark" class="eyebutton" (click)="showCPassword1()" ion-button icon-only clear>\n                        <ion-icon name="{{iconname2}}"></ion-icon>\n                    </button>\n                        <span item-content *ngIf="ChangeForm.hasError(\'mismatchedPasswords\')" class="validationpop animated bounce">Password mismatch</span>\n                    </ion-item>\n                    \n<!--                     <div class=\'form-text error\' color="danger" *ngIf="ChangeForm.controls.cpassword.touched">\n          <div *ngIf="ChangeForm.hasError(\'mismatchedPasswords\')">Passwords do not match.</div>\n        </div>-->\n                    \n                    <button type="submit" class="btn1" ion-button color="green" block [disabled]="!ChangeForm.valid">SAVE</button>\n                </ion-list>\n            </form>\n        </div>\n\n    </ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/changepassword/changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignuptwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logintwo_logintwo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addbusiness_addbusiness__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgot_forgot__ = __webpack_require__(39);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */]])
    ], SignuptwoPage);
    return SignuptwoPage;
}());

//# sourceMappingURL=signuptwo.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_forgot__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__ = __webpack_require__(50);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_8__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__["a" /* FCM */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(11);
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
            if (this.filterd.online == 1) {
                this.filterd.online = "yes";
            }
            else {
                this.filterd.online = "no";
            }
            this.FilterForm.patchValue({
                services: this.filterd.services,
                range: this.filterd.range,
                zipcode: this.filterd.zipcode,
                online: this.filterd.online
            });
        }
    };
    FilterPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.FilterForm = this.formBuilder.group({
            services: [''],
            range: [''],
            zipcode: [''],
            //            city: [''],
            online: [''],
        });
    };
    FilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FilterPage.prototype.Search = function (filterformdata) {
        console.log(filterformdata.value);
        if (filterformdata.value.online) {
            if (filterformdata.value.online == "yes") {
                filterformdata.value.online = 1;
            }
            else {
                filterformdata.value.online = 0;
            }
        }
        if (filterformdata.value.range != undefined) {
            filterformdata.value.range = filterformdata.value.range;
        }
        else {
            filterformdata.value.range = '';
        }
        var options = this.appsetting.header();
        this.viewCtrl.dismiss({ searchedlist: filterformdata.value, type: 'search' });
        localStorage.setItem('filterdata', JSON.stringify(filterformdata.value));
    };
    FilterPage.prototype.Reset = function () {
        this.viewCtrl.dismiss({ searchedlist: '', type: 'reset' });
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-filter',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/filter/filter.html"*/'<!--\n  Generated template for the FilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n   \n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-buttons left (click)="dismiss()">\n    <button ion-button clear>\n      <ion-icon ion-icon icon-only name="close" style="font-size:30px; font-weight: 700;"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title text-center>filter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<form [formGroup]="FilterForm" (submit)="Search(FilterForm)" style="height: 100%; margin-top: 44px;">\n<ion-content padding>\n  <div class="loginform">\n \n      <ion-list no-lines>\n        <div class="inputouter">\n          <h2>Services</h2>\n          <ion-item>\n            <ion-select formControlName="services">\n              <ion-option selected *ngFor="let service of services" value="{{service._id}}">{{service.sub_category_title}}</ion-option>\n<!--              <ion-option>Option 1</ion-option>\n              <ion-option>Option 2</ion-option>-->\n            </ion-select>\n          </ion-item>\n        </div>\n\n        <div class="inputouter">\n          <h2>Miles</h2>\n          <ion-item>\n            <ion-range min="1" step="1" max="5" formControlName="range" [(ngModel)]="range" name="range">\n               <p range-left *ngIf="!range">0 miles</p>\n               <p range-left *ngIf="range">{{range}} miles</p>\n               <p range-right>5 miles</p>\n            </ion-range>\n          </ion-item>\n        </div>\n\n        <div class="inputouter">\n          <h2>Zip Code</h2>\n          <ion-item>\n            <ion-input type="tel" placeholder="Zip Code" formControlName="zipcode"></ion-input>\n          </ion-item>\n        </div>\n\n<!--        <div class="inputouter">\n          <h2>City/State</h2>\n          <ion-item>\n            <ion-input type="text" placeholder="City" formControlName="city"></ion-input>\n          </ion-item>\n        </div>-->\n\n\n        <div class="inputouter">\n          <h2>Online</h2>\n         \n            <ion-list radio-group formControlName="online">\n              <ion-item class="rdo" style="padding-left: 25px !important;">\n               \n                <ion-radio checked="yes" value="yes"></ion-radio>\n                <ion-label>Yes</ion-label>\n              </ion-item>\n            \n              <ion-item class="rdo" style="padding-left: 25px !important;">\n                \n                <ion-radio value="no"></ion-radio>\n                <ion-label>No</ion-label>\n              </ion-item>\n            </ion-list>\n         \n        </div>\n      </ion-list>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <button type="submit" ion-button color="green" class="btn2">Search</button>\n  <button type="button" ion-button color="green" class="btn2" (click)="Reset()">Reset</button>\n</ion-footer>\n           </form>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/filter/filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(11);
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
        console.log(MakeReview.value);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            var options = this.appsetting.header();
            var postdata = {};
            var serialized = this.appsetting.serializeObj(postdata);
            //            var Loading = this.loadingCtrl.create({
            //                spinner: 'bubbles',
            //                content: 'Loading...'
            //            });
            //            Loading.present().then(() => {
            //                this.http.post(this.appsetting.url + 'users/loginuser', serialized, options).map(res => res.json()).subscribe(response => {
            //                    console.log(response);
            //                    Loading.dismiss();
            //                })
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
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-review',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/review/review.html"*/'<!--\n  Generated template for the ReviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title>Write Review</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="ReviewForm" (submit)="MakeReview(ReviewForm)">\n  <h2>Please rate your experience</h2>\n  <rating readOnly="false" max="5" emptyStarIconName="star-outline" starIconName="star" formControlName="rating"\n        nullable="false" (ngModelChange)="onModelChange($event)">\n</rating>\n<!--  <ul>\n    <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n    <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n  </ul>-->\n  <ion-item>\n    <ion-textarea placeholder="Share your review" formControlName="comment"></ion-textarea>\n  </ion-item>\n  <div class="btnsec">\n    <button type="submit" ion-button color="green" class="btn1" [disabled]="!ReviewForm.valid">Post Review</button>\n  </div>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/review/review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareernetworkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], CareernetworkPage);
    return CareernetworkPage;
}());

//# sourceMappingURL=careernetwork.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofiletwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword_changepassword__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(29);
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
            name: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]],
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
                    name: name,
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
        console.log(profiledata.value.name.indexOf(' '));
        if (profiledata.value.name.indexOf(' ') != -1) {
            console.log('if');
            name = profiledata.value.name.split(' ');
            postdata = {
                user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                firstname: name[0],
                lastname: name[1],
                phone_number: profiledata.value.phone
            };
        }
        else {
            console.log('else');
            postdata = {
                user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                firstname: profiledata.value.name,
                lastname: '.',
                phone_number: profiledata.value.phone
            };
        }
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
            selector: 'page-editprofiletwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/editprofiletwo/editprofiletwo.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>edit profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<form [formGroup]="Editprofile" style="height:100%; padding-top: 56px;">\n<ion-content>\n    \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n     <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n    \n  <div class="head-sec">\n    <div class="image-wrapper">\n      <img [src]="base64Image">\n    </div>\n    <h2 (click)="presentActionSheet()">EDIT</h2>\n  </div>\n    \n  <div class="input-sec">\n    <ion-list>\n\n      <ion-item>\n          <ion-label stacked>Name</ion-label>\n          <ion-input type="text" placeholder="Kriston Peeter" formControlName="name"></ion-input>\n        </ion-item>\n      <span *ngIf="!isValid(\'name\')" class="validationpop animated bounce">Name required.</span>\n      \n        <ion-item>\n          <ion-label stacked>Email</ion-label>\n          <ion-input type="email" placeholder="kristonpeeter@yahoo.com" formControlName="email" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Phone Number</ion-label>\n          <ion-input type="tel" placeholder="XXX-XXX-XXXX" formControlName="phone" maxLength="12"></ion-input>\n        </ion-item>\n        <h2>User Setting</h2>\n        <ion-item *ngIf=\'profiledata?.regitration_type == "simple_registarion"\' (click)="changepwd()">\n          <p>Change Password</p>\n          <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n        \n\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <button type="submit" (click)="editProfile(Editprofile)" ion-button full color="green" class="btn2">SAVE</button>\n</ion-footer>\n</form> \n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/editprofiletwo/editprofiletwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], EditprofiletwoPage);
    return EditprofiletwoPage;
}());

//# sourceMappingURL=editprofiletwo.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditbusinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reservations_reservations__ = __webpack_require__(38);
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditbusinessPage.prototype, "mapElement", void 0);
    EditbusinessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editbusiness',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/editbusiness/editbusiness.html"*/'<!--\n  Generated template for the EditbusinessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="green">\n        <button ion-button menuToggle style="display:block !important;">\n            <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n        <ion-title>Edit business</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="EditbusinessForm" (submit)="EditBusiness(EditbusinessForm)">\n        <ion-list no-lines>\n            <div class="outersec">\n                <ion-item>\n                    <ion-input type="text" disabled placeholder="Business Name" formControlName="businessname" ></ion-input>\n                </ion-item>\n                <img src="assets/imgs/editname.png">\n            </div>\n\n            <!--        <ion-item>\n                      <ion-label>City</ion-label>\n                      <ion-select>\n                        <ion-option value="1">City 1</ion-option>\n                        <ion-option value="2">City 2</ion-option>\n                        <ion-option value="3">City 3</ion-option>\n                        <ion-option value="4">City 4</ion-option>\n                      </ion-select>\n                    </ion-item>-->\n\n            <ion-input type="hidden" disabled  formControlName="businesstype" ></ion-input>\n\n            <ion-item>\n                <ion-input type="text" placeholder="Phone Number" formControlName="phone"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-input type="text" placeholder="Address" formControlName="address" [(ngModel)]="autocomplete.query" (input)="updateSearch()"></ion-input>\n            </ion-item>\n            <div *ngIf="autocompleteItems != \'\'" class="suggestion">\n                <ion-label *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">{{ item }}</ion-label>\n            </div>\n            <ion-item>\n                \n                <ion-input type="text" placeholder="Zip code" formControlName="zipcode"></ion-input>\n            </ion-item>\n            <ion-item class="area">\n                <ion-textarea  placeholder="Description" formControlName="description"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Category</ion-label>\n                <ion-select class="catoption" formControlName="category" (ionChange)="selectedCat($event)">\n                    <ion-option *ngFor="let cat of category" value ="{{cat._id}}">{{cat.title}}\n                        <ion-input type="hidden" [(ngModel)]="data.category_title" formControlName="category_id"></ion-input>\n                    </ion-option>\n                </ion-select>\n                <!--                <ion-select formControlName="category" [(ngModel)]="data.category" (ionChange)="selectedCat($event)">\n                                    <ion-option *ngFor="let cat of category" value ="{{cat._id}}">{{cat.title}}\n                                        <ion-input type="hidden" [(ngModel)]="data.category_id" formControlName="category_id"></ion-input></ion-option>\n                                </ion-select>-->\n            </ion-item>\n\n            <h2>Add opening and closing hours.</h2>\n\n            <ion-item>\n                <ion-label>Select Day</ion-label>\n                <ion-select formControlName="days" [(ngModel)]="data.days">\n                    <ion-option *ngFor="let day of days;let i = index">{{day}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-grid class="paddingnone">\n                <ion-row>\n                    <ion-col col-5 class="padding-left">\n                        <ion-item>\n                            <ion-datetime placeholder="Opening Hours" displayFormat="HH:MM A" [(ngModel)]="data.openinghours" formControlName="openinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-5 class="paddingtopbtm">\n                        <ion-item>\n                            <ion-datetime placeholder="Closing Hours" displayFormat="HH:MM A" [(ngModel)]="data.closinghours" formControlName="closinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col> \n                    <ion-col col-2 class="padding-right">\n                        <ion-item class="addbtn">\n                            <button type="button" ion-button clear color="gray" (click)="closingtime(EditbusinessForm)"><ion-icon name="add"></ion-icon></button>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n            <div class="tagsec" *ngIf="daytime.length>0">\n                <div class="inner-sec" *ngFor="let d of daytime;let i = index">\n                     <p style="margin-bottom:1px;">{{d.day}}</p>\n                    <p><span>{{d.opening_time}}</span> to <span>{{d.closing_time}}</span></p>\n                    <ion-icon name="close" (click)="DeleteTimes(d,i)"></ion-icon>\n                </div>\n            </div>\n            <ion-item *ngIf="services">\n                <ion-label>Services</ion-label>\n                <ion-select class="catoption" formControlName="services" (ionChange)="selectedService($event)">\n                    <ion-option *ngFor="let service of services" value="{{service._id}}">{{service.sub_category_title}}\n                        <!--                        <ion-input type="hidden" [(ngModel)]="data.service_title" formControlName="services_title"></ion-input>-->\n                </ion-option>\n            </ion-select>\n        </ion-item>\n        <!--            <ion-item *ngIf="services">\n                        <ion-label>Services</ion-label>\n                        <ion-select formControlName="services" [(ngModel)]="data.service">\n                            <ion-option *ngFor="let service of services">{{service.sub_category_title}}\n                                <ion-input type="hidden" value="{{service._id}}" formControlName="services_id"></ion-input>\n                            </ion-option>\n                        </ion-select>\n                    </ion-item>-->\n\n        <h2 *ngIf="businessdata?.business_type == 1 ||businessdata?.business_type == 2">Social Links</h2>\n        <ion-item *ngIf="businessdata?.business_type == 1 ||businessdata?.business_type == 2">\n            <img src="assets/imgs/instgrm.png" item-start class="social">\n            <ion-input type="text" placeholder="https://www.instagram.com/" formControlName="instagramlink"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="businessdata?.business_type == 1 ||businessdata?.business_type == 2">\n            <img src="assets/imgs/fb.png" item-start class="social">\n            <ion-input type="text" placeholder="https://www.facebook.com/" formControlName="facebooklink"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="businessdata?.business_type == 1 ||businessdata?.business_type == 2">\n            <img src="assets/imgs/twtr.png" item-start class="social">\n            <ion-input type="text" placeholder="https://www.twitter.com/" formControlName="twitterlink"></ion-input>\n        </ion-item>\n        <ion-item>\n            \n            <ion-input type="text" placeholder="https://www.websitename.com/" formControlName="websiteurl"></ion-input>\n        </ion-item>\n\n        <h2>Is this a veteran owned business?</h2>\n\n        <ion-list radio-group style="margin:0 !important;" [(ngModel)]="data.veteran" formControlName="veteranowned">\n            <ion-item class="rdo" style="padding-left: 25px !important;">\n                <ion-radio value="true"></ion-radio>\n                <ion-label>Yes</ion-label>\n            </ion-item>\n            <ion-item class="rdo" style="padding-left: 25px !important;">\n                <ion-radio value="false"></ion-radio>\n                <ion-label>No</ion-label>\n            </ion-item>\n        </ion-list>\n\n        <h2>Do you own an online marketplace?</h2>\n\n        <ion-list radio-group style="margin:0 !important;" [(ngModel)]="data.marketplace" formControlName="onlinemarketplace">\n            <ion-item class="rdo" style="padding-left: 25px !important;">\n                <ion-radio value="true"></ion-radio>\n                <ion-label>Yes</ion-label>\n            </ion-item>\n\n            <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                <ion-radio value="false"></ion-radio>\n                <ion-label>No</ion-label>\n            </ion-item>\n        </ion-list>\n\n        <h2>Do you accept?</h2>\n\n        <ion-list style="margin:0 !important;">\n            <ion-item class="chck">\n                <ion-checkbox formControlName="accept" style="margin-right: 9px !important;"></ion-checkbox>\n                <ion-label>Appointments</ion-label>\n            </ion-item>\n\n            <ion-item class="chck">\n\n                <ion-checkbox formControlName="reservation" style="margin-right: 9px !important;"></ion-checkbox>\n                <ion-label>Reservations</ion-label>\n            </ion-item>\n        </ion-list>\n    </ion-list>\n    <div class="photosec">\n        <h2 style="position:relative;">Add Photo <span>( Multiple photos )</span>\n            <button type="button" *ngIf="bit<=4" ion-button color="green" (click)="presentActionSheet()"><ion-icon name="add"></ion-icon></button>\n        </h2>\n        <ion-grid class="paddingnone" *ngIf="base64Image">\n            <ion-row>\n                <ion-col col-4 *ngFor="let img of base64Image;let i = index">\n                         <div class="image-wrapper">\n                        <img src="{{img.business_image}}">\n                        <img src="assets/imgs/crosimg.png" class="delete-img" (click)="DeleteImage(i,img._id)">\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <!--        <h2 style="position:relative;">Add Logo <span>( Single photo )</span>\n                    <button *ngIf="businesslogo == null" type="button" ion-button color="green" (click)="presentActionSheet1()"><ion-icon name="add"></ion-icon></button>\n                </h2>\n                <ion-grid class="paddingnone" *ngIf="businesslogo != null">\n                          <ion-row>\n                        <ion-col col-4>\n                            <div class="image-wrapper">\n                                <img src="{{businesslogo}}">\n                                <img src="assets/imgs/crosimg.png" class="delete-img" (click)="DeleteLogo">\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>-->\n        <div class="btnsec">\n            <button type="submit" ion-button color="green" full class="btn1">SAVE</button>\n        </div>\n    </div>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/editbusiness/editbusiness.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], EditbusinessPage);
    return EditbusinessPage;
}());

//# sourceMappingURL=editbusiness.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
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
    function HistoryPage(navCtrl, navParams, appsetting, http, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.common = common;
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
        this.http.post(this.appsetting.url + 'orders/getoldreservation ', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                _this.historydata = response.data;
                _this.totalpageno = response.page;
            }
            else {
                _this.common.presentAlert('History', 'No data found!');
            }
        });
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
            selector: 'page-history',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>history</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor="let history of historydata">\n          <ion-thumbnail item-start>\n            <img [src]="history.order_data[0].business_image[0].business_image">\n          </ion-thumbnail>\n          <h2>{{history.order_data[0].business_data[0].business_name}}</h2>\n          <p>{{history.order_data[0].business_data[0].sub_cat}}</p>\n          <ul>\n            <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n            <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n            <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n            <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n            <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n          </ul>\n          <button class="btneq" ion-button color="yellow" >Edit Review</button>\n          <p>{{history.order_data[0].business_data[0].business_description}}</p>\n          <p><span>{{history.order_data[0].business_data[0].updated_at | date}}</span> <span class="time">{{history.order_data[0].business_data[0].updated_at | date:\'shortTime\'}}</span></p>\n        </ion-item>\n\n<!--        <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/imgs/img1.jpg">\n            </ion-thumbnail>\n            <h2>Sam\'s Auto Repair</h2>\n            <p>Auto Repair</p>\n            <ul>\n              <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n              <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n            </ul>\n            <button class="btneq" ion-button color="yellow" >Edit Review</button>\n            <p>Lorem Ipsum available, but the majority have suffered</p>\n            <p><span>15 nov 2017</span> <span class="time">20:15 PM</span></p>\n          </ion-item>\n\n          <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/img1.jpg">\n              </ion-thumbnail>\n              <h2>Sam\'s Auto Repair</h2>\n              <p>Auto Repair</p>\n              <ul>\n                <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n                <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n                <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n                <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n                <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n              </ul>\n              <button class="btneq" ion-button color="yellow" >Edit Review</button>\n              <p>Lorem Ipsum available, but the majority have suffered</p>\n              <p><span>15 nov 2017</span> <span class="time">20:15 PM</span></p>\n            </ion-item>\n\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="assets/imgs/img1.jpg">\n                </ion-thumbnail>\n                <h2>Sam\'s Auto Repair</h2>\n                <p>Auto Repair</p>\n                <ul>\n                  <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n                  <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n                  <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n                  <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n                  <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n                </ul>\n                <button class="btneq" ion-button color="yellow" >Edit Review</button>\n                <p>Lorem Ipsum available, but the majority have suffered</p>\n                <p><span>15 nov 2017</span> <span class="time">20:15 PM</span></p>\n              </ion-item>\n\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="assets/imgs/img1.jpg">\n                  </ion-thumbnail>\n                  <h2>Sam\'s Auto Repair</h2>\n                  <p>Auto Repair</p>\n                  <ul>\n                    <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n                    <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n                    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n                    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n                    <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n                  </ul>\n                  <button class="btneq" ion-button color="yellow" >Edit Review</button>\n                  <p>Lorem Ipsum available, but the majority have suffered</p>\n                  <p><span>15 nov 2017</span> <span class="time">20:15 PM</span></p>\n                </ion-item>-->\n\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorytwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */]])
    ], HistorytwoPage);
    return HistorytwoPage;
}());

//# sourceMappingURL=historytwo.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewartistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], NewartistPage);
    return NewartistPage;
}());

//# sourceMappingURL=newartist.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
    function PrivacyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrivacyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacyPage');
    };
    PrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-privacy',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/privacy/privacy.html"*/'<!--\n  Generated template for the PrivacyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>Privacy Policy</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="banner">\n    <img src="assets/imgs/termsbanner.png">\n  </div>\n  <div class="contant-sec" padding>\n    <h2>Dummy text of the printing</h2>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/privacy/privacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealtalkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the RealtalkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RealtalkPage = (function () {
    function RealtalkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RealtalkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RealtalkPage');
    };
    RealtalkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-realtalk',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/realtalk/realtalk.html"*/'<!--\n  Generated template for the RealtalkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>realtalk!</ion-title>\n  </ion-navbar>\n  <div class="segment-sec" color="green">\n      <ion-segment [(ngModel)]="pet">\n          <ion-segment-button value="ourtalk">\n            Ourtalk\n          </ion-segment-button>\n          <ion-segment-button value="mytalk">\n            Mytalk\n          </ion-segment-button>\n          <ion-segment-button value="newtalk">\n            Newtalk\n          </ion-segment-button>\n        </ion-segment>\n  </div>\n\n</ion-header>\n\n\n<ion-content >\n    <div [ngSwitch]="pet">\n        <ion-list *ngSwitchCase="\'ourtalk\'">\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/imgs/talk.png">\n            </ion-thumbnail>\n            <h2>Best Pickup lines </h2>\n            <p>By Anima</p>\n            <p>2 Friends</p>\n            <p><ion-icon name="star-outline" color="gray"></ion-icon>1 Review</p>\n          </ion-item>\n\n          <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/talk.png">\n              </ion-thumbnail>\n              <h2>Best Pickup lines </h2>\n              <p>By Anima</p>\n              <p>2 Friends</p>\n              <p><ion-icon name="star-outline" color="gray"></ion-icon>1 Review</p>\n            </ion-item>\n\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="assets/imgs/talk.png">\n                </ion-thumbnail>\n                <h2>Best Pickup lines </h2>\n                <p>By Anima</p>\n                <p>2 Friends</p>\n                <p><ion-icon name="star-outline" color="gray"></ion-icon>1 Review</p>\n              </ion-item>\n\n        </ion-list>\n      \n        <ion-list *ngSwitchCase="\'mytalk\'" class="mytlk">\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/imgs/talk.png">\n            </ion-thumbnail>\n            <h2>Topic Name</h2>\n            <p>Manhattan, New York, NY</p>\n            <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>1 Comment</p>\n            <p><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>2days ago</p>\n          </ion-item>\n\n          <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/talk.png">\n              </ion-thumbnail>\n              <h2>Topic Name</h2>\n              <p>Manhattan, New York, NY</p>\n              <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>1 Comment</p>\n              <p><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>2days ago</p>\n            </ion-item>\n\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="assets/imgs/talk.png">\n                </ion-thumbnail>\n                <h2>Topic Name</h2>\n                <p>Manhattan, New York, NY</p>\n                <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>1 Comment</p>\n                <p><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>2days ago</p>\n              </ion-item>\n\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="assets/imgs/talk.png">\n                  </ion-thumbnail>\n                  <h2>Topic Name</h2>\n                  <p>Manhattan, New York, NY</p>\n                  <p><ion-icon><img src="assets/imgs/chat.png"></ion-icon>1 Comment</p>\n                  <p><ion-icon><img src="assets/imgs/watch.png" style="margin:0;"></ion-icon>2days ago</p>\n                </ion-item>\n\n        </ion-list>\n\n        <div *ngSwitchCase="\'newtalk\'" class="newtalk" padding>\n          <h2 class="heading">Start a new talk </h2>\n          <ion-list no-lines no-padding>\n              <h2>Topic Name</h2>\n              <ion-item>               \n                  <ion-input type="text" ></ion-input>\n              </ion-item>\n              <h2>Location</h2>\n              <ion-item>               \n                  <ion-input type="text" placeholder="Enter your location"></ion-input>\n              </ion-item>\n\n              <ion-list radio-group class="category">\n                  <h2>Category</h2>                \n                  <ion-item>\n                    <ion-label>Lorem Ipsum</ion-label>\n                    <ion-radio  value="1"></ion-radio>\n                  </ion-item>\n                \n                  <ion-item>\n                    <ion-label>Lorem Ipsum</ion-label>\n                    <ion-radio value="2"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Lorem Ipsum</ion-label>\n                    <ion-radio value="3"></ion-radio>\n                  </ion-item>\n\n                    <ion-item>\n                      <ion-label>Lorem Ipsum</ion-label>\n                      <ion-radio checked="true" value="4"></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label>Lorem Ipsum</ion-label>\n                      <ion-radio value="5"></ion-radio>\n                    </ion-item>\n\n                </ion-list>\n                <h2>Message</h2>\n                <ion-item>\n                  <ion-textarea placeholder=""></ion-textarea>\n                </ion-item>\n          </ion-list>\n          <div class="btn-sec">\n            <button ion-button color="green" class="btn1">Post</button>\n            <button ion-button clear color="gray" class="btn1">Cancel</button>\n          </div>\n        </div>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/realtalk/realtalk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], RealtalkPage);
    return RealtalkPage;
}());

//# sourceMappingURL=realtalk.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reviews2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
    function Reviews2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Reviews2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Reviews2Page');
    };
    Reviews2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reviews2',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/reviews2/reviews2.html"*/'<!--\n  Generated template for the Reviews2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>Mobile Service</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="image-wrapper">\n    <img src="assets/imgs/reviewbanner.png">\n  </div>\n  <div class="content-sec" padding>\n    <div class="top-sec" >\n      <h2>Mobile Service</h2>\n      <p>Lorem Ipsum is simply dummy text of<br>the printing and industry</p>\n      <ul>\n          <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n          <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n          <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n          <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n          <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n        </ul>\n        <p class="revw">Reviews 1,205</p>\n    </div>\n    <ion-list no-lines  class="bottom-sec">\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/imgs/talk.png">\n          </ion-avatar>\n          <h2>Austin Robertson<span>1 Day ago</span></h2>\n          <ul style="margin-top:0 !important;">\n              <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n              <li> <ion-icon name="star" color="yellow" class="actv"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n              <li> <ion-icon name="star-outline" color="gray"></ion-icon></li>\n            </ul>\n            <p class="revw" style="line-height: 17px !important; margin-top:0 !important;">Rating</p>\n          <p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.</p>\n          <p class="reply"><img src="assets/imgs/reply.png">Reply</p>\n          <ion-item >\n            <ion-textarea placeholder=""></ion-textarea>\n          </ion-item>\n          <div class="btnsec">\n            <button ion-button color="green" class="btn1">POST</button>\n          </div>\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/reviews2/reviews2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], Reviews2Page);
    return Reviews2Page;
}());

//# sourceMappingURL=reviews2.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(10);
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
        this.terms = [];
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
        var options = this.appsetting.header();
        var postdata = {
            rating: this.terms,
        };
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post('http://rakesh.crystalbiltech.com/grouptrip/api/galleries/additineraryy', postdata, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
        });
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/terms/terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>terms & conditions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="banner">\n        <img src="assets/imgs/termsbanner.png">\n      </div>\n      <div class="contant-sec" padding>\n        <h2>Dummy text of the printing</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy</p>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewreservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(11);
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
            selector: 'page-viewreservation',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewreservation/viewreservation.html"*/'<!--\n  Generated template for the ViewreservationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green"> \n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>view reservation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n  <ion-list *ngIf="reservations">\n      \n        <ion-item *ngFor="let reservation of reservations">\n            <ion-thumbnail item-start>\n              <img *ngIf="reservation?.order_data[0].profile_pic" [src]="reservation?.order_data[0].profile_pic">\n              <img *ngIf="!reservation?.order_data[0].profile_pic" src="assets/imgs/profile.png">\n            </ion-thumbnail>\n          <h2>{{reservation?.order_data[0].firstname}} {{reservation?.order_data[0].lastname}}</h2>\n          <p>Special Food</p>\n          <div class="left">\n            <p>Booking Date</p>\n            <p>{{reservation?.orderstart | date}}</p>\n          </div>\n          <div class="right">\n            <p>Booking Time</p>\n            <p>{{reservation?.orderstart | date:\'shortTime\'}}</p>\n          </div>\n        </ion-item>\n      \n    </ion-list>\n<ion-list *ngIf="!reservations">\n    <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n          <img style="width:200px;margin: auto;display: block;" src="assets/imgs/sorry.png">\n          <span> Looks like we couldn\'t find any reservations!</span>\n    </div>\n    </ion-list>\n<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewreservation/viewreservation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */]])
    ], ViewreservationPage);
    return ViewreservationPage;
}());

//# sourceMappingURL=viewreservation.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewfavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewproduct_viewproduct__ = __webpack_require__(64);
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
    function ViewfavoritesPage(navCtrl, navParams, appsetting, http, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.common = common;
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
        this.http.post(this.appsetting.url + 'user/get_favarite_business', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                _this.favouritelist = response.data;
                console.log(_this.favouritelist.length);
            }
            else {
                //this.common.presentAlert('Book now', 'Something went wrong!');
            }
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */]])
    ], ViewfavoritesPage);
    return ViewfavoritesPage;
}());

//# sourceMappingURL=viewfavorites.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewreservationtwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(11);
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
    function ViewreservationtwoPage(navCtrl, navParams, appsetting, http, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.common = common;
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
        this.http.post(this.appsetting.url + 'orders/getreservation', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                _this.reservations = response.data;
                console.log(response.page);
                _this.totalpageno = response.page;
            }
            else {
                //this.common.presentAlert('Book now', 'Something went wrong!');
            }
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */]])
    ], ViewreservationtwoPage);
    return ViewreservationtwoPage;
}());

//# sourceMappingURL=viewreservationtwo.js.map

/***/ }),

/***/ 145:
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
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addbusiness/addbusiness.module": [
		436,
		27
	],
	"../pages/booknow/booknow.module": [
		439,
		26
	],
	"../pages/careernetwork/careernetwork.module": [
		437,
		25
	],
	"../pages/changepassword/changepassword.module": [
		438,
		24
	],
	"../pages/editbusiness/editbusiness.module": [
		442,
		23
	],
	"../pages/editprofile/editprofile.module": [
		441,
		0
	],
	"../pages/editprofiletwo/editprofiletwo.module": [
		440,
		22
	],
	"../pages/filter/filter.module": [
		443,
		21
	],
	"../pages/forgot/forgot.module": [
		444,
		20
	],
	"../pages/forgottwo/forgottwo.module": [
		445,
		19
	],
	"../pages/getstart/getstart.module": [
		447,
		18
	],
	"../pages/history/history.module": [
		446,
		17
	],
	"../pages/historytwo/historytwo.module": [
		448,
		16
	],
	"../pages/login/login.module": [
		449,
		15
	],
	"../pages/logintwo/logintwo.module": [
		452,
		14
	],
	"../pages/newartist/newartist.module": [
		450,
		13
	],
	"../pages/privacy/privacy.module": [
		451,
		12
	],
	"../pages/realtalk/realtalk.module": [
		453,
		11
	],
	"../pages/reservations/reservations.module": [
		455,
		10
	],
	"../pages/review/review.module": [
		456,
		9
	],
	"../pages/reviews2/reviews2.module": [
		454,
		8
	],
	"../pages/signup/signup.module": [
		457,
		7
	],
	"../pages/signuptwo/signuptwo.module": [
		458,
		6
	],
	"../pages/terms/terms.module": [
		459,
		5
	],
	"../pages/viewfavorites/viewfavorites.module": [
		462,
		4
	],
	"../pages/viewproduct/viewproduct.module": [
		460,
		3
	],
	"../pages/viewreservation/viewreservation.module": [
		461,
		2
	],
	"../pages/viewreservationtwo/viewreservationtwo.module": [
		463,
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
webpackAsyncContext.id = 187;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewproduct_viewproduct__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__booknow_booknow__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_review__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(309);
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
    function HomePage(navCtrl, modalCtrl, ViewCtrl, socialSharing, loadingCtrl, common, toastCtrl, appsetting, http, zone, geolocation) {
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
        this.pageno = 1;
        this.restaurantlist = [];
        this.searchQuery = '';
        this.autocomplete = {}; //variable used for autocomplete on address field
        this.service = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.subcat = [];
        this.premiumBusiness = [];
        this.fav = 0;
        console.log('rahul');
        console.log(JSON.parse(localStorage.getItem('CurrentUser')));
        this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
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
        this.currentLocation();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        //alert('ionViewDidLoad');
        console.log((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString());
        this.getSubCatList();
        console.log('ionViewDidLoad HomePage');
        this.Getlist(1, 30.723839099999996, 76.8465082);
        this.latitude = 30.723839099999996;
        this.longitude = 76.8465082;
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
        this.ionViewDidLoad();
    };
    /****** functions used for getlist of restaurants by default when user visit on page ************/
    HomePage.prototype.Getlist = function (pageno, lat, long) {
        var _this = this;
        this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
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
                    //this.geolocation.getCurrentPosition().then((resp) => {
                    // alert('here');
                    _this.restaurantlist = [];
                    temp.premiumBusiness = [];
                    //                        console.log(resp.coords.latitude);
                    //                        console.log(resp.coords.longitude);
                    for (var i = 0; i < response.data.length; i++) {
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
                        value.business_data[0].distance = temp.common.distance(lat, long, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K');
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
                                _this.restaurantlist = null;
                                _this.geolocation.getCurrentPosition().then(function (resp) {
                                    console.log(resp.coords.latitude);
                                    console.log(resp.coords.longitude);
                                    response.data.forEach(function (value, key) {
                                        console.log(value.business_data[0].location.coordinates[1]);
                                        value.business_data[0].distance = temp.common.distance(resp.coords.latitude, resp.coords.longitude, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K');
                                    });
                                }).catch(function (error) {
                                    console.log('Error getting location', error);
                                });
                                _this.restaurantlist = response.data;
                            }
                            else {
                                _this.restaurantlist = response.data;
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
            console.log(_this.modaldata);
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
        this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
        console.log(id);
        var temp = this;
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
                            //value.business_data[0].distance = temp.common.distance(resp.coords.latitude, resp.coords.longitude, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K')
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
    HomePage.prototype.view = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__review_review__["a" /* ReviewPage */]);
    };
    /*********** function to favourite a restaurant *******************/
    HomePage.prototype.MarkAsFavourite = function (businessID) {
        var _this = this;
        console.log('MarkAsFavourite function');
        console.log(businessID);
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        var options = this.appsetting.header();
        var postdata = {
            user_id: user._id,
            favorite_business_id: businessID
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'user/add_to_favarite', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                localStorage.setItem('CurrentUser', JSON.stringify(response.data[0]));
                _this.Getlist(_this.pageno, _this.latitude, _this.longitude);
            }
            else {
                _this.http.post(_this.appsetting.url + 'user/delete_favarite_business ', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    if (response.status == true) {
                        localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                        _this.Getlist(_this.pageno, _this.latitude, _this.longitude);
                    }
                });
            }
        });
    };
    /****** functions used only for getdata of restaurants when infinite scroll hit ************/
    HomePage.prototype.Getdata = function (pageno, lat, long) {
        var _this = this;
        this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
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
                    //this.geolocation.getCurrentPosition().then((resp) => {
                    // alert('here');
                    //                    this.restaurantlist = [];
                    //                    temp.premiumBusiness = [];
                    //                        console.log(resp.coords.latitude);
                    //                        console.log(resp.coords.longitude);
                    for (var i = 0; i < response.data.length; i++) {
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
                        value.business_data[0].distance = temp.common.distance(lat, long, value.business_data[0].location.coordinates[1], value.business_data[0].location.coordinates[0], 'K');
                    });
                    //})
                    _this.totalpageno = response.pages;
                    console.log(_this.restaurantlist);
                    console.log(temp.premiumBusiness);
                }
            });
        });
    };
    /****** functions used for getlist on refresh ************/
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        //this.getSubCatList();
        this.pageno = 1;
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
            console.log('No more data to load');
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar hideBackButton color="green">\n        <button ion-button menuToggle style="display:block !important;">\n            <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n        </button>\n        <ion-title text-center >Home</ion-title>\n        <ion-buttons right (click)="filterModal()">\n                     <button ion-button>\n                <ion-icon><img width="22px" src="assets/imgs/filter.png"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n    <div class="searchouter">\n        <ion-searchbar placeholder="Search location" [(ngModel)]="autocomplete.query" (input)="updateSearch()" (ionClear)="ionClear($event)"></ion-searchbar>\n        <ion-list class="searchtogle animated bounceIn">\n            <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">\n                {{ item }}\n        </ion-item>\n    </ion-list>\n</div>\n\n<ion-toolbar>\n    <div class="procatout">\n        <ul class="procat">\n            <li *ngFor="let sub of subcat" (click)="FilterBySubCat(sub._id)">\n                <div class="icons"><img [src]="sub.sub_category_image"></div>\n                <p>{{sub.sub_category_title}}</p>\n            </li>\n<!--            <li>\n                <div class="icons"><img src="assets/imgs/icon2.png"></div>\n                <p>Saloon</p>\n            </li>\n            <li>\n                <div class="icons"><img src="assets/imgs/icon3.png"></div>\n                <p>Museum</p>\n            </li>\n                        <li>\n                            <div class="icons"><img src="assets/imgs/icon4.png"></div>\n                            <p>Hotel</p>\n                        </li>\n            <li>\n                <div class="icons"><img src="assets/imgs/icon5.png"></div>\n                <p>Hospital</p>\n            </li>-->\n            <!--      <li>\n                    <div class="icons"><img src="assets/imgs/icon1.png"></div>\n                    <p>Restaurant</p>\n                  </li>\n                  <li>\n                    <div class="icons"><img src="assets/imgs/icon1.png"></div>\n                    <p>Restaurant</p>\n                  </li>\n                  <li>\n                    <div class="icons"><img src="assets/imgs/icon1.png"></div>\n                    <p>Restaurant</p>\n                  </li>\n                  <li>\n                    <div class="icons"><img src="assets/imgs/icon1.png"></div>\n                    <p>Restaurant</p>\n                  </li>-->\n\n        </ul>\n    </div>\n</ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n<!--    <ion-scroll direction="x" class="wideslide">\n        <ul class="imglist">\n            <li *ngFor="let premium of premiumBusiness" (click)="viewproduct(premium)">\n                <div class="boxxgrid">\n                    <div class="imgbox">\n                        <img src="{{premium.business_image[0].business_image}}">\n                        \n                    </div>\n                    <img src="assets/imgs/premium.png" class="premium">\n                </div>\n            </li>\n            <li>\n                <div class="boxxgrid">\n                    <div class="imgbox">\n                        <img src="assets/imgs/sqar.png">\n                    </div>\n                    <img src="assets/imgs/premium.png" class="premium">\n                </div>\n            </li>\n           \n        </ul>\n    </ion-scroll>-->\n    <ion-slides pager *ngIf="premiumBusiness.length>0">\n\n        <ion-slide *ngFor="let premium of premiumBusiness" (click)="viewproduct(premium)">\n          <img src="{{premium.business_image[0].business_image}}">\n            <img src="assets/imgs/PREMIERE.png" class="premium">\n        </ion-slide>\n\n       \n        \n      </ion-slides>\n    \n    <div class="productlist" *ngIf="restaurantlist?.length>0">\n        <ion-list text-wrap>\n            <ion-item *ngFor="let res of restaurantlist">\n                <ion-thumbnail item-start (click)="viewproduct(res)">\n                           <img [src]="res.business_image[0].business_image">\n\n                </ion-thumbnail>\n                <ion-note class="online" *ngIf="res.business_data[0].own_online_market_place == true"><span class="dot"></span> Online</ion-note>\n                <!--                <span *ngIf="res.business_data[0].own_online_market_place == true">Online</span>-->\n                <h2>{{res.business_data[0].business_name}}</h2>\n                <div class="fullwidth">\n                    <h4 class="listcol">\n                        <rating readOnly="true" max="5" emptyStarIconName="star-outline" starIconName="star" nullable="false">\n                        </rating>\n                    </h4>\n                    <h4 *ngIf="res.business_data[0].own_online_market_place == true" class="listcol"><span class="proicon"><img src="assets/imgs/hrs.png"></span> Open 24/7</h4>\n                </div>\n                <div class="fullwidth">\n                    <h4 class="listcol"><span class="proicon"><img src="assets/imgs/mile.png"></span> {{res.business_data[0].distance}} Miles</h4>\n                    <h4 class="listcol"><span class="proicon"><img src="assets/imgs/check.png"></span> 4 Check-Ins</h4>\n                </div>\n                <p>{{res.business_data[0].sub_cat}}</p>\n                <div class="fullwidth">\n                    <h4 class="listcol" (click)="MarkAsFavourite(res.business_data[0]._id)">\n                        <span class="proicon">\n                            <img *ngIf="res.business_data[0].fav == 0" src="assets/imgs/fav.png">\n                            <img *ngIf="res.business_data[0].fav == 1" src="assets/imgs/favactive.png">\n                        </span> Favorite</h4>\n                    <h4 class="listcol" (click)="socialsharing(res.business_data[0].business_name,res.business_data[0].address,res.business_image[0].business_image)"><span class="proicon"><img src="assets/imgs/share.png"></span> Share</h4>\n                </div>\n                <div class="fullwidth">\n                    <button class="btneq" ion-button color="green" (click)="bookModal(res)">Book Now</button>\n                    <button class="btneq yelo" ion-button color="yellow" (click)="view()">Review</button>\n                </div>\n                <img *ngIf="res.business_data[0].business_type == 1 || res.business_data[0].business_type == 2" src="assets/imgs/premium.png" class="premim">\n            </ion-item>\n\n            <!--  <ion-item>\n                <ion-thumbnail item-start>\n                <img src="assets/imgs/img1.jpg">\n                </ion-thumbnail>\n                <h2>Rudford’s Restaurant</h2>\n                <div class="fullwidth">\n                <h4 class="listcol">sdfdssaf</h4>\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/hrs.png"></span> Open 24/7</h4>\n                </div>\n                <div class="fullwidth">\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/mile.png"></span> 7.4 Miles</h4>\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/check.png"></span> 4 Check-Ins</h4>\n                </div>\n                <p>Diners, Breakfast & Brunch, Burgers</p>\n                <div class="fullwidth">\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/favactive.png"></span> Favorite</h4>\n                <h4 class="listcol"><span class="proicon"><img src="assets/imgs/share.png"></span> Share</h4>\n                </div>\n                <div class="fullwidth">\n                <button class="btneq" ion-button color="green">Book Now</button>\n                <button class="btneq" ion-button color="yellow">Review</button>\n                </div>\n              </ion-item>-->\n            \n         \n\n        </ion-list>\n    </div>\n    <div class="notfound" *ngIf="restaurantlist?.length == 0">\n        <!--        <img src="assets/imgs/SORRY-01.png">-->\n        Sorry no data found!\n    </div>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__["a" /* Appsetting */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _l || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgottwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ForgottwoPage);
    return ForgottwoPage;
}());

//# sourceMappingURL=forgottwo.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_getstart_getstart__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_logintwo_logintwo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signuptwo_signuptwo__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_filter_filter__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_realtalk_realtalk__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_careernetwork_careernetwork__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_newartist_newartist__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_viewreservation_viewreservation__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_viewreservationtwo_viewreservationtwo__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_history_history__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_historytwo_historytwo__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_viewfavorites_viewfavorites__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_terms_terms__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_privacy_privacy__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_viewproduct_viewproduct__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_booknow_booknow__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_editprofiletwo_editprofiletwo__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_changepassword_changepassword__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_forgot_forgot__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_review_review__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_reservations_reservations__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_reviews2_reviews2__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_editbusiness_editbusiness__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_addbusiness_addbusiness__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_forgottwo_forgottwo__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_password_strength_bar__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_password_strength_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_ng2_password_strength_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_fcm__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_facebook__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_geolocation__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ionic2_rating__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_social_sharing__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_launch_navigator__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_in_app_browser__ = __webpack_require__(466);
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
                __WEBPACK_IMPORTED_MODULE_18__pages_viewreservationtwo_viewreservationtwo__["a" /* ViewreservationtwoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_37__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_38_ng2_password_strength_bar__["PasswordStrengthBarModule"],
                __WEBPACK_IMPORTED_MODULE_43_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addbusiness/addbusiness.module#AddbusinessPageModule', name: 'AddbusinessPage', segment: 'addbusiness', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/careernetwork/careernetwork.module#CareernetworkPageModule', name: 'CareernetworkPage', segment: 'careernetwork', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booknow/booknow.module#BooknowPageModule', name: 'BooknowPage', segment: 'booknow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofiletwo/editprofiletwo.module#EditprofiletwoPageModule', name: 'EditprofiletwoPage', segment: 'editprofiletwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editbusiness/editbusiness.module#EditbusinessPageModule', name: 'EditbusinessPage', segment: 'editbusiness', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgottwo/forgottwo.module#ForgottwoPageModule', name: 'ForgottwoPage', segment: 'forgottwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/getstart/getstart.module#GetstartPageModule', name: 'GetstartPage', segment: 'getstart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historytwo/historytwo.module#HistoryPageModule', name: 'HistorytwoPage', segment: 'historytwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newartist/newartist.module#NewartistPageModule', name: 'NewartistPage', segment: 'newartist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logintwo/logintwo.module#LogintwoPageModule', name: 'LogintwoPage', segment: 'logintwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/realtalk/realtalk.module#RealtalkPageModule', name: 'RealtalkPage', segment: 'realtalk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reviews2/reviews2.module#Reviews2PageModule', name: 'Reviews2Page', segment: 'reviews2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservations/reservations.module#ReservationsPageModule', name: 'ReservationsPage', segment: 'reservations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/review/review.module#ReviewPageModule', name: 'ReviewPage', segment: 'review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signuptwo/signuptwo.module#SignuptwoPageModule', name: 'SignuptwoPage', segment: 'signuptwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewproduct/viewproduct.module#ViewproductPageModule', name: 'ViewproductPage', segment: 'viewproduct', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewreservation/viewreservation.module#ViewreservationPageModule', name: 'ViewreservationPage', segment: 'viewreservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewfavorites/viewfavorites.module#ViewfavoritesPageModule', name: 'ViewfavoritesPage', segment: 'viewfavorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewreservationtwo/viewreservationtwo.module#ViewreservationtwoPageModule', name: 'ViewreservationtwoPage', segment: 'viewreservationtwo', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_18__pages_viewreservationtwo_viewreservationtwo__["a" /* ViewreservationtwoPage */]
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
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
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
    function ReservationsPage(navCtrl, navParams, appsetting, http, common, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
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
                        value.orderstart = __WEBPACK_IMPORTED_MODULE_5_moment__(value.orderstart).format('MM-DD-YYYY');
                        value.bookingtime = __WEBPACK_IMPORTED_MODULE_5_moment__(value.orderstart).format('HH:mm A');
                    });
                    _this.reservationsdata = response.data;
                    _this.totalpageno = response.page;
                    console.log(_this.reservationsdata);
                }
                else {
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
    ReservationsPage.prototype.Decline = function (orderid) {
        var _this = this;
        console.log('Decline clicked');
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
            selector: 'page-reservations',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/reservations/reservations.html"*/'<!--\n  Generated template for the ReservationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton color="green">\n    <button ion-button menuToggle style="display:block !important;">\n      <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n    </button>\n  <ion-title>Home</ion-title>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n  <ion-list *ngIf="reservationsdata">\n      <ion-item-sliding *ngFor="let reservation of reservationsdata">\n          \n        <ion-item>\n            <ion-thumbnail item-start>\n              <img [src]="reservation?.order_data[0]?.profile_pic">\n            </ion-thumbnail>\n          <h2>{{reservation?.order_data[0]?.firstname}} {{reservation?.order_data[0]?.lastname}}</h2>\n          <p>{{reservation?.spacial_accomodation}}</p>\n          <div class="left">\n            <p>Booking Date</p>\n            <p>{{reservation?.orderstart | date}}</p>\n          </div>\n          <div class="right">\n            <p>Booking Time</p>\n            <p>{{reservation?.orderstart | date:\'shortTime\'}}</p>\n          </div>\n        </ion-item>\n          \n       <ion-item-options side="right" class="btnsec">\n          <button ion-button color="green" (click)="Accept(reservation?._id)">\n<!--            <ion-icon><img src="assets/imgs/accept.png"></ion-icon>-->\n  <ion-icon style="font-size: 31px;font-weight: 700;" name="checkmark"></ion-icon>\n            Accept\n          </button>\n          <button ion-button color="reddrk" (click)="Decline(reservation?._id)">\n            <ion-icon><img src="assets/imgs/delete.png"></ion-icon>\n            Decline\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n<ion-list *ngIf="!reservationsdata">\n    <div style="text-align: center !important;padding: 30% 0 !important;color: grey;font-weight: 500; font-size: 15px;">\n          <img style="width:200px;margin: auto;display: block;" src="assets/imgs/sorry.png">\n          <span> Looks like you have no reservations yet!</span>\n    </div>\n    </ion-list>\n<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/reservations/reservations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], ReservationsPage);
    return ReservationsPage;
}());

//# sourceMappingURL=reservations.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getstart_getstart__ = __webpack_require__(40);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetstartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logintwo_logintwo__ = __webpack_require__(52);
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
            selector: 'page-getstart',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/getstart/getstart.html"*/'<!--\n  Generated template for the GetstartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n    <ion-title>Getstart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="getbg" scroll="false">\n\n<div class="vcenter">\n<!--<div class="logo"><img src="assets/imgs/logo.png"></div>\n<h4>Welcome to Melanin Enterprise</h4>\n<p>The only social network designed specifically for \nblack people to discover and support black \nowned businesses and new music artists, find \ncareers, and meet new friends!</p>-->\n\n<ion-grid style="margin-top:30px;">\n  <ion-row>\n    <ion-col col-6><button class="box" color="green" ion-button block (click)="loginbs()">I AM A BUSINESS</button></ion-col>\n    <ion-col col-6><button class="box ylo" color="yellow" ion-button block (click)="login()">I AM A MEMBER</button></ion-col>\n  </ion-row>\n</ion-grid>\n<p style="font-weight: 500;">Terms and Conditions</p>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/getstart/getstart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], GetstartPage);
    return GetstartPage;
}());

//# sourceMappingURL=getstart.js.map

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 189,
	"./af.js": 189,
	"./ar": 190,
	"./ar-dz": 191,
	"./ar-dz.js": 191,
	"./ar-kw": 192,
	"./ar-kw.js": 192,
	"./ar-ly": 193,
	"./ar-ly.js": 193,
	"./ar-ma": 194,
	"./ar-ma.js": 194,
	"./ar-sa": 195,
	"./ar-sa.js": 195,
	"./ar-tn": 196,
	"./ar-tn.js": 196,
	"./ar.js": 190,
	"./az": 197,
	"./az.js": 197,
	"./be": 198,
	"./be.js": 198,
	"./bg": 199,
	"./bg.js": 199,
	"./bm": 200,
	"./bm.js": 200,
	"./bn": 201,
	"./bn.js": 201,
	"./bo": 202,
	"./bo.js": 202,
	"./br": 203,
	"./br.js": 203,
	"./bs": 204,
	"./bs.js": 204,
	"./ca": 205,
	"./ca.js": 205,
	"./cs": 206,
	"./cs.js": 206,
	"./cv": 207,
	"./cv.js": 207,
	"./cy": 208,
	"./cy.js": 208,
	"./da": 209,
	"./da.js": 209,
	"./de": 210,
	"./de-at": 211,
	"./de-at.js": 211,
	"./de-ch": 212,
	"./de-ch.js": 212,
	"./de.js": 210,
	"./dv": 213,
	"./dv.js": 213,
	"./el": 214,
	"./el.js": 214,
	"./en-au": 215,
	"./en-au.js": 215,
	"./en-ca": 216,
	"./en-ca.js": 216,
	"./en-gb": 217,
	"./en-gb.js": 217,
	"./en-ie": 218,
	"./en-ie.js": 218,
	"./en-nz": 219,
	"./en-nz.js": 219,
	"./eo": 220,
	"./eo.js": 220,
	"./es": 221,
	"./es-do": 222,
	"./es-do.js": 222,
	"./es-us": 223,
	"./es-us.js": 223,
	"./es.js": 221,
	"./et": 224,
	"./et.js": 224,
	"./eu": 225,
	"./eu.js": 225,
	"./fa": 226,
	"./fa.js": 226,
	"./fi": 227,
	"./fi.js": 227,
	"./fo": 228,
	"./fo.js": 228,
	"./fr": 229,
	"./fr-ca": 230,
	"./fr-ca.js": 230,
	"./fr-ch": 231,
	"./fr-ch.js": 231,
	"./fr.js": 229,
	"./fy": 232,
	"./fy.js": 232,
	"./gd": 233,
	"./gd.js": 233,
	"./gl": 234,
	"./gl.js": 234,
	"./gom-latn": 235,
	"./gom-latn.js": 235,
	"./gu": 236,
	"./gu.js": 236,
	"./he": 237,
	"./he.js": 237,
	"./hi": 238,
	"./hi.js": 238,
	"./hr": 239,
	"./hr.js": 239,
	"./hu": 240,
	"./hu.js": 240,
	"./hy-am": 241,
	"./hy-am.js": 241,
	"./id": 242,
	"./id.js": 242,
	"./is": 243,
	"./is.js": 243,
	"./it": 244,
	"./it.js": 244,
	"./ja": 245,
	"./ja.js": 245,
	"./jv": 246,
	"./jv.js": 246,
	"./ka": 247,
	"./ka.js": 247,
	"./kk": 248,
	"./kk.js": 248,
	"./km": 249,
	"./km.js": 249,
	"./kn": 250,
	"./kn.js": 250,
	"./ko": 251,
	"./ko.js": 251,
	"./ky": 252,
	"./ky.js": 252,
	"./lb": 253,
	"./lb.js": 253,
	"./lo": 254,
	"./lo.js": 254,
	"./lt": 255,
	"./lt.js": 255,
	"./lv": 256,
	"./lv.js": 256,
	"./me": 257,
	"./me.js": 257,
	"./mi": 258,
	"./mi.js": 258,
	"./mk": 259,
	"./mk.js": 259,
	"./ml": 260,
	"./ml.js": 260,
	"./mr": 261,
	"./mr.js": 261,
	"./ms": 262,
	"./ms-my": 263,
	"./ms-my.js": 263,
	"./ms.js": 262,
	"./mt": 264,
	"./mt.js": 264,
	"./my": 265,
	"./my.js": 265,
	"./nb": 266,
	"./nb.js": 266,
	"./ne": 267,
	"./ne.js": 267,
	"./nl": 268,
	"./nl-be": 269,
	"./nl-be.js": 269,
	"./nl.js": 268,
	"./nn": 270,
	"./nn.js": 270,
	"./pa-in": 271,
	"./pa-in.js": 271,
	"./pl": 272,
	"./pl.js": 272,
	"./pt": 273,
	"./pt-br": 274,
	"./pt-br.js": 274,
	"./pt.js": 273,
	"./ro": 275,
	"./ro.js": 275,
	"./ru": 276,
	"./ru.js": 276,
	"./sd": 277,
	"./sd.js": 277,
	"./se": 278,
	"./se.js": 278,
	"./si": 279,
	"./si.js": 279,
	"./sk": 280,
	"./sk.js": 280,
	"./sl": 281,
	"./sl.js": 281,
	"./sq": 282,
	"./sq.js": 282,
	"./sr": 283,
	"./sr-cyrl": 284,
	"./sr-cyrl.js": 284,
	"./sr.js": 283,
	"./ss": 285,
	"./ss.js": 285,
	"./sv": 286,
	"./sv.js": 286,
	"./sw": 287,
	"./sw.js": 287,
	"./ta": 288,
	"./ta.js": 288,
	"./te": 289,
	"./te.js": 289,
	"./tet": 290,
	"./tet.js": 290,
	"./th": 291,
	"./th.js": 291,
	"./tl-ph": 292,
	"./tl-ph.js": 292,
	"./tlh": 293,
	"./tlh.js": 293,
	"./tr": 294,
	"./tr.js": 294,
	"./tzl": 295,
	"./tzl.js": 295,
	"./tzm": 296,
	"./tzm-latn": 297,
	"./tzm-latn.js": 297,
	"./tzm.js": 296,
	"./uk": 298,
	"./uk.js": 298,
	"./ur": 299,
	"./ur.js": 299,
	"./uz": 300,
	"./uz-latn": 301,
	"./uz-latn.js": 301,
	"./uz.js": 300,
	"./vi": 302,
	"./vi.js": 302,
	"./x-pseudo": 303,
	"./x-pseudo.js": 303,
	"./yo": 304,
	"./yo.js": 304,
	"./zh-cn": 305,
	"./zh-cn.js": 305,
	"./zh-hk": 306,
	"./zh-hk.js": 306,
	"./zh-tw": 307,
	"./zh-tw.js": 307
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
webpackContext.id = 404;

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_getstart_getstart__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_realtalk_realtalk__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_careernetwork_careernetwork__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_newartist_newartist__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_viewreservation_viewreservation__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_viewreservationtwo_viewreservationtwo__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_history_history__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_viewfavorites_viewfavorites__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_terms_terms__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_privacy_privacy__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_editprofiletwo_editprofiletwo__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reservations_reservations__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_reviews2_reviews2__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_editbusiness_editbusiness__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_addbusiness_addbusiness__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_angular_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_historytwo_historytwo__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























//import {FCM} from '@ionic-native/fcm';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, http, appsetting, common, toastCtrl, events, app, menu) {
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
        //alert('asdfjk')
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
        }
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.app.getRootNav();
        this.events.subscribe('Loggedin', function (Loggedin) {
            console.log(Loggedin);
            console.log('Loggedin');
            //alert('app logged in');
            _this.getUser();
        });
        // used for an example of ngFor and navigation
        this.events.subscribe('skip', function (skip) {
            console.log('skip');
            _this.currentuser = null;
            _this.pages = [
                { title: 'Sign in or create account', component: __WEBPACK_IMPORTED_MODULE_4__pages_getstart_getstart__["a" /* GetstartPage */], icon: 'assets/imgs/user.png' },
                { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_13__pages_terms_terms__["a" /* TermsPage */], icon: 'assets/imgs/terms.png' },
                { title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_14__pages_privacy_privacy__["a" /* PrivacyPage */], icon: 'assets/imgs/privacy.png' },
            ];
        });
        if (localStorage.getItem('CurrentUser')) {
            console.log(JSON.parse(localStorage.getItem('CurrentUser')));
            var user = JSON.parse(localStorage.getItem('CurrentUser'));
            this.events.publish('Loggedin', 'loginpage');
            console.log(user);
            if (user.role == "business") {
                if (user.business_data.length > 0) {
                    this.rootPage = __WEBPACK_IMPORTED_MODULE_16__pages_reservations_reservations__["a" /* ReservationsPage */];
                }
                else {
                    this.rootPage = __WEBPACK_IMPORTED_MODULE_22__pages_addbusiness_addbusiness__["a" /* AddbusinessPage */];
                }
            }
            else {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            }
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_getstart_getstart__["a" /* GetstartPage */];
        }
        //        this.fcm.onNotification().subscribe(data => {
        //            if (data.wasTapped) {
        //                console.log("Received in background");
        //            } else {
        //                console.log("Received in foreground");
        //            };
        //        })
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
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage = page;
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
        //alert('user image:-'+this.userimage);
        if (localStorage.getItem('CurrentUser')) {
            console.log(JSON.parse(localStorage.getItem('CurrentUser'))._id);
            var options = this.appsetting.header();
            var postdata = {
                user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            };
            var serialized = this.appsetting.serializeObj(postdata);
            this.http.post(this.appsetting.url + 'users/userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                if (response.status == true) {
                    localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                    if (response.data.profile_pic) {
                        //                    this.userimage = response.data.profile_pic;
                        //                    console.log('userimage');
                        //                    console.log(this.userimage);
                        //                    alert('user image get:-'+this.userimage);
                        // response.data
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
                            { title: 'Career Network', component: __WEBPACK_IMPORTED_MODULE_7__pages_careernetwork_careernetwork__["a" /* CareernetworkPage */], icon: 'assets/imgs/career.png' },
                            { title: 'Edit Profile', component: __WEBPACK_IMPORTED_MODULE_15__pages_editprofiletwo_editprofiletwo__["a" /* EditprofiletwoPage */], icon: 'assets/imgs/editprofile.png' },
                            //                {title: 'Edit Business Information', component: EditbusinessPage, icon: 'assets/imgs/editprofile.png'},
                            { title: 'Reviews', component: __WEBPACK_IMPORTED_MODULE_17__pages_reviews2_reviews2__["a" /* Reviews2Page */], icon: 'assets/imgs/reviews.png' },
                            { title: 'New Artist', component: __WEBPACK_IMPORTED_MODULE_8__pages_newartist_newartist__["a" /* NewartistPage */], icon: 'assets/imgs/artist.png' },
                            { title: 'View Reservations', component: __WEBPACK_IMPORTED_MODULE_10__pages_viewreservationtwo_viewreservationtwo__["a" /* ViewreservationtwoPage */], icon: 'assets/imgs/reservation.png' },
                            //                {title: 'Reservations', component: ReservationsPage, icon: 'assets/imgs/reservation.png'},
                            { title: 'History', component: __WEBPACK_IMPORTED_MODULE_11__pages_history_history__["a" /* HistoryPage */], icon: 'assets/imgs/history.png' },
                            { title: 'View Favorites', component: __WEBPACK_IMPORTED_MODULE_12__pages_viewfavorites_viewfavorites__["a" /* ViewfavoritesPage */], icon: 'assets/imgs/favorites.png' },
                            { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_13__pages_terms_terms__["a" /* TermsPage */], icon: 'assets/imgs/terms.png' },
                            { title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_14__pages_privacy_privacy__["a" /* PrivacyPage */], icon: 'assets/imgs/privacy.png' },
                        ];
                    }
                    else {
                        _this.pages = [
                            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_16__pages_reservations_reservations__["a" /* ReservationsPage */], icon: 'assets/imgs/home.png' },
                            { title: 'Real Talk', component: __WEBPACK_IMPORTED_MODULE_6__pages_realtalk_realtalk__["a" /* RealtalkPage */], icon: 'assets/imgs/realtalk.png' },
                            { title: 'Career Network', component: __WEBPACK_IMPORTED_MODULE_7__pages_careernetwork_careernetwork__["a" /* CareernetworkPage */], icon: 'assets/imgs/career.png' },
                            { title: 'Edit Profile', component: __WEBPACK_IMPORTED_MODULE_15__pages_editprofiletwo_editprofiletwo__["a" /* EditprofiletwoPage */], icon: 'assets/imgs/editprofile.png' },
                            { title: 'Edit Business Info', component: __WEBPACK_IMPORTED_MODULE_18__pages_editbusiness_editbusiness__["a" /* EditbusinessPage */], icon: 'assets/imgs/editprofile.png' },
                            { title: 'Reviews', component: __WEBPACK_IMPORTED_MODULE_17__pages_reviews2_reviews2__["a" /* Reviews2Page */], icon: 'assets/imgs/reviews.png' },
                            { title: 'New Artist', component: __WEBPACK_IMPORTED_MODULE_8__pages_newartist_newartist__["a" /* NewartistPage */], icon: 'assets/imgs/artist.png' },
                            { title: 'View Reservations', component: __WEBPACK_IMPORTED_MODULE_9__pages_viewreservation_viewreservation__["a" /* ViewreservationPage */], icon: 'assets/imgs/reservation.png' },
                            //                {title: 'Reservations', component: ReservationsPage, icon: 'assets/imgs/reservation.png'},
                            { title: 'History', component: __WEBPACK_IMPORTED_MODULE_24__pages_historytwo_historytwo__["a" /* HistorytwoPage */], icon: 'assets/imgs/history.png' },
                            //                {title: 'View Favorites', component: ViewfavoritesPage, icon: 'assets/imgs/favorites.png'},
                            { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_13__pages_terms_terms__["a" /* TermsPage */], icon: 'assets/imgs/terms.png' },
                            { title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_14__pages_privacy_privacy__["a" /* PrivacyPage */], icon: 'assets/imgs/privacy.png' },
                        ];
                    }
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/app/app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n  <ion-header>\n    <ion-toolbar class="toolbarhead" color="green">\n      <div class="menuprofile" *ngIf="currentuser">\n        <div class="profile_strip">\n          <div class="profile_pic">\n            <div class="profile_picinn">\n            <img src="{{currentuser?.profile_pic}}"> \n            </div>\n          </div>\n          <h2>{{currentuser?.firstname}}</h2>\n          <p>{{currentuser?.email}}</p>\n        </div>\n      </div>\n        \n        <div class="menuprofile" *ngIf="!currentuser">\n        <div class="profile_strip">\n          <div class="profile_pic">\n            <div class="profile_picinn">\n            <img src="assets/imgs/profile.png"> \n            </div>\n          </div>\n<!--          <h2>{{currentuser?.firstname}}</h2>\n          <p>{{currentuser?.email}}</p>-->\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list no-lines class="sidemenu" *ngIf="currentuser">\n      <button menuClose color="black" ion-item *ngFor="let p of pages" (click)="openPage(p)" [class.active]="checkActivePage(p)">\n        <ion-icon><img width="20px" src="{{p.icon}}"></ion-icon>\n        {{p.title}}\n      </button>\n        <button menuClose color="black" ion-item (click)="logout()">\n        <ion-icon><img width="20px" src="assets/imgs/logout.png"></ion-icon>\n        Logout\n      </button>\n    </ion-list>\n      \n      <ion-list no-lines class="sidemenu" *ngIf="currentuser == null">\n      <button menuClose color="black" ion-item *ngFor="let p of pages" (click)="openPage(p)" [class.active]="checkActivePage(p)">\n        <ion-icon><img width="20px" src="{{p.icon}}"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_20__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_21__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_23_ionic_angular_index__["j" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddbusinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservations_reservations__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logintwo_logintwo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(54);
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
            selector: 'page-addbusiness',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/addbusiness/addbusiness.html"*/'<!--\n  Generated template for the AddbusinessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar color="green">\n        <ion-buttons start>\n            <button ion-button icon-only (click)="login()">\n                    <ion-icon class="bckbtn" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>add business</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="AddbusinessForm" (submit)="AddBusiness(AddbusinessForm)">\n        <ion-list no-lines>\n            <!--            <ion-item>\n                            <ion-label>Business type</ion-label>\n                            <ion-select formControlName="businesstype" (ionChange)="selectedBusiness($event)">\n                                <ion-option value="1">Premium</ion-option>\n                                <ion-option value="">Valued</ion-option>\n                            </ion-select>\n                        </ion-item>-->\n            <ion-item>\n                <ion-input type="text" placeholder="Business Name" formControlName="businessname"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-input type="tel" placeholder="Phone Number" formControlName="phone" maxLength="12"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-input type="text" placeholder="Address" formControlName="address" [(ngModel)]="autocomplete.query" (input)="updateSearch()"></ion-input>\n            </ion-item>\n            <div *ngIf="autocompleteItems != \'\'" class="suggestion">\n                <ion-label *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">{{ item }}</ion-label>\n            </div>\n            <ion-item>\n                <ion-input type="text" placeholder="Zip code" formControlName="zipcode"></ion-input>\n            </ion-item>\n            <ion-item class="area">\n                <ion-textarea  placeholder="Description" formControlName="description"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Category</ion-label>\n                <ion-select class="catoption" formControlName="category" (ionChange)="selectedCat($event)">\n                    <ion-option *ngFor="let cat of category" value ="{{cat._id}}">{{cat.title}}\n                        <ion-input type="hidden" [(ngModel)]="data.category_title" formControlName="category_id"></ion-input>\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n\n            <h2>Add opening and closing hours.</h2>\n\n            <ion-item>\n                <ion-label>Select Day</ion-label>\n                <ion-select formControlName="days" [(ngModel)]="data.days">\n                    <ion-option *ngFor="let day of days;let i = index">{{day}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-grid class="paddingnone">\n                <ion-row>\n                    <ion-col col-5 class="padding-left">\n                        <ion-item>\n                            <ion-datetime placeholder="Opening Hours" displayFormat="HH:MM A" [(ngModel)]="data.openinghours" formControlName="openinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-5 class="paddingtopbtm">\n                        <ion-item>\n                            <ion-datetime placeholder="Closing Hours" displayFormat="HH:MM A" [(ngModel)]="data.closinghours" formControlName="closinghours"></ion-datetime>\n                        </ion-item>\n                    </ion-col> \n                    <ion-col col-2 class="padding-right">\n                        <ion-item class="addbtn">\n                            <button type="button" ion-button clear color="gray" (click)="closingtime(AddbusinessForm)"><ion-icon name="add"></ion-icon></button>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n            <div class="tagsec" *ngIf="daytime.length>0">\n                <div class="inner-sec" *ngFor="let d of daytime;let i = index">\n                     <p style="margin-bottom:1px;">{{d.day}}</p>\n                    <p><span>{{d.openingtime}}</span> to <span>{{d.closingtime}}</span></p>\n                    <ion-icon name="close" (click)="DeleteTimes(d,i)"></ion-icon>\n                </div>\n            </div>\n\n            <ion-item *ngIf="services">\n                <ion-label>Services</ion-label>\n                <ion-select class="catoption" formControlName="services" (ionChange)="selectedService($event)">\n                    <ion-option *ngFor="let service of services" value="{{service._id}}">{{service.sub_category_title}}\n                        <ion-input type="hidden" [(ngModel)]="data.service_title" formControlName="services_title"></ion-input>\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n\n            <!--            <h2>Social Links</h2>\n            \n                        <ion-item>\n                            <img src="assets/imgs/instgrm.png" item-start class="social">\n                            <ion-input type="text" placeholder="https://www.instagram.com/" formControlName="instagramlink" autocapitalize="off"></ion-input>\n                        </ion-item>\n            \n                        <ion-item>\n                            <img src="assets/imgs/fb.png" item-start class="social">\n                            <ion-input type="text" placeholder="https://www.facebook.com/" formControlName="facebooklink" autocapitalize="off"></ion-input>\n                        </ion-item>\n            \n                        <ion-item>\n                            <img src="assets/imgs/twtr.png" item-start class="social">\n                            <ion-input type="text" placeholder="https://www.twitter.com/" formControlName="twitterlink" autocapitalize="off"></ion-input>\n                        </ion-item>-->\n            <ion-item>\n                \n                <ion-input type="text" placeholder="https://www.websitename.com/" formControlName="websiteurl"></ion-input>\n            </ion-item>\n\n            <h2>Is this a veteran owned business?</h2>\n\n            <ion-list radio-group style="margin:0 !important;" formControlName="veteranowned">\n                <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                    <ion-radio checked="yes" value="yes"></ion-radio>\n                    <ion-label>Yes</ion-label>\n                </ion-item>\n\n                <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                    <ion-radio value="no"></ion-radio>\n                    <ion-label>No</ion-label>\n                </ion-item>\n            </ion-list>\n\n            <h2>Do you own an online marketplace?</h2>\n\n            <ion-list radio-group style="margin:0 !important;" formControlName="onlinemarketplace">\n                <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                    <ion-radio checked="yes" value="yes"></ion-radio>\n                    <ion-label>Yes</ion-label>\n                </ion-item>\n\n                <ion-item class="rdo" style="padding-left: 25px !important;">\n\n                    <ion-radio value="no"></ion-radio>\n                    <ion-label>No</ion-label>\n                </ion-item>\n            </ion-list>\n\n            <h2>Do you accept?</h2>\n            <ion-list style="margin:0 !important;">\n                <ion-item class="chck">\n                    <ion-checkbox formControlName="accept" style="margin-right: 9px !important;"></ion-checkbox>\n                    <ion-label>Appointments</ion-label>\n                </ion-item>\n                <ion-item class="chck">\n                    <ion-checkbox formControlName="reservation" style="margin-right: 9px !important;"></ion-checkbox>\n                    <ion-label>Reservations</ion-label>\n                </ion-item>\n            </ion-list>\n        </ion-list>\n        <div class="photosec">\n            <h2 style="position:relative;">Add Photo <span>( Multiple photos )</span>\n                <button *ngIf="bit<=4" type="button" ion-button color="green" (click)="presentActionSheet()"><ion-icon name="add"></ion-icon></button>\n            </h2>\n            <ion-grid class="paddingnone" *ngIf="base64Image.length>0">\n                <ion-row>\n                    <ion-col col-4 *ngFor="let img of base64Image">\n                             <div class="image-wrapper">\n                            <img src="{{img}}">\n                        </div>\n                    </ion-col>\n                    <!--            <ion-col col-4>\n                                    <div class="image-wrapper">\n                                      <img src="assets/imgs/sqar.png">\n                                    </div>\n                                  </ion-col>\n                                  <ion-col col-4>\n                                      <div class="image-wrapper">\n                                        <img src="assets/imgs/sqar.png">\n                                      </div>\n                                    </ion-col>-->\n                </ion-row>\n            </ion-grid>\n            <div class="btnsec">\n                <button type="submit" ion-button color="green" full class="btn1">SAVE</button>\n            </div>\n        </div>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/addbusiness/addbusiness.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AddbusinessPage);
    return AddbusinessPage;
}());

//# sourceMappingURL=addbusiness.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogintwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signuptwo_signuptwo__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addbusiness_addbusiness__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgot_forgot__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reservations_reservations__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__getstart_getstart__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__ = __webpack_require__(50);
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
                divice_token: 'asdf',
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
                    //                this.fcm.getToken().then(token => {
                    //                    alert(token);
                    //                })
                    var postdata = {
                        fb_id: _this.userData.id,
                        firstname: _this.userData.first_name,
                        lastname: _this.userData.last_name,
                        email: _this.userData.email,
                        role: 'business',
                        regitration_type: 'facebook',
                        divice_token: 'ajsdfja',
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
    LogintwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-logintwo',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/logintwo/logintwo.html"*/'<!--\n  Generated template for the LogintwoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n    <ion-navbar color="green">\n        <ion-title text-center>login</ion-title>\n    </ion-navbar>\n\n</ion-header>-->\n<ion-header>\n\n    <ion-toolbar color="green">\n        <ion-buttons start>\n            \n            <button ion-button icon-only (click)="getstart()">\n                    <ion-icon class="bckbtn" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Login</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div class="loginform formmain">\n        <p style="font-weight: 500;">Welcome to Melanin Enterprise. <br>We are glad that you are here!<br>Make yourself at home.</p>\n        <form [formGroup]="SigninForm" (submit)="Signin(SigninForm)">\n            <ion-list no-lines>\n\n                <ion-item>\n                    <ion-input type="email" placeholder="Email" formControlName="email" autocapitalize="off"></ion-input>\n                    <ion-icon class="iconinput" item-start><img src="assets/imgs/user.png"></ion-icon>\n                    <span item-content *ngIf="!isValid(\'email\')" class="validationpop animated bounce">Invalid email</span>\n                </ion-item>\n\n\n\n                <ion-item>\n                    <ion-input type="{{type}}" placeholder="Password" formControlName="password"></ion-input>\n                    <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n                    <button item-end type="button" color="dark" (click)="showPassword()" ion-button icon-only clear>\n                        <ion-icon name="{{iconname}}" ></ion-icon>\n                    </button>\n                    <span item-content *ngIf="!isValid(\'password\')" class="validationpop animated bounce">Invalid Password</span>\n                </ion-item>\n\n                <button type="submit" class="btn1" ion-button color="green" block [disabled]="!SigninForm.valid">Login</button>\n                <button type="button" class="forgot" ion-button clear block color="dark" (click)="forgot()">Forgot Password?</button>\n                <h2 class="orstrip"><span style="font-weight: 600;">OR</span></h2>\n                <button (click)="Facebooklogin()" type="button" class="btn3" ion-button block >Login with facebook</button>\n            </ion-list>\n        </form>\n    </div>\n\n    <div class="haveacc">Don’t have an account? <span color="dark" (click)="signup()" style="font-weight: 600;">Sign Up</span></div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/logintwo/logintwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__["a" /* FCM */]])
    ], LogintwoPage);
    return LogintwoPage;
}());

//# sourceMappingURL=logintwo.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_forgot__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__ = __webpack_require__(50);
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
            //this.fcm.getToken().then(token => {
            //                alert('token');
            //                alert(token);
            //console.log('Tokenid-->'+token);
            var options_1 = this.appsetting.header();
            var postdata = {
                email: signindata.value.email,
                password: signindata.value.password,
                divice_token: 'adsf',
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
            //            },err=>{
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
                    //                this.fcm.getToken().then(token => {
                    //                    alert(token);
                    //                })
                    var postdata = {
                        fb_id: _this.userData.id,
                        firstname: _this.userData.first_name,
                        lastname: _this.userData.last_name,
                        email: _this.userData.email,
                        role: 'member',
                        regitration_type: 'facebook',
                        divice_token: 'ajsdfja',
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
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forgot_forgot__["a" /* ForgotPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title text-center>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="loginform formmain">\n    <p style="font-weight: 600;">Thank you for becoming a part of <br> our community!</p>\n    <form [formGroup]="SigninForm" (submit)="Signin(SigninForm)">\n      <ion-list no-lines>\n       \n          <ion-item>\n            <ion-input type="email" placeholder="Email" formControlName="email" autocapitalize="off"></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/user.png"></ion-icon>\n            <span item-content *ngIf="!isValid(\'email\')" class="validationpop animated bounce">Invalid email</span>\n          </ion-item>\n          \n        \n       \n          <ion-item>\n            <ion-input type="{{type}}" placeholder="Password" formControlName="password" ></ion-input>\n            <ion-icon class="iconinput" item-start><img src="assets/imgs/pass.png"></ion-icon>\n            <button item-end type="button" color="dark" class="" (click)="showPassword()" ion-button icon-only clear>\n                <ion-icon  name="{{iconname}}" ></ion-icon>\n            </button>\n            <span item-content *ngIf="!isValid(\'password\')" class="validationpop animated bounce">Invalid Password</span>\n          </ion-item>\n            \n          \n        \n        <button type="submit" class="btn1" ion-button color="green" block [disabled]="!SigninForm.valid">Login</button>\n        <button type="button" class="forgot" ion-button clear block color="dark" (click)="forgot()">Forgot Password?</button>\n        <h2 class="orstrip"><span style="font-weight: 600;">OR</span></h2>\n        <button (click)="Facebooklogin()" type="button" class="btn3" ion-button block >Login with facebook</button>\n      </ion-list>\n    </form>\n  </div>\n\n  <div class="haveacc">Don’t have an account? <span color="dark" (click)="signup()" style="font-weight: 600;">Sign Up</span></div>\n  <div class="haveacc"><button class="btn1" ion-button clear (click)="home()">Skip</button></div>\n  \n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__["a" /* FCM */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__booknow_booknow__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(466);
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
    function ViewproductPage(navCtrl, navParams, socialSharing, toastCtrl, modalCtrl, ViewCtrl, appsetting, http, loadingCtrl, common, launchNavigator, geolocation, iab) {
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
        this.iab = iab;
        this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
    }
    ViewproductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewproductPage');
        console.log(this.navParams.get('restdata'));
        var resdata = this.navParams.get('restdata').business_data[0].opening_days_and_timings;
        this.restaurantdata = this.navParams.get('restdata');
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
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__booknow_booknow__["a" /* BooknowPage */]);
        modal.onDidDismiss(function (data) {
            console.log(data);
            console.log(_this.modaldata);
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
        });
        modal.present();
    };
    ViewproductPage.prototype.CheckIn = function () {
        console.log('Check in');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        console.log(user._id);
        var options = this.appsetting.header();
        var postdata = {};
        var serialized = this.appsetting.serializeObj(postdata);
        //                this.http.post(this.appsetting.url + 'orders/addOrders', serialized, options).map(res => res.json()).subscribe(response => {
        //                    console.log(response);
        //                    if (response.status == true) {
        //                        //this.common.presentAlert('Book now', response.message);
        //                        this.common.presentAlert('Claim this business',response.message);
        //                    } else {
        //                        this.common.presentAlert('Claim this business', 'Something went wrong!');
        //                    }
        //                })
    };
    ViewproductPage.prototype.ClaimYourBusiness = function () {
        console.log('Claim this business');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        console.log(user._id);
        var options = this.appsetting.header();
        var postdata = {};
        var serialized = this.appsetting.serializeObj(postdata);
        //                this.http.post(this.appsetting.url + 'orders/addOrders', serialized, options).map(res => res.json()).subscribe(response => {
        //                    console.log(response);
        //                    if (response.status == true) {
        //                        //this.common.presentAlert('Book now', response.message);
        //                        this.common.presentAlert('Claim this business',response.message);
        //                    } else {
        //                        this.common.presentAlert('Claim this business', 'Something went wrong!');
        //                    }
        //                })
    };
    /*********** function to favourite a restaurant *******************/
    ViewproductPage.prototype.MarkAsFavourite = function (businessID) {
        var _this = this;
        console.log('MarkAsFavourite function');
        console.log(businessID);
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        var options = this.appsetting.header();
        var postdata = {
            user_id: user._id,
            favorite_business_id: businessID
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'user/add_to_favarite', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
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
                _this.http.post(_this.appsetting.url + 'user/delete_favarite_business ', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
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
        var options = {
            location: 'no'
        };
        var browser = this.iab.create(link, '_blank', 'location:no');
        console.log(browser);
        browser.show();
    };
    ViewproductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewproduct',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewproduct/viewproduct.html"*/'<!--\n  Generated template for the ViewproductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n    <ion-title text-center>View</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: #dee1e4;">\n  <div class="productslide">\n    <ion-slides pager>\n      <ion-slide *ngFor="let img of restaurantdata?.business_image">\n        <div class="imagebox">\n          <img [src]="img.business_image">\n        </div>\n      </ion-slide>\n<!--      <ion-slide *ngIf="restaurantdata?.business_image1">\n        <div class="imagebox">\n          <img [src]="restaurantdata?.business_image1">\n        </div>\n      </ion-slide>-->\n    </ion-slides>\n  </div>\n\n  <div class="product_content">\n    <ion-list>\n      <ion-item>\n        <h1>{{restaurantdata?.business_data[0].business_name}}</h1>\n        <p>{{restaurantdata?.business_data[0].sub_cat}}</p>\n        <h4><span class="proicon"><img width="13px" src="assets/imgs/check.png"></span> 4 Check-Ins</h4>\n        <div item-end class="buttonright">\n          <button [disabled]="restaurantdata?.role == \'dummy\'" class="btneq" full ion-button icon-left color="green" (click)="bookModal()"><ion-icon><img width="16px" src="assets/imgs/book.png"></ion-icon>Book Now</button>\n          <button [disabled]="restaurantdata?.role == \'dummy\'" class="btneq checkin" full ion-button icon-left light color="grey" (click)="CheckIn()"><ion-icon ><img width="16px" src="assets/imgs/checkin.png"></ion-icon>Check In</button>\n        </div>\n      </ion-item>\n      <ion-item-divider color="light">Info</ion-item-divider>\n      <ion-item text-wrap>\n        <div class="contactbox">\n          <h4><img width="20px" src="assets/imgs/contactinfo.png"> Contact Info</h4>\n<!--          <p><img width="12px" src="assets/imgs/city.png"> 508 Virginia </p>-->\n          <p (click)="LaunchNavigator()"><img width="12px" src="assets/imgs/location.png"> {{restaurantdata?.business_data[0].address}} </p>\n          <p><img width="12px" src="assets/imgs/phone.png"> Phone: {{restaurantdata?.business_data[0].business_phone_number}}</p>\n        </div>\n        <div class="contactbox">\n          <h4><img width="20px" src="assets/imgs/website.png"> Website Info</h4>\n          <p style="font-size:14px !important;" (click)="OpenWebsiteInfo(restaurantdata?.business_data[0].website_url)"> {{restaurantdata?.business_data[0].website_url}}</p>\n<!--          <p *ngIf="restaurantdata?.business_data[0].facebook_link"> {{restaurantdata?.business_data[0].facebook_link}}</p>\n          <p *ngIf="restaurantdata?.business_data[0].instagram_link"> {{restaurantdata?.business_data[0].instagram_link}}</p>\n          <p *ngIf="restaurantdata?.business_data[0].twitter_link"> {{restaurantdata?.business_data[0].twitter_link}}</p>-->\n        </div>\n      </ion-item>\n      <ion-item>\n        <button class="fav" clear ion-button icon-left color="dark" (click)="MarkAsFavourite(restaurantdata?.business_data[0]._id)">\n            <ion-icon *ngIf="restaurantdata?.fav == 0"><img width="16px" src="assets/imgs/fav.png"></ion-icon>\n            <ion-icon *ngIf="restaurantdata?.fav == 1"><img width="16px" src="assets/imgs/favactive.png"></ion-icon>\n            \n            Favorite</button>\n        <button class="share" clear ion-button icon-left color="dark" (click)="socialsharing(restaurantdata?.business_data[0].business_name,restaurantdata?.business_data[0].address,restaurantdata?.business_image[0])"><ion-icon ><img width="16px" src="assets/imgs/share.png"></ion-icon>Share</button>\n      </ion-item>\n      <ion-item-divider color="light">Time</ion-item-divider>\n      <ion-item text-wrap>\n        <div class="timesec">\n          <h4 *ngFor="let days of restaurantdata?.business_data[0].opening_days_and_timings"><span>{{days.day}}</span> {{days.opening_time}} to {{days.closing_time}} </h4>\n        </div>\n      </ion-item>\n      <ion-item-divider color="light">IS THIS YOUR BUSINESS?</ion-item-divider>\n      <ion-item text-wrap>\n        <p>Claim your business to respond to reviews and messages.\n        </p>\n        <button [disabled]="restaurantdata?.role != \'dummy\'" class="btneq" full ion-button color="green" (click)="ClaimYourBusiness()">Claim this Business</button>\n      </ion-item>\n      <ion-item-divider color="light">Description</ion-item-divider>\n      <ion-item text-wrap>\n        <p [innerHTML]="restaurantdata?.business_data[0].business_description">\n        </p>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/viewproduct/viewproduct.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__["a" /* LaunchNavigator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__["a" /* LaunchNavigator */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _o || Object])
    ], ViewproductPage);
    return ViewproductPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=viewproduct.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooknowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
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
        this.currentdate = __WEBPACK_IMPORTED_MODULE_7_moment___default()(new Date()).format('YYYY-MM-DD');
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
        var startTime = BookingForm.value.startTime.split(':');
        console.log(startTime);
        console.log(startTime[0]);
        var endTime = BookingForm.value.endTime.split(':');
        console.log(endTime);
        if (endTime[0] > startTime[0]) {
            console.log('true');
            //return false;
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
            selector: 'page-booknow',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/booknow/booknow.html"*/'<!--\n  Generated template for the BooknowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n      <button ion-button menuToggle style="display:block !important;">\n          <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>booknow</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="overouter" (click)="dismiss()"></div>\n    <div class="centerbox">\n    <form class="formsec" [formGroup]="BookingForm" (submit)="MakeBooking(BookingForm)">\n      <div class="topsec">\n        <div class="image-wrapper">\n          <img src="assets/imgs/bookpopup.png">\n        </div>\n        <p>Please let us know if you\'re celebrating or \n          have a special accommodation!</p>\n          <h2>Add Booking Day / Time</h2>\n         \n            <ion-grid>\n              <ion-row>\n                <ion-col col-12 class="left right">\n                  <ion-item class="clandr">\n                    <ion-datetime class="inputtxt" placeholder="Date" displayFormat="DDDD  MM-DD-YYYY" pickerFormat="MM-DD-YYYY" min="{{currentdate}}" formControlName="date"></ion-datetime>\n                    <img src="assets/imgs/calander.png" item-end>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-6 class="left">\n                  <ion-item>\n                    <ion-datetime class="inputtxt" placeholder="Start Time" displayFormat="HH:mm A" pickerFormat="HH:mm A" formControlName="startTime"></ion-datetime>\n                  </ion-item>\n                </ion-col>\n\n                <ion-col col-6 class="right">\n                  <ion-item>\n                    <ion-datetime class="inputtxt" placeholder="End Time" displayFormat="HH:mm A" formControlName="endTime"></ion-datetime>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <h2>Special accomodations</h2>\n            <ion-item class="discripation">\n              <ion-textarea class="inputtxt" placeholder="Write special accomodations..." formControlName="specialAccomo"></ion-textarea>\n            </ion-item>\n        </div>\n        <div class="btnsec">\n            <button type="button" clear color="green" (click)="dismiss()">Cancel</button>\n          <button type="submit" clear color="green" style="border-right:1px solid #bdbdbd;" [disabled]="!BookingForm.valid">Confirm</button>\n          \n        </div>\n      </form>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/booknow/booknow.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], BooknowPage);
    return BooknowPage;
}());

//# sourceMappingURL=booknow.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map