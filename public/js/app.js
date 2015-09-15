angular
.module('TrailersApp', ['ui.router'])
.config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider){
  $stateProvider
  
  .state('homepage', {
    url: '/',
    templateUrl: "templates/homepage/homepage.html"
  })
  .$state('about', {
    url: '/about',
    templateUrl: "templates/shared/about.html"
  })



  $urlRouterProvider.otherwise('/');
}





// this will be for the angular  modules and states
console.log("yo for the app.js on the front end");