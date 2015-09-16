angular
.module("trailersApp")
.controller("trailersController", TrailerController);

TrailerController.$inject = ['Trailer', 'CurrentUser', '$state'];

function TrailerController(Trailer, CurrentUser, state){
  var self = this;

  self.all = [];
  self.query = {};
  self._id = {};
  self.trailer = {};
  self.currentTrailer = {};
  self.myTrailers = {};
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





