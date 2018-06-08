import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, Events, LoadingController} from 'ionic-angular';
import {LogintwoPage} from '../logintwo/logintwo';
import {ForgottwoPage} from '../forgottwo/forgottwo';
import {AddbusinessPage} from '../addbusiness/addbusiness';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Http} from '@angular/http';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {FCM} from '@ionic-native/fcm';
import {HomePage} from '../home/home';
import {ForgotPage} from '../forgot/forgot';

/**
 * Generated class for the SignuptwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-signuptwo',
    templateUrl: 'signuptwo.html',
})
export class SignuptwoPage {
    SignupForm: FormGroup;
    public type = 'password';
    public Ctype = 'password';
    public showPass = false;
    public showCpass = false;
    public iconname = 'eye';
    public iconname1 = 'eye';
    public myColors: any = [];
    bar0: string = '#DDD';
    bar1: string = '#DDD';
    bar2: string = '#DDD';
    bar3: string = '#DDD';
    bar4: string = '#DDD';
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        private http: Http,
        public appsetting: Appsetting,
        public common: Common,
        public toastCtrl: ToastController,
        public events: Events,
        public loadingCtrl: LoadingController,
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
        console.log('ionViewDidLoad SignuptwoPage');
    }

    ngOnInit(): any {
        console.log('ngOnInit');
        this.SignupForm = this.formBuilder.group({
            fname: ['', [Validators.required]],
            lname: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            email: ['', [Validators.required, this.emailValidator.bind(this)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            cpassword: ['', [Validators.required, Validators.minLength(6)]],
        }, {validator: this.matchingPasswords('password', 'cpassword')},
        );
    }

    emailValidator(control: FormControl): {[s: string]: boolean} {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return {invalidEmail: true};
        }
    }

    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): {[key: string]: any} => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        }
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

    showCPassword() {
        console.log('showCpassword');
        this.showCpass = !this.showCpass;

        if (this.showCpass) {
            this.Ctype = 'text';
            this.iconname1 = 'eye-off';
        } else {
            this.Ctype = 'password';
            this.iconname1 = 'eye';
        }
    }

    isValid(field: string) {
        let formField = this.SignupForm.get(field);
        return formField.valid || formField.pristine;
    }

    CreateAccount(formdata) {
        console.log(formdata.value);
        console.log(formdata.value.password.indexOf(' '));
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            if (formdata.value.password.indexOf(' ') != 0) {
                let options = this.appsetting.header();
                this.fcm.getToken().then(token => {
                    //console.log('Tokenid-->' + token);
                    var postdata = {
                        firstname: formdata.value.fname,
                        lastname: formdata.value.lname,
                        email: formdata.value.email,
                        phone_number: formdata.value.phone,
                        role: 'business',
                        divice_token:token,
                        password: formdata.value.password
                    }
                    var serialized = this.appsetting.serializeObj(postdata);
                    var Loading = this.loadingCtrl.create({
                        spinner: 'bubbles',
                        content: 'Loading...'
                    });
                    Loading.present().then(() => {
                        this.http.post(this.appsetting.url + 'users/registration', serialized, options).map(res => res.json()).subscribe(response => {
                            console.log(response);
                            Loading.dismiss();
                            if (response.status == true) {
                                localStorage.removeItem('filterdata');
                                localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                                this.events.publish('Loggedin', 'loginpage');
                                this.navCtrl.push(AddbusinessPage);
                            } else {
                                this.common.presentAlert('Signup', response.message);
                            }
                        })
                    })
                }, err => {
                    console.log(err);
                })
            } else {
                this.common.presentAlert('Signup', 'Space not allowed in password.');
            }
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
    }

    pass_strength(pass) {
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
        } else if (mediumRegularExp.test(pass.value)) {
            console.log('medium');
            this.bar0 = '#FFA500';
            this.bar1 = '#FFA500';
            this.bar2 = '#DDD';
            this.bar3 = '#DDD';
            this.bar4 = '#DDD';
        } else {
            console.log('low');
            this.bar0 = '#FF0000';
            this.bar1 = '#DDD';
            this.bar2 = '#DDD';
            this.bar3 = '#DDD';
            this.bar4 = '#DDD';
        }
    }

    forgot() {
        this.navCtrl.push(ForgotPage);
    }

    add() {
        this.navCtrl.push(AddbusinessPage);
    }
    login() {
        this.navCtrl.push(LogintwoPage);
    }

}
