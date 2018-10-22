import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RenwuComponent } from './components/renwu/renwu.component';
import { TbkComponent } from './components/tbk/tbk.component';
import { KechengComponent } from './components/kecheng/kecheng.component';
import { QieshuoComponent } from './components/qieshuo/qieshuo.component';
import { TongzhiComponent } from './components/tongzhi/tongzhi.component';
import { Tbk1Component } from './components/tbk1/tbk1.component';
import { Tbk2Component } from './components/tbk2/tbk2.component';
import { Tbk3Component } from './components/tbk3/tbk3.component';
import { Qieshuo1Component } from './components/qieshuo1/qieshuo1.component';
import { Qieshuo2Component } from './components/qieshuo2/qieshuo2.component';
import { Qieshuo3Component } from './components/qieshuo3/qieshuo3.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    HomeComponent,
    RenwuComponent,
    TbkComponent,
    KechengComponent,
    QieshuoComponent,
    TongzhiComponent,
    Tbk1Component,
    Tbk2Component,
    Tbk3Component,
    Qieshuo1Component,
    Qieshuo2Component,
    Qieshuo3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent,
        children:[
          {path:'renwu',component:RenwuComponent},
          {path:'tbk',component:TbkComponent,children:[
            {path:'tbk1',component:Tbk1Component},
            {path:'tbk2',component:Tbk2Component},
            {path:'tbk3',component:Tbk3Component},
            {path:'**',component:Tbk1Component},
          ]},
          {path:'kecheng',component:KechengComponent},
          {path:'qieshuo',component:QieshuoComponent,children:[
            {path:'qieshuo1',component:Qieshuo1Component},
            {path:'qieshuo2',component:Qieshuo2Component},
            {path:'qieshuo3',component:Qieshuo3Component},
            {path:'**',component:Qieshuo1Component},
          ]},
          {path:'tongzhi',component:TongzhiComponent},
          {path:'**',component:RenwuComponent},
      ]},
      {path:'tongbu',component:TongbuComponent},
      {path:'shequ',component:ShequComponent},
      {path:'course',component:CourseComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:TongbuComponent},
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
