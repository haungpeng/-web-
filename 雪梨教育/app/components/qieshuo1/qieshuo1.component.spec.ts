import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Qieshuo1Component } from './qieshuo1.component';

describe('Qieshuo1Component', () => {
  let component: Qieshuo1Component;
  let fixture: ComponentFixture<Qieshuo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qieshuo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Qieshuo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
