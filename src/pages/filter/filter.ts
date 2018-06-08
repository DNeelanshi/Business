import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController} from 'ionic-angular';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';
/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-filter',
    templateUrl: 'filter.html',
})
export class FilterPage {
    services: any;
    FilterForm: any;
    range: any;
    filterd:any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public formBuilder: FormBuilder,
        public appsetting: Appsetting,
        public http: Http,
        public loadingCtrl: LoadingController,
        public common: Common,
        public toastCtrl: ToastController
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
        console.log('ionViewDidLoad FilterPage');
        console.log(this.navParams.get('serviceslist'));
        this.services = this.navParams.get('serviceslist');
        if(localStorage.getItem('filterdata')){
            this.filterd = JSON.parse(localStorage.getItem('filterdata'));
//            if(this.filterd.online == 1){
//                this.filterd.online = "yes";
//            }else{
//                 this.filterd.online = "no";
//            }
            this.FilterForm.patchValue({
                services:this.filterd.services,
                range:this.filterd.range,
                zipcode:this.filterd.zipcode,
                online1:this.filterd.online1,
                offline:this.filterd.offline
            })
        }
    }
    ngOnInit(): any {
        console.log('ngOnInit');
        this.FilterForm = this.formBuilder.group({
            services: [''],
            range: [''],
            zipcode: [''],
            online: [''],
            online1: [false],
            offline:[false]

        })
    }
    
    dismiss() {
        this.viewCtrl.dismiss();
    }
    
    Search(filterformdata) {
        console.log(filterformdata.value);
            if (filterformdata.value.online1 == true && filterformdata.value.offline == true) {
                filterformdata.value.online = '';
            }else if (filterformdata.value.online1 == true) {
                filterformdata.value.online = 1;
            }else if (filterformdata.value.offline == true) {
                filterformdata.value.online = 0;
            }
            
            if (filterformdata.value.online1 == false && filterformdata.value.offline == false) {
                filterformdata.value.online = '';
            }
            
        if (filterformdata.value.range != undefined) {
            filterformdata.value.range = filterformdata.value.range;
        } else {
            filterformdata.value.range = '';
        }
        
        console.log(filterformdata.value);
       // return false;
        
        let options = this.appsetting.header();
             this.viewCtrl.dismiss({searchedlist: filterformdata.value,type:'search'});
             localStorage.setItem('filterdata',JSON.stringify(filterformdata.value));
    }
    
    Reset(){
        this.viewCtrl.dismiss({searchedlist: '',type:'reset'});
    }

}
