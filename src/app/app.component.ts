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

  @HostListener('window:resize')
  OnWindowResize() {
    this.theme.applyParticles(this.theme.configLocation);
  }
}
