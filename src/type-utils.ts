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

export const isParsedTournamentInfo = (arg: any): arg is type.ParsedTournamentInfo => {
  return arg.dummyPropertyParsedTournamentInfo !== undefined
    && arg.next !== undefined;
};

export const isParsedTableInfo = (arg: any): arg is type.ParsedTableInfo => {
  return arg.dummyPropertyParsedTableInfo !== undefined
    && arg.next !== undefined;
};

export const isParsedPlayersInfo = (arg: any): arg is type.ParsedPlayersInfo => {
  return arg.dummyPropertyParsedPlayersInfo !== undefined
    && arg.next !== undefined;
};

export const isParsedPostParticipationFee = (arg: any): arg is type.ParsedPostParticipationFee => {
  return arg.dummyPropertyParsedPostParticipationFee !== undefined
    && arg.next !== undefined;
};

export const isParsedPhasePartision = (arg: any): arg is type.ParsedPhasePartision => {
  return arg.dummyPropertyParsedPhasePartision !== undefined
    && arg.next !== undefined;
};

export const isParsedPhasePreFlop = (arg: any): arg is type.ParsedPhasePreFlop => {
  return arg.dummyPropertyParsedPhasePreFlop !== undefined
    && arg.next !== undefined;
};

export const isParsedPhaseFlop = (arg: any): arg is type.ParsedPhaseFlop => {
  return arg.dummyPropertyParsedPhaseFlop !== undefined
    && arg.next !== undefined;
};

export const isParsedPhaseTurn = (arg: any): arg is type.ParsedPhaseTurn => {
  return arg.dummyPropertyParsedPhaseTurn !== undefined
    && arg.next !== undefined;
};

export const isParsedPhaseRiver = (arg: any): arg is type.ParsedPhaseRiver => {
  return arg.dummyPropertyParsedPhaseRiver !== undefined
    && arg.next !== undefined;
};

export const isParsedSummary = (arg: any): arg is type.ParsedSummary => {
  return arg.dummyPropertyParsedSummary !== undefined
    && arg.next !== undefined;
};
