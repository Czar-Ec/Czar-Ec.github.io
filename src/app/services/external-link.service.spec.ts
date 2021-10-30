import { TestBed } from '@angular/core/testing';

import { ExternalLinkService } from './external-link.service';
import { ConfigurationService } from './configuration.service';
import { EXTERNAL_URLS } from '../app.tokens';

describe('ExternalLinkService', () => {
  let service;

  const stubConfigService = {
    cv: 'cv',
    github: 'github',
    linkedin: 'linkedin'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: EXTERNAL_URLS, useValue: stubConfigService }
      ]
    });
    service = TestBed.get(ExternalLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('METHOD: openCV', () => {
    it('should open the CV file', () => {
      const spy = spyOn(window, 'open');
      service.openCV();
      expect(spy).toHaveBeenCalledWith(stubConfigService.cv, '_blank');
    });
  });

  describe('METHOD: openLinkedIn', () => {
    it('should open the LinkedIn page', () => {
      const spy = spyOn(window, 'open');
      service.openLinkedIn();
      expect(spy).toHaveBeenCalledWith(stubConfigService.linkedin, '_blank');
    });
  });

  describe('METHOD: openGithub', () => {
    it('should open the Github page', () => {
      const spy = spyOn(window, 'open');
      service.openGithub();
      expect(spy).toHaveBeenCalledWith(stubConfigService.github, '_blank');
    });
  });
});
