import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' ;
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tbk',
  templateUrl: './tbk.component.html',
  styleUrls: ['./tbk.component.css']
})
export class TbkComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  tbk;
  ngOnInit() {
    this.http.get('/api/renwu').subscribe((data)=>{
      this.tbk = data;
    });
  }

}
