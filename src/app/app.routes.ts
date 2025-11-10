import { Routes } from '@angular/router';
import { LandingPageComponent } from './content/landing-page/landing-page.component';
import { InfoPageComponent } from './content/info-page/info-page.component';
import { InfoTextPageComponent } from './content/info-page/info-text-page/info-text-page.component';
import { InfoProjectPage } from './content/info-page/info-project-page/info-project-page.component';
import { InfoToolsPage } from './content/info-page/info-tools-page/info-tools-page.component';

export const infoRoutes: Routes = [
  {path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: InfoTextPageComponent },
  { path: 'projects', component: InfoProjectPage },
  { path: 'tools', component: InfoToolsPage },
];

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'info',
    component: InfoPageComponent,
    children: infoRoutes,
  },
];
