import { TestBed } from '@angular/core/testing';

import { ProjectsPreviewService } from './project-preview.service';

describe('ProjectsPreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectsPreviewService = TestBed.get(ProjectsPreviewService);
    expect(service).toBeTruthy();
  });
});
