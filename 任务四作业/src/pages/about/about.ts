import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {}
  ionViewDidLoad(){
    
  }
  isActive = 0;
  isClick(i){
    this.isActive = i;
  }
}
