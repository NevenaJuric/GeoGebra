/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LaborsComponent } from './labors.component';

describe('LaborsComponent', () => {
  let component: LaborsComponent;
  let fixture: ComponentFixture<LaborsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaborsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
