import { TestBed } from '@angular/core/testing';

import { ProjectsPreviewService } from './project-preview.service';
import { PROJECT_PREVIEW } from '../../../../../app.tokens';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

describe('ProjectsPreviewService', () => {
  let service: ProjectsPreviewService;

  const stubConfig = {
    codeCovBadgeUrl: 'codecov',
    travisBadgeUrl: 'travis'
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

  describe('METHOD: setupProjectDetails', () => {
    it('should return an empty aray if no valid response', () => {
      spyOn(service['httpClient'], 'get').and.returnValue(of(null));

      service.setupProjectDetails();
      expect(service['_projectDetails']).toEqual([]);
    });

    it('should set next page link', () => {
      spyOn(service['httpClient'], 'get').and.returnValue(of({
        body: ['test'],
        headers: new HttpHeaders().set('link',
          '<.../repos?page=2&per_page=10>; rel="next", <.../repos?page=2&per_page=10>; rel="last"')
      }));

      service.setupProjectDetails();
      expect(service['_projectDetails'].length).toEqual(1);
    });
  });

  describe('METHOD: getNextDetail', () => {
    it('should append the response to the project details', () => {
      spyOn(service['httpClient'], 'get').and.returnValue(of(null));

      service.getNextDetail();
      expect(service['_projectDetails']).toEqual([]);
    });

    it('should set next page link', () => {
      spyOn(service['httpClient'], 'get').and.returnValue(of({
        body: ['test'],
        headers: new HttpHeaders().set('link',
          '<.../repos?page=2&per_page=10>; rel="next", <.../repos?page=2&per_page=10>; rel="last"')
      }));

      service.getNextDetail();
      expect(service['_projectDetails'].length).toEqual(1);
    });
  });

  describe('METHOD: getDetailsFromResponse', () => {
    it('should return correct details from response', () => {
      const stubBody = {
        name: 'name',
        full_name: 'full_name',
        html_url: 'url',
        description: 'desc',
        url: 'also_url',
        default_branch: 'develop'
      };

      spyOn<any>(service, 'getTravisBadge').and.returnValue('');
      spyOn<any>(service, 'getCodeCovBadge').and.returnValue('');
      spyOn<any>(service, 'summariseDescription').and.callFake((str: any) => stubBody.description);

      expect(service['getDetailsFromResponse']([stubBody] as any)).toEqual([{
        projectName: stubBody.name,
        projectFullName: stubBody.full_name,
        projectUrl: stubBody.html_url,
        projectDescription: stubBody.description,
        projectDefaultBranch: stubBody.default_branch,
        travisBadge: '',
        codeCovBadge: ''
      }] as any);
    });
  });

  describe('METHOD: summariseDescription', () => {
    it('should return description if length is less than length', () => {
      expect(service['summariseDescription']('desc', 5)).toBe('desc');
    });

    it('should shorten description if length is more than length', () => {
      expect(service['summariseDescription']('description', 5)).toBe('descr...');
    });
  });

  describe('METHOD: getTravisBadge', () => {
    it('should return null if no branch is provided', () => {
      expect(service['getTravisBadge'](null, null)).toBeNull();
    });

    it('should return correct values', () => {
      expect(service['getTravisBadge']('branch', 'repo')).toEqual({
        badgeUrl: 'travisrepo',
        badgeImage: 'travisrepo.svg?branch=branch'
      });
    });
  });

  describe('METHOD: getCodeCovBadge', () => {
    it('should return null if no branch is provided', () => {
      expect(service['getCodeCovBadge'](null, null)).toBeNull();
    });

    it('should return null if no branch is provided', () => {
      expect(service['getCodeCovBadge']('branch', 'repo')).toEqual({
        badgeUrl: 'codecovrepo',
        badgeImage: 'codecovrepo/branch/branch/graph/badge.svg'
      });
    });
  });
});
