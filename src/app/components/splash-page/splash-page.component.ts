import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import anime from 'animejs/lib/anime.es.js';
import { PanelScrollService } from 'src/app/services/panel-scroll.service';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit, AfterViewInit {

  public seeMoreAnimation: any;
  public linkIconAnimations: any;

  // the iconButtons
  public iconButtons;

  constructor(
    public themeService: ThemeService,
    public panelScrollService: PanelScrollService,
    private configService: ConfigurationService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.seeMoreAnimation = anime({
      targets: ['.see-more', '.see-splash'],
      translateY: 30,
      loop: true,
      direction: 'alternate',
      autoplay: true,
      duration: 1000,
      easing: 'easeInQuad'
    });

    this.iconButtons = document.querySelectorAll('button.icon-button');
  }

  /**
   * Function that opens the CV
   */
  public openCV() {
    window.open(this.configService.config.externalLinks.cv, '_blank');
  }

  /**
   * Function that opens the CV
   */
  public openGithub() {
    window.open(this.configService.config.externalLinks.github, '_blank');
  }

  /**
   * Function that opens the CV
   */
  public openLinkedIn() {
    window.open(this.configService.config.externalLinks.linkedin, '_blank');
  }

  /**
   * Function that toggles dark mode on the app
   */
  public toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  public animateLinkButton($event, scale: number) {
    const animate = anime.timeline({
      duration: 1000,
      scale: scale,
      elasticity: 500,
      direction: 'alternate',
      autoplay: true,
      loop: false,
      easing: 'easeInOutBack'
    });

    this.iconButtons.forEach((button) => {
      if ($event.target === button) {
        animate.add({
          targets: $event.target,
          scale: scale
        }).add({
          targets: $event.target,
          scale: 1
        });
      }
    });
  }
}
