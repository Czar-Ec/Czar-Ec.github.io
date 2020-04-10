import { Injectable, Inject } from '@angular/core';
import { TOOLS_CONFIG } from '../../../../../app.tokens';
import { ToolInfoItem } from '../tools-and-languages';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToolsInfoService {

  // complete list of tools
  private toolsList: ToolInfoItem[] = [];

  /**
   * Return the tools that should be displayed
   */
  get tools(): ToolInfoItem[] {
    return this.toolsList;
  }

  constructor(
    @Inject(TOOLS_CONFIG) private config,
    private httpClient: HttpClient
  ) {
    this.getTools();
  }

  /**
   * Function that gets the list of tools to display
   */
  private getTools() {
    this.httpClient.get(this.config.toolsUrl)
      .pipe(
        map((res: any) => res.tools ? res.tools : [])
      )
      .subscribe((res: any) => {
        this.toolsList = res;
      }, (err) => this.toolsList = []);
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
 * Function that removes subdomains from a given host name
 * @param hostName
 */
private getDomain(hostName: string) {
  let domain = hostName;

  if (hostName) {
    const parts = hostName.split('.').reverse();

    if (parts != null && parts.length > 1) {
      domain = parts[1] + '.' + parts[0];

      if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
        domain = parts[2] + '.' + domain;
      }
    }
  }
  return domain;
}

}
