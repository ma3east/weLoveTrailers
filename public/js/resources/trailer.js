angular
.module('trailersApp')
.factory('Trailer', Trailer);

Trailer.$inject = ['$resource'];
function Trailer ($resource) {
  var url = 'http://localhost:9000/api/trailers/';

  var TrailerResource = $resource(
    url + ':id', 
    {id: '@_id'}, {
      'get':    { method: 'GET' },
      'save':   { method: 'POST' },
      'query':  { method: 'GET', isArray: true },
      'update': { method: 'PUT' },
      'delete': { method: 'DELETE' },
      'search': {
        method: 'GET',
        params: {
          search: "@search"
        }
      }
    });
  
  return TrailerResource;
}