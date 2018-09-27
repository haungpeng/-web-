import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Child1Component } from './component/child1/child1.component';
import { Child2Component } from './component/child2/child2.component';
import { ParentComponent } from './component/parent/parent.component';
import { CommonService} from './seriveces/common.service';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
