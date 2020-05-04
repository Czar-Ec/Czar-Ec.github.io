import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router, NavigationEnd } from '@angular/router';
import { PanelScrollService } from './services/panel-scroll.service';
import { IconService } from './services/icon.service';
import { UnderConstructionWarningService } from './services/under-construction-warning/under-construction-warning.service';
import { UnderConstructionWarningSnackBarComponent } from './services/under-construction-warning/under-construction-warning-snack-bar/under-construction-warning-snack-bar.component';
import { MatSnackBar } from '@angular/material';

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
    private iconService: IconService,
    private underConstructionWarningService: UnderConstructionWarningService,
    private warningSnackBar: MatSnackBar
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

    this.displaySnackbar();
  }

  @HostListener('window:resize')
  OnWindowResize() {
    this.theme.applyParticles(this.theme.configLocation);
    this.panelScrollService.windowResized();
  }

  /**
   * Function that displays the warning snackbar for the develop branch version of the app
   */
  private displaySnackbar() {
    // dont display if already displayed
    if (this.underConstructionWarningService.dismissed) {
      return;
    }

    this.underConstructionWarningService.snackBarRef = this.warningSnackBar.openFromComponent(
      UnderConstructionWarningSnackBarComponent, {
      duration: undefined,
      horizontalPosition: 'end'
    });
  }
}
