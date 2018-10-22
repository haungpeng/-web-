import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' ;
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-renwu',
  templateUrl: './renwu.component.html',
  styleUrls: ['./renwu.component.css']
})
export class RenwuComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  renwu;
  ngOnInit() {
    this.http.get('/api/renwu').subscribe((data)=>{
      this.renwu = data;
    });
  }

}
