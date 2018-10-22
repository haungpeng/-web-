import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private http:HttpClient) { }
  arr=['<<',1,2,3,4,5,6,7,8,9,'>>'];
  courseId:number;
  tongbuke;
  ngOnInit() {
    // this.courseId = this.router.snapshot.params['courseId'];
    // this.router.params.subscribe((params)=>{
    //   this.courseId = params['courseId'];
    // }); 
    this.http.get('/api/tongbuke').subscribe((data)=>{
      this.tongbuke = data;
    });
  }
  
}
class Course{
  constructor(
      public id:number,
      public courseName:string,
      public images:string,
      public task:number,
      public person:number){

  }
}
