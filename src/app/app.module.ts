import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Appsetting } from '../providers/appsetting';
import { Common } from '../providers/common';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GetstartPage } from '../pages/getstart/getstart';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { LogintwoPage } from '../pages/logintwo/logintwo';
import { SignuptwoPage } from '../pages/signuptwo/signuptwo';
import { FilterPage } from '../pages/filter/filter';
import { RealtalkPage } from '../pages/realtalk/realtalk';
import { CareernetworkPage } from '../pages/careernetwork/careernetwork';
import { NewartistPage } from '../pages/newartist/newartist';
import { ViewreservationPage } from '../pages/viewreservation/viewreservation';
import { ViewreservationtwoPage } from '../pages/viewreservationtwo/viewreservationtwo';
import { HistoryPage } from '../pages/history/history';
import { HistorytwoPage } from '../pages/historytwo/historytwo';
import { ViewfavoritesPage } from '../pages/viewfavorites/viewfavorites';
import { TermsPage } from '../pages/terms/terms';
import { PrivacyPage } from '../pages/privacy/privacy';
import { ViewproductPage } from '../pages/viewproduct/viewproduct';
// import { ReviewPage } from '../pages/review/review';
import { BooknowPage } from '../pages/booknow/booknow';
import { EditprofiletwoPage } from '../pages/editprofiletwo/editprofiletwo';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { ForgotPage } from '../pages/forgot/forgot';
import { ReviewPage } from '../pages/review/review';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReservationsPage } from '../pages/reservations/reservations';
import { Reviews2Page } from '../pages/reviews2/reviews2';
import { EditbusinessPage } from '../pages/editbusiness/editbusiness';
import { AddbusinessPage } from '../pages/addbusiness/addbusiness';
import { ForgottwoPage } from '../pages/forgottwo/forgottwo';
import {HttpModule} from '@angular/http';
import { FCM } from '@ionic-native/fcm';
import { Camera } from '@ionic-native/camera';
import { Facebook } from '@ionic-native/facebook';
import { Geolocation } from '@ionic-native/geolocation';
// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LocationComponent } from '../components/location/location';
import { TalkreplyPage } from '../pages/talkreply/talkreply';
import { OurtalkreplyPage } from '../pages/ourtalkreply/ourtalkreply';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { CallNumber } from '@ionic-native/call-number';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {SearchPage} from '../pages/search/search';
import { TermsbusinessPage } from '../pages/termsbusiness/termsbusiness';
import { PrivacytwoPage } from '../pages/privacytwo/privacytwo';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GetstartPage,
    ListPage,
    LoginPage,
    SignupPage,
    RealtalkPage,
    CareernetworkPage,
    NewartistPage,
    ViewreservationPage,
    HistoryPage,
    HistorytwoPage,
    ViewfavoritesPage,
    TermsPage,
    PrivacyPage,
    FilterPage,
    ViewproductPage,
    BooknowPage,
    EditprofiletwoPage,
    ChangepasswordPage,
    ForgotPage,
    ReviewPage,
    ReservationsPage,
    Reviews2Page,
    EditbusinessPage,
    LogintwoPage,
    SignuptwoPage,
    AddbusinessPage,
    ForgottwoPage,
    ViewreservationtwoPage,
    TalkreplyPage,
    OurtalkreplyPage,
    SearchPage,
    TermsbusinessPage,
    PrivacytwoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    Ionic2RatingModule,
    AngularSvgIconModule,
    TruncateModule,
    Ng2SearchPipeModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GetstartPage,
    ListPage,
    LoginPage,
    SignupPage,
    RealtalkPage,
    CareernetworkPage,
    NewartistPage,
    ViewreservationPage,
    HistoryPage,
    HistorytwoPage,
    ViewfavoritesPage,
    TermsPage,
    PrivacyPage,
    FilterPage,
    ViewproductPage,
    BooknowPage,
    EditprofiletwoPage,
    ChangepasswordPage,
    ForgotPage,
    ReviewPage,
    ReservationsPage,
    Reviews2Page,
    EditbusinessPage,
    LogintwoPage,
    SignuptwoPage,
    AddbusinessPage,
    ForgottwoPage,
    ViewreservationtwoPage,
    TalkreplyPage,
    OurtalkreplyPage,
    SearchPage,
    TermsbusinessPage,
    PrivacytwoPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Appsetting,
    Common,
    FCM,
    Camera,
    Facebook,
    SocialSharing,
    Geolocation,
    LaunchNavigator,
    InAppBrowser,
    LocationComponent,
    CallNumber,
    OpenNativeSettings,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
