(function() {
  'use strict';

  angular
    .module('snaasAppAngular')
    .directive('albumInfo', albumInfo);

  /** @ngInject */
  function albumInfo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/albums/album-info-directive.html'
    };

    return directive;

  }

})();
