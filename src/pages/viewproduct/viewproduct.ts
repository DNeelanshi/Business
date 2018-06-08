import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, ModalController, ViewController, LoadingController} from 'ionic-angular';
import {SocialSharing} from '@ionic-native/social-sharing';
import {Common} from '../../providers/common';
import {Appsetting} from '../../providers/appsetting';
import {BooknowPage} from '../booknow/booknow';
import {Http} from '@angular/http';
import {HomePage} from '../home/home';
import {LaunchNavigator, LaunchNavigatorOptions} from '@ionic-native/launch-navigator';
import {Geolocation} from '@ionic-native/geolocation';
import {LoginPage} from '../login/login';
import {CallNumber} from '@ionic-native/call-number';
import * as moment from 'moment';

/**
 * Generated class for the ViewproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-viewproduct',
    templateUrl: 'viewproduct.html',
    //pipes: [PhonePipe]

})

export class ViewproductPage {
    favourite: any;
    modaldata: any;
    restaurantdata: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private socialSharing: SocialSharing,
        public toastCtrl: ToastController,
        public modalCtrl: ModalController,
        public ViewCtrl: ViewController,
        public appsetting: Appsetting,
        public http: Http,
        public loadingCtrl: LoadingController,
        public common: Common,
        private launchNavigator: LaunchNavigator,
        private geolocation: Geolocation,
        private callNumber: CallNumber,
        // public phone: PhonePipe
        // private iab: InAppBrowser
    ) {
        if (localStorage.getItem('CurrentUser')) {
            this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
        }

    }

    ionViewDidLoad() {
       // alert('updated df');
        var date = new Date();
        var today_date = new Date(moment(date).format("YYYY-MM-DD") + "T" + "00:00:00.000Z");
        
        console.log('ionViewDidLoad ViewproductPage');
        console.log(this.navParams.get('restdata'));
        let resdata = this.navParams.get('restdata').business_data[0].opening_days_and_timings;
        var a = this.navParams.get('restdata').business_data[0].business_phone_number;
        console.log(typeof (a));
        console.log(a.toString());
        var mystring = a.toString();
        console.log(mystring.replace(/\D+/g, "").replace(/([0-9]{1,3})([0-9]{3})([0-9]{4}$)/gi, "($1) $2-$3"));
        a = mystring.replace(/\D+/g, "").replace(/([0-9]{1,3})([0-9]{3})([0-9]{4}$)/gi, "($1) $2-$3");
        console.log(a);
        this.navParams.get('restdata').business_data[0].business_phone_number = a;
        this.restaurantdata = this.navParams.get('restdata');
        if (this.favourite) {
            if (this.favourite.length > 0) {
                for (var j = 0; j < this.favourite.length; j++) {
                    console.log(this.favourite[j].favorite_business_id);
                    if (this.restaurantdata.business_data[0]._id == this.favourite[j].favorite_business_id) {
                        console.log('matched');
                        this.restaurantdata.fav = 1;
                        break;
                    } else {
                        console.log('not matched');
                        this.restaurantdata.fav = 0;
                        // break;
                    }
                }
            } else {
                this.restaurantdata.fav = 0;
            }
        } else {
            this.restaurantdata.fav = 0;
        }
        this.navParams.get('restdata').business_data[0].opening_days_and_timings.forEach(function(value,key){
            console.log(value);
           value.opening_time = moment(value.opening_time, ["h:mm A"]).format("hh:mm A");
           value.closing_time = moment(value.closing_time, ["h:mm A"]).format("hh:mm A");
//            var dt = moment(value.closing_time, ["h:mm A"]).format("hh:mm A");
//           console.log(dt);
        })
        
        console.log(this.restaurantdata);
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

    /******** function used for open booking modal *****************/
    bookModal() {

        let modal = this.modalCtrl.create(BooknowPage);
        modal.onDidDismiss(data => {
            console.log(data);
            console.log(this.modaldata);
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
                    let options = this.appsetting.header();
                    let postdata = {
                        business_id: this.restaurantdata.business_data[0]._id,
                        order_to: this.restaurantdata._id,
                        order_from: user._id,
                        orderdate: da,
                        orderstart: startdate,
                        orderend: enddate
                    }
                    let serialized = this.appsetting.serializeObj(postdata);
                    this.http.post(this.appsetting.url + 'orders/addOrders', serialized, options).map(res => res.json()).subscribe(response => {
                        console.log(response);
                        if (response.status == true) {
                            this.common.presentConfirm('Book now', response.message, HomePage);
                        } else {
                            this.common.presentAlert('Book now', 'Something went wrong!');
                        }
                    })
                }
            } else {
                this.common.ConfirmFunction('Book Now', 'Please login first to confirm booking!', LoginPage)

            }
        });
        modal.present();
    }

    CheckIn() {
        console.log('Check in');
        if(localStorage.getItem('CurrentUser')){
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        console.log(user._id);
        let options = this.appsetting.header();
        let postdata = {
            user_id: user._id,
            business_id: this.restaurantdata.business_data[0]._id,
            date:new Date().toISOString()
        }
        let serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'checkin', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if (response.status == true) {
                this.restaurantdata = response.data;
                if (this.favourite) {
                    if (this.favourite.length > 0) {
                        for (var j = 0; j < this.favourite.length; j++) {
                            console.log(this.favourite[j].favorite_business_id);
                            if (this.restaurantdata.business_data[0]._id == this.favourite[j].favorite_business_id) {
                                console.log('matched');
                                this.restaurantdata.fav = 1;
                                break;
                            } else {
                                console.log('not matched');
                                this.restaurantdata.fav = 0;
                                // break;
                            }
                        }
                    } else {
                        this.restaurantdata.fav = 0;
                    }
                } else {
                    this.restaurantdata.fav = 0;
                }
                this.common.presentAlert('Check in', response.msg);
            } else {
                this.common.presentAlert('Check in', response.msg);
            }
        })
        }else{
            this.common.presentAlert(' View detail','Login first to check in!')
        }
    }

    ClaimYourBusiness(businessid) {
        console.log('Claim this business');
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        console.log(user._id);
        let options = this.appsetting.header();
        let postdata = {
            user_id: user._id,
            business_id: businessid
        }
        let serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/getClaimRequest', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if (response.status == true) {
                this.common.presentAlert('Claim this business', response.message);
            } else {
                this.common.presentAlert('Claim this business', response.message);
            }
        })
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
                    console.log(JSON.parse(localStorage.getItem('CurrentUser')).favorite);
                    this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                    //console.log(this.favourite);
                    console.log(this.restaurantdata._id);

                    if (this.favourite.length > 0) {
                        for (var j = 0; j < this.favourite.length; j++) {
                            console.log(this.favourite[j].favorite_business_id);
                            if (businessID == this.favourite[j].favorite_business_id) {
                                console.log('matched');
                                this.restaurantdata.fav = 1;
                                break;
                            } else {
                                console.log('not matched');
                                this.restaurantdata.fav = 0;
                                // break;
                            }
                        }
                    } else {
                        this.restaurantdata.fav = 0;
                    }
                    console.log(this.restaurantdata);

                } else {
                    this.http.post(this.appsetting.url + 'user/delete_favarite_business ', serialized, options).map(res => res.json()).subscribe(response => {
                        console.log(response);
                        if (response.status == true) {
                            localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                            console.log(JSON.parse(localStorage.getItem('CurrentUser')).favorite);
                            this.favourite = JSON.parse(localStorage.getItem('CurrentUser')).favorite;
                            if (this.favourite.length > 0) {
                                for (var j = 0; j < this.favourite.length; j++) {
                                    console.log(this.favourite[j].favorite_business_id);
                                    if (businessID == this.favourite[j].favorite_business_id) {
                                        console.log('matched');
                                        this.restaurantdata.fav = 1;
                                        break;
                                    } else {
                                        console.log('not matched');
                                        this.restaurantdata.fav = 0;
                                        // break;
                                    }
                                }
                            } else {
                                this.restaurantdata.fav = 0;
                            }

                        } else {
                            this.common.presentAlert('View detail', 'Something went wrong!')
                        }
                    })
                }
            })
        } else {
            this.common.ConfirmFunction('Favourite', 'Please login first to make favourite!', LoginPage)
        }
    }

    /*********** Function for launch navigator after click on address ***************/
    LaunchNavigator() {
        console.log(this.restaurantdata.business_data[0].location.coordinates);
        //return false;
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log('getCurrentPosition');
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            var start = [resp.coords.latitude, resp.coords.longitude]
            let options: LaunchNavigatorOptions = {
                start: start,
                //app: LaunchNavigator.APPS.UBER
            };
            var lat = this.restaurantdata.business_data[0].location.coordinates[1];
            var long = this.restaurantdata.business_data[0].location.coordinates[0];
            var destination = [lat, long];
            this.launchNavigator.navigate(destination, options)
                .then(
                success => console.log('Launched navigator'),
                error => console.log('Error launching navigator', error)
                );

        })
    }

    /******** Function for open website url in browser ************/
    OpenWebsiteInfo(link) {
        console.log(link);
        this.common.InappBrowser(link);
    }
    
    DialNumber(phone) {
        this.callNumber.callNumber(phone, true).then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }

}
