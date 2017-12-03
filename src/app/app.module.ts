import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { AboutPage } from '../pages/about/about';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { EppPage } from '../pages/epp/epp';
import { LawsPage } from '../pages/laws/laws';
import { MePage } from '../pages/me/me';
import { MeiPage } from '../pages/mei/mei';
import { OutsourcingPage } from '../pages/outsourcing/outsourcing';
import { PresumedProfitPage } from '../pages/presumed-profit/presumed-profit';
import { RealProfitPage } from '../pages/real-profit/real-profit';
import { ServicesPage } from '../pages/services/services';
import { SimulationPage } from '../pages/simulation/simulation';
import { SimulationSimpleNationalPage } from '../pages/simulation-simple-national/simulation-simple-national';
import { SimulationMeiPage } from '../pages/simulation-mei/simulation-mei';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {Utils} from './util';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactUsPage,
    EppPage,
    LawsPage,
    MePage,
    MeiPage,
    OutsourcingPage,
    PresumedProfitPage,
    RealProfitPage,
    ServicesPage,
    SimulationPage,
    SimulationSimpleNationalPage,
    SimulationMeiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactUsPage,
    EppPage,
    LawsPage,
    MePage,
    MeiPage,
    OutsourcingPage,
    PresumedProfitPage,
    RealProfitPage,
    ServicesPage,
    SimulationPage,
    SimulationSimpleNationalPage,
    SimulationMeiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Utils,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
