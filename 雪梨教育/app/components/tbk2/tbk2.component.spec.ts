import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tbk2Component } from './tbk2.component';

describe('Tbk2Component', () => {
  let component: Tbk2Component;
  let fixture: ComponentFixture<Tbk2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tbk2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tbk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
