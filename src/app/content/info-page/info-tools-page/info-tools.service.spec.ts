import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TOOLS_URL } from '../../../app.tokens';
import { InfoToolsService } from './info-tools.service';
import { ToolsConfig } from './tools.object';

describe('InfoToolsService', () => {
  let service: any;
  let httpMock: HttpTestingController;

  const mockTools: ToolsConfig = {
    tools: [
      {
        name: 'Tool A',
        description: 'Description A',
        confidence: 0,
        reference: 'RefA',
        tags: ['tag1'],
        versions: ['v1'],
        exampleProjects: [{ name: 'ProjA', url: 'urlA' }],
      },
      {
        name: 'Tool B',
        description: 'Description B',
        confidence: 0,
        reference: 'RefB',
        tags: ['tag2'],
        versions: ['v2'],
        exampleProjects: [{ name: 'ProjB', url: 'urlB' }],
      },
    ],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: TOOLS_URL, useValue: 'example_url' },
        InfoToolsService,
      ],
    });

    service = TestBed.inject(InfoToolsService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTools', () => {
    it('should fetch tools from URL', async () => {
      const req = httpMock.expectOne('example_url');
      req.flush(mockTools);

      await Promise.resolve(); // wait for the constructor async call

      expect(service.tools$()).toEqual(mockTools);
      expect(service['_toolsList']).toEqual(mockTools);
    });

    it('should handle HTTP error and not set tools', async () => {
      const req = httpMock.expectOne('example_url');
      req.error(new ErrorEvent('network error'));

      await Promise.resolve();

      expect(service.tools$()).toBeNull();
      expect(service['_toolsList']).toBeNull();
    });

    it('should call getTools on construction', () => {
      // Since constructor calls getTools, and it's async, we can check that a request is expected
      const req = httpMock.expectOne('example_url');
      expect(req).toBeTruthy();
      req.flush(mockTools);
    });
  });

  describe('applyFilters', () => {
    beforeEach(() => {
      // Populate _toolsList for filtering
      service['_toolsList'] = mockTools;
      service.tools$.set(mockTools);
    });

    it('should return all tools if filter string is empty', () => {
      spyOn(service as any, 'getTools');
      service.applyFilters('');
      expect((service as any).getTools).toHaveBeenCalled();
    });

    it('should filter by name', () => {
      service.applyFilters('Tool A');
      expect(service.tools$().tools.length).toBe(1);
      expect(service.tools$().tools[0].name).toBe('Tool A');
    });

    it('should filter by description', () => {
      service.applyFilters('Description B');
      expect(service.tools$().tools.length).toBe(1);
      expect(service.tools$().tools[0].name).toBe('Tool B');
    });

    it('should filter by reference', () => {
      service.applyFilters('RefA');
      expect(service.tools$().tools.length).toBe(1);
      expect(service.tools$().tools[0].name).toBe('Tool A');
    });

    it('should filter by tag', () => {
      service.applyFilters('tag2');
      expect(service.tools$().tools.length).toBe(1);
      expect(service.tools$().tools[0].name).toBe('Tool B');
    });

    it('should filter by version', () => {
      service.applyFilters('v1');
      expect(service.tools$().tools.length).toBe(1);
      expect(service.tools$().tools[0].name).toBe('Tool A');
    });

    it('should filter by example project name', () => {
      service.applyFilters('ProjB');
      expect(service.tools$().tools.length).toBe(1);
      expect(service.tools$().tools[0].name).toBe('Tool B');
    });

    it('should filter by example project URL', () => {
      service.applyFilters('urlA');
      expect(service.tools$().tools.length).toBe(1);
      expect(service.tools$().tools[0].name).toBe('Tool A');
    });

    it('should be case-insensitive and trim spaces', () => {
      service.applyFilters('  tool a  ');
      expect(service.tools$().tools.length).toBe(1);
      expect(service.tools$().tools[0].name).toBe('Tool A');
    });

    it('should return empty array if no matches', () => {
      service.applyFilters('nonexistent');
      expect(service.tools$().tools.length).toBe(0);
    });

    it('should filter and return multiple tools if filter matches both', () => {
      service.applyFilters('tool');
      expect(service.tools$().tools.length).toBe(2);
      expect(service.tools$().tools.map((t: any) => t.name)).toEqual(['Tool A', 'Tool B']);
    });

    it('should filter by partial match in name', () => {
      service.applyFilters('ool A');
      expect(service.tools$().tools.length).toBe(1);
      expect(service.tools$().tools[0].name).toBe('Tool A');
    });

    it('should filter by multiple words in description', () => {
      service.applyFilters('description a');
      expect(service.tools$().tools.length).toBe(1);
      expect(service.tools$().tools[0].name).toBe('Tool A');
    });

    it('should handle null or undefined _toolsList gracefully', () => {
      service['_toolsList'] = null;
      service.applyFilters('test');
      expect(service.tools$().tools).toEqual([]);
    });

    it('should handle filter with special characters', () => {
      // Assuming no special chars in mock, should return empty
      service.applyFilters('!@#');
      expect(service.tools$().tools.length).toBe(0);
    });

    it('should filter by combined example project fields', () => {
      service.applyFilters('ProjA urlA');
      expect(service.tools$().tools.length).toBe(1);
      expect(service.tools$().tools[0].name).toBe('Tool A');
    });
  });
});