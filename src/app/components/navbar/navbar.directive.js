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
      
      vm.sections = [
        {
          name    : 'home',
          label   : 'Home',
          active  : true,
          sref    : 'home'
        },
        {
          name    : 'names',
          label   : 'Names',
          active  : false,
          sref    : 'names'
        },
        {
          name    : 'albums',
          label   : 'Albums',
          active  : false,
          sref    : 'albums'
        },
        {
          name    : 'trees',
          label   : 'Trees',
          active  : false,
          sref    : 'trees'
        },
        {
          name    : 'doggpound',
          label   : 'Doggpound',
          active  : false,
          sref    : 'doggpound'
        }
      ];

      vm.count = favoriteAlbumsSvc.getFavoriteCount();

      $scope.$watch(
          function() { return favoriteAlbumsSvc.getFavoriteCount(); },
          function(newCount) { vm.count = newCount; }
      );

    }
  }

})();
