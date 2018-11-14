import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BComponent } from './b/b';
import { AbcComponent } from './abc/abc';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
@NgModule({
	declarations: [AComponent,
    AComponent,
    AComponent,
    BComponent,
    AbcComponent],
	imports: [
        BrowserModule,
        IonicModule.forRoot(ComponentsModule,{
            backButtonText: '首页',
            iconMode: 'ios',
            modalEnter: 'modal-slide-in',
            modalLeave: 'modal-slide-out',
            tabsPlacement: 'bottom',
            pageTransition: 'ios-transition',
            tabsHideOnSubPages:true
          })
    ],
	exports: [AComponent,
    AComponent,
    AComponent,
    BComponent,
    AbcComponent,]
})
export class ComponentsModule {}
