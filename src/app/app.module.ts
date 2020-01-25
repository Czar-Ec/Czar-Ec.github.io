import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { LogoComponent } from './components/splash-page/logo/logo.component';
import { InfoPageModule } from './components/info-page/info-page.module';
import { ConfigurationService } from './services/configuration.service';
import { SharedModule } from './modules/shared.module';
import { ProjectsPageComponent } from './components/info-page/info-components/projects-page/projects-page.component';

import { EXTERNAL_URLS, PROJECT_PREVIEW } from './app.tokens';
import { externalUrlFactory, projectsPreviewFactory } from './app.factories';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    LogoComponent,
    ProjectsPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    InfoPageModule,
    SharedModule
  ],
  providers: [
    ConfigurationService,
    { provide: APP_BASE_HREF, useValue: './' },
    {
      provide: APP_INITIALIZER, deps: [ConfigurationService], multi: true,
      useFactory: (configurationService: ConfigurationService) => () => configurationService.loadConfig('assets/config.json').toPromise(),
    },
    {
      provide: EXTERNAL_URLS,
      useFactory: externalUrlFactory,
      deps: [ConfigurationService]
    },
    {
      provide: PROJECT_PREVIEW,
      useFactory: projectsPreviewFactory,
      deps: [ConfigurationService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
