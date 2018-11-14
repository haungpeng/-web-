import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { FaxianPage } from '../faxian/faxian';
/**
 * Generated class for the PageonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-pageone',
  templateUrl: 'pageone.html',
})
export class PageonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageonePage');
    let profileModal = this.modalCtrl.create(FaxianPage);
    profileModal.present();
  }
  

}



