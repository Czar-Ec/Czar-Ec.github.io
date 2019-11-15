import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { PanelComponent } from './components/panel/panel.component';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { LogoComponent } from './components/splash-page/logo/logo.component';
import { InfoPageModule } from './components/info-page/info-page.module';
import { ConfigurationService } from './services/configuration.service';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    SplashPageComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    InfoPageModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: './' },
    {
      provide: APP_INITIALIZER, deps: [ConfigurationService], multi: true,
      useFactory: (configurationService: ConfigurationService) => () => configurationService.loadConfig('assets/config.json'),
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
