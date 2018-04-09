import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, LoadingController, Events, AlertController} from 'ionic-angular';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Http} from '@angular/http';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {HomePage} from '../home/home';
import {LoginPage} from '../login/login';
import {GetstartPage} from '../getstart/getstart';

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-forgot',
    templateUrl: 'forgot.html',
})
export class ForgotPage {
    ForgotForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        private http: Http,
        public appsetting: Appsetting,
        public common: Common,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController,
        public events: Events,
        public alertCtrl: AlertController
    ) {
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        } else {
            this.common.tryagain();
        }
    }
    ngOnInit(): any {
        console.log('ngOnInit');
        this.ForgotForm = this.formBuilder.group({
            email: ['', [Validators.required, this.emailValidator.bind(this)]],
        });
    }
    emailValidator(control: FormControl): {[s: string]: boolean} {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return {invalidEmail: true};
        }
    }
    isValid(field: string) {
        let formField = this.ForgotForm.get(field);
        return formField.valid || formField.pristine;
    }

    forgotpassword(formdata) {
        console.log(formdata.value);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            let options = this.appsetting.header();
            var postdata = {
                email: formdata.value.email,
            }
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(() => {
                this.http.post(this.appsetting.url + 'users/forgetpassword', serialized, options).map(res => res.json()).subscribe(response => {
                    console.log(response);
                    Loading.dismiss();
                    if (response.status == true) {
                        if(response.data){
                        localStorage.setItem('CurrentUser', JSON.stringify(response.data.all));
                        }
                        this.events.publish('Loggedin', 'loginpage');
                        let alert = this.alertCtrl.create({
                            title: 'Forgot Password',
                            message: 'Please check your email to reset password',
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'submit',
                                    handler: () => {
                                        console.log('Submit clicked');
                                        this.navCtrl.push(GetstartPage);
                                    }
                                }
                            ]
                        });
                        alert.present();

                    } else {
                        this.common.presentAlert('Forgot Password', response.message);
                    }
                })
            })
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
    ionViewDidLoad() {
        console.log('ionViewDidLoad ForgotPage');
    }

}
