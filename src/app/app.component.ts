import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router, NavigationEnd } from '@angular/router';
import { PanelScrollService } from './services/panel-scroll.service';
import { IconService } from './services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'CzarEc Portfolio';

  private overlay: HTMLElement;

  constructor(
    private overlayContainer: OverlayContainer,
    public theme: ThemeService,
    private router: Router,
    private panelScrollService: PanelScrollService,
    private iconService: IconService
  ) {
    // pass the container element to theme service
    this.overlay = this.overlayContainer.getContainerElement();
    this.theme.init(this.overlay);
  }

  /**
   * Listens to router events and makes sure that the second panel is shown if info page
   */
  ngAfterViewInit() {
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
