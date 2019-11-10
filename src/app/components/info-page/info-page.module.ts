import { NgModule } from '@angular/core';
import { InfoPageComponent } from './info-page.component';
import { MaterialModule } from 'src/app/modules/material.module';

@NgModule({
  declarations: [
    InfoPageComponent,
  ],
  exports: [
    InfoPageComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class InfoPageModule { }
