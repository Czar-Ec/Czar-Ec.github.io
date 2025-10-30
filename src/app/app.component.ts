import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Footer,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class App {
  
  private matIconRegistry: MatIconRegistry = inject(MatIconRegistry);

  constructor(private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/instagram.svg')
    );
  }

  private customIcons() {
    
  }
}
