import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { CommonService} from '../../seriveces/common.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private local:CommonService) { }

  ngOnInit() {
  }
  txt;

  @Output() text1 = new EventEmitter();
  add(e){
    if(e.keyCode==13){
      this.text1.emit(this.txt);
      this.txt="";
    }
  }

}
