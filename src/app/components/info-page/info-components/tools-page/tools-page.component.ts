import { Component, OnInit } from '@angular/core';
import { ToolsInfoService } from './tools-info-service/tools-info.service';
import { ExternalLinkService } from '../../../../services/external-link.service';

@Component({
  selector: 'app-tools-page',
  templateUrl: './tools-page.component.html',
  styleUrls: ['./tools-page.component.scss']
})
export class ToolsPageComponent implements OnInit {

  constructor(
    public toolsInfoService: ToolsInfoService,
    public externalLinkService: ExternalLinkService
  ) { }

  ngOnInit() {
  }
}
