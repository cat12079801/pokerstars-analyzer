/* eslint-env mocha */

import { expect } from 'chai';

import PokerStarsAnalyzer from '../src/index';
import PlayingCard from '../src/playingCard';

describe('PokerStarsAnalyzerのテスト', () => {
  let psa: PokerStarsAnalyzer;

  before(() => {
    psa = new PokerStarsAnalyzer('path/to/file.log');
  });

  it('logFilePathを取り出せる', () => {
    expect(psa.logFilePath).to.equal('path/to/file.log');
  });
});

describe('カード', () => {
  it('スペードのA', () => {
    const card = new PlayingCard('Spade', 'A');
    expect(`${card}`).to.equal('As');
  });
});
