import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelScrollService {

  constructor() { }

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
}
