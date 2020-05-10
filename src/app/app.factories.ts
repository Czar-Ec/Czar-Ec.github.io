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

/**
 * Return the tools config
 * @param configurationService
 */
export function toolsConfigFactory(configurationService: ConfigurationService) {
  return configurationService.config.tools;
}

/**
 * Return the confidence rating config
 * @param configurationService
 */
export function confidenceRatingConfigFactory(configurationService: ConfigurationService) {
  return configurationService.config.confidenceRating;
}

export function cdPortfolioPathConfigFactory(configurationService: ConfigurationService) {
  return configurationService.config.cdPortfolioPath;
}
