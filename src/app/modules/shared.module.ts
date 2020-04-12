import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingModule, StarRatingConfigService } from 'angular-star-rating';

import { PanelComponent } from '../components/panel/panel.component';
import { MaterialModule } from './material.module';
import { LogoComponent } from '../components/splash-page/logo/logo.component';

@NgModule({
  declarations: [
    PanelComponent,
    LogoComponent
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    PanelComponent,
    LogoComponent,
    MaterialModule,
    StarRatingModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    StarRatingModule.forRoot()
  ]
})

export class SharedModule { }
