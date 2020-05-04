import { TestBed } from '@angular/core/testing';

import { UnderConstructionWarningService } from './under-construction-warning.service';

describe('UnderConstructionWarningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnderConstructionWarningService = TestBed.get(UnderConstructionWarningService);
    expect(service).toBeTruthy();
  });
});
