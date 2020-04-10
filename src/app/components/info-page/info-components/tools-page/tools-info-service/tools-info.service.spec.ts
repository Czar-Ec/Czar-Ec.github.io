import { TestBed } from '@angular/core/testing';

import { ToolsInfoService } from './tools-info.service';

describe('ToolsInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolsInfoService = TestBed.get(ToolsInfoService);
    expect(service).toBeTruthy();
  });
});
