const { clientID, domain } = require("../config");

(function() {
  "use strict";

  angular
    .module("authApp", [
      "auth0",
      "angular-storage",
      "angular-jwt",
      "ngMaterial",
      "ui.router"
    ])
    .config(function(
      $provide,
      authProvider,
      $urlRouterProvider,
      $stateProvider,
      $httpProvider,
      jwtInterceptorProvider
    ) {
      authProvider.init({
        domain,
        clientID
      });
    });
})();
