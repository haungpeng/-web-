import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Qieshuo2Component } from './qieshuo2.component';

describe('Qieshuo2Component', () => {
  let component: Qieshuo2Component;
  let fixture: ComponentFixture<Qieshuo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qieshuo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Qieshuo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
