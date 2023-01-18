import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentnewComponent } from './documentnew.component';

describe('DocumentnewComponent', () => {
  let component: DocumentnewComponent;
  let fixture: ComponentFixture<DocumentnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
