angular
  .module("trailersApp")
  .controller("moviesController", MoviesController);

MoviesController.$inject = ['Movie', 'Trailer'];
function MoviesController(Movie, Trailer, $scope){
  var self   = this;

  self.all   = [];
  self.query = null;
  self.movie = null;
  self.theBestVideo = 'sMKoNBRZM1M'; //this.id.videoId

  //$scope.theBestVideo = ''; //sMKoNBRZM1M'

  self.getMovies = function(){
    Movie.search({ search: self.query }, function(data){
      self.all.push(data);
    }); 
  }

  self.showMovie = function(movie){
    self.movie = movie;
    Trailer.search({ search: self.movie.Title }, function(data){
      self.movie.trailers = data.items;
    })
  }
  
  self.resetMovie = function(){
    self.movie = null;
  }
}

  