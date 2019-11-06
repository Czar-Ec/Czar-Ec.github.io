import { Component, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    this.waitForLogo();
  }

  /**
   * Function that waits for the logo to load then sets up the animation
   */
  private waitForLogo() {
    const checkExist = setInterval(function () {
      if (document.querySelector('.logo-svg svg path')) {
        anime({
          targets: '.logo-svg #path3735',
          strokeDashoffset: [5, 200],
          easing: 'easeInOutSine',
          duration: 5000,
          delay: 250,
          direction: 'alternate',
          loop: true,
          autoplay: true
        });
        anime({
          targets: '.logo-svg #path3723',
          strokeDashoffset: [5, 200],
          easing: 'easeInOutSine',
          duration: 5000,
          delay: 250,
          direction: 'alternate',
          loop: true,
          autoplay: true
        });
        clearInterval(checkExist);
      }
    }, 100);
  }

}
