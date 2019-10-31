import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'CzarEc Portfolio';

  private overlay: HTMLElement;

  constructor(
    private iconReg: MatIconRegistry,
    sanitise: DomSanitizer,
    private overlayContainer: OverlayContainer,
    public theme: ThemeService
  ) {
    // pass the container element to theme service
    this.overlay = this.overlayContainer.getContainerElement();
    this.theme.init(this.overlay);

    this.iconReg.addSvgIcon(
      'crescent',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/crescent.svg')
    );
  }

  @HostListener('window:resize')
  OnWindowResize() {
    this.theme.applyParticles(this.theme.configLocation);
  }
}
