/* eslint-env mocha */

import { expect } from 'chai';

import {
  PokerStarsAnalyzer,
  PSAJson, // eslint-disable-line no-unused-vars
} from '../src/index';

describe('PokerStarsAnalyzerのテスト', () => {
  let psa: PokerStarsAnalyzer;
  let json: PSAJson;

  before(async () => {
    psa = new PokerStarsAnalyzer('test/_files/sample1.txt');
    await psa.build();
    json = psa.json;
  });

  it('logFilePathを取り出せる', () => {
    expect(psa.logFilePath).to.equal('test/_files/sample1.txt');
  });

  it.skip('トーナメント番号が取得できる', () => {
    expect(json.tournamentNo).to.equal(0);
  });

  it.skip('テーブル名が取得できる', () => {
    expect(json.tableName).to.equal('');
  });

  it.skip('プレイヤー一覧が取得できる', () => {
    json.players.forEach((playerName) => {
      expect(playerName).to.equal('');
    });
  });

  it.skip('自分のプレイヤー名が取得できる', () => {
    expect(json.myPlayerName).to.equal('');
  });

  it.skip('自分のシート番号が取得できる', () => {
    expect(json.myPlayerSeatNo).to.equal(0);
  });

  it.skip('バイイン額が取得できる', () => {
    expect(json.buyInAmount).to.equal(100);
  });

  it.skip('バイイン通貨が取得できる', () => {
    expect(json.buyInUnit).to.equal('USD');
  });

  it.skip('ハンド履歴が取得できる', () => {
  });

  it.skip('サマリが取得できる', () => {
  });
});
