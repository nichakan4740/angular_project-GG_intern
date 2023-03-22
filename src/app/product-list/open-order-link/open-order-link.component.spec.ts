/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OpenOrderLinkComponent } from './open-order-link.component';

describe('OpenOrderLinkComponent', () => {
  let component: OpenOrderLinkComponent;
  let fixture: ComponentFixture<OpenOrderLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenOrderLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenOrderLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
