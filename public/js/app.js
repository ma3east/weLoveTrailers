//this is the app.js for the frontend

angular
  .module('trailersApp', ['ngResource', 'angular-jwt', 'ui.router', 'youtube-embed'])
  .constant('API', 'http://localhost:9000/api')
  .config(TrailersInit);

  TrailersInit.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider'];
function TrailersInit($httpProvider, $stateProvider, $urlRouterProvider){

  $httpProvider.interceptors.push('AuthInterceptor');
  MainRouter($stateProvider, $urlRouterProvider);
}
MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$state'];

function MainRouter($stateProvider, $urlRouterProvider, $state){
  $stateProvider
  .state('home', {
    url: "/",
    // templateUrl: "js/templates/homepage/home.html"
    templateUrl: "js/templates/movies/index.html"
  })
  .state('login', {
    url: "/login",
    templateUrl: "js/templates/shared/login.html"
  })
  .state('logout', {
    url: "/logout",
    templateUrl: "js/templates/shared/logout.html"
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