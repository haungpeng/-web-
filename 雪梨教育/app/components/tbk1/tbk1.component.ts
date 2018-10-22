import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' ;
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tbk1',
  templateUrl: './tbk1.component.html',
  styleUrls: ['./tbk1.component.css']
})
export class Tbk1Component implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  tbk1;
  ngOnInit() {
    this.http.get('/api/tbk1').subscribe((data)=>{
      this.tbk1 = data;
    });
  }

}
