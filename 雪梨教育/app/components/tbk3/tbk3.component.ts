import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' ;
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tbk3',
  templateUrl: './tbk3.component.html',
  styleUrls: ['./tbk3.component.css']
})
export class Tbk3Component implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  tbk3;
  ngOnInit() {
    this.http.get('/api/tbk3').subscribe((data)=>{
      this.tbk3 = data;
    });
  }

}
