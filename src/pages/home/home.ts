import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personName: string;

  constructor(public nvrCtl: NavController, private toast: ToastController) {

  }

  showGreeting(name: string){
    this.toast.create({
      message: `Hello ${name}`,
      duration: 3000
    }).present();
    
  }

  navigateToSecondPage(){
    this.nvrCtl.push('SecondPage', {
      message:"Hello from to HomePage",
    });
  }

  navigateToThirdPage(){
    this.nvrCtl.setRoot('ThirdPage');
  }

}
