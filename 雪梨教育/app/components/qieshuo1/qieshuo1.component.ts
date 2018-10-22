import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-qieshuo1',
  templateUrl: './qieshuo1.component.html',
  styleUrls: ['./qieshuo1.component.css']
})
export class Qieshuo1Component implements OnInit {

  constructor(private http:HttpClient) { }
  qieshuo1;
  ngOnInit() {
    this.http.get('/api/qieshuo').subscribe((data)=>{
      this.qieshuo1 = data;
    });
  }

}
