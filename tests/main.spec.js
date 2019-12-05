
import { expect } from 'chai';
import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src/main';

describe('Spotfy Wrapper', () => {
  context('smoke tests', () => {
    it('should exist a search method', () => {
      expect(search).to.exist;
    });

    it('should exist a searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist a searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist a searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist a searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  context('generic search', () => {
    it('should be oloko', () => { });

    it('should be oporra', () => { });
  });
});
