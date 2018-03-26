import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PensumCivilPage } from './pensum-civil';

@NgModule({
  declarations: [
    PensumCivilPage,
  ],
  imports: [
    IonicPageModule.forChild(PensumCivilPage),
  ],
})
export class PensumCivilPageModule {}
