/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { News5Component } from './news5.component';

describe('News5Component', () => {
  let component: News5Component;
  let fixture: ComponentFixture<News5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
