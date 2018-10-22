import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' ;
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tbk2',
  templateUrl: './tbk2.component.html',
  styleUrls: ['./tbk2.component.css']
})
export class Tbk2Component implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  tbk2;
  ngOnInit() {
    this.http.get('/api/tbk2').subscribe((data)=>{
      this.tbk2 = data;
    });
  }

}
