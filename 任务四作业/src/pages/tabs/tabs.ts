import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { WodePage } from '../wode/wode';
import { PageonePage } from '../pageone/pageone';
import { BPage } from '../b/b';
import { FaxianPage } from '../faxian/faxian';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = PageonePage;
  tab5Root = WodePage;
  constructor(public modalCtrl: ModalController) {

  }
  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(FaxianPage);
      profileModal.present();
    },false);
  }
}
