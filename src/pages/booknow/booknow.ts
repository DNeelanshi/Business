import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController, AlertController} from 'ionic-angular';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';
import {LoginPage} from '../login/login';
import moment from 'moment';
/**
 * Generated class for the BooknowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-booknow',
    templateUrl: 'booknow.html',
})
export class BooknowPage {
    minute: any;
    hours: any;
    currentdate: any;
    BookingForm: any;
    data: any = {};
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public formBuilder: FormBuilder,
        public appsetting: Appsetting,
        public http: Http,
        public loadingCtrl: LoadingController,
        public common: Common,
        public toastCtrl: ToastController,
        public alertCtrl: AlertController
    ) {
        console.log('rahul');
        console.log(new Date());
        this.currentdate = moment(new Date().toISOString()).locale('es').format();
        console.log(this.currentdate);
        var a = new Date();
        console.log(a.getTime());
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        } else {
            this.common.tryagain();

        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BooknowPage');
    }
    ngOnInit(): any {
        console.log('ngOnInit');
        this.BookingForm = this.formBuilder.group({
            date: ['', [Validators.required]],
            startTime: ['', [Validators.required]],
            endTime: ['', [Validators.required]],
            specialAccomo: [''],
        })
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    MakeBooking(BookingForm) {
        console.log(BookingForm.value);
       // return false;
        var startTime = BookingForm.value.startTime.split(':');
        console.log(startTime);
        console.log(startTime[0]);
        var endTime = BookingForm.value.endTime.split(':');
        console.log(endTime[0]);
       
        if(startTime[0] < endTime[0]){
            console.log('true');
        console.log(window.navigator.onLine);
        if (localStorage.getItem('CurrentUser')) {
            this.viewCtrl.dismiss({bookingdata: BookingForm.value});
        } else {
            let alert = this.alertCtrl.create({
                title: 'Book now',
                message: 'Please login first to confirm booking!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Login',
                        handler: () => {
                            console.log('login clicked');
                            this.navCtrl.push(LoginPage);
                        }
                    }
                ]
            });
            alert.present();
        }
    }else{
        let alert = this.alertCtrl.create({
                title: 'Book now',
                message: 'End time must be greater than start time!',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            console.log('Ok clicked');
                            
                        }
                    }
                ]
            });
            alert.present();
            console.log('Please select time greater than start time');
        }
    }
}
