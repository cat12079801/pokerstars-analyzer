/* eslint-env mocha */

import * as chai from 'chai';

import PokerStarsAnalyzer from '../src/index';

describe('PokerStarsAnalyzerのテスト', () => {
  it('logFilePathを取り出せる', () => {
    const psa = new PokerStarsAnalyzer('path/to/file.log');

    chai.assert.equal(psa.logFilePath, 'path/to/file.log');
  });
});
