import { PanelComponent } from '../components/panel/panel.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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
    MaterialModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ]
})

export class SharedModule { }
