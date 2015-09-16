angular
  .module('trailersApp')
  .factory('Trailer', Trailer);

  Trailer.$inject = ['$resource'];
  function Trailer ($resource) {
    var url = 'http://localhost:9000/api/trailers/';
    var TrailerResource = $resource(url + ':id', {id: '@_id'}, {
      'update': { method: 'PUT'} 
    });
    return TrailerResource;
}