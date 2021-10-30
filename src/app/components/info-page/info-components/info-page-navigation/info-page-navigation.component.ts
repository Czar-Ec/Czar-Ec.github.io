import { Component, OnInit } from '@angular/core';
import { getRoutesAtPath } from '../../info-page-routes';
import { ExternalLinkService } from '../../../../services/external-link.service';

@Component({
  selector: 'app-info-page-navigation',
  templateUrl: './info-page-navigation.component.html',
  styleUrls: ['./info-page-navigation.component.scss']
})
export class InfoPageNavigationComponent implements OnInit {

  public infoRoutes: { path: string, label: string }[] = [];

  private infoPath = 'info';

  constructor(
    private externalLinkService: ExternalLinkService
  ) { }

  ngOnInit() {
    // get the info routes
    this.infoRoutes = getRoutesAtPath(this.infoPath);
  }

  /**
   * Opens the bug report page
   */
  public openBugReportPage() {
    this.externalLinkService.openBugReportPage();
  }
}
