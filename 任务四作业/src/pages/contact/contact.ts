import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  items= [];
  constructor(public navCtrl: NavController,private http:HttpClient) {
    for (var i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  doInfinite(infiniteScroll){
    this.http.get('/api/course').subscribe(data=>{
      console.log(data);
    })
    // setTimeout(() => {
    //   for (var i = 0; i < 30; i++) {
    //     this.items.push( this.items.length );
    //   }

    //   console.log('Async operation has ended');
    //   infiniteScroll.complete();
    //   if(this.items.length>90){
    //     infiniteScroll.enable();
    //   }
      
    // }, 500);
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


}
