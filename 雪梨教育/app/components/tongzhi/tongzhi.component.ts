import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' ;
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tongzhi',
  templateUrl: './tongzhi.component.html',
  styleUrls: ['./tongzhi.component.css']
})
export class TongzhiComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  tongzhi;
  ngOnInit() {
    this.http.get('/api/tongzhi').subscribe((data)=>{
      this.tongzhi = data;
    });
  }

}
