import { Component } from '@angular/core';
import { InfoPanelNavigationComponent } from '../info-panel-navigation/info-panel-navigation.component';
import { InfoToolsService } from './info-tools.service';
import { InfoToolsFilter } from './info-tools-filter/info-tools-filter.component';

@Component({
  selector: 'app-info-tools-page',
  imports: [
    InfoPanelNavigationComponent,
    InfoToolsFilter
  ],
  templateUrl: './info-tools-page.component.html',
  styleUrl: './info-tools-page.component.scss',
})
export class InfoToolsPage {
  constructor(
    private readonly infoToolsService: InfoToolsService
  ) {}

  
}
