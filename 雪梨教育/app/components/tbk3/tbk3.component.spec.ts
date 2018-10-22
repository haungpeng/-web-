import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tbk3Component } from './tbk3.component';

describe('Tbk3Component', () => {
  let component: Tbk3Component;
  let fixture: ComponentFixture<Tbk3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tbk3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tbk3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
