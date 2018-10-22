import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' ;
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-kecheng',
  templateUrl: './kecheng.component.html',
  styleUrls: ['./kecheng.component.css']
})
export class KechengComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    
  }

}
