import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideKeycloak } from 'keycloak-angular';
import { routes } from './app.routes';
import { KeycloakInitializer } from '../keycloak.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideKeycloak({
      config: {
        url: 'http://<keycloak-server>/auth',
        realm: 'my-realm',
        clientId: 'angular-app',
      },
      initOptions: undefined, // Use undefined to skip automatic initialization
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: (initializer: KeycloakInitializer) =>
        initializer.initializeKeycloak(),
      deps: [KeycloakInitializer],
      multi: true,
    },
  ],
};
