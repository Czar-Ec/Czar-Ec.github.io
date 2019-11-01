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
  }

  /**
   * Scrolls to the target element
   */
  public scroll(id: string) {
    const el = document.getElementById(id);
    el.scrollIntoView({behavior: 'smooth'});
  }

  /**
   * Function that toggles dark mode on the app
   */
  public toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
