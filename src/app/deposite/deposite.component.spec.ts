import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositeComponent } from './deposite.component';

describe('DepositeComponent', () => {
  let component: DepositeComponent;
  let fixture: ComponentFixture<DepositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule,DepositeComponent],
      declarations: [  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
