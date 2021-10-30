import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material.module';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { ConfigurationService } from './services/configuration.service';
import { SharedModule } from './modules/shared.module';

import { EXTERNAL_URLS, PROJECT_PREVIEW, ICON_CONFIG, TOOLS_CONFIG, CONFIDENCE_RATING_CONFIG, CD_PORTFOLIO_PATH } from './app.tokens';
import {
  externalUrlFactory,
  projectsPreviewFactory,
  iconConfigFactory,
  toolsConfigFactory,
  confidenceRatingConfigFactory,
  cdPortfolioPathConfigFactory
} from './app.factories';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoPageNavigationComponent } from './components/info-page/info-components/info-page-navigation/info-page-navigation.component';
import {
  UnderConstructionWarningSnackBarComponent
} from './services/under-construction-warning/under-construction-warning-snack-bar/under-construction-warning-snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    InfoPageComponent,
    InfoPageNavigationComponent,
    UnderConstructionWarningSnackBarComponent
  ],
  entryComponents: [
    UnderConstructionWarningSnackBarComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    ConfigurationService,
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
    },
    {
      provide: ICON_CONFIG,
      useFactory: iconConfigFactory,
      deps: [ConfigurationService]
    },
    {
      provide: TOOLS_CONFIG,
      useFactory: toolsConfigFactory,
      deps: [ConfigurationService]
    },
    {
      provide: CONFIDENCE_RATING_CONFIG,
      useFactory: confidenceRatingConfigFactory,
      deps: [ConfigurationService]
    },
    {
      provide: CD_PORTFOLIO_PATH,
      useFactory: cdPortfolioPathConfigFactory,
      deps: [ConfigurationService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
