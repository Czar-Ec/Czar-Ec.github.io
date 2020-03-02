import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroPageComponent } from './info-components/intro-page/intro-page.component';
import { ProjectsPageComponent } from './info-components/projects-page/projects-page.component';

const routes: Routes = [
  { path: '', component: IntroPageComponent },
  { path: 'info', component: ProjectsPageComponent },
  { path: 'info/projects', component: ProjectsPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class InfoPageRoutingModule { }
