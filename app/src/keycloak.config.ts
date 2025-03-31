import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class KeycloakInitializer {
  constructor(
    private keycloak: KeycloakService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  initializeKeycloak(): () => Promise<boolean> {
    return () => {
      if (isPlatformBrowser(this.platformId)) {
        // Only initialize Keycloak in the browser
        return this.keycloak.init({
          config: {
            url: 'http://keycloak.adrianme.dev/auth',
            realm: 'test-realm',
            clientId: 'angular-test-app',
          },
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false,
          },
        });
      } else {
        // Skip initialization on the server
        return Promise.resolve(true);
      }
    };
  }
}
