angular
.module('trailersApp')
.factory('Movie', Movie);

Movie.$inject = ['$resource'];
function Movie ($resource) {
  var url = 'http://localhost:9000/api/movies';

  var MovieResource = $resource(
    url + ':id', 
    {id: '@_id'}, {
      'get':    { method: 'GET' },
      'save':   { method: 'POST' },
      'query':  { method: 'GET', isArray: true },
      'update': { method: 'PUT' },
      'delete': { method: 'DELETE' }
    });

  return MovieResource;
}