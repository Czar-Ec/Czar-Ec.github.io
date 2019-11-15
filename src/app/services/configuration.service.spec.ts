import { TestBed } from '@angular/core/testing';

import { ConfigurationService } from './configuration.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ConfigurationService', () => {
  let service: ConfigurationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(ConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('METHOD: loadConfig', () => {
    it('should set the config', () => {
      const stubConfig = {
        config: 'yes'
      };
      spyOn<any>(service['httpClient'], 'get').and.returnValue(of(stubConfig));
      service.loadConfig('');
      expect(service.config).toBe(stubConfig);
    });
  });
});
