import { NgModule } from '@angular/core';
import { InfoPageRoutingModule } from './info-page-routing.module';
import { IntroPageComponent } from './info-components/intro-page/intro-page.component';
import { SharedModule } from '../../modules/shared.module';
import { ProjectsPageModule } from './info-components/projects-page/projects-page.module';
import { ToolsPageComponent } from './info-components/tools-page/tools-page.component';

@NgModule({
  declarations: [
    IntroPageComponent,
    ToolsPageComponent
  ],
  exports: [
    IntroPageComponent,
    ToolsPageComponent
  ],
  imports: [
    InfoPageRoutingModule,
    ProjectsPageModule,
    SharedModule
  ]
})
export class InfoPageModule { }
