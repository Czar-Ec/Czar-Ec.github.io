import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getInfoRoutes } from './info-page-routes';



@NgModule({
  imports: [
    RouterModule.forChild(getInfoRoutes())
  ],
  exports: [RouterModule]
})
export class InfoPageRoutingModule { }
