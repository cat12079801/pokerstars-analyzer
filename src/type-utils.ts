// eslint-disable-next-line no-unused-vars
import * as type from './type';

export const emptyHand = (): type.Hand => {
  return {
    handNo: 0,
    blindLevel: 0,
    smallBlind: 0,
    bigBlind: 0,
    anti: 0,
    buttonSeatNo: 1,
    holeCard: ['As', 'Ah'],
    actions: [
    ],
    summary: {
      pot: 0,
      rake: 0,
      stackBySeatNo: [
      ],
    },
  };
};

export const emptyPSAJson = (): type.PSAJson => {
  return {
    tournamentNo: 0,
    tableName: '',
    players: [
    ],
    myPlayerName: '',
    myPlayerSeatNo: 0,
    buyInAmount: 0,
    buyInUnit: 'USD',
    hands: [],
  };
};

export const isParsedChunkInfo = (arg: any): arg is type.ParsedChunkInfo => {
  return arg.handNo !== undefined
    && arg.tournamentNo !== undefined
    && arg.buyInAmount !== undefined
    && arg.buyInUnit !== undefined
    && arg.next !== undefined;
};
