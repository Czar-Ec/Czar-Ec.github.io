import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service';
import { UnderConstructionWarningService } from '../under-construction-warning.service';
import { ExternalLinkService } from '../../external-link.service';

@Component({
  selector: 'app-under-construction-warning-snack-bar',
  templateUrl: './under-construction-warning-snack-bar.component.html',
  styleUrls: ['./under-construction-warning-snack-bar.component.scss']
})
export class UnderConstructionWarningSnackBarComponent implements OnInit {

  constructor(
    public theme: ThemeService,
    public warningSnackBarService: UnderConstructionWarningService,
    private externalLinkService: ExternalLinkService
  ) { }

  ngOnInit() {
  }

  /**
   * Opens the bug report page
   */
  public openBugReportPage() {
    this.warningSnackBarService.dismissSnackbar();
    this.externalLinkService.openBugReportPage();
  }

}
