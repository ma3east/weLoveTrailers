angular
.module("trailersApp")
.controller("UsersController", UsersController);

UsersController.$inject = ['User', 'TokenService', '$state'];

function UsersController(User, TokenService, $state){
  var self = this;

  self.all = [];
  self.user = {};

  function showMessage(res){
    // self.CurrentUser = CurrentUser.check();
    var token = res.token ? res.token : null;

    if(token) { console.log(res); }
    self.message =  res.message ? res.message : null;
  }

  self.getUsers = function(){ 
    self.all = User.query();
  }

  self.login = function(res){
    User.login(self.user, showMessage)
    $state.go('indexMovies');
  } 

  self.logout = function(){
    console.log('logged out')
    TokenService.removeToken && TokenService.removeToken();
    $state.go('home');
  }

  self.signup = function(){
    User.signup(self.user, showMessage)
    $state.go('home');
  }

  self.isLoggedIn = function() {
    console.log('I am logged in')
    return TokenService.isLoggedIn ? TokenService.isLoggedIn() : false;
  }

  self.authorize = function(){
      User.authorize(self.user, showMessage);
    }

  return self 

}

// function UsersController(User, TokenService, $state, CurrentUser){
//   var self = this;
// }

// init()

// function init(){
//   // self.CurrentUser = CurrentUser.check();

//   if (self.CurrentUser){
//     getUsers()
//   }else {
//     self.all = [];
//     self.user = {}; 
//     self.all   = [];
//     self.query = null;

//   }

//   self.authorize = function(){
//     User.authorize(self.user, showMessage);
//   }
//   self.login = function(){
//     User.login(self.user, showMessage);
//   }

//   // self.login = function(){
//   //   User.login(self.user, login);
//   // }

//   function getUsers(){
//     User.query(function(response){
//       self.all = response;
//     }
//     )}

//     function login(response){
//       self.CurrentUser = CurrentUser.login(response);
//       $state.go('indexMovies');
//       init()
//     } 

//     function logout(){
//       CurrentUser.logout()
//       init()
//     }

//     function signup(){
//       user.signup(self.user);
//     }

//     return self
//   }

//testing with below

