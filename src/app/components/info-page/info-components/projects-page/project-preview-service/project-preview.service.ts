import { Injectable, Inject } from '@angular/core';
import { PROJECT_PREVIEW } from 'src/app/app.tokens';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProjectDetails, CIBadge } from '../project-object';

@Injectable({
  providedIn: 'root'
})
export class ProjectsPreviewService {

  // request in progress
  public requestInProgress = false;

  // store the project details retreived
  private _projectDetails: ProjectDetails[] = [];
  get projectDetails() { return this._projectDetails; }

  // store the links for next and last page
  public nextPageLink: string;

  constructor(
    @Inject(PROJECT_PREVIEW) private config,
    private httpClient: HttpClient
  ) { }

  public setupProjectDetails() {
    // set up params
    const params = new HttpParams()
      .set('page', '1')
      .set('per_page', this.config.pageLengthDefault);

    this.requestInProgress = true;

    return this.httpClient.get(this.config.url, { params, observe: 'response' })
      .pipe(
        map((res: HttpResponse<any>) => {
          // return empty array if no res
          if (!res || !res.body.length) {
            return [];
          }

          // setup the loading for later stages
          const parts = res.headers.get('link').split(',').reduce((acc, link) => {
            const match = link.match(/<(.*)>; rel="(\w*)"/);
            acc[match[2]] = match[1];
            return acc;
          }, {});

          this.nextPageLink = (parts as any).next;
          return this.getDetailsFromResponse(res.body);
        })
      )
      .subscribe((res: ProjectDetails[]) => this._projectDetails = res,
        () => { }, () => this.requestInProgress = false);
  }

  public getNextDetail() {

    this.requestInProgress = true;

    return this.httpClient.get(this.nextPageLink, { observe: 'response' })
      .pipe(
        map((res: HttpResponse<any>) => {
          // return empty array if no res
          if (!res || !res.body.length) {
            return [];
          }

          // setup the loading for later stages
          const parts = res.headers.get('link').split(',').reduce((acc, link) => {
            const match = link.match(/<(.*)>; rel="(\w*)"/);
            acc[match[2]] = match[1];
            return acc;
          }, {});

          this.nextPageLink = (parts as any).next;


          return this.getDetailsFromResponse(res.body);
        })
      )
      .subscribe((res: ProjectDetails[]) => this._projectDetails = this._projectDetails.concat(res),
        () => { }, () => this.requestInProgress = false);
  }

  private getDetailsFromResponse(responseBody: any[]) {
    // get the relevant values
    return responseBody.map(project => {
      return {
        projectName: project.name,
        projectFullName: project.full_name,
        projectUrl: project.html_url,
        projectDescription: project.description ? this.summariseDescription(project.description) : 'No description',
        projectDefaultBranch: project.default_branch,
        travisBadge: this.getTravisBadge(project.default_branch, project.full_name),
        codeCovBadge: this.getCodeCovBadge(project.default_branch, project.full_name)
      } as ProjectDetails;
    });
  }

  private summariseDescription(description: string, length = 100) {
    if (description.length <= length) {
      return description;
    }

    return `${description.substring(0, length)}...`;
  }

  private getTravisBadge(branch: string, repoName: string): CIBadge {
    if (!branch) {
      return null;
    }

    return {
      badgeUrl: `${this.config.travisBadgeUrl}${repoName}`,
      badgeImage: `${this.config.travisBadgeUrl}${repoName}.svg?branch=${branch}`
    };
  }

  private getCodeCovBadge(branch: string, repoName: string): CIBadge {
    if (!branch) {
      return null;
    }

    return {
      badgeUrl: `${this.config.codeCovBadgeUrl}${repoName}`,
      badgeImage: `${this.config.codeCovBadgeUrl}${repoName}/branch/${branch}/graph/badge.svg`
    };
  }
}
