import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-qieshuo',
  templateUrl: './qieshuo.component.html',
  styleUrls: ['./qieshuo.component.css']
})
export class QieshuoComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  qieshuo;
  ngOnInit() {
    this.http.get('/api/qieshuo').subscribe((data)=>{
      this.qieshuo = data;
    });
  }

}
