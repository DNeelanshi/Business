import {Component, ElementRef, ViewChild, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, Events, LoadingController, ActionSheetController, AlertController} from 'ionic-angular';
import {ViewreservationPage} from '../viewreservation/viewreservation';
import {ReservationsPage} from '../reservations/reservations';
import {LogintwoPage} from '../logintwo/logintwo';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Http} from '@angular/http';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {Camera, CameraOptions} from '@ionic-native/camera';
import * as moment from 'moment';
/**
 * Generated class for the AddbusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
    selector: 'page-addbusiness',
    templateUrl: 'addbusiness.html',
})
export class AddbusinessPage {
    currentdate: string;
    businessid: any;
    data: any = {};//variable used for ngModel
    img1: any;
    img2: any;
    img3: any;
    bit: number = 0;
    base64Image = [];//variable used for show selected image
    ImageToSend = [];//variable used for send base64 image to api
    senddays = [];//variable used for send days as comma separated
    sendopeningtime = [];//variable used for send openingtime as comma separated
    sendclosingtime = [];//variable used for  send closingtime as comma separated
    daytime = [];//array used for display selected day,openingtime and closing time.
    @ViewChild('map') mapElement: ElementRef;
    AddbusinessForm: any;//variable used for formgroup
    /**** parameters for autocomplete *****/
    autocompleteItems;//variable used for autocomplete on address field
    public autocomplete;//variable used for autocomplete on address field
    service = new google.maps.places.AutocompleteService();
    geocoder = new google.maps.Geocoder();
    public latitude: number;
    public longitude: number;
    category: any = [];//variable used for store category list
    services: any = [];//variable used for store services
    /**** end *****/
    postalcode: any = 0;
    category_id:any;
    category_title:any;
    service_id:any;
    service_title:any;
     constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        private http: Http,
        public appsetting: Appsetting,
        public common: Common,
        public loadingCtrl: LoadingController,
        private zone: NgZone,
        public camera: Camera,
        public actionSheetCtrl: ActionSheetController,
        public events: Events,
        public alertCtrl: AlertController
    ) {
        // alert('updated ggg');
       // alert('rahul add business');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        } else {
            this.common.tryagain();

        } 
        console.log(this.daytime);
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
          var temp = this;
        console.log('ionViewDidLoad AddbusinessPage');
        this.http.get(this.appsetting.url + 'categories/get').map(res => res.json()).subscribe(response => {
            console.log(response);
            response.forEach(function (value, key) {
                temp.category.push(value)
                value.sub_category.forEach(function (val, ke) {
                    //console.log(val);
                    temp.services.push(val);
                });
            });
            this.services.sort(function (a, b) {
                if (a.sub_category_title < b.sub_category_title) return -1;
                else if (a.sub_category_title > b.sub_category_title) return 1;
                return 0;
            });
        })
    }

    ionViewDidLoad() {
        console.log(new Date());
        this.currentdate = moment(new Date().toISOString()).locale('es').format();
        console.log(this.currentdate);
        console.log(this.services)

    }
    ngOnInit(): any {
        console.log('ngOnInit');
       
        this.AddbusinessForm = this.formBuilder.group({
            //businesstype: ['', [Validators.required]],
            businessname: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            address: ['', [Validators.required]],
            description: ['', [Validators.required]],
//            days: [''],
            // openinghours: [''],
            // closinghours: [''],
            services: ['', [Validators.required]],
            instagramlink: [''],
            facebooklink: [''],
            twitterlink: [''],
            veteranowned: ['', [Validators.required]],
            onlinemarketplace: ['', [Validators.required]],
            accept: [false],
            reservation: [false],
            zipcode: ['', [Validators.required]],
            websiteurl: [''],
            /******* controls for days,opening and closing hours *************/
            monday:[false],
            mondayopeninghours: [''],
            mondayclosinghours: [''],
            tuesday:[false],
            tuesdayopeninghours: [''],
            tuesdayclosinghours: [''],
            wednesday:[false],
            wednesdayopeninghours: [''],
            wednesdayclosinghours: [''],
            thursday:[false],
            thursdayopeninghours: [''],
            thursdayclosinghours: [''],
            friday:[false],
            fridayopeninghours: [''],
            fridayclosinghours: [''],
            saturday:[false],
            saturdayopeninghours: [''],
            saturdayclosinghours: [''],
            sunday:[false],
            sundayopeninghours: [''],
            sundayclosinghours: [''],
        });
    }
    /********* function for display services as per category **************/
    selectedCat(id) {
        var temp = this;
        console.log('id');
        console.log(id);
        this.category.forEach(function (value, key) {
            console.log(value);
            console.log(key);
            value.sub_category.forEach(function (val, ke) {
                if (val._id == id) {
                    console.log(value);
                    temp.category_id = value._id;
                    temp.category_title = value.title
//                    temp.service_id = id;
                     temp.service_title = val.sub_category_title;
                }
            });
        })
        console.log(this.category_id);
        console.log(this.category_title)
        console.log(this.services);
    }
    //    selectedService(serviceid) {
    //        var temp = this;
    //        console.log(serviceid);
    //        this.services.forEach(function (value, key) {
    //            console.log(value);
    //            console.log(key);
    //            if (value._id == serviceid) {
    //                console.log(value);
    //                temp.data.service_title = value.sub_category_title;
    //            }
    //
    //        })
    //    }
    selectedBusiness(event) {
        console.log(event);
    }
    checkbox(legal) {
        console.log(legal.value);
        if (legal.value == false) {
            return {accept: false}
        }

    }
    /****** function used for autocomplete prediction ***********/
    updateSearch() {
        console.log('update');
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
    chooseItem(item) {
        var temp = this;
        console.log(item);
        this.autocomplete.query = item;
        this.autocompleteItems = [];
        this.geocoder.geocode({'address': item}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
                console.log(results);
                console.log(results[0].geometry.location.lat());
                console.log(results[0].geometry.location.lng());
                temp.latitude = results[0].geometry.location.lat();
                temp.longitude = results[0].geometry.location.lng();
                results[0].address_components.forEach(function (value, key) {
                    console.log(key);
                    console.log(value);
                    value.types.forEach(function (val, key) {
                        console.log(val);
                        console.log(key);
                        if (val == "postal_code") {
                            temp.postalcode = value.long_name;
                            console.log(temp.postalcode);
                        }
                    })
                })

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    reservation() {
        this.navCtrl.push(ReservationsPage);
    }

    /****** function used for manage selected days,opening and closing time ***********/
    // closingtime(timedata) {
    //     var temp = this;
    //     console.log(timedata.value);
    //     console.log(timedata.value.days);
    //     console.log(timedata.value.closinghours);
    //     console.log(timedata.value.openinghours);
    //     if (timedata.value.days && timedata.value.closinghours && timedata.value.openinghours) {
    //         var a = timedata.value.openinghours.split(':');
    //         var b = timedata.value.closinghours.split(':');
    //         if (b[0] > a[0]) {
    //             if (a[0] > 11) {
    //                 // console.log(timedata.value.openinghours.includes("PM"));
    //                 timedata.value.openinghours = timedata.value.openinghours + ' PM';
    //             } else {
    //                 //console.log(timedata.value.openinghours.includes("AM"));
    //                 timedata.value.openinghours = timedata.value.openinghours + ' AM';
    //             }
    //             console.log(timedata.value.openinghours);
    //             if (b[0] > 11) {
    //                 timedata.value.closinghours = timedata.value.closinghours + ' PM';
    //             } else {
    //                 timedata.value.closinghours = timedata.value.closinghours + ' AM';
    //             }
    //             console.log(timedata.value.closinghours);
    //             var dayOpeningClosing = {
    //                 day: timedata.value.days,
    //                 openingtime: timedata.value.openinghours,
    //                 closingtime: timedata.value.closinghours
    //             }
    //             //day,opening time and closing time of data to post on api.
    //             this.senddays.push(timedata.value.days);
    //             var ot = timedata.value.openinghours.split(' ');
    //             var ct = timedata.value.closinghours.split(' ');
    //             this.sendopeningtime.push(ot[0]);
    //             this.sendclosingtime.push(ct[0]);
    //             console.log(this.senddays.join(','));
    //             console.log(this.sendopeningtime.join(','));
    //             console.log(this.sendclosingtime.join(','));

    //             /**** array for display day,opeing time and closing time on html after selection **********/
    //             this.daytime.push(dayOpeningClosing);
    //             console.log(this.daytime);
    //             this.data.days = '';
    //             this.data.openinghours = '';
    //             this.data.closinghours = '';
    //         } else {
    //             this.common.presentAlert('Add business', 'Closing time must be greater than opening time!');
    //         }
    //     } else {
    //         this.common.presentAlert('Add business', 'Are you sure you selected day,opening and closing time?');
    //     }
    // }
    /****** function used for  delete selected day,openingtime and closing time.***********/
    // DeleteTimes(event, ind) {
    //     var temp = this;
    //     console.log(event.day);
    //     console.log(ind);
    //     /**** pop a value from array by index ************/
    //     console.log(temp.daytime);
    //     temp.daytime.splice(ind, 1);
    //     temp.senddays.splice(ind, 1);
    //     console.log(this.daytime.length);
    //     if (this.daytime.length == 0) {
    //         this.data.days = '';
    //         this.data.openinghours = '';
    //         this.data.closinghours = '';
    //     }
    // }

    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Choose image',
            buttons: [
                {
                    text: 'Camera',
                    role: 'submit',
                    handler: () => {
                        console.log('submit clicked');
                        this.chooseImage(1);
                    }
                },
                {
                    text: 'Gallery',
                    handler: () => {
                        console.log('Gallery clicked');
                        this.chooseImage(0);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();

    }

    public chooseImage(Type) {
        const options: CameraOptions = {
            quality: 10,
            sourceType: Type,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 800,
            targetHeight: 800,
            correctOrientation: true
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.bit = this.bit + 1;
            if (this.bit > 5) {
                this.common.presentAlert('Add business', 'You can add more pictures if you want to get the premium membership,<br> call now 123-4567890');
            } else {
                this.base64Image.push('data:image/jpeg;base64,' + imageData);
                this.ImageToSend.push(imageData);
                console.log(this.base64Image.length);
                let options = this.appsetting.header();
                var postdata = {
                    user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                    business_image: imageData
                }
                var serialized = this.appsetting.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    content: 'Please wait...'
                });
                Loading.present().then(() => {
                    this.http.post(this.appsetting.url + 'users/add_business_image', serialized, options).map(res => res.json()).subscribe(response => {
                        console.log(response);
                        Loading.dismiss();
                        console.log(response.data.business_image[0]._id);
                        this.businessid = response.data.business_image[0]._id;

                    })
                })
            }

        }, (err) => {
            // Handle error
            console.log(err);
        });
    }


    AddBusiness(addbusiness) {
        console.log(addbusiness.value);
        let options = this.appsetting.header();
        if (addbusiness.value.veteranowned == "yes") {
            addbusiness.value.veteranowned = 1;
        } else {
            addbusiness.value.veteranowned = 0;
        }
        if (addbusiness.value.onlinemarketplace == "yes") {
            addbusiness.value.onlinemarketplace = 1;

        } else {
            addbusiness.value.onlinemarketplace = 0;

        }
        if (addbusiness.value.accept == true) {
            addbusiness.value.accept = 1;
        } else {
            addbusiness.value.accept = 0;
        }
        if (addbusiness.value.reservation == true) {
            addbusiness.value.reservation = 1;
        } else {
            addbusiness.value.reservation = 0;
        }
        if (this.postalcode != 0) {
            this.postalcode = this.postalcode;
        } else {
            this.postalcode = 0;
        }
        this.senddays = [];
        this.sendopeningtime = [];
        this.sendclosingtime = [];
        if(addbusiness.value.monday == true && addbusiness.value.mondayopeninghours != "" &&  addbusiness.value.mondayclosinghours != ""){
            
            this.senddays.push('Monday');
            this.sendopeningtime.push(addbusiness.value.mondayopeninghours);
            this.sendclosingtime.push(addbusiness.value.mondayclosinghours);
        }
        if(addbusiness.value.tuesday == true && addbusiness.value.tuesdayopeninghours != "" &&  addbusiness.value.tuesdayclosinghours != ""){
            this.senddays.push('Tuesday');
            this.sendopeningtime.push(addbusiness.value.tuesdayopeninghours);
            this.sendclosingtime.push(addbusiness.value.tuesdayclosinghours);
        }
        if(addbusiness.value.wednesday == true && addbusiness.value.wednesdayopeninghours != "" &&  addbusiness.value.wednesdayclosinghours != ""){
            this.senddays.push('Wednesday');
            this.sendopeningtime.push(addbusiness.value.wednesdayopeninghours);
            this.sendclosingtime.push(addbusiness.value.wednesdayclosinghours);
        }
        if(addbusiness.value.thursday == true && addbusiness.value.thursdayopeninghours != "" &&  addbusiness.value.thursdayclosinghours != ""){
            this.senddays.push('Thursday');
            this.sendopeningtime.push(addbusiness.value.thursdayopeninghours);
            this.sendclosingtime.push(addbusiness.value.thursdayclosinghours);
        }
        if(addbusiness.value.friday == true && addbusiness.value.fridayopeninghours != "" &&  addbusiness.value.fridayclosinghours != ""){
            this.senddays.push('Friday');
            this.sendopeningtime.push(addbusiness.value.fridayopeninghours);
            this.sendclosingtime.push(addbusiness.value.fridayclosinghours);
        }
        if(addbusiness.value.saturday == true && addbusiness.value.saturdayopeninghours != "" &&  addbusiness.value.saturdayclosinghours != ""){
            this.senddays.push('Saturday');
            this.sendopeningtime.push(addbusiness.value.saturdayopeninghours);
            this.sendclosingtime.push(addbusiness.value.saturdayclosinghours);
        }
        if(addbusiness.value.sunday == true && addbusiness.value.sundayopeninghours != "" &&  addbusiness.value.sundayclosinghours != ""){
            this.senddays.push('Sunday');
            this.sendopeningtime.push(addbusiness.value.sundayopeninghours);
            this.sendclosingtime.push(addbusiness.value.sundayclosinghours);
        }
        var postdata;
        console.log(this.senddays.join(','));
        console.log(this.sendopeningtime.join(','));
        console.log(this.sendclosingtime.join(','));
        console.log(addbusiness.value);
        
        if (this.senddays.length > 0) {
            if (this.ImageToSend.length > 0) {
                postdata = {
                    user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                    role: 'business',
                    business_type: 3,
                    business_name: addbusiness.value.businessname,
                    business_phone_number: addbusiness.value.phone,
                    address: addbusiness.value.address,
                    business_description: addbusiness.value.description,
                    category: this.category_title,
                    category_id: this.category_id,
                    sub_cat: this.service_title,
                    sub_cat_id: addbusiness.value.services,
                    twitter_link: addbusiness.value.twitterlink,
                    facebook_link: addbusiness.value.facebooklink,
                    instagram_link: addbusiness.value.instagramlink,
                    veteran_business: addbusiness.value.veteranowned,
                    own_online_market_place: addbusiness.value.onlinemarketplace,
                    accept_appointments: addbusiness.value.accept,
                    accept_reservations: addbusiness.value.reservation,
                    lat: this.latitude,
                    long: this.longitude,
                    opening_days: this.senddays.join(','),
                    opening_time: this.sendopeningtime.join(','),
                    closing_time: this.sendclosingtime.join(','),
                    zip_code: addbusiness.value.zipcode,
                    website_url: addbusiness.value.websiteurl
                }

                console.log('postdata------');
                console.log(postdata);
                // return false;
                var serialized = this.appsetting.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    content: 'Loading...'
                });
                Loading.present().then(() => {
                    this.http.post(this.appsetting.url + 'users/addbusiness', serialized, options).map(res => res.json()).subscribe(response => {
                        console.log(response);
                        Loading.dismiss();
                        if (response.status == true) {
                            this.events.publish('Loggedin', 'loginpage');
                            //                            this.navCtrl.push(ReservationsPage);
                            let alert = this.alertCtrl.create({
                                title: 'Add business',
                                message: 'Your business has been successfully added',
                                buttons: [
                                    {
                                        text: 'Ok',
                                        role: 'submit',
                                        handler: () => {
                                            console.log('ok clicked');
                                            this.navCtrl.push(ReservationsPage);
                                        }
                                    }
                                ]
                            });
                            alert.present();
                        } else {
                            this.common.presentAlert('Add business', response.message);

                        }
                    })
                })

            } else {
                this.common.presentAlert('Add business', 'Must upload at least one business image.');
            }
        } else {
            this.common.presentAlert('Add business', 'Are you sure you selected day,opening and closing time?');
        }
    }
    login() {
        this.navCtrl.push(LogintwoPage);
    }
}
