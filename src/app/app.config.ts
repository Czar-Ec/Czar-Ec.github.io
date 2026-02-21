import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { NgxParticlesModule } from '@tsparticles/angular';
import { routes } from './app.routes';
import { TOOLS_URL } from './app.tokens';
import { ConfigService } from './shared/config.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    MatIconRegistry,
    NgxParticlesModule,
    ConfigService,
    {
      provide: TOOLS_URL,
      deps: [ConfigService],
      useFactory: (config: ConfigService) => config.configuration.toolsUrl,
    },
  ],
};
