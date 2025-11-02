import { Footer } from './footer';
import { ScreenService } from '../shared/screen.service';
import { of } from 'rxjs';

describe('Footer', () => {
  let component: Footer;
  let screenServiceMock: jasmine.SpyObj<ScreenService>;

  beforeEach(() => {
    screenServiceMock = jasmine.createSpyObj('ScreenService', [], { isMobile$: of(false) });
    component = new Footer(screenServiceMock);
  });

  describe('Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set isMobile$ from ScreenService', () => {
      expect(component.isMobile$).toBe(screenServiceMock.isMobile$);
    });

    it('should initialize darkMode as true', () => {
      expect(component.darkMode).toBeTruthy();
    });
  });

  describe('openGitHub()', () => {
    it('should open GitHub in a new tab', () => {
      const spy = spyOn(window, 'open');
      component.openGitHub();
      expect(spy).toHaveBeenCalledWith('https://github.com/Czar-Ec', '_blank');
    });
  });

  describe('openLinkedIn()', () => {
    it('should open LinkedIn in a new tab', () => {
      const spy = spyOn(window, 'open');
      component.openLinkedIn();
      expect(spy).toHaveBeenCalledWith('https://www.linkedin.com/in/czarec/', '_blank');
    });
  });

  describe('openInstagram()', () => {
    it('should open Instagram in a new tab', () => {
      const spy = spyOn(window, 'open');
      component.openInstagram();
      expect(spy).toHaveBeenCalledWith('https://www.instagram.com/czar_ec/', '_blank');
    });
  });

  describe('openCV()', () => {
    it('should not throw error when called', () => {
      expect(() => component.openCV()).not.toThrow();
    });
  });

  describe('toggleDarkMode()', () => {
    beforeEach(() => {
      document.body.classList.remove('dark');
      component.darkMode = false;
    });

    it('should add dark class when toggled from false to true', () => {
      component.toggleDarkMode();
      expect(document.body.classList.contains('dark')).toBeTrue();
      expect(component.darkMode).toBeTrue();
    });

    it('should remove dark class when toggled from true to false', () => {
      document.body.classList.add('dark');
      component.darkMode = true;
      component.toggleDarkMode();
      expect(document.body.classList.contains('dark')).toBeFalse();
      expect(component.darkMode).toBeFalse();
    });
  });
});
