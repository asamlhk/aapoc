import { TestBed } from '@angular/core/testing';

import { MlAnalyticGuardService } from './ml-analytic-guard.service';

describe('MlAnalyticGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MlAnalyticGuardService = TestBed.get(MlAnalyticGuardService);
    expect(service).toBeTruthy();
  });
});
