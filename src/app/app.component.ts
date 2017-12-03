import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Quem Somos', component: AboutPage, icon: 'contact' },
      { title: 'Serviços', component: ServicesPage, icon: 'build' },
      { title: 'Simulação', component: SimulationPage, icon: 'calculator' },
      { title: 'Legislação', component: LawsPage, icon: 'clipboard' },
      { title: 'Terceirização', component: OutsourcingPage, icon: 'contacts' },
      { title: 'MEI', component: MeiPage, icon: 'baseball' },
      { title: 'ME', component: MePage, icon: 'basketball' },
      { title: 'EPP', component: EppPage, icon: 'american-football' },
      { title: 'Lucro Real', component: RealProfitPage, icon: 'football' },
      { title: 'Lucro Presumido', component: PresumedProfitPage, icon: 'tennisball' },
      { title: 'Fale Conosco', component: ContactUsPage, icon: 'text' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
