import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroPageComponent } from './info-components/intro-page/intro-page.component';

const routes: Routes = [
  {
    path: 'info',
    pathMatch: 'full',
    component: IntroPageComponent
  },
  {
    path: '**',
    redirectTo: 'info'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class InfoPageRoutingModule { }
