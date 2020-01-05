
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src/main';

chai.use(sinonChai); // o chai usará a interface do sinon-chai
sinonStubPromise(sinon); // o stubPromise irá trabalhar com os objetos do nosso sinon
global.fetch = require('node-fetch'); // não existe um fetch no contexto local (já que este teste não é rodado em um browser), então iremos criá-lo no global e usar o node-fetch para emular um fetch do browser

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
    const spotFyGetUrl = 'https://api.spotify.com/v1/search';
    let fetchStub;
    let promise;

    beforeEach(() => {
      fetchStub = sinon.stub(global, 'fetch');
      promise = fetchStub.returnsPromise();
    });

    afterEach(() => {
      fetchStub.restore();
    });

    it('should use fetch to call an endpoint api', () => {
      search();
      expect(fetchStub).to.been.calledOnce;
    });

    it('should call the spotfy api using the parameters in the url', () => {
      search('Alice Cooper', 'artist');
      expect(fetchStub).to.been.calledOnceWith(`${spotFyGetUrl}?q=Alice%20Cooper&type=artist`);
    });

    it('should return an object information fron the endpoint', () => {
      const expectedResult = { data: 'myData' };
      promise.resolves(expectedResult);

      const result = search('Alice Cooper', 'artist');
      expect(result).to.be.eql(expectedResult);
    });
  });
});
