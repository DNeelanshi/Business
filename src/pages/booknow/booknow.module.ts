import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BooknowPage } from './booknow';

@NgModule({
  declarations: [
    BooknowPage,
  ],
  imports: [
    IonicPageModule.forChild(BooknowPage),
  ],
})
export class BooknowPageModule {}
