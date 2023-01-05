import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { InformationService } from './information.service';

describe('InformationService', () => {
  let service: InformationService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      
    });
    service = TestBed.inject(InformationService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
function beforeEach(arg0: () => void) {
  throw new Error('Function not implemented.');
}

function expect(service: InformationService) {
  throw new Error('Function not implemented.');
}

