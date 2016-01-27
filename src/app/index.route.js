(function() {
  'use strict';

  angular
    .module('snaasAppAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

    .state('albums', {
      url: '/albums',
      templateUrl: 'app/albums/albums.html',
      controller: 'AlbumsController',
      controllerAs: 'albums'
    })

    .state('albums.detail', {
      url: '/albums/:id',
      templateUrl: 'app/albums/albumDetail.html',
      controller: 'AlbumDetailController',
      controllerAs: 'albumDetail'
    })
    
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
