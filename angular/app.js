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
      $urlRouterProvider.otherwise("/home");

      $stateProvider
        .state("home", {
          url: "/home",
          templateUrl: "components/home/home.tpl.html"
        })
        .state("profile", {
          url: "/profile",
          templateUrl: "components/profile/profile.tpl.html",
          controller: "profileController as user"
        });

      jwtInterceptorProvider.tokenGetter = function(store) {
        return store.get("token");
      };

      $httpProvider.interceptors.push("jwtInterceptor");
    });
})();
