import { PanelComponent } from '../components/panel/panel.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    PanelComponent
  ],
  exports: [
    PanelComponent
  ]
})

export class SharedModule { }
