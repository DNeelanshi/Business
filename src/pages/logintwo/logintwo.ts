import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, AlertController, Events, ToastController, LoadingController} from 'ionic-angular';
import {SignuptwoPage} from '../signuptwo/signuptwo';
import {ForgottwoPage} from '../forgottwo/forgottwo';
import {AddbusinessPage} from '../addbusiness/addbusiness';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {Http} from '@angular/http';
import {HomePage} from '../home/home';
import {ForgotPage} from '../forgot/forgot';
import {ReservationsPage} from '../reservations/reservations';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import {GetstartPage} from '../getstart/getstart';
import {FCM} from '@ionic-native/fcm';

/**
 * Generated class for the LogintwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-logintwo',
    templateUrl: 'logintwo.html',
})
export class LogintwoPage {
    userData: {id: any; email: any; first_name: any; last_name: any; picture: any; username: any;};
    SigninForm: FormGroup;
    public type = 'password';
    public showPass = false;
    public iconname = 'eye';
    constructor(
        public platform: Platform,
        public navCtrl: NavController,
        public navParams: NavParams,
        private alertCtrl: AlertController,
        public formBuilder: FormBuilder,
        public appsetting: Appsetting,
        public http: Http,
        public events: Events,
        public common: Common,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController,
        private fb: Facebook,
        private fcm: FCM
    ) {
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        } else {
            this.common.tryagain();

        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LogintwoPage');
        this.platform.ready().then(() => {
            var lastTimeBackPress = 0;
            var timePeriodToExit = 2000;

            this.platform.registerBackButtonAction(() => {
                // get current active page
                let view = this.navCtrl.getActive();
                if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                    this.platform.exitApp(); //Exit from app
                } else {
                    // alert('Press back again to exit App?');
                    let toast = this.toastCtrl.create({
                        message: 'Press back again to exit from app?',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    lastTimeBackPress = new Date().getTime();
                }
            });
        });
    }
    ngOnInit(): any {
        console.log('ngOnInit');
        this.SigninForm = this.formBuilder.group({
            email: ['', [Validators.required, this.emailValidator.bind(this)]],
            password: ['', [Validators.required]],
        });
        // this.tryagain();
    }

    emailValidator(control: FormControl): {[s: string]: boolean} {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return {invalidEmail: true};
        }
    }
    isValid(field: string) {
        let formField = this.SigninForm.get(field);
        return formField.valid || formField.pristine;
    }
    showPassword() {
        console.log('showpassword');
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
            this.iconname = 'eye-off';
        } else {
            this.type = 'password';
            this.iconname = 'eye';
        }
    }
    Signin(signindata) {
        console.log(signindata.value);
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            let options = this.appsetting.header();
//            this.fcm.getToken().then(token => {
//                console.log('Tokenid-->' + token);
                var postdata = {
                    email: signindata.value.email,
                    password: signindata.value.password,
                    divice_token: 'asdf',//token,
                    role: 'business'
                }
                console.log(postdata);
                var serialized = this.appsetting.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    content: 'Loading...'
                });
                Loading.present().then(() => {
                    this.http.post(this.appsetting.url + 'users/loginuser', serialized, options).map(res => res.json()).subscribe(response => {
                        console.log(response);
                        Loading.dismiss();
                        if (response.status == true) {
                            localStorage.setItem('CurrentUser', JSON.stringify(response.userinfo));
                            this.events.publish('Loggedin', 'loginpage');
                            this.appsetting.userprofile = response.userinfo;
                            if (response.userinfo.business_data.length > 0) {
                                this.navCtrl.push(ReservationsPage);
                            } else {
                                this.navCtrl.push(AddbusinessPage);
                            }
                        } else {
                            this.common.presentAlert('Login', response.message);
                        }

                    })
                })
//            }, err => {
//                console.log(err);
//            })


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

    Facebooklogin() {
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then((res: FacebookLoginResponse) => {
                console.log('Logged into Facebook!', JSON.stringify(res))
                let userId = res.authResponse.userID;
                let accesstoken = res.authResponse.accessToken;
                this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                    this.userData = {
                        id: profile['id'],
                        email: profile['email'],
                        first_name: profile['first_name'],
                        last_name: profile['last_name'],
                        picture: profile['picture_large']['data']['url'],
                        username: profile['name']
                    }
                    console.log('User profile');
                    console.log(this.userData);
                    console.log('User profile stringify');
                    console.log(JSON.stringify(this.userData));
                    console.log('rahul');
                    console.log(window.navigator.onLine);
                    if (window.navigator.onLine == true) {
                        let options = this.appsetting.header();
                        //                this.fcm.getToken().then(token => {
                        //                    alert(token);
                        //                })
                        var postdata = {
                            fb_id: this.userData.id,
                            firstname: this.userData.first_name,
                            lastname: this.userData.last_name,
                            email: this.userData.email,
                            role: 'business',
                            regitration_type: 'facebook',
                            divice_token: 'ajsdfja',
                            profile_pic: this.userData.picture,
                            password: this.userData.id,
                        }
                        var serialized = this.appsetting.serializeObj(postdata);
                        var Loading = this.loadingCtrl.create({
                            spinner: 'bubbles',
                            content: 'Loading...'
                        });
                        Loading.present().then(() => {
                            this.http.post(this.appsetting.url + 'users/fbregistration', serialized, options).map(res => res.json()).subscribe(response => {
                                console.log(response);
                                Loading.dismiss();
                                if (response.status == true) {
                                    //alert('succes facebook');
                                    if (response.data) {
                                        localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                                        this.events.publish('Loggedin', 'loginpage');
                                        this.navCtrl.push(HomePage);
                                    } else {
                                        localStorage.setItem('CurrentUser', JSON.stringify(response.userinfo));
                                        this.events.publish('Loggedin', 'loginpage');
                                        this.navCtrl.push(HomePage);
                                    }

                                } else {
                                    //alert('fail facebook!');
                                    this.common.presentAlert('Signin', response.message);
                                }


                            })
                        })

                        //}).catch((error: any) => console.log(error));
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
                });

            })
            .catch(e => {
                console.log('Error logging into Facebook', JSON.stringify(e))
            });
    }
    home() {
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            this.events.publish('skip', 'skip');
            this.navCtrl.push(HomePage);
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
    signup() {
        this.navCtrl.push(SignuptwoPage);
    }

    forgot() {
        this.navCtrl.push(ForgotPage);
    }

    add() {
        this.navCtrl.push(AddbusinessPage);
    }

    getstart() {
        this.navCtrl.push(GetstartPage);
    }

}
