import { ConfigurationService } from './services/configuration.service';

/**
 * Return the external links config
 * @param configurationService
 */
export function externalUrlFactory(configurationService: ConfigurationService) {
  return configurationService.config.externalLinks;
}

/**
 * Return the projects page config
 * @param configurationService
 */
export function projectsPreviewFactory(configurationService: ConfigurationService) {
  return configurationService.config.projectsPreview;
}

/**
 * Return the icon config
 * @param configurationService
 */
export function iconConfigFactory(configurationService: ConfigurationService) {
  return configurationService.config.icons;
}
