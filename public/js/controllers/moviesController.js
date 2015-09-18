angular
  .module("trailersApp")
  .controller("moviesController", MoviesController)
  // .controller("MyCtrl", MyCtrl);

  // MyCtrl.$inject = ['Movie', 'Trailer', '$scope'];

  // function MyCtrl(Movie, Trailer, $scope){

  //   $scope.theBestVideo = 'sMKoNBRZM1M';
  // }

  // myApp.controller('MyCtrl', function ($scope) {
  //   // have a video id
  //   $scope.theBestVideo = 'sMKoNBRZM1M';
  // });  

MoviesController.$inject = ['Movie', 'Trailer'];
function MoviesController(Movie, Trailer){
  var self   = this;

  self.all   = [];
  self.query = null;
  self.movie = null;
  self.toggle = false;

  self.getMovies = function(){
    self.all = [];

    Movie.search({ search: self.query }, function(data){
      self.all = data.results;
      console.log(data.results);
    }); 
  }

  self.showMovie = function(movie){
    self.movie = movie;
    Trailer.search({ search: self.movie.title }, function(data){
      self.movie.trailers = data.items;
    })
  }
  
  self.resetMovie = function(){
    self.movie = null;
  }
}

// self.movie.Title

  