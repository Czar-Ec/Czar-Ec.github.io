import { TestBed } from '@angular/core/testing';

import { InfoToolsService } from './info-tools';

describe('InfoTools', () => {
  let service: InfoToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
