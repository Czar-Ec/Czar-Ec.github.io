import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ToolsInfoService } from './tools-info-service/tools-info.service';
import { ExternalLinkService } from '../../../../services/external-link.service';
import { CONFIDENCE_RATING_CONFIG } from '../../../../app.tokens';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-tools-page',
  templateUrl: './tools-page.component.html',
  styleUrls: ['./tools-page.component.scss']
})
export class ToolsPageComponent implements OnInit {

  // stars to display
  public starsToDisplay: number;

  // form control for search input field
  public searchInput: FormControl;

  constructor(
    @Inject(CONFIDENCE_RATING_CONFIG) private config,
    public toolsInfoService: ToolsInfoService,
    public externalLinkService: ExternalLinkService
  ) {
    // update stars to display with config value
    this.starsToDisplay = this.config.starsToDisplay ? this.config.starsToDisplay : 5;

    this.searchInput = new FormControl();
  }

  ngOnInit() {
    // listen to search input then update the filter
    this.searchInput.valueChanges
    .pipe(debounceTime(250)) // debounce so it doesn't spam service filter
    .subscribe(res => this.toolsInfoService.filterList(res));
  }

  /**
   * Returns the number of stars to display
   * @param confidence
   */
  public starDisplay(confidence: number) {
    return confidence ? (confidence / 100) * this.starsToDisplay : 0;
  }
}
