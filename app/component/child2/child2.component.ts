import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() arr;

  @Input() arr1;


  @Output() index1=new EventEmitter();
  del(i){
    this.index1.emit(i);
  }

  @Output() index2=new EventEmitter();
  del1(i){
    this.index2.emit(i);
  }
  @Output() index3=new EventEmitter();
  del2(i){
    this.index3.emit(i);
  }



}
