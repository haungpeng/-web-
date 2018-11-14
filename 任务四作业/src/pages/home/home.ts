import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { BPage } from '../b/b';
import { Action } from 'rxjs/scheduler/Action';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  icons:string = "tuijian";
  constructor(public navCtrl: NavController) {}
  goSub(inp){
    this.navCtrl.push(BPage,{id:1});
    console.log(inp);
  }
  ionViewDidLoad(){
    
  }
  isActive = 0;
  isClick(i){
    this.isActive = i;
  }
  change(){
    console.log('a');
  }
}
