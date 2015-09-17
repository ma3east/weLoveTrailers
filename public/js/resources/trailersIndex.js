//TRAILERSINDEX module

angular
.module('trailersApp')
.factory('TrailerI', TrailerI);

TrailerI.$inject = ['$resource'];
function TrailerI ($resource) {
  var url = 'http://localhost:9000/api/trailersIndex';

  var TrailerResourceI = $resource(
    url + ':id', 
    {id: '@_id'}, {
      'get':    { method: 'GET' },
      'save':   { method: 'POST' },
      'query':  { method: 'GET', isArray: true },
      'search': {
        method: 'GET',
        params: {
          search: "@search"
        }
      }
    });
  
  return TrailerResourceI;
}