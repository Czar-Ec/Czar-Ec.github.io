import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class ExternalLinkService {

  constructor(private configService: ConfigurationService) { }

  /**
   * Function that opens the CV
   */
  public openCV() {
    window.open(this.configService.config.externalLinks.cv, '_blank');
  }

  /**
   * Function that opens the CV
   */
  public openGithub() {
    window.open(this.configService.config.externalLinks.github, '_blank');
  }

  /**
   * Function that opens the CV
   */
  public openLinkedIn() {
    window.open(this.configService.config.externalLinks.linkedin, '_blank');
  }
}
