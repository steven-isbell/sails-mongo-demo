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
        domain: "devmountain.auth0.com",
        clientID: "3SUPvC77-j6j5iIz8qRGVya_lWH43Wis"
      });
    });
})();
