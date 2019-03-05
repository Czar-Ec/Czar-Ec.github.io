import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from '../components/content/home-content/home-content.component';
import { PageNotFoundComponent } from '../components/content/page-not-found/page-not-found.component';
import { WorkExpContentComponent } from '../components/content/work-exp-content/work-exp-content.component';
import { EducationContentComponent } from '../components/content/education-content/education-content.component';
import { ExtraContentComponent } from '../components/content/extra-content/extra-content.component';
import { ContactComponent } from '../components/content/contact/contact.component';

const routes: Routes = [
  // automatically reroute to home when just the base URL is given
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeContentComponent },
  { path: 'work-exp', component: WorkExpContentComponent },
  { path: 'edu', component: EducationContentComponent },
  { path: 'extra', component: ExtraContentComponent },
  { path: 'contact', component: ContactComponent },

  // 404 page
  { path: '404', component: PageNotFoundComponent },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
