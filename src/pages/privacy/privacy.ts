import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
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
    selector: 'page-privacy',
    templateUrl: 'privacy.html',
})
export class PrivacyPage {
    role: any;
    privacy: any;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private http: Http,
        public appsetting: Appsetting, ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PrivacyPage');
        this.role = JSON.parse(localStorage.getItem('CurrentUser')).role;
        this.get();
    }
    
    get() {
        var postdata;
        console.log(this.role);
        let options = this.appsetting.header();
        if(this.role == 'member'){
        postdata = {
            pagename: 'privacy_policy(user)'
        }
        }else{
        postdata = {
            pagename: 'privacy_policy(business)'
        }
        }
      
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'static/getstaticpagedata', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
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
    }
}
