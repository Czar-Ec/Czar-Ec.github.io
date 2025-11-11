import { CommonModule } from '@angular/common';
import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-panel-navigation',
  templateUrl: './info-panel-navigation.component.html',
  styleUrls: ['./info-panel-navigation.component.scss'],
  imports: [RouterModule, CommonModule, MatButtonModule, MatMenuModule, MatCardModule],
})
export class InfoPanelNavigationComponent implements AfterViewInit {
  @ViewChild('menuButton', { read: ElementRef }) menuButton!: ElementRef<HTMLButtonElement>;

  /**
   * After view init lifecycle hook to set up menu resize listener
   */
  ngAfterViewInit() {
    const button = this.menuButton.nativeElement;

    // Listen for menu open
    button.addEventListener('click', () => {
      setTimeout(() => this.resizeMenu(), 0); // wait for overlay to appear
    });
  }

  /**
   * Resize the menu panel to match the button width
   */
  private resizeMenu() {
    const button = this.menuButton.nativeElement;
    const panel = document.querySelector('.mat-mdc-menu-panel:last-of-type') as HTMLElement;

    if (panel && button) {
      const width = button.getBoundingClientRect().width;
      panel.style.width = `${width}px`;
    }
  }

  /**
   * Open the bug report page in a new tab
   */
  public openBugReportPage() {
    window.open('https://github.com/Czar-Ec/Czar-Ec.github.io/issues/new', '_blank');
  }
}
