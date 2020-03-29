import { TestBed } from '@angular/core/testing';

import { ProjectsPreviewService } from './project-preview.service';
import { PROJECT_PREVIEW } from '../../../../../app.tokens';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('ProjectsPreviewService', () => {
  let service: ProjectsPreviewService;

  const stubConfig = {

  };

  const stubHttp = {
    get: () => of()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectsPreviewService,
        { provide: PROJECT_PREVIEW, useValue: stubConfig },
        { provide: HttpClient, useValue: stubHttp }
      ]
    });
    service = TestBed.get(ProjectsPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
