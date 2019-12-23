import { ConfigurationService } from './services/configuration.service';

export function externalUrlFactory(configurationService: ConfigurationService) {
  return configurationService.config.externalLinks;
}
