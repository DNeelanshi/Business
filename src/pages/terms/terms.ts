import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import {Appsetting} from '../../providers/appsetting';

/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {
terms = [];
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private http: Http,
      public appsetting: Appsetting,
      ) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
      let options = this.appsetting.header();
            var postdata = {
                rating: this.terms,
            }
            console.log(postdata);
            var serialized = this.appsetting.serializeObj(postdata);
                this.http.post('http://rakesh.crystalbiltech.com/grouptrip/api/galleries/additineraryy', postdata, options).map(res => res.json()).subscribe(response => {
                    console.log(response);
                     
                })
  }

}
