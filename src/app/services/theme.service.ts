import { Injectable } from '@angular/core';

declare var particlesJS: any;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  // overlay
  private overlay;

  // current loaded config
  public configLocation = '';

  // dark mode theme
  public darkTheme = true;

  constructor() {}

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
      this.applyParticles('assets/dark-particles.json');
    } else {
      this.overlay.classList.remove('dark-theme');
      this.applyParticles('assets/particles.json');
    }
  }

  /**
   * Applies the particles config
   * @param config location of config file
   */
  public applyParticles(config?: string) {
    if (!config) {
      return;
    }

    this.configLocation = config;

    // particles js load
    particlesJS.load('particles', config, function () {
      console.log(`callback - ${config} config loaded`);
    });
  }
}
