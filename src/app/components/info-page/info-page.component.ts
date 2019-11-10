import { Component, OnInit } from '@angular/core';
import { PanelScrollService } from 'src/app/services/panel-scroll.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  constructor(
    public panelScrollService: PanelScrollService
  ) { }

  ngOnInit() {
  }

}
