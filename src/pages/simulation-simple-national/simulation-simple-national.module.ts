import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimulationSimpleNationalPage } from './simulation-simple-national';

@NgModule({
  declarations: [
    SimulationSimpleNationalPage,
  ],
  imports: [
    IonicPageModule.forChild(SimulationSimpleNationalPage),
  ],
})
export class SimulationSimpleNationalPageModule {}
