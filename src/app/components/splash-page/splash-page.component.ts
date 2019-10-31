import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * Scrolls to the target element
   */
  public scroll(id: string) {
    const el = document.getElementById(id);
    el.scrollIntoView({behavior: 'smooth'});
  }
}
