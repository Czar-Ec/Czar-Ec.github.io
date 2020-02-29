import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { PanelScrollService } from './services/panel-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'CzarEc Portfolio';

  private overlay: HTMLElement;

  constructor(
    private iconReg: MatIconRegistry,
    sanitise: DomSanitizer,
    private overlayContainer: OverlayContainer,
    public theme: ThemeService,
    private router: Router,
    private panelScrollService: PanelScrollService
  ) {
    // pass the container element to theme service
    this.overlay = this.overlayContainer.getContainerElement();
    this.theme.init(this.overlay);

    // icons
    this.iconReg.addSvgIcon(
      'crescent',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/crescent.svg')
    );
    this.iconReg.addSvgIcon(
      'cv',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/cv.svg')
    );
    this.iconReg.addSvgIcon(
      'github',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/github.svg')
    );
    this.iconReg.addSvgIcon(
      'linkedin',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/linkedin.svg')
    );
    this.iconReg.addSvgIcon(
      'sun',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/sun.svg')
    );
    this.iconReg.addSvgIcon(
      'moon',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/moon.svg')
    );
  }

  ngOnInit() {
    // if the route has info, scroll to the anchor tag
    this.router.events.subscribe((res) => {
      // if it has info, scroll to info panel
      if (res instanceof NavigationEnd && res.url.match(/\/info\/*/g) && !res.urlAfterRedirects.match(/#info/g)) {
        this.panelScrollService.scroll('info', 'auto');

        // set up scroll
        this.panelScrollService.lastScroll = 'info';
      }
    });
  }

  @HostListener('window:resize')
  OnWindowResize() {
    this.theme.applyParticles(this.theme.configLocation);
    this.panelScrollService.windowResized();
  }
}
