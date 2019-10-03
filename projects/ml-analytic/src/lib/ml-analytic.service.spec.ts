import { TestBed } from '@angular/core/testing';

import { MlAnalyticService } from './ml-analytic.service';

describe('MlAnalyticService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MlAnalyticService = TestBed.get(MlAnalyticService);
    expect(service).toBeTruthy();
  });
});
