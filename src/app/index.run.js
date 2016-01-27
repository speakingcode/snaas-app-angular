(function() {
  'use strict';

  angular
    .module('snaasAppAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
