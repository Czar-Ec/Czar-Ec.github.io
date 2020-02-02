import { Component, OnInit, Inject } from '@angular/core';
import { ProjectsPreviewService } from './project-preview-service/project-preview.service';
import { PROJECT_PREVIEW } from '../../../../app.tokens';
import { ProjectDetails } from './project-object';
import { ExternalLinkService } from 'src/app/services/external-link.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  constructor(
    @Inject(PROJECT_PREVIEW) private config,
    public projectsPreviewService: ProjectsPreviewService,
    private extLinkService: ExternalLinkService
  ) { }

  ngOnInit() {
    // get the project details initially
    this.projectsPreviewService.setupProjectDetails();
  }


  public openBadge(link: string) {
    this.extLinkService.openLink(link);
  }
}
