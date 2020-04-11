import { Component, OnInit, Inject } from '@angular/core';
import { ToolsInfoService } from './tools-info-service/tools-info.service';
import { ExternalLinkService } from '../../../../services/external-link.service';
import { StarRatingConfigService } from 'angular-star-rating';
import { CONFIDENCE_RATING_CONFIG } from '../../../../app.tokens';

@Component({
  selector: 'app-tools-page',
  templateUrl: './tools-page.component.html',
  styleUrls: ['./tools-page.component.scss']
})
export class ToolsPageComponent implements OnInit {

  public starsToDisplay = 5;

  constructor(
    @Inject(CONFIDENCE_RATING_CONFIG) private config,
    public toolsInfoService: ToolsInfoService,
    public externalLinkService: ExternalLinkService
  ) {
    this.starsToDisplay = this.config.starsToDisplay;
  }

  ngOnInit() {
  }

  /**
   * Returns the number of stars to display
   * @param confidence
   */
  public starDisplay(confidence: number) {
    return confidence ? (confidence / 100) * this.starsToDisplay : 0;
  }
}
