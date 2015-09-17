angular
.module("trailersApp")
.controller("trailersController", TrailerController);

TrailerController.$inject = ['Trailer', '$state'];

function TrailerController(Trailer, state){
  var self = this;

  self.all = [];
  self.query = {};
  self._id = {};
  self.trailer = {};
  self.currentTrailer = {};
  self.myTrailers = {};

  console.log("self.trailer =  " + self.trailer);
}

self.getMyTrailers = function() {
  self.currentUser = CurrentUser.check();
  Trailer.myTrailers({ "userId": self.currentUser.id }, function (res) {
    if (!res.error) { self.myTrailers = res;
      console.log(res);
    }
    $state.go('myTrailers');  
  })
}

self.showTrailer = function(trailer) {
  self.currentTrailer = trailer;
}

self.search = function (){
  self.all = {};
  Trailer.search(self.query, searchResponse);
}

function searchResponse(response) {
 self.all = response;
} 

function getTrailerResponse(response) {
 self.trailer = response;
}





