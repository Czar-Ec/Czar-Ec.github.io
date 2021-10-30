import { Injectable, Inject } from '@angular/core';
import { ICON_CONFIG } from '../app.tokens';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

interface Icon {
  label: string;
  path: string;
}

@Injectable({
  providedIn: 'root'
})
export class IconService {

  // icons the service is handling
  private icons: Icon[] = [];

  constructor(
    @Inject(ICON_CONFIG) private config,
    private iconReg: MatIconRegistry,
    private sanitise: DomSanitizer,
  ) {
    this.icons = this.config ? this.config : [];

    if (!!this.icons.length) {
      this.loadIcons();
    }
  }

  /**
   * Function that adds all the icons to the icon registry
   */
  private loadIcons() {
    this.icons.forEach(icon => {
      this.iconReg.addSvgIcon(icon.label,
        this.sanitise.bypassSecurityTrustResourceUrl(icon.path));
    });
  }
}
