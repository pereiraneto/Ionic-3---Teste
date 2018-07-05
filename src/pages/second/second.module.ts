import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondPage } from './second';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SecondPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondPage),
    ComponentsModule,
  ],
  exports:[
    SecondPage,
  ],
})
export class SecondPageModule {}
