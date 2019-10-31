import { Injectable } from '@angular/core';

declare var particlesJS: any;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  // overlay
  private overlay;

  // dark mode theme
  public darkTheme = true;

  constructor() { }

  /**
   * Sets up the container overlay that needs to be modified
   */
  public init(overlay: HTMLElement) {
    this.overlay = overlay;
    this.applyTheme();
  }

  /**
   * Toggles between dark mode and light mode
   */
  public toggleDarkMode(set?: boolean) {
    if (set) {
      this.darkTheme = set;
    } else {
      this.darkTheme = !this.darkTheme;
    }

    this.applyTheme();
  }

  /**
   * applies the theme
   */
  private applyTheme() {
    if (this.darkTheme) {
      this.overlay.classList.add('dark-theme');
      // particles js load
      particlesJS.load('particles', 'assets/dark-particles.json', function () {
        console.log('callback - particles.js config loaded');
      });
    } else {
      this.overlay.classList.remove('dark-theme');
      // particles js load
      particlesJS.load('particles', 'assets/particles.json', function () {
        console.log('callback - particles.js config loaded');
      });
    }
  }
}
