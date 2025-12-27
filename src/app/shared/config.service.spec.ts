import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

describe('ConfigService', () => {
  let service: ConfigService;
  let httpMock: HttpTestingController;

  const mockConfig = {
    apiUrl: 'https://example.com/api',
    featureFlag: true
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigService]
    });

    service = TestBed.inject(ConfigService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loadConfig', () => {
    it('should fetch configuration from the given URL and populate _config', fakeAsync(async () => {
      const configUrl = '/assets/config.json';

      // Trigger loadConfig
      const promise = service.loadConfig(configUrl);

      // Expect one HTTP GET request
      const req = httpMock.expectOne(configUrl);
      expect(req.request.method).toBe('GET');

      // Respond with mock data
      req.flush(mockConfig);

      tick(); // Wait for firstValueFrom to resolve
      await promise;

      // Verify that _config is set
      expect((service as any)._config).toEqual(mockConfig);
      expect(service.configuration).toEqual(mockConfig);
    }));
  });

  describe('configuration getter', () => {
    it('should throw an error if configuration is not loaded', () => {
      // Reset _config to null/undefined
      (service as any)._config = null;

      expect(() => service.configuration).toThrowError('Config not loaded yet!');
    });

    it('should return the loaded configuration', () => {
      (service as any)._config = mockConfig;
      expect(service.configuration).toEqual(mockConfig);
    });
  });
});
