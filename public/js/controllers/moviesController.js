angular
  .module("trailersApp")
  .controller("moviesController", MoviesController)
  
MoviesController.$inject = ['Movie', 'Trailer', 'youtubeEmbedUtils'];
function MoviesController(Movie, Trailer, youtubeEmbedUtils){
  var self   = this;

  self.all   = [];
  self.query = null;
  self.movie = null;

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

  self.remindMovie = function(trailerId){

    console.log(youtubeEmbedUtils.getIdFromURL('https://www.youtube.com/watch?v=') + trailerId);
    console.log(trailerId + " this is the trailer id");
  }
}

// self.movie.Title if using OMDBapi
// youtubeEmbedUtils.getIdFromURL('https://www.youtube.com/watch?v=VvTvtIeXJ1I')

  