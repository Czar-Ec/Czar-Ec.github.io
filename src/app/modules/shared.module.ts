import { PanelComponent } from '../components/panel/panel.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PanelComponent
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    PanelComponent,
    MaterialModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})

export class SharedModule { }
