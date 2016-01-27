describe('Service: favoriteAlbumsService', function() {
  var favoriteAlbums;
  beforeEach(module('snaasAppAngular'));
  beforeEach(inject(function(_favoriteAlbumsService_) {
  favoriteAlbums = _favoriteAlbumsService_;
  }));

  it('should attach a list of awesomeThings to the service', function() {
    expect(favoriteAlbums.awesomeThings.length).toBe(3);
  });

});
