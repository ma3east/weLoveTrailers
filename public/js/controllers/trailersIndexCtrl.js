angular
.module("trailersApp")
.controller("trailersIndexCtrl", TrailersIndexCtrl)

TrailersIndexCtrl.$inject = ['$http'];
function TrailersIndexCtrl($http){
  var self   = this;

  self.all   = [];
  self.query = null;
  self.trailerI = {};

  $http({
    method: "GET",
    url: "http://localhost:9000/api/trailersIndex"
  }).then(function(response){
    self.all = response.data.trailers.trailer
  }, function(response){
    console.log("Error");
  })
  
}

