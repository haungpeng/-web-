import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient) { }
  courses;
  arr=['<<',1,2,3,4,5,6,7,8,9,'>>'];
  ngOnInit() {
    this.http.get('/api/course').subscribe((data)=>{
      this.courses = data;
    });
  }
}
