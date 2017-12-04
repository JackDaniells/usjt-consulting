import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SimulationSimpleNationalPage } from '../simulation-simple-national/simulation-simple-national';
import { SimulationMeiPage } from '../simulation-mei/simulation-mei';
import { SimulationCltPage } from '../simulation-clt/simulation-clt';


@Component({
  selector: 'page-simulation',
  templateUrl: 'simulation.html'
})
export class SimulationPage {

  constructor(public navCtrl: NavController) {
    
  }  

  public openPageSimulatorSN(){
    this.navCtrl.push(SimulationSimpleNationalPage);
  }

  public openPageSimulatorMei(){
    this.navCtrl.push(SimulationMeiPage);
  }

  public openPageSimulatorCLT(){
    this.navCtrl.push(SimulationCltPage);
  }
}
