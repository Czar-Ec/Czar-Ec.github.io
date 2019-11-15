import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { SplashPageComponent } from './splash-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as anime from 'animejs/lib/anime.es.js';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigurationService } from 'src/app/services/configuration.service';

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

  const stubConfigService = {
    config: {
      externalLinks: {
        cv: 'cv',
        github: 'github',
        linkedin: 'linkedin'
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SplashPageComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: ConfigurationService, useValue: stubConfigService }
      ],
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

  describe('METHOD: openCV', () => {
    it('should open the CV file', () => {
      const spy = spyOn(window, 'open');
      component.openCV();
      expect(spy).toHaveBeenCalledWith(stubConfigService.config.externalLinks.cv, '_blank');
    });
  });

  describe('METHOD: openLinkedIn', () => {
    it('should open the LinkedIn page', () => {
      const spy = spyOn(window, 'open');
      component.openLinkedIn();
      expect(spy).toHaveBeenCalledWith(stubConfigService.config.externalLinks.linkedin, '_blank');
    });
  });

  describe('METHOD: openGithub', () => {
    it('should open the Github page', () => {
      const spy = spyOn(window, 'open');
      component.openGithub();
      expect(spy).toHaveBeenCalledWith(stubConfigService.config.externalLinks.github, '_blank');
    });
  });
});
