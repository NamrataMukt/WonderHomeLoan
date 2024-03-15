import { TestBed } from '@angular/core/testing';

import { CibilscoreService } from './cibilscore.service';

describe('CibilscoreService', () => {
  let service: CibilscoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CibilscoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
