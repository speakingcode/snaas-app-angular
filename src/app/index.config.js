(function() {
  'use strict';

  angular
    .module('snaasAppAngular')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
