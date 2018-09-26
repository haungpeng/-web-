import { Component, OnInit,Input ,EventEmitter} from '@angular/core';
import { CommonService} from '../../seriveces/common.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private local:CommonService) { }
  data=[];
  data1=[];
  ngOnInit() {
    if(this.local.get('data:')==undefined||localStorage.getItem,length==0){
      localStorage.setItem('data:','');
      console.log(this.data);

    }
    if(this.data.length>0){
      console.log('s');      
      this.data=localStorage.getItem('data:').split(',');
    }
    
    console.log(this.data.length);

  }
  
  add(event){
    this.data.push(event);
    
    this.local.set('data:',this.data);
  }
  del(i){
    this.data1.push(this.data[i]);
    this.data.splice(i,1);
  }
  del1(i){
    this.data.push(this.data1[i]);
    this.data1.splice(i,1);
  }
  del2(i){
    this.data.splice(i,1);
    this.local.set('data:',this.data);
  }
}
