import { TestBed } from '@angular/core/testing';

import { PanelScrollService } from './panel-scroll.service';

xdescribe('PanelScrollService', () => {
  let service: PanelScrollService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.get(PanelScrollService);
    expect(service).toBeTruthy();
  });

  describe('METHOD: scroll', () => {
    it('should return if there is no element with the provided ID', () => {
      document.getElementById = jasmine.createSpy('getElementSpy').and.returnValue(null);
      expect(service.scroll(null)).toBeUndefined();
    });

    it('should scroll the element into view', () => {
      const elementStub = {
        scrollIntoView: () => { }
      };

      const scrollSpy = spyOn(elementStub, 'scrollIntoView');

      document.getElementById = jasmine.createSpy('getElementSpy').and.returnValue(elementStub);
      service.scroll('test');
      expect(scrollSpy).toHaveBeenCalled();
    });
  });
});
