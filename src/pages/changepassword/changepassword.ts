import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl} from '@angular/forms';
import {Http} from '@angular/http';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {GetstartPage} from '../getstart/getstart';

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-changepassword',
    templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {

    ChangeForm: FormGroup;
    data:any;
    public type = 'password';
    public Ctype = 'password';
    public Ctype1 = 'password';
    public showPass = false;
    public showCpass = false;
    public showCpass1 = false;
    public iconname = 'eye';
    public iconname1 = 'eye';
    public iconname2 = 'eye';
    public myColors: any = [];
    bar0: string = '#DDD';
    bar1: string = '#DDD';
    bar2: string = '#DDD';
    bar3: string = '#DDD';
    bar4: string = '#DDD';
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        private http: Http,
        public appsetting: Appsetting,
        public common: Common,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ChangepasswordPage');
    }
    ngOnInit(): any {
        console.log('ngOnInit');
        this.ChangeForm = this.formBuilder.group({
            oldpassword: ['', [Validators.required, Validators.minLength(6)]],
            newpassword: ['', [Validators.required, Validators.minLength(6)]],
            cnewpassword: ['', [Validators.required,this.equalto('newpassword')]],
        }
        );
    }
    
    emailValidator(control: FormControl): {[s: string]: boolean} {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return {invalidEmail: true};
        }
    }
    
    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): {[key: string]: any} => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        }
    }
    equalto(field_name): ValidatorFn {
return (control: AbstractControl): {[key: string]: any} => {

let input = control.value;

let isValid=control.root.value[field_name]==input
if(!isValid){
return { 'equalTo': {isValid} }
}else{
return null;
};
}
    }
    showPassword() {
        console.log('showpassword');
        this.showPass = !this.showPass;

        if (this.showPass) {
            this.type = 'text';
            this.iconname = 'eye-off';
        } else {
            this.type = 'password';
            this.iconname = 'eye';
        }
    }
    showCPassword() {
        console.log('showCpassword');
        this.showCpass = !this.showCpass;

        if (this.showCpass) {
            this.Ctype = 'text';
            this.iconname1 = 'eye-off';
        } else {
            this.Ctype = 'password';
            this.iconname1 = 'eye';
        }
    }
    showCPassword1() {
        console.log('showCpassword');
        this.showCpass1 = !this.showCpass1;

        if (this.showCpass1) {
            this.Ctype1 = 'text';
            this.iconname2 = 'eye-off';
        } else {
            this.Ctype1 = 'password';
            this.iconname2 = 'eye';
        }
    }
    isValid(field: string) {
        let formField = this.ChangeForm.get(field);
        return formField.valid || formField.pristine;
    }
    pass_strength(pass) {
        console.log(pass.value);
        var strongRegularExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*()<>{}:;+'~|,-_?/=])(?=.{8,})");
        var mediumRegularExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if (strongRegularExp.test(pass.value)) {
            console.log('strong');
            this.bar0 = '#00FF00';
            this.bar1 = '#00FF00';
            this.bar2 = '#00FF00';
            this.bar3 = '#00FF00';
            this.bar4 = '#00FF00';
        } else if (mediumRegularExp.test(pass.value)) {
            console.log('medium');
            this.bar0 = '#FFA500';
            this.bar1 = '#FFA500';
            this.bar2 = '#DDD';
            this.bar3 = '#DDD';
            this.bar4 = '#DDD';
        } else {
            console.log('low');
            this.bar0 = '#FF0000';
            this.bar1 = '#DDD';
            this.bar2 = '#DDD';
            this.bar3 = '#DDD';
            this.bar4 = '#DDD';
        }
    }
    Changepassword(changeform) {
        console.log(changeform.value);
        console.log(JSON.parse(localStorage.getItem('CurrentUser')).email);
        let options = this.appsetting.header();
        var postdata = {
            email: JSON.parse(localStorage.getItem('CurrentUser')).email,
            password: changeform.value.oldpassword,
            newpassword: changeform.value.newpassword
        }
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/changepassword', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if (response.status == true) {
                localStorage.removeItem('CurrentUser');
                this.navCtrl.push(GetstartPage);
            } else {
                this.common.presentAlert('Change password', response.message);
            }
        })
    }
}
