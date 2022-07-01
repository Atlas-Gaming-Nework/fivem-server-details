import { TestBed } from '@angular/core/testing';

import { CfxlookupService } from './cfxlookup.service';

describe('CfxlookupService', () => {
  let service: CfxlookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CfxlookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
