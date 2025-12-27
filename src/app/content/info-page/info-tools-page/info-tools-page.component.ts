import { Component } from '@angular/core';
import { InfoPanelNavigationComponent } from '../info-panel-navigation/info-panel-navigation.component';
import { InfoToolsFilter } from './info-tools-filter/info-tools-filter.component';
import { InfoToolsList } from './info-tools-list/info-tools-list.component';

@Component({
  selector: 'app-info-tools-page',
  imports: [
    InfoToolsFilter,
    InfoToolsList
  ],
  templateUrl: './info-tools-page.component.html',
  styleUrl: './info-tools-page.component.scss',
})
export class InfoToolsPage {
  constructor() {}

  
}
