import { NgModule } from '@angular/core';
import { ProjectsPageComponent } from './projects-page.component';
import { SharedModule } from '../../../../modules/shared.module';

@NgModule({
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
