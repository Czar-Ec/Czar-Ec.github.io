import { InfoPanelNavigationComponent } from './info-panel-navigation.component';
import { ElementRef } from '@angular/core';

describe('InfoPanelNavigationComponent (instance only)', () => {
  let component: InfoPanelNavigationComponent;

  beforeEach(() => {
    component = new InfoPanelNavigationComponent();
    // Provide a dummy button element for menuButton
    component.menuButton = new ElementRef(document.createElement('button'));
  });

  describe('ngAfterViewInit', () => {
    it('should set up click listener without error', () => {
      expect(() => component.ngAfterViewInit()).not.toThrow();
    });
  });

  describe('resizeMenu', () => {
    it('should not throw when menu panel does not exist', () => {
      // @ts-ignore access private
      expect(() => component['resizeMenu']()).not.toThrow();
    });

    it('should set panel width when panel exists', () => {
      const panel = document.createElement('div');
      panel.classList.add('mat-mdc-menu-panel');
      document.body.appendChild(panel);

      // @ts-ignore private
      component['resizeMenu']();

      const buttonWidth = component.menuButton.nativeElement.getBoundingClientRect().width;
      expect(panel.style.width).toBe(`${buttonWidth}px`);

      document.body.removeChild(panel);
    });
  });

  describe('openBugReportPage', () => {
    it('should call window.open', () => {
      const spy = spyOn(window, 'open');
      component.openBugReportPage();
      expect(spy).toHaveBeenCalledWith(
        'https://github.com/Czar-Ec/Czar-Ec.github.io/issues/new',
        '_blank'
      );
    });
  });
});
