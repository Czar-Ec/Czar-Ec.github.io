import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroPageComponent } from './info-components/intro-page/intro-page.component';
import { ProjectsPageComponent } from './info-components/projects-page/projects-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'info' },
  {
    path: 'info',
    children: [
      { path: 'projects', component: ProjectsPageComponent },
      { path: '', component: IntroPageComponent },
    ]
  },
  { path: '**', redirectTo: 'info' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InfoPageRoutingModule { }
