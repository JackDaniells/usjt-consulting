import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Utils } from '../../app/util';


/**
* Generated class for the SimulationCltPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-simulation-clt',
  templateUrl: 'simulation-clt.html',
})
export class SimulationCltPage {
  
  revenues: string;
  inssTax: number = 0;
  irrfTax: number = 0;
  clearAmount: number = 0;
  flagShowCalcs:boolean = false;
  dependents = 0;
  
  /**************************************************************************************/
  constructor(public navCtrl: NavController, public navParams: NavParams, private utils: Utils) {
  }
  
  /**************************************************************************************/
  public amountChange() {
    this.flagShowCalcs = false;
    this.revenues = this.utils.detectAmount(this.revenues);
  }
  
  /**************************************************************************************/
  public calcClt() {
    this.inssTax = this.inssCalc(Number(this.revenues));
    var baseInss = Number(this.revenues) - this.inssTax - (this.dependents * 189.59);
    this.irrfTax = this.irrfCalcDiscount(baseInss) - this.irrfCalcDeduction(baseInss);
    this.clearAmount = baseInss - this.irrfTax;
    this.flagShowCalcs = true;
  }
  
  /**************************************************************************************/
  private inssCalc(salary) {
    var percent = 0;
    
    if (salary <= 1659.38) {
      percent = 0.08;  
    } else if (salary > 1659.38 && salary <= 2765.66) {
      percent = 0.09;
    } else if (salary > 2765.66 && salary <= 5531.31) {
      percent = 0.11;
    }
    
    var inssDiscount = salary * percent;
    if (inssDiscount > 608.45) inssDiscount = 608.45;
    
    return inssDiscount;
  }
  
  /**************************************************************************************/
  private irrfCalcDiscount(salary) {
    
    var percent = 0;
    
    if (salary <= 1903.98) {
      
    } else if (salary > 1903.98 && salary <= 2826.65) {
      percent = 0.075;
    } else if (salary > 2826.65 && salary <= 3751.05) {
      percent = 0.15;
    } else if (salary > 3751.05 && salary <= 4664.68) {      
      percent = 0.225;
    } else if (salary > 4664.68) {
      percent = 0.275;
    }
    return salary * percent; 
  }
  
  /**************************************************************************************/
  private irrfCalcDeduction(salary) {
    
    var deduction = 0;
    
    if (salary <= 1903.98) {
      
    } else if (salary > 1903.98 && salary <= 2826.65) {
      deduction = 142.80;
    } else if (salary > 2826.65 && salary <= 3751.05) {
      deduction = 354.80;
    } else if (salary > 3751.05 && salary <= 4664.68) {      
      deduction = 636.13;
    } else if (salary > 4664.68) {
      deduction = 869.36;
    }
    return deduction;
  }
  
}
