'use strict';
/**
 * @ngdoc service
 * @name snaasAppAngular.favoriteAlbums
 * @description
 * # favoriteAlbums
 * Service in the snaasAppAngular.
 */
angular.module('snaasAppAngular')
  .service('favoriteAlbumsSvc', function () {
  // AngularJS will instantiate a singleton by calling "new" on this function
    var favorites = [];

    this.containsAlbum = function(album) {
      for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].name == album.name) {
          return true;
        }
      }
      return false;
    };

    this.addFavorite = function(album) {
      for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].name == album.name)
          return false;
      }
      favorites.push(album);
      return true;
    };

    this.removeFavorite = function(album) {
      for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].name == album.name) {
          favorites.splice(i, 1);
          return true;
        }
      }
      return false;
    };

    this.getFavorites = function() {
      return favorites;
    };

    this.getFavoriteCount = function() {
      return favorites.length;
    };
          
  });
