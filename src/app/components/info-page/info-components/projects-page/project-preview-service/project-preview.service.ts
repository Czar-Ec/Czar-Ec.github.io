import { Injectable, Inject } from '@angular/core';
import { PROJECT_PREVIEW } from 'src/app/app.tokens';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProjectDetails, CIBadge } from '../project-object';

@Injectable({
  providedIn: 'root'
})
export class ProjectsPreviewService {

  private _projectDetails: ProjectDetails[] = [];

  get projectDetails() { return this._projectDetails; }

  constructor(
    @Inject(PROJECT_PREVIEW) private config,
    private httpClient: HttpClient
  ) { }

  public getProjectDetails(page = 0, pageLength = this.config.pageLengthDefault) {
    // set up params
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', pageLength);

    return this.httpClient.get(this.config.url, { params })
      .pipe(
        map((res: any) => {
          // return empty array if no res
          if (!res || !res.length) {
            return [];
          }

          // get the relevant values
          return res.map(project => {
            return {
              projectName: project.name,
              projectFullName: project.full_name,
              projectUrl: project.html_url,
              projectDescription: project.description ? project.description : 'No description',
              projectDefaultBranch: project.default_branch,
              travisBadge: this.getTravisBadge(project.default_branch, project.full_name),
              codeCovBadge: this.getCodeCovBadge(project.default_branch, project.full_name)
            } as ProjectDetails;
          });
        })
      )
      .subscribe(res => this._projectDetails = res);
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
