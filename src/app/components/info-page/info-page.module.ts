import { NgModule } from '@angular/core';
import { InfoPageRoutingModule } from './info-page-routing.module';
import { IntroPageComponent } from './info-components/intro-page/intro-page.component';
import { SharedModule } from '../../modules/shared.module';
import { ProjectsPageModule } from './info-components/projects-page/projects-page.module';
import { ToolsPageModule } from './info-components/tools-page/tools-page.module';

@NgModule({
  declarations: [
    IntroPageComponent,
  ],
  exports: [
    IntroPageComponent,
  ],
  imports: [
    InfoPageRoutingModule,
    ProjectsPageModule,
    ToolsPageModule,
    SharedModule
  ]
})
export class InfoPageModule { }
