import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimulationPage } from './simulation';

@NgModule({
  declarations: [
    SimulationPage,
  ],
  imports: [
    IonicPageModule.forChild(SimulationPage),
  ],
})
export class SimulationPageModule {}
