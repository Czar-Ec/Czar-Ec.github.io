import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  setDarkTheme = true;

  title = 'CzarEc Portfolio';

  private overlay;

  constructor(
    private iconReg: MatIconRegistry,
    sanitise: DomSanitizer,
    private overlayContainer: OverlayContainer
  ) {
    this.overlay = this.overlayContainer.getContainerElement();
    this.applyTheme();
    this.iconReg.addSvgIcon(
      'cog',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/cog.svg')
    );
    this.iconReg.addSvgIcon(
      'cv',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/cv.svg')
    );
    this.iconReg.addSvgIcon(
      'crescent',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/crescent.svg')
    );
    this.iconReg.addSvgIcon(
      'extra',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/extra.svg')
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
      'logo',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/logo.svg')
    );
    this.iconReg.addSvgIcon(
      'logotext',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/logotext.svg')
    );
    this.iconReg.addSvgIcon(
      'menu',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/menu.svg')
    );

    this.iconReg.addSvgIcon(
      'pepe',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/404/common_rarity_pepe.svg')
    );
    this.iconReg.addSvgIcon(
      'feels',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/404/feels_bad.svg')
    );
    this.iconReg.addSvgIcon(
      'okay',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/404/okay.svg')
    );
    this.iconReg.addSvgIcon(
      'rukidding',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/404/r_u_kidding.svg')
    );
    this.iconReg.addSvgIcon(
      'udaman',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/404/youre_the_man.svg')
    );

  }

  toggleDarkTheme() {
    this.setDarkTheme = !this.setDarkTheme;

    this.applyTheme();
  }

  applyTheme() {
    if (this.setDarkTheme) {
      this.overlay.classList.add('dark-theme');
    } else {
      this.overlay.classList.remove('dark-theme');
    }
  }
}
