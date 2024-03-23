import { TestBed } from '@angular/core/testing';

import { AdddisbursementService } from './adddisbursement.service';

describe('AdddisbursementService', () => {
  let service: AdddisbursementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdddisbursementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
