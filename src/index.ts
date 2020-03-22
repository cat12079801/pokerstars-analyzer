// TODO: 型定義ファイルに出す
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

export default class PokerStarsAnalyzer {
  readonly logFilePath: string;

  readonly json: PSAJson;

  constructor(logFilePath: string) {
    this.logFilePath = logFilePath;
    this.json = this.parseToJson();
  }

  parseToJson = (): PSAJson => {
    return {
      tournamentNo: 1,
      tableName: 'table name',
      players: [
      ],
      myPlayerName: '',
      myPlayerSeatNo: 1,
      buyInAmount: 100,
      buyInUnit: 'USD',
      hands: [
        {
          handNo: 1,
          blindLevel: 1,
          smallBlind: 10,
          bigBlind: 10,
          anti: 1,
          buttonSeatNo: 1,
          holeCard: ['6s', '8h'],
          actions: [
            { action: 'anti', seatNo: 1, amount: 3 },
            { action: 'anti', seatNo: 2, amount: 3 },
            { action: 'anti', seatNo: 3, amount: 3 },
            { action: 'anti', seatNo: 4, amount: 3 },
            { action: 'anti', seatNo: 5, amount: 3 },
            { action: 'anti', seatNo: 6, amount: 3 },
            { action: 'anti', seatNo: 7, amount: 3 },
            { action: 'anti', seatNo: 8, amount: 3 },
            { action: 'anti', seatNo: 9, amount: 3 },
            { action: 'smallBlind', seatNo: 2, amount: 10 },
            { action: 'bigBlind', seatNo: 3, amount: 20 },
            { action: 'dealHoleCards', seatNo: null, amount: null },
          ],
        },
      ],
      summary: {
        pot: 100,
        rake: 0,
        stackBySeatNo: [
        ],
      },
    };
  }
}
