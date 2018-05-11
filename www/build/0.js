webpackJsonp([0],{

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsbusinessPageModule", function() { return TermsbusinessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__termsbusiness__ = __webpack_require__(878);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsbusinessPageModule = (function () {
    function TermsbusinessPageModule() {
    }
    TermsbusinessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__termsbusiness__["a" /* TermsbusinessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__termsbusiness__["a" /* TermsbusinessPage */]),
            ],
        })
    ], TermsbusinessPageModule);
    return TermsbusinessPageModule;
}());

//# sourceMappingURL=termsbusiness.module.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsbusinessPage; });
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
var TermsbusinessPage = (function () {
    function TermsbusinessPage(navCtrl, navParams, http, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
    }
    TermsbusinessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
        this.get();
    };
    TermsbusinessPage.prototype.get = function () {
        var _this = this;
        var options = this.appsetting.header();
        var postdata = {
            pagename: 'terms&condition(business)'
        };
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
    TermsbusinessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-termsbusiness',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/termsbusiness/termsbusiness.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="green">\n      <button ion-button menuToggle style="display:block !important;">\n        <ion-icon><img src="assets/imgs/menuicon.png" class="menuicon"></ion-icon>\n      </button>\n    <ion-title>terms & conditions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="banner">\n        <img [src]="terms?.pageimage" (load)="terms.loaded = true" [hidden]="!terms?.loaded" >\n             <img src="assets/imgs/no-image.png" [hidden]="terms?.loaded">\n      </div>\n      <div class="contant-sec" padding>\n<!--        <h2>Dummy text of the printing</h2>-->\n<p [innerHTML]="terms?.pagedata"></p></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/businesslisting/businesslisting ios/business/src/pages/termsbusiness/termsbusiness.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */]])
    ], TermsbusinessPage);
    return TermsbusinessPage;
}());

//# sourceMappingURL=termsbusiness.js.map

/***/ })

});
//# sourceMappingURL=0.js.map