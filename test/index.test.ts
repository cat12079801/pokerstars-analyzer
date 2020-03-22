/* eslint-env mocha */

import { expect } from 'chai';

import PokerStarsAnalyzer from '../src/index';

describe('PokerStarsAnalyzerのテスト', () => {
  let psa: PokerStarsAnalyzer;

  before(() => {
    psa = new PokerStarsAnalyzer('path/to/file.log');
  });

  it('logFilePathを取り出せる', () => {
    expect(psa.logFilePath).to.equal('path/to/file.log');
  });
});
