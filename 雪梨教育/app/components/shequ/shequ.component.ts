import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' ;
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  arr=['<<',1,2,3,4,5,6,7,8,9,'>>'];
  shequ;
  ngOnInit() {
    this.http.get('/api/shequ').subscribe((data)=>{
      this.shequ = data;
    });
  }

}
