import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController, Events, LoadingController} from 'ionic-angular';
import {ChangepasswordPage} from '../changepassword/changepassword';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {Http} from '@angular/http';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {HomePage} from '../home/home';

/**
 * Generated class for the EditprofiletwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofiletwo',
  templateUrl: 'editprofiletwo.html',
})
export class EditprofiletwoPage {
  profiledata: any;
    click: boolean;
    Editprofile: FormGroup;
    ImageToSend: any;
    base64Image: string = 'assets/imgs/profile.png';

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public camera: Camera,
        public actionSheetCtrl: ActionSheetController,
        public formBuilder: FormBuilder,
        public appsetting: Appsetting,
        public common: Common,
        public http: Http,
        public events: Events,
        public loadingCtrl: LoadingController
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
        console.log('ionViewDidLoad EditprofilePage');
    }
    ngOnInit(): any {
        console.log('ngOnInit');
        this.getUser();
        this.Editprofile = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, this.emailValidator.bind(this)]],
            phone: ['', [Validators.required]],
        });

    }
    emailValidator(control: FormControl): {[s: string]: boolean} {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return {invalidEmail: true};
        }
    }
    isValid(field: string) {
        let formField = this.Editprofile.get(field);
        return formField.valid || formField.pristine;
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
            targetHeight: 800,
            correctOrientation: true
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.click = true;
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            this.ImageToSend = imageData;
            let options = this.appsetting.header();
            var postdata = {
                user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                profile_picture:imageData
            }
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.url + 'users/user_profile_pic', serialized, options).map(res => res.json()).subscribe(response => {
               // alert(JSON.stringify(response));
                Loading.dismiss();
                if (response.status == true) {
                    //alert('response');
                    //console.log(response.data.profile_pic);
                    //alert(response.data.profile_pic);
                    this.events.publish('Loggedin', 'loginpage');
                }
            })
            })
        }, (err) => {
            // Handle error
            console.log(err);
        });
    }
    
    changepwd() {
        this.navCtrl.push(ChangepasswordPage);
    }
    
    getUser() {
        console.log(JSON.parse(localStorage.getItem('CurrentUser'))._id);
        let options = this.appsetting.header();
        var postdata = {
            user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
        }
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/userinfo', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if (response.status == true) {
                console.log('userinfo');
                this.profiledata = response.data;
                console.log(response.data.profile_pic);
                if (response.data.profile_pic) {
                    this.base64Image = null;
                    this.base64Image = response.data.profile_pic;
                }
                console.log('image');
                console.log(this.base64Image);
                this.events.publish('Loggedin', 'loginpage');
                var name = response.data.firstname + ' ' + response.data.lastname;
                this.Editprofile.patchValue({
                    name: name,
                    email: response.data.email,
                    phone: response.data.phone_number,
                });
            }
        })
    }
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        this.getUser();
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }

    editProfile(profiledata) {
        console.log(profiledata.value);
        let options = this.appsetting.header();
        if (this.click == true) {

        } else {
            this.ImageToSend = "";
        }
        var name;
        var postdata: any;
        console.log(profiledata.value.name.indexOf(' '));
        if (profiledata.value.name.indexOf(' ') != -1) {
            console.log('if');
            name = profiledata.value.name.split(' ');
            postdata = {
                user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                firstname: name[0],
                lastname: name[1],
                phone_number: profiledata.value.phone

            }
        } else {
            console.log('else');
            postdata = {
                user_id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
                firstname: profiledata.value.name,
                lastname: '.',
                phone_number: profiledata.value.phone

            }
        }

        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.url + 'users/profileupdate', serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    this.events.publish('Loggedin', 'loginpage');
                    this.common.presentAlert('Profile', response.message);
                    localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                    this.navCtrl.push(HomePage);
                }
            })
        })
    }

}
