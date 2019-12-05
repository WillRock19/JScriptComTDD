
import { expect } from 'chai';
import { search } from '../src/main';

describe('Spotfy Wrapper', () => {
  context('Smoke Tests', () => {
    it('should exist a search method', () => {
      expect(search).to.exist;
    });
  });

  context('Caso 2', () => {
    it('should be oloko', () => { });

    it('should be oporra', () => { });
  });
});
