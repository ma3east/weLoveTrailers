angular
  .module("trailersApp")
  .controller("moviesController", MovieController);

MovieController.$inject = ['Movie', 'Trailer'];
function MovieController(Movie, Trailer){
  var self   = this;

  self.all   = [];
  self.query = null;
  self.movie = null;

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

  