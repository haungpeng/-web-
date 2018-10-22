import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Qieshuo3Component } from './qieshuo3.component';

describe('Qieshuo3Component', () => {
  let component: Qieshuo3Component;
  let fixture: ComponentFixture<Qieshuo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qieshuo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Qieshuo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
