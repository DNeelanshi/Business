import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController, AlertController} from 'ionic-angular';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';
import {LoginPage} from '../login/login';
import * as moment from 'moment';
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
    currentdate1: any;
    year: string;
    month: string;
    day: string;
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
        //alert('rahul');
        console.log(new Date());

        this.currentdate = moment(new Date().toISOString()).locale('es').format();
        console.log(this.currentdate);
        var time = moment(new Date().toISOString()).locale('es').format('hh:mm');
        console.log(time);
        var a = moment(new Date().toISOString()).locale('es').format('DD-MM-YYYY');
        console.log(a);
        var b = a.split('-');
        console.log(b);
        this.day = b[0];
        this.month = b[1];
        this.year = b[2];
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
            //endTime: ['', [Validators.required]],
            specialAccomo: [''],
        })
    }
    
    dismiss() {
        this.viewCtrl.dismiss();
    }
    
    MakeBooking(BookingForm) {
        console.log(BookingForm.value);
        var startTime = BookingForm.value.startTime.split(':');
        console.log(startTime);
        console.log(startTime[0]);
        //var endTime = "";
        var a = BookingForm.value.date+' '+BookingForm.value.startTime
        var endTime = new Date(a);
        var compareTo = new Date();
        //var mins = moment.utc(moment(endTime, "HH:mm:ss").diff(moment(BookingForm.value.startTime, "HH:mm:ss"))).format("mm")
        console.log('enddate:'+endTime);
        console.log(compareTo);
        console.log(a);
        var isAfter = moment(endTime).isAfter(compareTo);
         console.log(isAfter);
        return false;
        console.log(window.navigator.onLine);
        if (localStorage.getItem('CurrentUser')) {
           // if(isAfter == true){
            console.log('true');
            this.viewCtrl.dismiss({bookingdata: BookingForm.value});
//            }else{
//                this.common.presentAlert('Book Now','Time must be greater than current time!');
//            }
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

    }


    changedate(event) {
        console.log(event);
        console.log(typeof (event.day));
        console.log(event.month);
        console.log(event.year);
        console.log(typeof (parseInt(this.day)));
        console.log(typeof (parseInt(this.month)));
        console.log(typeof (parseInt(this.year)));
        if (event.day == parseInt(this.day) && event.month == parseInt(this.month) && event.year == parseInt(this.year)) {
            var b = moment(new Date()).format('HH:mm');
            // this.currentdate1 = '2037'
            this.BookingForm.patchValue({
                startTime:b
            })
            console.log(this.currentdate1);
            console.log('matched');
        } else {
           this.currentdate1 = '2037'
           this.BookingForm.patchValue({
                startTime:''
            })
            console.log('not matched');
        }
    }
}
