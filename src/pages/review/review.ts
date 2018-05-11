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
    resdetail: any;
    ReviewForm: any;
    data:any = {};
      limit: number = 40;
    truncating = true;
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
        this.GetReview();
        console.log(this.navParams.get('prod_id'));
        this.resdetail = this.navParams.get('prod_id');
        this.data.rate = this.resdetail.avg;
         console.log(this.navParams.get('prod_id').business_data[0]._id);
        console.log(JSON.parse(localStorage.getItem('CurrentUser')));
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
                user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                business_id: this.navParams.get('prod_id').business_data[0]._id,
                stars:MakeReview.value.rating,
                comment:MakeReview.value.comment
            }
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(() => {
                this.http.post(this.appsetting.url + 'postReview', serialized, options).map(res => res.json()).subscribe(response => {
                    console.log(response);
                    Loading.dismiss();
                    if(response.status == true){
                        this.common.presentAlert('Review', response.msg);
                        this.navCtrl.push(HomePage);
                    }else{
                         this.common.presentAlert('Review', response.msg);
                          
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
    GetReview(){
         let options = this.appsetting.header();
            var postdata = {
                business_id: this.navParams.get('prod_id').business_data[0]._id,
            }
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(() => {
                this.http.post(this.appsetting.url + 'getReview', serialized, options).map(res => res.json()).subscribe(response => {
                    console.log(response);
                    Loading.dismiss();
                    if(response.status == true){
                        if(this.resdetail.review.length>0){
                        this.resdetail.review.forEach(function(value,key){
                            console.log(value);
                            response.userinfo.forEach(function(val,ke){
                                console.log(val)
                                if(value.user_id == val._id){
                                value.firstname = val.firstname;
                                value.lastname = val.lastname;
                                value.profile_pic = val.profile_pic;
                                }
                            })
                        })
                        console.log(this.resdetail);
                        }
                    }else{
                        
                          
                    }
                })
            })
    }
}
