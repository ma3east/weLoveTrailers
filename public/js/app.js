angular
  .module('trailersApp', ['ngResource', 'ui.router', 'angular-jwt'])
  .constant('API', 'http://localhost:9000/api')
  .config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider, $httpProvider){

  $httpProvider.interceptors.push('auth');

  $stateProvider
  .state('homepage', {
    url: "/",
    templateUrl: "js/templates/homepage/home.html"
  })
  .state('login', {
    url: "/login",
    templateUrl: "js/templates/shared/login.html"
  })
  .state('about', {
    url: "/about",
    templateUrl: "js/templates/shared/about.html"
  })
  .state('signup', {
    url: "/signup",
    templateUrl: 'js/templates/shared/signup.html'
  })
  .state('showTrailers', {
      url: "/trailers",
      templateUrl: 'js/templates/trailers/show.html'
    })
  .state('indexMovies', {
    url: "/movies",
    templateUrl: "js/templates/movies/index.html"
  });

  $urlRouterProvider.otherwise("/");
}


console.log("app.js front end working");