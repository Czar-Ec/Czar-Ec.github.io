import { NgModule } from '@angular/core';
import { InfoPageComponent } from './info-page.component';
import { MaterialModule } from '../../modules/material.module';
import { InfoPageRoutingModule } from './info-page-routing.module';
import { IntroPageComponent } from './info-components/intro-page/intro-page.component';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [
    InfoPageComponent,
    IntroPageComponent,
  ],
  exports: [
    InfoPageComponent
  ],
  imports: [
    MaterialModule,
    InfoPageRoutingModule,
    SharedModule
  ]
})
export class InfoPageModule { }
