import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LogintwoPage } from '../logintwo/logintwo';

/**
 * Generated class for the GetstartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-getstart',
  templateUrl: 'getstart.html',
})
export class GetstartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     // alert('get started page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetstartPage'); 
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  loginbs(){
    this.navCtrl.push(LogintwoPage);
  }

}
