import { ConfigurationService } from './services/configuration.service';

// return only the external links config
export function externalUrlFactory(configurationService: ConfigurationService) {
  return configurationService.config.externalLinks;
}

// return only the projects page config
export function projectsPreviewFactory(configurationService: ConfigurationService) {
  return configurationService.config.projectsPreview;
}
