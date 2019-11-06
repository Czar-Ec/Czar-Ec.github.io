import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { SplashPageComponent } from './splash-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as anime from 'animejs/lib/anime.es.js';

describe('SplashPageComponent', () => {
  let component: SplashPageComponent;
  let fixture: ComponentFixture<SplashPageComponent>;

  const stub = { add: '' };
  const addStub = { add: () => stub };

  const stubAnime = {
    default: {
      timeline: () => addStub
    }
  };

  const stubThemeService = {
    toggleDarkMode: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SplashPageComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
    (window as any).anime = stubAnime;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('METHOD: scroll', () => {
    it('should return if there is no element with the provided ID', () => {
      document.getElementById = jasmine.createSpy('getElementSpy').and.returnValue(null);
      expect(component.scroll(null)).toBeUndefined();
    });

    it('should scroll the element into view', () => {
      const elementStub = {
        scrollIntoView: () => { }
      };

      const scrollSpy = spyOn(elementStub, 'scrollIntoView');

      document.getElementById = jasmine.createSpy('getElementSpy').and.returnValue(elementStub);
      component.scroll('test');
      expect(scrollSpy).toHaveBeenCalled();
    });

    describe('METHOD: toggleDarkMode', () => {
      it('should toggle dark mode', () => {
        const toggleSpy = spyOn(component.themeService, 'toggleDarkMode');
        component.toggleDarkMode();
        expect(toggleSpy).toHaveBeenCalled();
      });
    });

    describe('METHOD: animateLinkButton', () => {
      it('should animate the relevant items', fakeAsync(() => {
        component.iconButtons = ['test'];

        const animeSpy = spyOn(anime.default, 'timeline').and
          .returnValue({ add: () => addStub });

        component.animateLinkButton({ target: 'test' }, 0);
        tick(2000);
        expect(animeSpy).toHaveBeenCalled();
      }));
    });
  });
});
