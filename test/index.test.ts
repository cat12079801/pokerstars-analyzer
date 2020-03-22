/* eslint-env mocha */

import { expect } from 'chai';

import PokerStarsAnalyzer from '../src/index';

type Card =
  'As' | 'Ah' | 'Ad' | 'Ac' |
  '2s' | '2h' | '2d' | '2c' |
  '3s' | '3h' | '3d' | '3c' |
  '4s' | '4h' | '4d' | '4c' |
  '5s' | '5h' | '5d' | '5c' |
  '6s' | '6h' | '6d' | '6c' |
  '7s' | '7h' | '7d' | '7c' |
  '8s' | '8h' | '8d' | '8c' |
  '9s' | '9h' | '9d' | '9c' |
  'Ts' | 'Th' | 'Td' | 'Tc' |
  'Js' | 'Jh' | 'Jd' | 'Jc' |
  'Qs' | 'Qh' | 'Qd' | 'Qc' |
  'Ks' | 'Kh' | 'Kd' | 'Kc';

type Action = 'anti' | 'smallBlind' | 'bigBlind' | 'dealHoleCards' | 'dealFlop' | 'dealTurn' | 'dealRiver' | 'bet' | 'call' | 'raise' | 'fold';

type PSAJson = {
  tournamentNo: number,
  tableName: string,
  players: string[],
  myPlayerName: string,
  myPlayerSeatNo: number,
  buyInAmount: number,
  buyInUnit: 'PlayMoney'|'USD',
  hands: {
    handNo: number,
    blindLevel: number,
    smallBlind: number,
    bigBlind: number,
    anti: number,
    buttonSeatNo: number,
    holeCard: Card[],
      actions: {
        action: Action,
        seatNo: number | null,
        amount: number | null,
      }[]
  }[],
  summary: {
    pot: number,
    rake: number,
    stackBySeatNo: number[],
  },
}

describe('PokerStarsAnalyzerのテスト', () => {
  let psa: PokerStarsAnalyzer;
  let json: PSAJson;

  before(() => {
    psa = new PokerStarsAnalyzer('./_files/sample1.txt');
    json = psa.json;
  });

  it('logFilePathを取り出せる', () => {
    expect(psa.logFilePath).to.equal('./_files/sample1.txt');
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
