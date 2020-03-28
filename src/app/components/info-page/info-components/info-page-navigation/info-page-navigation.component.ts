import { Component, OnInit } from '@angular/core';
import { getRoutesAtPath } from '../../info-page-routes';

@Component({
  selector: 'app-info-page-navigation',
  templateUrl: './info-page-navigation.component.html',
  styleUrls: ['./info-page-navigation.component.scss']
})
export class InfoPageNavigationComponent implements OnInit {

  public infoRoutes: { path: string, label: string }[] = [];

  private infoPath = 'info';

  constructor() { }

  ngOnInit() {
    // get the info routes
    this.infoRoutes = getRoutesAtPath(this.infoPath);
  }
}
