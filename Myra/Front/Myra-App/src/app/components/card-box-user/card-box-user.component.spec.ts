/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardBoxUserComponent } from './card-box-user.component';

describe('CardBoxUserComponent', () => {
  let component: CardBoxUserComponent;
  let fixture: ComponentFixture<CardBoxUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBoxUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBoxUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
