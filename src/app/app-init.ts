import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: 'assets/keycloak.json',
      initOptions: { onLoad: 'login-required' }
    });
}
