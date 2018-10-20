import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private iconRegistry: MatIconRegistry,
    sanitise: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'crescent',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/redcrescent.svg')
    );
  }
}
