/* eslint-env mocha */

import { expect } from 'chai';

import PokerStarsAnalyzer from '../src/index';

describe('PokerStarsAnalyzerのテスト', () => {
  let psa: PokerStarsAnalyzer;

  before(() => {
    psa = new PokerStarsAnalyzer('./_files/sample1.txt');
  });

  it('logFilePathを取り出せる', () => {
    expect(psa.logFilePath).to.equal('./_files/sample1.txt');
  });
});
