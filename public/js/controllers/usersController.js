angular
.module("trailersApp")
.controller("usersController", UsersController);

UsersController.$inject = ['User', 'CurrentUser']
function UsersController(User, CurrentUser){
  var self = this;
}

init()

function init(){
  // self.CurrentUser = CurrentUser.check();

  if (self.CurrentUser){
    getUsers()
  }else {
    self.all = [];
    self.user = {};   
  }

  function getUsers(){
    User.query(function(response){
      self.all = response;
    }
    )}

    function login(response){
      self.CurrentUser = CurrentUser.login(response);
      $state.go('indexMovies');
      init()
    } 

    function logout(){
      CurrentUser.logout()
      init()
    }

    function signup(){
      user.signup(self.user);
    }

    return self
  }
