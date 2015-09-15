angular
  .module('trailersApp', ['ngResource', 'ui.router'])
  .config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('homepage', {
    url: "/",
    templateUrl: "templates/homepage/home.html"
  })
  .state('login', {
    url: "/login",
    templateUrl: "templates/shared/login.html"
  })
  .state('about', {
    url: "/about",
    templateUrl: "templates/shared/about.html"
  });

  $urlRouterProvider.otherwise("/");
}


console.log("app.js front end working");