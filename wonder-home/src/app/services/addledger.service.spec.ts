import { TestBed } from '@angular/core/testing';

import { AddledgerService } from './addledger.service';

describe('AddledgerService', () => {
  let service: AddledgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddledgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
