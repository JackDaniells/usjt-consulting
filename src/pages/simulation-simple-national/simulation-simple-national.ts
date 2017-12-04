import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Utils } from '../../app/util';

/**
 * Generated class for the SimulationSimpleNationalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-simulation-simple-national',
  templateUrl: 'simulation-simple-national.html',
})
export class SimulationSimpleNationalPage {

  revenues: string;
  tax: number = 0;
  taxCalculed: number = 0;
  clearAmount: number = 0;
  flagShowCalcs = false;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private utils: Utils) {
    
  }

  amountChange() {
    this.flagShowCalcs = false;
    this.revenues = this.utils.detectAmount(this.revenues);
  }

  doAlert() {

    var title = 'Faturamento fora do limite';
    var message = 'Seu faturamento deve estar entre <b>R$ 180.000,00</b> e <b>R$ 3.600.000,00</b> ao ano para se enquadrar como Simples Nacional';
 
    let alert = this.alertCtrl.create({
      title: title ,
      subTitle: message,
      buttons: ['Ok']
    });

    this.revenues = null;
    alert.present();
  }

  
  calcSimpleNational() {
    
    var revenues = Number(this.revenues);
    this.tax = 0;

    if (revenues <= 180000) {
      this.tax = 6;
    } else if (revenues > 180000 && revenues <= 360000) {
      this.tax = 8.21;
    } else if (revenues > 360000 && revenues <= 540000) {
      this.tax = 10.26;
    } else if (revenues > 540000 && revenues <= 720000) {
      this.tax = 11.31;
    } else if (revenues > 720000 && revenues <= 900000) {
      this.tax = 11.40;
    } else if (revenues > 900000 && revenues <= 1080000) {
      this.tax = 12.42;
    } else if (revenues > 1080000 && revenues <= 1260000) {
      this.tax = 12.54;    
    } else if (revenues > 1260000 && revenues <= 1440000) {
      this.tax = 12.68;
    } else if (revenues > 1440000 && revenues <= 1620000) {
      this.tax = 13.55;
    } else if (revenues > 1620000 && revenues <= 1800000) {
      this.tax = 13.68;
    } else if (revenues > 1800000 && revenues <= 1980000) {
      this.tax = 14.93;
    } else if (revenues > 1980000 && revenues <= 2160000) {
      this.tax = 15.06;
    } else if (revenues > 2160000 && revenues <= 2340000) {
      this.tax = 15.20;
    } else if (revenues > 2340000 && revenues <= 2520000) {
      this.tax = 15.35;
    } else if (revenues > 2520000 && revenues <= 2700000) {
      this.tax = 15.48
    } else if (revenues > 2700000 && revenues <= 2880000) {
      this.tax = 16.85;
    } else if (revenues > 2880000 && revenues <= 3060000) {
      this.tax = 16.98;
    } else if (revenues > 3060000 && revenues <= 3240000) {
      this.tax = 17.13;
    } else if (revenues > 3240000 && revenues <= 3420000) {
      this.tax = 17.27;
    } else if (revenues > 3420000 && revenues <= 3600000) {
      this.tax = 17.42;
    }
    
    this.taxCalculed = revenues * (this.tax / 100);
    if(revenues < 18000 || revenues > 3600000) this.doAlert();
    else {
      this.clearAmount = revenues - (this.taxCalculed);
      this.flagShowCalcs = true;
    }
  }
  
}
