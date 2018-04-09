import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController} from 'ionic-angular';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';
import {HomePage} from '../home/home';

/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-review',
    templateUrl: 'review.html',
})
export class ReviewPage {
    ReviewForm: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public formBuilder: FormBuilder,
        public appsetting: Appsetting,
        public http: Http,
        public loadingCtrl: LoadingController,
        public common: Common,
        public toastCtrl:ToastController
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
        console.log('ionViewDidLoad ReviewPage');
    }

    ngOnInit(): any {
        console.log('ngOnInit');
        this.ReviewForm = this.formBuilder.group({
            rating: ['', [Validators.required]],
            comment: ['', [Validators.required]],

        })
    }
    onModelChange(event) {
        console.log(event);
    }
    MakeReview(MakeReview) {
        console.log(MakeReview.value);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            let options = this.appsetting.header();
            var postdata = {
//                email: signindata.value.email,
//                password: signindata.value.password,
            }
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
}
