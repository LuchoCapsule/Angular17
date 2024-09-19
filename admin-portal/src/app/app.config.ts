import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/**
 * Application configuration object.
 * This configuration includes the router providers.
 */
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};