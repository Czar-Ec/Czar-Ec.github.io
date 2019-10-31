import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'CzarEc Portfolio';

  private overlay: HTMLElement;

  constructor(
    private overlayContainer: OverlayContainer,
    public theme: ThemeService
  ) {
    // pass the container element to theme service
    this.overlay = this.overlayContainer.getContainerElement();
    this.theme.init(this.overlay);
  }
}
