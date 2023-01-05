import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViewComponent } from './view.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
  let httpClient:HttpClient;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [ ViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
