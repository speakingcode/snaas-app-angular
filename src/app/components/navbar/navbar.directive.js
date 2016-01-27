(function() {
  'use strict';

  angular
    .module('snaasAppAngular')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope, favoriteAlbumsSvc) {
      var vm = this;
      
      vm.count = favoriteAlbumsSvc.getFavoriteCount();

      $scope.$watch(
          function() { return favoriteAlbumsSvc.getFavoriteCount(); },
          function(newCount) { vm.count = newCount; }
      );
    }
  }

})();
