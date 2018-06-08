import {Component, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController} from 'ionic-angular';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';
import {Geolocation} from '@ionic-native/geolocation';
/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
    selector: 'page-search',
    templateUrl: 'search.html',
})

export class SearchPage {
    disable: boolean;
    SearchForm: FormGroup;
        /**** parameters for autocomplete *****/
    autocompleteItems;//variable used for autocomplete on address field
    public autocomplete: any = {};//variable used for autocomplete on address field
    service = new google.maps.places.AutocompleteService();
    geocoder = new google.maps.Geocoder();
    public latitude: number;
    public longitude: number;
    /************ end ************/
    bit:boolean = false;
    data:any = {};
    categorydata:any = [];
    
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
        private zone: NgZone,
        private geolocation: Geolocation,
    ) {
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        } else {
            this.common.tryagain();
        }
          this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        localStorage.removeItem('filterdata')
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SearchPage');
         // this.currentLocation();
        if(localStorage.getItem('Seachdata')){
            var searchdata = JSON.parse(localStorage.getItem('Seachdata'));
            console.log(searchdata);
            if(searchdata.type == "name"){
                this.SearchForm.patchValue({
                category:searchdata.category
                })
            }else if(searchdata.type == "category"){
                this.SearchForm.patchValue({
                category:searchdata.sub_category_title
                })
            }else{
            console.log('location')
             this.bit = true;
                this.SearchForm.patchValue({
                category:searchdata.category,
//                location:searchdata.location
                })
               this.autocomplete.query = searchdata.location;
            }
            
        }
      
       
    }
    ngOnInit(): any {
        console.log('ngOnInit');
        this.SearchForm = this.formBuilder.group({
            category: [''],
            location: [''],
        })
    }
    
    dismiss() {
        this.viewCtrl.dismiss();
    }
    
    currentLocation() {
        var temp = this;
        console.log('current location');
        this.bit = false;
        //document.getElementsByName("fname");
        document.getElementById('inputaaa').focus();
        
       // this.geolocation.getCurrentPosition().then((resp) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            console.log('getCurrentPosition');
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            temp.latitude = position.coords.latitude;// resp.coords.latitude
            temp.longitude = position.coords.longitude;// resp.coords.longitude
             temp.autocompleteItems = [];
            var geocoder = new google.maps.Geocoder;
            var latlng = pos;
            geocoder.geocode({'location': latlng}, function (results, status) {
                if (status === 'OK') {
                    console.log(results[0]);
                   
                    if (results[0]) {
                        //temp.autocomplete.query = results[0].formatted_address;
                        temp.SearchForm.patchValue({location:results[0].formatted_address})

                    } else {
                        temp.autocomplete.query = '';
                    }
                } else {
                    console.log('Error getting address by location');
                }
            });
             })
//        }).catch((error) => {
//            console.log('Error getting locatio            n', error);
//        });
    }
    }
    Search(filterformdata) {
            console.log(filterformdata.value);
            filterformdata.value.latitude = this.latitude;
            filterformdata.value.longitude = this.longitude;
            filterformdata.value.type = 'name';
            this.viewCtrl.dismiss({searchedlist: filterformdata.value,type:'name'});
            localStorage.setItem('Seachdata',JSON.stringify(filterformdata.value));
    }
      /****** function used for autocomplete prediction ***********/
    updateSearch() {
        console.log('update');
          this.categorydata = [];
        console.log(this.autocomplete.query);
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        let me = this;
        this.service.getPlacePredictions({input: this.autocomplete.query}, function (predictions, status) {
            me.autocompleteItems = [];
            console.log('here');
            me.zone.run(function () {
                predictions.forEach(function (prediction) {
                    console.log(prediction);
                    me.autocompleteItems.push(prediction.description);
                });
                console.log(me.autocompleteItems);
            });
        });
    }
    /****** function used for choose item from autocomplete prediction ***********/
    chooseItem(item,formdata) {
        var temp = this;
        console.log(item);
        console.log(formdata.value);
        this.autocomplete.query = item;
        this.autocompleteItems = [];
        this.geocoder.geocode({'address': item}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
                console.log(results[0].geometry.location.lat());
                console.log(results[0].geometry.location.lng());
                temp.latitude = results[0].geometry.location.lat();
                temp.longitude = results[0].geometry.location.lng();
                formdata.value.latitude = results[0].geometry.location.lat();
                formdata.value.longitude = results[0].geometry.location.lng();
                formdata.value.type = 'location';
                temp.viewCtrl.dismiss({searchedlist: formdata.value,type:'location'});
                localStorage.setItem('Seachdata',JSON.stringify(formdata.value));
                
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
       /****** functions used for run ionViewDidLoad() function after clear the search bar ************/
    ionClear() {
        console.log('clear');
        this.autocomplete.query = '';
        this.autocomplete.query = null;
        this.autocomplete.query = {};
    }
    
    ionClearCategory(event){
    console.log(event);
    this.data.term = '';
    this.categorydata = [];
    this.disable = false;
}

CategorySearch(selectedItem){
    console.log(selectedItem);
    //console.log(formdata.value);
    selectedItem.latitude = this.latitude;
    selectedItem.longitude = this.longitude;
    selectedItem.type = 'category';
    this.data.term = selectedItem.sub_category_title;
    this.categorydata = [];
    let options = this.appsetting.header();
    this.viewCtrl.dismiss({searchedlist: selectedItem,type:'category'});
    localStorage.setItem('Seachdata',JSON.stringify(selectedItem));
}
    categories(d){
    console.log(d);
        var temp = this;
        if (d.length > 2) {
            this.disable = true;
            this.autocompleteItems = [];
            this.http.get(this.appsetting.url + 'categories/get').map(res => res.json()).subscribe(response => {
            console.log(response);
            this.categorydata = [];
            response.forEach(function (value, key) {
                value.sub_category.forEach(function (val, ke) {
                    if (!val.sub_category_image) {
                        val.sub_category_image = 'assets/imgs/iconnot.png';
                        // console.log(val);
                        if (val.status == true) {
                            temp.categorydata.push(val);                      
                            } else {
          
                        }
                    } else {
                        if (val.status == true) {
                            temp.categorydata.push(val);
                        } else {
                            
                        }
                    }
                })
            })
            
            this.categorydata.sort(function (a, b) {
                if (a.sub_category_title < b.sub_category_title) return -1;
                else if (a.sub_category_title > b.sub_category_title) return 1;
                return 0;
            });
        })
        } else {
            this.disable = false;
        }
}
funClicked(){
    this.bit = true;
    this.autocomplete.query = '';
    
}

    Reset(){
        this.viewCtrl.dismiss({searchedlist: '',type:'reset'});
    }

}
