import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;



  beforeEach(() => {
    TestBed.configureTestingModule({

    });
    service = TestBed.get(ThemeService);
    const stub = () => { };
    (window as any).particlesJS = { load: stub };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('METHOD: init', () => {
    it('should apply theme', () => {
      const overlay = document.createElement('div');

      const applyThemeSpy = spyOn<any>(service, 'applyTheme').and.returnValue(true);

      service.init(overlay);
      expect(service['overlay']).toBe(overlay);
      expect(applyThemeSpy).toHaveBeenCalled();
    });
  });

  describe('METHOD: toggleDarkMode', () => {
    it('should set value equal to input', () => {
      const setValue = true;
      const spy = spyOn<any>(service, 'applyTheme');
      service.toggleDarkMode(setValue);
      expect(service.darkTheme).toBe(setValue);
      expect(spy).toHaveBeenCalled();
    });

    it('should set value equal to input', () => {
      const setValue = false;
      const spy = spyOn<any>(service, 'applyTheme');
      service.toggleDarkMode(setValue);
      expect(service.darkTheme).toBe(setValue);
      expect(spy).toHaveBeenCalled();
    });

    it('should toggle', () => {
      service.darkTheme = true;
      const spy = spyOn<any>(service, 'applyTheme');
      service.toggleDarkMode();
      expect(service.darkTheme).toBeFalsy();
      expect(spy).toHaveBeenCalled();
    });

    it('should toggle', () => {
      service.darkTheme = false;
      const spy = spyOn<any>(service, 'applyTheme');
      service.toggleDarkMode();
      expect(service.darkTheme).toBeTruthy();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('METHOD: applyTheme', () => {
    it('should add dark theme if dark theme is true', () => {
      service['overlay'] = document.createElement('div');
      service.darkTheme = true;
      const overlaySpy = spyOn<any>(service['overlay'].classList, 'add');
      const applyParticlesSpy = spyOn(service, 'applyParticles');
      service['applyTheme']();
      expect(overlaySpy).toHaveBeenCalled();
      expect(applyParticlesSpy).toHaveBeenCalled();
    });

    it('should remove dark theme if dark theme is false', () => {
      service['overlay'] = document.createElement('div');
      service.darkTheme = false;
      const overlaySpy = spyOn<any>(service['overlay'].classList, 'remove');
      const applyParticlesSpy = spyOn(service, 'applyParticles');
      service['applyTheme']();
      expect(overlaySpy).toHaveBeenCalled();
      expect(applyParticlesSpy).toHaveBeenCalled();
    });
  });

  describe('METHOD: applyParticles', () => {
    it('should return if no config is passed', () => {
      expect(service.applyParticles()).toBeUndefined();
    });

    it('should update the current config location', () => {
      const configLoc = 'yes';
      service.applyParticles(configLoc);
      expect(service.configLocation).toBe(configLoc);
    });
  });
});
