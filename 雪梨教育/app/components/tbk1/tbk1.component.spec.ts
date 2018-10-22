import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tbk1Component } from './tbk1.component';

describe('Tbk1Component', () => {
  let component: Tbk1Component;
  let fixture: ComponentFixture<Tbk1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tbk1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tbk1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
