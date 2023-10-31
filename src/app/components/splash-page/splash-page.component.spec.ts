import { ComponentFixture, TestBed, tick, fakeAsync, waitForAsync } from '@angular/core/testing';

import { SplashPageComponent } from './splash-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as anime from 'animejs/lib/anime.es.js';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExternalLinkService } from '../../services/external-link.service';

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

  const stubExternalLinkService = {
    openLink: () => { }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SplashPageComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: ExternalLinkService, useValue: stubExternalLinkService }
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
});
