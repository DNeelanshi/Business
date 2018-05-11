import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewartistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newartist',
  templateUrl: 'newartist.html',
})
export class NewartistPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      
       ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewartistPage');
   
  }

}
