angular
  .module("trailersApp")
  .controller("moviesController", MovieController);

  MovieController.$inject = ['Event'];

  function EventController(Event){
    var self = this;
    self.all = [];





  }