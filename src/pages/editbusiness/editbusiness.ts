import {Component, ElementRef, ViewChild, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController, LoadingController} from 'ionic-angular';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {ReservationsPage} from '../reservations/reservations';

/**
 * Generated class for the EditbusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
    selector: 'page-editbusiness',
    templateUrl: 'editbusiness.html',
})
export class EditbusinessPage {
    logo: any = "";
    @ViewChild('map') mapElement: ElementRef;
    category: any;
    bit: number = 0;
    businesslogo: any = null;
    ImageToSend: any = [];
    base64Image: any = [];
    senddays = [];//variable used for send days as comma separated
    sendopeningtime = [];//variable used for send openingtime as comma separated
    sendclosingtime = [];//variable used for  send closingtime as comma separated
    daytime = [];//array used for display selected day,openingtime and closing time.
    EditbusinessForm: any;
    data: any = {};//variable used for ngModel
    businessdata: any;
    /**** parameters for autocomplete *****/
    autocompleteItems;//variable used for autocomplete on address field
    public autocomplete;//variable used for autocomplete on address field
    service = new google.maps.places.AutocompleteService();
    geocoder = new google.maps.Geocoder();
    public latitude: number;
    public longitude: number;
    services: any;//variable used for store services
    days: any = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];//to display days form
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private http: Http,
        public appsetting: Appsetting,
        public common: Common,
        public formBuilder: FormBuilder,
        public camera: Camera,
        public actionSheetCtrl: ActionSheetController,
        private zone: NgZone,
        public loadingCtrl: LoadingController
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
    }

    ngOnInit(): any {
        console.log('ngOnInit');
        this.EditbusinessForm = this.formBuilder.group({
            businessname: ['', [Validators.required]],
            businesstype: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            address: ['', [Validators.required]],
            description: ['', [Validators.required]],
            category: ['', [Validators.required]],
            category_id: ['', [Validators.required]],
            days: [''],
            openinghours: [''],
            closinghours: [''],
            services: ['', [Validators.required]],
            services_title: ['', [Validators.required]],
            instagramlink: [''],
            facebooklink: [''],
            twitterlink: [''],
            veteranowned: ['', [Validators.required]],
            onlinemarketplace: ['', [Validators.required]],
            accept: [false, [this.checkbox.bind(this)]],
            reservation: [false, [this.checkbox.bind(this)]],
            zipcode: ['', [Validators.required]],
            websiteurl: ['', [Validators.required]]
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EditbusinessPage');
        this.http.get(this.appsetting.url + 'categories/get').map(res => res.json()).subscribe(response => {
            console.log(response);
            this.category = response;
            this.getUser();
        })

    }
    checkbox(legal) {
        console.log(legal.value);
        if (legal.value == false) {
            return {accept: false}
        }

    }
    getUser() {
        var temp = this;
        console.log(JSON.parse(localStorage.getItem('CurrentUser'))._id);
        let options = this.appsetting.header();
        var postdata = {
            user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
        }
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/userinfo', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if (response.status == true) {
                if (response.data.profile_pic) {
                } else {
                    response.data.profile_pic = 'assets/imgs/profile.png';
                }
                this.businessdata = null;
                this.businessdata = response.data.business_data[0];
                console.log(this.businessdata);
                console.log(this.businessdata.category);
                this.data.category = this.businessdata.category;
                // this.data.service_title = this.businessdata.sub_cat;
                this.selectedCat(this.businessdata.category_id);
                console.log(this.businessdata.opening_days_and_timings);

                this.businessdata.opening_days_and_timings.forEach(function (value, key) {
                    temp.daytime.push(value);
                    temp.senddays.push(value.day);
                    temp.sendopeningtime.push(value.opening_time);
                    temp.sendclosingtime.push(value.closing_time);
                })
                console.log(this.daytime);
                //this.daytime = this.businessdata.opening_days_and_timings;
                this.data.veteran = this.businessdata.veteran_business;
                /********forEach for push the images in an array to display it on this page***********/
                response.data.business_image.forEach(function (value, key) {

                    temp.base64Image.push(value);
                })
                //this.base64Image = response.data.business_image;
                this.ImageToSend = response.data.business_image;
                this.bit = response.data.business_image.length;
                this.latitude = this.businessdata.location.coordinates[1];
                this.longitude = this.businessdata.location.coordinates[0];

                this.EditbusinessForm.patchValue({
                    businessname: this.businessdata.business_name,
                    phone: this.businessdata.business_phone_number,
                    address: this.businessdata.address,
                    description: this.businessdata.business_description,
                    category: this.businessdata.category_id,
                    category_id: this.businessdata.category,
                    days: '',
                    openinghours: '',
                    closinghours: '',
                    services: this.businessdata.sub_cat_id,
                    services_title: this.businessdata.sub_cat,
                    instagramlink: this.businessdata.instagram_link,
                    facebooklink: this.businessdata.facebook_link,
                    twitterlink: this.businessdata.twitter_link,
                    veteranowned: "" + this.businessdata.veteran_business,
                    onlinemarketplace: "" + this.businessdata.own_online_market_place,
                    accept: this.businessdata.accept_appointments,
                    reservation: this.businessdata.accept_reservations,
                    businesstype: this.businessdata.business_type,
                    zipcode:this.businessdata.zip_code,
                    websiteurl:this.businessdata.website_url
                });

            } else {

            }
        })
    }
    /********* function for display services as per category **************/
    selectedCat(id) {
        var temp = this;
        console.log('id');
        console.log(id);
        this.category.forEach(function (value, key) {
            //console.log(value);
            // console.log(key);
            if (value._id == id) {
                temp.services = value.sub_category;
                temp.data.service_title = value.sub_cat;
            }
        })
        console.log(this.services);
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
    selectedService(serviceid) {
        var temp = this;
        console.log(serviceid);
        this.services.forEach(function (value, key) {
            console.log(value);
            console.log(key);
            if (value._id == serviceid) {
                console.log(value);
                temp.data.service_title = value.sub_category_title;
            }

        })
    }
    /****** function used for manage selected days,opening and closing time ***********/
    closingtime(timedata) {
        var temp = this;
        console.log(timedata.value);
        console.log(timedata.value.days);
        console.log(timedata.value.closinghours);
        console.log(timedata.value.openinghours);
        var a = timedata.value.openinghours.split(':');
        var b = timedata.value.closinghours.split(':');
         if(b[0]>a[0]){
        if (a[0] > 11) {
            timedata.value.openinghours = timedata.value.openinghours + ' PM';
        } else {
            timedata.value.openinghours = timedata.value.openinghours + ' AM';
        }
        console.log(timedata.value.openinghours);
        if (b[0] > 11) {
            timedata.value.closinghours = timedata.value.closinghours + ' PM';
        } else {
            timedata.value.closinghours = timedata.value.closinghours + ' AM';
        }
        console.log(timedata.value.closinghours);

        var dayOpeningClosing = {
            day: timedata.value.days,
            opening_time: timedata.value.openinghours,
            closing_time: timedata.value.closinghours
        }
        
        this.senddays.push(timedata.value.days);
        var ot = timedata.value.openinghours.split(' ');
        var ct = timedata.value.closinghours.split(' ');
        this.sendopeningtime.push(ot[0]);
        this.sendclosingtime.push(ct[0]);
        console.log(this.senddays.join(','));
        console.log(this.sendopeningtime.join(','));
        console.log(this.sendclosingtime.join(','));
        this.daytime.push(dayOpeningClosing);
        console.log(this.daytime);
        this.data.openinghours = '';
        this.data.closinghours = '';
        this.data.days = '';
         }else {
            this.common.presentAlert('Edit business', 'Closing time must be greater than opening time!');
        }
        
    }
    /****** function used for  delete selected day,openingtime and closing time.***********/
    DeleteTimes(event, ind) {
        var temp = this;
        console.log(event.day);
        console.log(ind);
        /**** pop a value from array by index ************/
        console.log(temp.daytime);
        temp.daytime.splice(ind, 1);
        temp.senddays.splice(ind, 1);
        temp.sendopeningtime.splice(ind, 1);
        temp.sendclosingtime.splice(ind, 1);
        console.log(this.daytime.length);
        console.log(this.daytime);
        if (this.daytime.length == 0) {
            this.data.days = '';
            this.data.openinghours = '';
            this.data.closinghours = '';
        }
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
                console.log(results[0].geometry.location.lat());
                console.log(results[0].geometry.location.lng());
                temp.latitude = results[0].geometry.location.lat();
                temp.longitude = results[0].geometry.location.lng();

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
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
            targetHeight: 500,
            correctOrientation: true
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.bit = this.bit + 1;
            //alert(this.bit);
            if (this.bit > 5) {
                this.common.presentAlert('Add business', 'You can not upload more than 5 images.');
            } else {
                console.log(this.base64Image.length);
                //alert(this.base64Image.length);
                this.base64Image.push({business_image: 'data:image/jpeg;base64,' + imageData});
                // alert('next');
                console.log(this.base64Image.length);
                //alert(this.base64Image.length);

                this.ImageToSend.push(imageData);
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
                    })
                })

            }
        }, (err) => {
            // Handle error
            console.log(err);
        });
    }

    EditBusiness(formdata) {
        console.log(formdata.value);
        let options = this.appsetting.header();
        if (formdata.value.veteranowned == "true") {
            formdata.value.veteranowned = 1;
        } else {
            formdata.value.veteranowned = 0;
        }

        if (formdata.value.onlinemarketplace == "true") {
            formdata.value.onlinemarketplace = 1;
            
        } else {
            formdata.value.onlinemarketplace = 0;
        }

        if (formdata.value.accept == true) {
            formdata.value.accept = 1;
        } else {
            formdata.value.accept = 0;
        }

        if (formdata.value.reservation == true) {
            formdata.value.reservation = 1;
        } else {
            formdata.value.reservation = 0;
        }

        var postdata;
        if (this.daytime.length > 0) {
            if (this.ImageToSend.length > 0) {
                //if(this.logo != ""){
                postdata = {
                    user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                    role: 'business',
                    business_name: formdata.value.businessname,
                    business_type: formdata.value.businesstype,
                    business_phone_number: formdata.value.phone,
                    address: formdata.value.address,
                    business_description: formdata.value.description,
                    category: formdata.value.category_id,
                    category_id: formdata.value.category,
                    sub_cat: formdata.value.services_title,
                    sub_cat_id: formdata.value.services,
                    twitter_link: formdata.value.twitterlink,
                    facebook_link: formdata.value.facebooklink,
                    instagram_link: formdata.value.instagramlink,
                    veteran_business: formdata.value.veteranowned,
                    own_online_market_place: formdata.value.onlinemarketplace,
                    accept_appointments: formdata.value.accept,
                    accept_reservations: formdata.value.reservation,
                    lat: this.latitude,
                    long: this.longitude,
                    opening_days: this.senddays.join(','),
                    opening_time: this.sendopeningtime.join(','),
                    closing_time: this.sendclosingtime.join(','),
                    business_data_id: this.businessdata._id,
                    business_status: 1,
                    zip_code: formdata.value.zipcode,
                    website_url: formdata.value.websiteurl
                }
                console.log(postdata);
                //return false;
                var serialized = this.appsetting.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    content: 'Loading...'
                });
                Loading.present().then(() => {
                    this.http.post(this.appsetting.url + 'users/editbusiness', serialized, options).map(res => res.json()).subscribe(response => {
                        //alert('success');
                        console.log(response);
                        Loading.dismiss();
                        if (response.status == true) {
                            this.navCtrl.push(ReservationsPage);
                        } else {
                            this.common.presentAlert('Edit business', response.message);
                        }
                    })
                })
                //            }else{
                //                this.common.presentAlert('Edit business', 'Must upload business logo.');
                //            }
            } else {
                this.common.presentAlert('Edit business', 'Must upload at least one business image.');
            }
        } else {
            this.common.presentAlert('Edit business', 'Are you sure you selected day,opening and closing time?');
        }
    }
    /*********** this function used for delete image *********/
    DeleteImage(inex, id) {
        var temp = this;
        //        alert(inex);
        //        alert(id);
        let options = this.appsetting.header();
        var postdata = {
            user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            imege_id: id
        }
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.url + 'users/removeBusinessImage', serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response);
                Loading.dismiss();
                this.ImageToSend.forEach(function (value, key) {
                    console.log(value);
                    console.log(key);
                    //alert(inex)
                    if (key == inex) {
                        //                        alert('matched')
                        //                        alert('Key--' + key);
                        //                        alert('inex--' + inex);
                        temp.ImageToSend.splice(inex, 1);
                        temp.base64Image.splice(inex, 1);
                    } else {
                        console.log('else');
                        //alert('not matched')
                    }
                })

            })
        })
        console.log(this.base64Image);
    }

    /******* this image upload function used for upload logo *********/
    //    presentActionSheet1() {
    //        let actionSheet = this.actionSheetCtrl.create({
    //            title: 'Choose image',
    //            buttons: [
    //                {
    //                    text: 'Camera',
    //                    role: 'submit',
    //                    handler: () => {
    //                        console.log('submit clicked');
    //                        this.chooseLogo(1);
    //                    }
    //                },
    //                {
    //                    text: 'Gallery',
    //                    handler: () => {
    //                        console.log('Gallery clicked');
    //                        this.chooseLogo(0);
    //                    }
    //                },
    //                {
    //                    text: 'Cancel',
    //                    role: 'cancel',
    //                    handler: () => {
    //                        console.log('Cancel clicked');
    //                    }
    //                }
    //            ]
    //        });
    //        actionSheet.present();
    //    }
    //    public chooseLogo(Type) {
    //        const options: CameraOptions = {
    //            quality: 10,
    //            sourceType: Type,
    //            destinationType: this.camera.DestinationType.DATA_URL,
    //            encodingType: this.camera.EncodingType.JPEG,
    //            mediaType: this.camera.MediaType.PICTURE,
    //            allowEdit: true,
    //            targetWidth: 800,
    //            targetHeight: 800,
    //            correctOrientation: true
    //        }
    //
    //        this.camera.getPicture(options).then((imageData) => {
    //            this.businesslogo = 'data:image/jpeg;base64,' + imageData;
    //            console.log(this.businesslogo);
    //            let options = this.appsetting.header();
    //            var postdata = {
    //                user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
    //                business_logo: imageData
    //            }
    //            var serialized = this.appsetting.serializeObj(postdata);
    //            var Loading = this.loadingCtrl.create({
    //                spinner: 'bubbles',
    //                content: 'Loading...'
    //            });
    //            Loading.present().then(() => {
    //                this.http.post(this.appsetting.url + 'users/add_business_logo', serialized, options).map(res => res.json()).subscribe(response => {
    //                    console.log(response);
    //                    Loading.dismiss();
    //                    this.logo = response.logo;
    //
    //                })
    //            })
    //
    //
    //        }, (err) => {
    //            // Handle error
    //            console.log(err);
    //        });
    //    }
    //    DeleteLogo() {
    //        this.businesslogo = null;
    //        this.businesslogo = '';
    //    }
}
