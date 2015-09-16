angular
.module('trailersApp')
.factory('User', User);

User.$inject = ['$resource'];
function User ($resource) {
  var url = 'http://localhost:9000/api/users';

  var UserResource = $resource(
    url + ':id',
    {id: '@_id'}, { 
      'get':    { method: 'GET' },
      'save':   { method: 'POST' },
      'query':  { method: 'GET', isArray: true },
      'update': { method: 'PUT' },
      'delete': { method: 'DELETE' },
      'login':  {url: url + 'login', method: 'POST' },
      'signup': { url: url + 'signup', method: 'POST' }
    })
  return UserResource;
}