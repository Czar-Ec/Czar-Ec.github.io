import { NgModule } from '@angular/core';
import { InfoPageRoutingModule } from './info-page-routing.module';
import { IntroPageComponent } from './info-components/intro-page/intro-page.component';
import { SharedModule } from '../../modules/shared.module';
import { ProjectsPageModule } from './info-components/projects-page/projects-page.module';
import { InfoPageNavigationComponent } from './info-components/info-page-navigation/info-page-navigation.component';

@NgModule({
  declarations: [
    IntroPageComponent
  ],
  exports: [
    IntroPageComponent
  ],
  imports: [
    InfoPageRoutingModule,
    ProjectsPageModule,
    SharedModule
  ]
})
export class InfoPageModule { }
