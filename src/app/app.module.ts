import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentComponent } from './components/content/content.component';
import { HomeContentComponent } from './components/content/home-content/home-content.component';
import { PageNotFoundComponent } from './components/content/page-not-found/page-not-found.component';
import { WorkExpContentComponent } from './components/content/work-exp-content/work-exp-content.component';
import { EducationContentComponent } from './components/content/education-content/education-content.component';
import { ExtraContentComponent } from './components/content/extra-content/extra-content.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContentComponent,
    HomeContentComponent,
    PageNotFoundComponent,
    WorkExpContentComponent,
    EducationContentComponent,
    ExtraContentComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: './'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
