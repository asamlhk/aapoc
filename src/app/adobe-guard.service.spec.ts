import { TestBed } from '@angular/core/testing';

import { AdobeGuardService } from './adobe-guard.service';

describe('AdobeGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdobeGuardService = TestBed.get(AdobeGuardService);
    expect(service).toBeTruthy();
  });
});
