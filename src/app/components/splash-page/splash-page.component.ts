import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit, AfterViewInit {

  public seeMoreAnimation: any;
  public linkIconAnimations: any;

  // message to display
  public message = null;

  private iconEnlarge = {
    value: 2,
    duration: 450,
    easing: 'easeInOutQuad'
  };

  private iconNormal = {
    value: 1,
    duration: 450,
    easing: 'easeInOutQuad',
    delay: 3500
  };

  // the iconButtons
  public iconButtons;

  constructor(
    public themeService: ThemeService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.seeMoreAnimation = anime({
      targets: '.see-more',
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
   * Scrolls to the target element
   */
  public scroll(id: string) {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }

    el.scrollIntoView({ behavior: 'smooth' });
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
