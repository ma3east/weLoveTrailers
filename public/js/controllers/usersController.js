angular
.module("trailersApp")
.controller("usersController", UserController);

UserController.$inject = ['User', 'CurrentUser']
function UserController(User, CurrentUser){
  var self = this;
}

init()

function init(){
  self.CurrentUser = CurrentUser;

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
      self.CurrentUser = CurrentUser.login(response)
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
