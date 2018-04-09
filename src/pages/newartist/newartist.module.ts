import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewartistPage } from './newartist';

@NgModule({
  declarations: [
    NewartistPage,
  ],
  imports: [
    IonicPageModule.forChild(NewartistPage),
  ],
})
export class NewartistPageModule {}
