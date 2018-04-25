webpackJsonp([0],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function() { return EditprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofile__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditprofilePageModule = (function () {
    function EditprofilePageModule() {
    }
    EditprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */]),
            ],
        })
    ], EditprofilePageModule);
    return EditprofilePageModule;
}());

//# sourceMappingURL=editprofile.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword_changepassword__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(26);
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
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = (function () {
    function EditprofilePage(navCtrl, navParams, camera, actionSheetCtrl, formBuilder, appsetting, common, http, events, loadingCtrl) {
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
        alert('ajksdhfksajdhjks');
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            this.common.tryagain();
        }
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
        alert('herkh');
    };
    EditprofilePage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.getUser();
        this.Editprofile = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, this.emailValidator.bind(this)]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]],
        });
    };
    EditprofilePage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return { invalidEmail: true };
        }
    };
    EditprofilePage.prototype.isValid = function (field) {
        var formField = this.Editprofile.get(field);
        return formField.valid || formField.pristine;
    };
    EditprofilePage.prototype.presentActionSheet = function () {
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
    EditprofilePage.prototype.chooseImage = function (Type) {
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
    EditprofilePage.prototype.getUser = function () {
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
    EditprofilePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getUser();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    EditprofilePage.prototype.editProfile = function (profiledata) {
        var _this = this;
        console.log('ajkshdfjak');
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
    EditprofilePage.prototype.changepwd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editprofile',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/editprofile/editprofile.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>edit profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form [formGroup]="Editprofile" style="height:100%; padding-top: 56px;">  \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n     <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n    \n  <div class="head-sec">\n    <div class="image-wrapper">\n      <img [src]="base64Image">\n    </div>\n    <h2 (click)="presentActionSheet()">EDIT</h2>\n    \n  </div>\n    \n  <div class="input-sec">\n    <ion-list>\n\n      <ion-item>\n          <ion-label stacked>Name</ion-label>\n          <ion-input type="text" placeholder="Kriston Peeter" formControlName="name"></ion-input>\n        </ion-item>\n      <span *ngIf="!isValid(\'name\')" class="validationpop animated bounce">Name required.</span>\n      \n        <ion-item>\n          <ion-label stacked>Email</ion-label>\n          <ion-input type="email" placeholder="kristonpeeter@yahoo.com" formControlName="email" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Phone Number</ion-label>\n          <ion-input type="tel" placeholder="XXX-XXX-XXXX" formControlName="phone" maxLength="12"></ion-input>\n        </ion-item>\n        <h2>User Setting</h2>\n        <ion-item *ngIf=\'profiledata?.regitration_type == "simple_registarion"\' (click)="changepwd()">\n          <p>Change Password</p>\n          <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n  </div>\n  </form> \n</ion-content>\n<ion-footer>\n  <button type="submit" (click)="editProfile(Editprofile)" ion-button full color="green" class="btn2">SAVE</button>\n</ion-footer>\n\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/editprofile/editprofile.html"*/,
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
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map