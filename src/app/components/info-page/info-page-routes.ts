import { Routes } from '@angular/router';
import { ProjectsPageComponent } from './info-components/projects-page/projects-page.component';
import { IntroPageComponent } from './info-components/intro-page/intro-page.component';

export function getInfoRoutes(): Routes {
  return [
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
};
