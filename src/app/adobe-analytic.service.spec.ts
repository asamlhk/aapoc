import { TestBed } from '@angular/core/testing';

import { AdobeAnalyticService } from './adobe-analytic.service';

describe('AdobeAnalyticService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdobeAnalyticService = TestBed.get(AdobeAnalyticService);
    expect(service).toBeTruthy();
  });
});
