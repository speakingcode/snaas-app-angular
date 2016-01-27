(function() {
  'use strict';

  angular
    .module('snaasAppAngular')
    .factory('Albums', Albums);

  /** @ngInject */
  function Albums($resource) {
    return $resource('http://snaas.herokuapp.com/albums/:id');
  }
})();
