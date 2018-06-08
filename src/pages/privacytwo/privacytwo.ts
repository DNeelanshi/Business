import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, Events} from 'ionic-angular';
import {Http} from '@angular/http';
import {Appsetting} from '../../providers/appsetting';
/**
 * Generated class for the PrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-privacytwo',
    templateUrl: 'privacytwo.html',
})
export class PrivacytwoPage {
    role: any;
    privacy: any;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private http: Http,
        public appsetting: Appsetting,
        public loadingCtrl: LoadingController,public events: Events, ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PrivacytwoPage');
        this.get();
    }
    
    get() {
        var postdata;
        let options = this.appsetting.header();
        postdata = {
            pagename: 'privacy_policy(user)'
        }

      
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(() => {
        this.http.post(this.appsetting.url + 'static/getstaticpagedata', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            Loading.dismiss();
            if(response.status == true){
                if(response.data[0].pageimage){
                    response.data[0].loaded = true;
                }else{
                    response.data[0].loaded = false;
                }
            this.privacy = response.data[0];
            }else{
                
            }
        })
            })
    }
}
