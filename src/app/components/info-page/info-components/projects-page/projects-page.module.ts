import { NgModule } from '@angular/core';
import { ProjectsPageComponent } from './projects-page.component';
import { SharedModule } from '../../../../modules/shared.module';
import { ProjectsPreviewService } from './project-preview-service/project-preview.service';

@NgModule({
  providers: [
    ProjectsPreviewService
  ],
  declarations: [
    ProjectsPageComponent
  ],
  exports: [
    ProjectsPageComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProjectsPageModule { }
