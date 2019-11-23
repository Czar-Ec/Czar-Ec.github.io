import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelScrollService {

  public lastScroll = 'splash';

  constructor() { }

  /**
   * Scrolls to the target element
   */
  public scroll(id: string, scrollType?: any) {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }

    if (!scrollType) {
      scrollType = 'smooth';
    }

    this.lastScroll = id;
    el.scrollIntoView({ behavior: scrollType });
  }

  /**
   * Scroll to the correct element on window resize
   */
  public windowResized() {
    this.scroll(this.lastScroll, 'auto');
  }
}
