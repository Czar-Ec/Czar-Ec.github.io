import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPageComponent } from './projects-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PROJECT_PREVIEW } from '../../../../app.tokens';
import { ProjectsPreviewService } from './project-preview-service/project-preview.service';
import { ExternalLinkService } from '../../../../services/external-link.service';

describe('ProjectsPageComponent', () => {
  let component: ProjectsPageComponent;
  let fixture: ComponentFixture<ProjectsPageComponent>;

  const stubPreviewConfig = {};
  const stubExternalLinkService = {
    openLink: () => { }
  };

  const stubPreviewService = {
    setupProjectDetails: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsPageComponent],
      providers: [
        { provide: PROJECT_PREVIEW, useValue: stubPreviewConfig },
        { provide: ProjectsPreviewService, useValue: stubPreviewService },
        { provide: ExternalLinkService, useValue: stubExternalLinkService }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
