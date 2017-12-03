import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EppPage } from './epp';

@NgModule({
  declarations: [
    EppPage,
  ],
  imports: [
    IonicPageModule.forChild(EppPage),
  ],
})
export class EppPageModule {}
