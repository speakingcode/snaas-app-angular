(function() {
  'use strict';

  angular
    .module('snaasAppAngular')
    .controller('AlbumsController', AlbumsController);

  /** @ngInject */
  function AlbumsController(Albums) {
    var vm = this;

    vm.albums = Albums.query();
  }
})();
