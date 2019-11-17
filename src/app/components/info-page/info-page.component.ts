import { Component, OnInit } from '@angular/core';
import { PanelScrollService } from 'src/app/services/panel-scroll.service';
import { ExternalLinkService } from 'src/app/services/external-link.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  constructor(
    public panelScrollService: PanelScrollService,
    public externalLinkService: ExternalLinkService
  ) { }

  ngOnInit() {
  }

}
