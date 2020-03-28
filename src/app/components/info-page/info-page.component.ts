import { Component, OnInit } from '@angular/core';
import { PanelScrollService } from '../../services/panel-scroll.service';
import { ExternalLinkService } from '../../services/external-link.service';
import { RouterOutlet } from '@angular/router';
import { trigger, transition } from '@angular/animations';
import { fadeIn } from '../../animations/router-transition.animations';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
  animations: [
    trigger('routerAnimations', [
      transition('* => *', fadeIn)
    ])
  ]
})
export class InfoPageComponent implements OnInit {

  constructor(
    public panelScrollService: PanelScrollService,
    public externalLinkService: ExternalLinkService
  ) { }

  ngOnInit() {
  }

  /**
   * returns the state of the outlet i.e. transitioning or not
   * @param outlet
   */
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.state;
  }
}
