import { Injectable, Inject } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { EXTERNAL_URLS } from '../app.tokens';

@Injectable({
  providedIn: 'root'
})
export class ExternalLinkService {

  constructor(
    @Inject(EXTERNAL_URLS) private config
  ) { }

  /**
   * Function that opens the CV
   */
  public openCV() {
    window.open(this.config.cv, '_blank');
  }

  /**
   * Function that opens the CV
   */
  public openGithub() {
    window.open(this.config.github, '_blank');
  }

  /**
   * Function that opens the CV
   */
  public openLinkedIn() {
    window.open(this.config.linkedin, '_blank');
  }

  /**
   * Function that opens the bug report page
   */
  public openBugReportPage() {
    window.open(this.config.bugReport, '_blank');
  }

  /**
   * Function that opens a given link on another tab
   * @param link
   */
  public openLink(link: string) {
    window.open(link, '_blank');
  }
}
