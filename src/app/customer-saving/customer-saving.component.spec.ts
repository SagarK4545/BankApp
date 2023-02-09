import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSavingComponent } from './customer-saving.component';

describe('CustomerSavingComponent', () => {
  let component: CustomerSavingComponent;
  let fixture: ComponentFixture<CustomerSavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSavingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
