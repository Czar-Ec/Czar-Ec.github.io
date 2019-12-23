import { PanelComponent } from '../components/panel/panel.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    PanelComponent
  ],
  exports: [
    PanelComponent,
    MaterialModule
  ],
  imports: [
  ]
})

export class SharedModule { }
