import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Utils } from '../../app/util';
/**

* Generated class for the SimulationMeiPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-simulation-mei',
  templateUrl: 'simulation-mei.html',
})
export class SimulationMeiPage {
  
  revenues: string;
  tax: number = 51.85;
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
    var message = 'Seu faturamento deve ser menor ou igual a <b>R$ 60.000,00</b> ao ano para se enquadrar como MEI';
    let alert = this.alertCtrl.create({
      title: title ,
      subTitle: message,
      buttons: ['Ok']
    });
    
    this.revenues = null;
    alert.present();
  }
  
  
  calcMei() {
    if(Number(this.revenues)>60000) {
      this.doAlert();
    } else {
      this.clearAmount = Number(this.revenues) - this.tax;
      this.flagShowCalcs = true;
    }
  }
  
}
