angular
.module("trailersApp")
.controller("trailersIndexCtrl", TrailersIndexCtrl)

TrailersIndexCtrl.$inject = ['TrailerI'];
function TrailersIndexCtrl(TrailerI){
  var self   = this;

  self.all   = [];
  self.query = null;
  self.trailer = null;

  self.getTrailers = function(){
    Trailer.search({ search: self.query }, function(data){
      self.all.push(data);

      console.log("self.trailer = " + self.trailer);
    }); 
  }

  self.showTrailer = function(trailer){
    self.trailer = trailer;
    Trailer.search({ search: self.trailer.Title }, function(data){
      self.trailer.trailers = trailers.trailer;
    })
  }
  
}

