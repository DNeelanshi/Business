import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, AlertController, ToastController, Events} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {GetstartPage} from '../pages/getstart/getstart';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {RealtalkPage} from '../pages/realtalk/realtalk';
import {CareernetworkPage} from '../pages/careernetwork/careernetwork';
import {NewartistPage} from '../pages/newartist/newartist';
import {ViewreservationPage} from '../pages/viewreservation/viewreservation';
import {ViewreservationtwoPage} from '../pages/viewreservationtwo/viewreservationtwo';
import {HistoryPage} from '../pages/history/history';
import {ViewfavoritesPage} from '../pages/viewfavorites/viewfavorites';
import {TermsPage} from '../pages/terms/terms';
import {PrivacyPage} from '../pages/privacy/privacy';
import {EditprofiletwoPage} from '../pages/editprofiletwo/editprofiletwo';
import {ReservationsPage} from '../pages/reservations/reservations';
import {Reviews2Page} from '../pages/reviews2/reviews2';
import {EditbusinessPage} from '../pages/editbusiness/editbusiness';
import {Http} from '@angular/http';
import {Appsetting} from '../providers/appsetting';
import {Common} from '../providers/common';
import {AddbusinessPage} from '../pages/addbusiness/addbusiness';
import {App} from 'ionic-angular';
import { NavController, MenuController } from 'ionic-angular/index';
import {HistorytwoPage} from '../pages/historytwo/historytwo';
import {FCM} from '@ionic-native/fcm';
import {Geolocation} from '@ionic-native/geolocation';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import {TermsbusinessPage} from '../pages/termsbusiness/termsbusiness';
import {PrivacytwoPage} from '../pages/privacytwo/privacytwo';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    role: any;
    currentuser: any;
    userimage: any;
    @ViewChild(Nav) nav: Nav;
    rootPage: any;
    activePage: any;
    pages: Array<{title: string, icon: any, component: any}>;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public alertCtrl: AlertController,
        private http: Http,
        public appsetting: Appsetting,
        public common: Common,
        public toastCtrl: ToastController,
        public events: Events,
        private app: App,
        private menu: MenuController,
        public fcm:FCM,
        private geolocation: Geolocation,
        private openNativeSettings: OpenNativeSettings
    ) {
    
       // alert('updaated latest 1');

         platform.ready().then(() => {
            
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
       statusBar.overlaysWebView(true);
      // statusBar.backgroundColorByHexString('#ffffff');
      var a = statusBar.hide();
     
      // ionicConfigProvider.views.swipeBackEnabled(false)
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      
      splashScreen.hide();
       this.menu.swipeEnable(false);
    });
        
        this.initializeApp();
        if (localStorage.getItem('CurrentUser')) {
            this.getUser();
            this.role = JSON.parse(localStorage.getItem('CurrentUser')).role;
            
        }
   this.geolocation.getCurrentPosition().then((resp) => {
            
        }).catch((error) => {
            console.log('Error getting location', error);
//            let alert = this.alertCtrl.create({
//                title: 'Location',
//                message: 'Please enable your location to use Melanin Enterprises.',
//                buttons: [
//                  {
//                    text: 'Ok',
//                    role: 'submit',
//                    handler: () => {
//                      console.log('submit clicked');
//                      this.openNativeSettings.open('location');
//                    }
//                  }
//                ]
//              });
//              alert.present();
            
        });
                }

    initializeApp() {
        this.app.getRootNav();
        this.events.subscribe('Loggedin', (Loggedin) => {
            console.log(Loggedin);
            console.log('Loggedin');
            this.getUser();
        })
        
        // used for an example of ngFor and navigation
        this.events.subscribe('skip', (skip) => {
            console.log('skip');
            this.currentuser = null;
            this.pages = [
                {title: 'Home', component: HomePage, icon: 'assets/imgs/home.png'},
                {title: 'Sign in or create account', component: GetstartPage, icon: 'assets/imgs/user.png'},
                {title: 'Terms & Conditions', component: TermsbusinessPage, icon: 'assets/imgs/terms.png'},
                {title: 'Privacy Policy', component: PrivacytwoPage, icon: 'assets/imgs/privacy.png'},
                //            {title: 'Logout', component: ListPage, icon: 'assets/imgs/logout.png'}
            ];

        })
        
        if (localStorage.getItem('CurrentUser')) {
            console.log(JSON.parse(localStorage.getItem('CurrentUser')));
            var user = JSON.parse(localStorage.getItem('CurrentUser'));
            this.events.publish('Loggedin', 'loginpage');
            console.log(user);
            if(user.role == "business"){
            if (user.business_data.length>0) {
                this.rootPage = ReservationsPage;
            } else {
               this.rootPage = AddbusinessPage;
            }
            }else{
                this.rootPage = HomePage;
            }
        } else {
            this.rootPage = GetstartPage;
            
        }
       /******** function for handle notifications **************/
//                this.fcm.onNotification().subscribe(data => {
//                    if (data.wasTapped) {
//                        console.log("Received in background");
//                    } else {
//                        console.log("Received in foreground");
//                    };
//                })
                
                
    }
    
    tryagain() {
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        } else {
            console.log('you are offline');
            let alert = this.alertCtrl.create({
                message: '<img src="assets/imgs/network.png">',
                buttons: [{
                    text: 'Try again',
                    role: 'cancel',
                    handler: () => {
                        console.log('try again clicked');
                        this.tryagain();

                    }
                }]
            });
            alert.present();
        }
    }
    
    openPage(page) {
        console.log(page);
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if(page.component == 'artist'){
            this.InappbrowserArtist();
        }else if(page.component == 'career'){
            this.InappbrowserCareer();
        }else if(page.component == 'advertising'){
        this.InappbrowserAdvertisement();
        }else{
        this.nav.setRoot(page.component);
        this.activePage = page;
        }
    }
   
    
    public checkActivePage(page): boolean {
        return page === this.activePage;
    }
    
    logout() {
        localStorage.clear();
        this.nav.setRoot(GetstartPage);
    }
    
    getUser() {
        if(localStorage.getItem('CurrentUser')){
        console.log(JSON.parse(localStorage.getItem('CurrentUser'))._id);
        let options = this.appsetting.header();
        var postdata = {
            user_id:JSON.parse(localStorage.getItem('CurrentUser'))._id,
        }
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/userinfo', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if (response.status == true) {
                
                localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                if (response.data.profile_pic) {

                } else {
                    response.data.profile_pic = 'assets/imgs/user.png';
                }
                this.currentuser = null;
                this.currentuser = response.data;
                console.log(this.currentuser);
                if(this.currentuser.role == "member"){
                this.pages = [
                {title: 'Home', component: HomePage, icon: 'assets/imgs/home.png'},
                {title: 'Real Talk', component: RealtalkPage, icon: 'assets/imgs/realtalk.png'},
//                {title: 'Career Network', component: 'career', icon: 'assets/imgs/career.png'},
                {title: 'Edit Profile', component: EditprofiletwoPage, icon: 'assets/imgs/editb.png'},
//                {title: 'Edit Business Information', component: EditbusinessPage, icon: 'assets/imgs/editprofile.png'},
//                {title: 'Reviews', component: Reviews2Page, icon: 'assets/imgs/reviews.png'},
//                {title: 'New Artist', component: 'artist', icon: 'assets/imgs/artist.png'},
                {title: 'View Reservations', component: ViewreservationtwoPage, icon: 'assets/imgs/reservation.png'},
//                {title: 'Reservations', component: ReservationsPage, icon: 'assets/imgs/reservation.png'},
                {title: 'History', component: HistoryPage, icon: 'assets/imgs/history.png'},
                {title: 'View Favorites', component: ViewfavoritesPage, icon: 'assets/imgs/favorites.png'},
                {title: 'Terms & Conditions', component: TermsPage, icon: 'assets/imgs/terms.png'},
                {title: 'Privacy Policy', component: PrivacyPage, icon: 'assets/imgs/privacy.png'}
            ];
            }else{
                this.pages = [
                {title: 'Home', component: ReservationsPage, icon: 'assets/imgs/home.png'},
                {title: 'Reservations', component: ViewreservationPage, icon: 'assets/imgs/reservation.png'},
                {title: 'History', component: HistorytwoPage, icon: 'assets/imgs/history.png'},
                {title: 'Reviews', component: Reviews2Page, icon: 'assets/imgs/reviews.png'},
                {title: 'Edit Business Info', component: EditbusinessPage, icon: 'assets/imgs/editprofile.png'},
                {title: 'Advertising', component: 'advertising', icon: 'assets/imgs/add.png'},
//                {title: 'Career Network',  component: 'career', icon: 'assets/imgs/career.png'},
                {title: 'Edit Profile', component: EditprofiletwoPage, icon: 'assets/imgs/editb.png'},
                {title: 'Real Talk', component: RealtalkPage, icon: 'assets/imgs/realtalk.png'},
                {title: 'Terms & Conditions', component: TermsPage, icon: 'assets/imgs/terms.png'},
                {title: 'Privacy Policy', component: PrivacyPage, icon: 'assets/imgs/privacy.png'}
                
//                {title: 'New Artist',  component: 'artist', icon: 'assets/imgs/artist.png'},
//                {title: 'Reservations', component: ReservationsPage, icon: 'assets/imgs/reservation.png'},
//                {title: 'View Favorites', component: ViewfavoritesPage, icon: 'assets/imgs/favorites.png'},
                
            ];
            }
            }
        })
        }
    }

InappbrowserArtist(){
    let url;
    if(this.role == 'member'){
        console.log(this.role)
    url = 'https://ionicframework.com/';
    }else{
    console.log(this.role)
    url = 'https://google.com/';
    }
//     let InAppBrowserOptions = {
//        locatio:'no',
//        closebuttoncaption:'Back to app'
//    }
    this.common.InappBrowser(url);
   // const browser = this.iab.create(url,'_blank',InAppBrowserOptions);
   
    //browser.close();
    
}
InappbrowserCareer(){
    let url;
    if(this.role == 'member'){
    url = 'https://ionicframework.com/';
    }else{
    url = 'https://google.com/';
    }
     this.common.InappBrowser(url);
}
InappbrowserAdvertisement(){
    let url;
    if(this.role == 'member'){
    url = 'https://ionicframework.com/';
    }else{
    url = 'https://google.com/';
    }
     this.common.InappBrowser(url);
}
}
