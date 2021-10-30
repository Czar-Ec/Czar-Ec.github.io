import { Injectable, Inject } from '@angular/core';
import { TOOLS_CONFIG } from '../../../../../app.tokens';
import { ToolInfoItem } from '../tools-and-languages';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

enum SortingSystem {
  Alphabetical = 'name',
  Confidence = 'confidence'
}

@Injectable()
export class ToolsInfoService {

  // complete list of tools
  private toolsList: ToolInfoItem[] = [];

  // list that holds items that match the filter
  private filteredToolsList: ToolInfoItem[] = [];

  /**
   * Return the tools that should be displayed
   */
  get tools(): ToolInfoItem[] {
    return this.filteredToolsList;
  }

  /**
   * Return the sorting system used to display the tools
   */
  get currentSort() {
    return this.sortingSystem;
  }

  /**
   * Sort by either alphabetical or confidence
   */
  private sortingSystem = SortingSystem.Confidence;

  constructor(
    @Inject(TOOLS_CONFIG) private config,
    private httpClient: HttpClient
  ) {
    this.getTools();
  }

  /**
   * Function that filters the tools list
   * @param filter
   */
  public filterList(filter: string) {
    if (!filter || filter.trim().length < 1) {
      this.filteredToolsList = this.toolsList;
      return;
    }

    // remove trailing spaces and convert to lowercase
    filter = filter.trim().toLowerCase();

    // filter the tools
    this.filteredToolsList = this.toolsList
      .filter(tool => this.filter(filter, tool));
  }

  /**
   * Function that checks if the tool tags contain the filter string
   * @param filter
   */
  private filter(filter: string, tool: ToolInfoItem): boolean {
    if (!filter || !tool || !tool.tags) {
      return false;
    }

    return !!tool.tags.filter(tag => tag.toLowerCase().includes(filter)).length || !!tool.name.toLowerCase().includes(filter);
  }

  /**
   * Function that returns the fav icon url
   * @param url
   */
  public retrieveFavIconUrl(url: string, previewImageUrl?: string) {
    if (!url) {
      return null;
    }

    if (previewImageUrl) {
      return previewImageUrl;
    }

    // get domain
    const parsedUrl = new URL(url);

    return `${this.config.favIconsUrl}/${this.getDomain(parsedUrl.hostname)}/125`;
  }

  /**
   * Function that gets the list of tools to display
   */
  private getTools() {
    this.httpClient.get(this.config.toolsUrl)
      .pipe(
        map((res: any) => (res && res.tools) ? res.tools : [])
      )
      .subscribe((res: any) => {
        this.toolsList = res;
        this.filteredToolsList = res;
        this.sortList();
      }, (err) => this.toolsList = []);
  }

  /**
 * Function that removes subdomains from a given host name
 * @param hostName
 */
  private getDomain(hostName: string) {
    let domain = hostName;

    if (hostName) {
      const parts = hostName.split('.').reverse();

      if (parts != null && parts.length > 1) {
        domain = parts[1] + '.' + parts[0];

        if (hostName.toLowerCase().indexOf('.co.uk') !== -1 && parts.length > 2) {
          domain = parts[2] + '.' + domain;
        }
      }
    }
    return domain;
  }

  /**
   * Toggle between alphabetical or confidence level sorting
   */
  public toggleSortingSystem() {
    switch (this.sortingSystem) {
      case SortingSystem.Alphabetical: {
        this.sortingSystem = SortingSystem.Confidence;
        break;
      }

      case SortingSystem.Confidence: {
        this.sortingSystem = SortingSystem.Alphabetical;
        break;
      }

      default:
        this.sortingSystem = SortingSystem.Confidence;
        break;
    }

    this.sortList();
  }

  /**
   * Function used to sort the list of tools
   */
  private sortList() {
    // do nothing if the list is empty
    if (!this.filteredToolsList && !this.filteredToolsList.length) {
      return;
    }

    let returnVal1;
    let returnVal2;

    this.filteredToolsList.sort((a, b) => {

      // check f the item to be compared exists
    if (!a[`${this.sortingSystem}`] || !b[`${this.sortingSystem}`]) {
      return 0;
    }

    // check the type if the item to be compared is number, then flip return vals
    if (typeof a[`${this.sortingSystem}`] === 'number' && typeof a[`${this.sortingSystem}`] === 'number') {
      returnVal1 = -1;
      returnVal2 = 1;
    } else {
      returnVal1 = 1;
      returnVal2 = -1;
    }

      const aVal = a[`${this.sortingSystem}`]
      const bVal = b[`${this.sortingSystem}`]

      if (aVal > bVal) { return returnVal1; }
      if (bVal > aVal) { return returnVal2; }
      return 0;
    });
  }
}
