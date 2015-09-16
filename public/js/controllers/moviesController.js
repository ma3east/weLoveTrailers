angular
  .module("trailersApp")
  .controller("moviesController", MovieController);

  MovieController.$inject = ['Movie'];

  function MovieController(Movie){
    var self = this;
    self.all = [];
  }

  