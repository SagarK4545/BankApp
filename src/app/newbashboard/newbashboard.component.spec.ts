import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbashboardComponent } from './newbashboard.component';

describe('NewbashboardComponent', () => {
  let component: NewbashboardComponent;
  let fixture: ComponentFixture<NewbashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
