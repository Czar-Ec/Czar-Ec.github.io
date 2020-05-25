import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ToolsInfoService } from './tools-info.service';
import { TOOLS_CONFIG } from '../../../../../app.tokens';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ToolsInfoService', () => {
  let service: ToolsInfoService;

  const stubConfig = {
    faviconsUrl: 'favicons_url',
    toolsUrl: 'tools_url'
  };

  const stubHttp = {
    get: () => of()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ToolsInfoService,
        { provide: TOOLS_CONFIG, useValue: stubConfig },
        { provide: HttpClient, useValue: stubHttp }
      ]
    });
    service = TestBed.get(ToolsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the filtered list', () => {
    const stubTool = { name: 'tool' } as any;

    service['filteredToolsList'] = [stubTool];
    expect(service.tools).toEqual([stubTool]);
  });

  describe('METHOD: filterList', () => {
    it('should reset filteredToolsList if no filter is given', () => {
      service['toolsList'] = ['test'] as any;
      service['filteredToolsList'] = [];

      service.filterList(' ');
      expect(service['filteredToolsList']).toEqual(service['toolsList']);
    });

    it('should filter the toolsList', () => {
      service['toolsList'] = ['test'] as any;
      service['filteredToolsList'] = [];
      const filterSpy = spyOn<any>(service, 'filter').and.callFake(() => { });

      service.filterList('test');

      expect(filterSpy).toHaveBeenCalled();
    });
  });

  describe('METHOD: filter', () => {
    it('should return false if no filter', () => {
      expect(service['filter'](null, { tags: [] } as any)).toBeFalsy();
    });

    it('should return true if item meets filter requirement', () => {
      expect(service['filter']('name', { name: 'name', tags: [] } as any)).toBeTruthy();
    });

    it('should return true if item meets filter requirement', () => {
      expect(service['filter']('tag', { name: 'name', tags: ['tag'] } as any)).toBeTruthy();
    });
  });

  describe('METHOD: retrieveFavIconUrl', () => {
    it('should return null of no url is provided', () => {
      expect(service.retrieveFavIconUrl(null)).toBeNull();
    });

    it('should return previewUrl if it exists', () => {
      expect(service.retrieveFavIconUrl('url', 'preview_url')).toBe('preview_url');
    });

    it('should return a converted favicon url', () => {
      expect(service.retrieveFavIconUrl('http://sub.dom.com'))
        .toBe(`undefined/dom.com/125`);
    });
  });

  describe('METHOD: getTools', () => {
    it('should set the tools list', fakeAsync(() => {
      spyOn<any>(service['httpClient'], 'get').and.returnValue(of({ tools: 'test' } as any));
      spyOn<any>(service, 'sortList').and.returnValue();

      service['getTools']();
      expect(service['toolsList']).toEqual('test' as any);
      expect(service['filteredToolsList']).toEqual('test' as any);
    }));
  });
});
