(function() {
  'use strict';

  angular
    .module('snaasAppAngular')
    .controller('AlbumDetailController', AlbumDetailController);

  /** @ngInject */
  function AlbumDetailController($stateParams, Albums, favoriteAlbumsSvc) {
    var vm = this;
    vm.dataLoaded = false;
    
    vm.album = Albums.get({id: $stateParams.id});

    vm.album.$promise.then(function() {
      vm.isFavorite = favoriteAlbumsSvc.containsAlbum(vm.album);
      vm.dataLoaded = true;
    });

    vm.addFavorite = function() {
      if (vm.isFavorite)
        favoriteAlbumsSvc.removeFavorite(vm.album);
      else
        favoriteAlbumsSvc.addFavorite(vm.album);
      vm.isFavorite = !vm.isFavorite;
    };
  }
})();

