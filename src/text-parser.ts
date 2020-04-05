import {
  PSAJson, // eslint-disable-line no-unused-vars
  PokerStarsAnalyzer,
} from './index';

type LineKind =
  'ChunkInfo' |
  'TournamentInfo' |
  'TableInfo' |
  'PlayersInfo' |
  'PostParticipationFee' |
  'PartisionPreFlop' |
  'PhasePreFlop' |
  'PartisionFlop' |
  'PhaseFlop' |
  'PartisionTurn' |
  'PhaseTurn' |
  'PartisionRiver' |
  'PhaseRiver' |
  'PartisionSummary' |
  'Summary';

type ParseFunctions = {
  // すべてのLineKindに対してパースする関数を返す
  ChunkInfo: (line: string) => ParsedChunkInfo,
  TournamentInfo: (line: string) => ParsedTournamentInfo,
  TableInfo: (line: string) => ParsedTableInfo,
  PlayersInfo: (line: string) => ParsedPlayersInfo,
  PostParticipationFee: (line: string) => ParsedPostParticipationFee,
  PartisionPreFlop: (line: string) => ParsedPartisionPreFlop,
  PhasePreFlop: (line: string) => ParsedPhasePreFlop,
  PartisionFlop: (line: string) => ParsedPartisionFlop,
  PhaseFlop: (line: string) => ParsedPhaseFlop,
  PartisionTurn: (line: string) => ParsedPartisionTurn,
  PhaseTurn: (line: string) => ParsedPhaseTurn,
  PartisionRiver: (line: string) => ParsedPartisionRiver,
  PhaseRiver: (line: string) => ParsedPhaseRiver,
  PartisionSummary: (line: string) => ParsedPartisionSummary,
  Summary: (line: string) => ParsedSummary,
};

type ParsedChunkInfo = {
  handNo: number,
  tournamentNo: number,
  buyInAmount: number,
  buyInUnit: 'PlayMoney'|'USD',
  next: true,
};
type ParsedTournamentInfo = {};
type ParsedTableInfo = {};
type ParsedPlayersInfo = {};
type ParsedPostParticipationFee = {};
type ParsedPartisionPreFlop = {};
type ParsedPhasePreFlop = {};
type ParsedPartisionFlop = {};
type ParsedPhaseFlop = {};
type ParsedPartisionTurn = {};
type ParsedPhaseTurn = {};
type ParsedPartisionRiver = {};
type ParsedPhaseRiver = {};
type ParsedPartisionSummary = {};
type ParsedSummary = {};

export default class TextParser {
  private json: PSAJson;

  private readingLine: LineKind;

  constructor() {
    this.json = PokerStarsAnalyzer.emptyJson();
    this.readingLine = 'ChunkInfo';
  }

  public read = (): void => {
  }

  private parseFunctions: ParseFunctions = {
    // eslint-disable-next-line no-unused-vars
    ChunkInfo: (line: string): ParsedChunkInfo => {
      // TODO: lineを正規表現でパースする
      return {
        handNo: 100,
        tournamentNo: 100,
        buyInAmount: 100,
        buyInUnit: 'USD',
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    TournamentInfo: (line: string): ParsedTournamentInfo => {
      return {};
    },
    // eslint-disable-next-line no-unused-vars
    TableInfo: (line: string): ParsedTableInfo => {
      return {};
    },
    // eslint-disable-next-line no-unused-vars
    PlayersInfo: (line: string): ParsedPlayersInfo => {
      return {};
    },
    // eslint-disable-next-line no-unused-vars
    PostParticipationFee: (line: string): ParsedPostParticipationFee => {
      return {};
    },
    // eslint-disable-next-line no-unused-vars
    PartisionPreFlop: (line: string): ParsedPartisionPreFlop => {
      return {};
    },
    // eslint-disable-next-line no-unused-vars
    PhasePreFlop: (line: string): ParsedPhasePreFlop => {
      return {};
    },
    // eslint-disable-next-line no-unused-vars
    PartisionFlop: (line: string): ParsedPartisionFlop => {
      return {};
    },
    // eslint-disable-next-line no-unused-vars
    PhaseFlop: (line: string): ParsedPhaseFlop => {
      return {};
    },
    // eslint-disable-next-line no-unused-vars
    PartisionTurn: (line: string): ParsedPartisionTurn => {
      return {};
    },
    // eslint-disable-next-line no-unused-vars
    PhaseTurn: (line: string): ParsedPhaseTurn => {
      return {};
    },
    // eslint-disable-next-line no-unused-vars
    PartisionRiver: (line: string): ParsedPartisionRiver => {
      return {};
    },
    // eslint-disable-next-line no-unused-vars
    PhaseRiver: (line: string): ParsedPhaseRiver => {
      return {};
    },
    // eslint-disable-next-line no-unused-vars
    PartisionSummary: (line: string): ParsedPartisionSummary => {
      return {};
    },
    // eslint-disable-next-line no-unused-vars
    Summary: (line: string): ParsedSummary => {
      return {};
    },
  };
}
