angular
.module('trailersApp')
.factory('User', User);

User.$inject = ['$resource'];
function User ($resource) {
  var url = 'http://localhost:9000/api';

  var UserResource = $resource(
    url + '/users/:id',
    {id: '@_id'}, { 
      'get':      { method: 'GET' },
      'save':     { method: 'POST' },
      'query':    { method: 'GET', isArray: true },
      'update':   { method: 'PUT' },
      'remove':   { method: 'DELETE' },
      'delete':   { method: 'DELETE' },
      'login':    { url: url + '/auth/login', method: 'POST' },
      'signup':   { url: url + '/auth/signup', method: 'POST' }
    })    
  return UserResource;
}

// 'authorize':{ url: url + '/authorize',
//               method: 'POST' },