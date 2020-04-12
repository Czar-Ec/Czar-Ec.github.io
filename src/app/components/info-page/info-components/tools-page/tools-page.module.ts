import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../modules/shared.module';
import { ToolsPageComponent } from './tools-page.component';
import { ToolsInfoService } from './tools-info-service/tools-info.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  providers: [
    ToolsInfoService
  ],
  declarations: [
    ToolsPageComponent
  ],
  exports: [
    ToolsPageComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ToolsPageModule { }
