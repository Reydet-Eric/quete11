import { TestBed } from '@angular/core/testing';

import { CcocktailService } from './ccocktail.service';

describe('CcocktailService', () => {
  let service: CcocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcocktailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
