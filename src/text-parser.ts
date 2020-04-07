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

type ParsedBase = {next: boolean};
type ParsedChunkInfo = ParsedBase & {
  handNo: number,
  tournamentNo: number,
  buyInAmount: number,
  buyInUnit: 'PlayMoney'|'USD',
  next: true,
};
type ParsedTournamentInfo = ParsedBase & {};
type ParsedTableInfo = ParsedBase & {};
type ParsedPlayersInfo = ParsedBase & {};
type ParsedPostParticipationFee = ParsedBase & {};
type ParsedPartisionPreFlop = ParsedBase & {};
type ParsedPhasePreFlop = ParsedBase & {};
type ParsedPartisionFlop = ParsedBase & {};
type ParsedPhaseFlop = ParsedBase & {};
type ParsedPartisionTurn = ParsedBase & {};
type ParsedPhaseTurn = ParsedBase & {};
type ParsedPartisionRiver = ParsedBase & {};
type ParsedPhaseRiver = ParsedBase & {};
type ParsedPartisionSummary = ParsedBase & {};
type ParsedSummary = ParsedBase & {};
type ParsedTypes =
  ParsedChunkInfo |
  ParsedTournamentInfo |
  ParsedTableInfo |
  ParsedPlayersInfo |
  ParsedPostParticipationFee |
  ParsedPartisionPreFlop |
  ParsedPhasePreFlop |
  ParsedPartisionFlop |
  ParsedPhaseFlop |
  ParsedPartisionTurn |
  ParsedPhaseTurn |
  ParsedPartisionRiver |
  ParsedPhaseRiver |
  ParsedPartisionSummary |
  ParsedSummary;

export default class TextParser {
  private json: PSAJson;

  private readingLine: LineKind;

  constructor() {
    this.json = PokerStarsAnalyzer.emptyJson();
    this.readingLine = 'ChunkInfo';
  }

  public read = (line: string): void => {
    const data = this.parseFunctions[this.readingLine](line);
    this.processParsedData(data);
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
      return {
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    TableInfo: (line: string): ParsedTableInfo => {
      return {
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PlayersInfo: (line: string): ParsedPlayersInfo => {
      return {
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PostParticipationFee: (line: string): ParsedPostParticipationFee => {
      return {
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PartisionPreFlop: (line: string): ParsedPartisionPreFlop => {
      return {
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PhasePreFlop: (line: string): ParsedPhasePreFlop => {
      return {
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PartisionFlop: (line: string): ParsedPartisionFlop => {
      return {
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PhaseFlop: (line: string): ParsedPhaseFlop => {
      return {
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PartisionTurn: (line: string): ParsedPartisionTurn => {
      return {
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PhaseTurn: (line: string): ParsedPhaseTurn => {
      return {
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PartisionRiver: (line: string): ParsedPartisionRiver => {
      return {
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PhaseRiver: (line: string): ParsedPhaseRiver => {
      return {
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PartisionSummary: (line: string): ParsedPartisionSummary => {
      return {
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    Summary: (line: string): ParsedSummary => {
      return {
        next: true,
      };
    },
  };

  private processParsedData = (parsed: ParsedTypes): void => {
    // TODO: if文を延々と連ねて書くのはダメ
    if (this.isParsedChunkInfo(parsed)) {
      this.json.tournamentNo = parsed.tournamentNo;
      this.json.buyInAmount = parsed.buyInAmount;
      this.json.buyInUnit = parsed.buyInUnit;
      // TODO: handオブジェクトを作成して handNo: number, を入れる
    }

    if (parsed.next) {
      // TODO: this.nextLineKind(); を用意する
      // この関数にnextを渡してその中で次に進むか考えても良いかも
    }
  }

  // TODO: type guardは別ファイルに分けたい
  // type guardの条件式は本当にこれで十分？
  public isParsedChunkInfo = (arg: any): arg is ParsedChunkInfo => {
    return arg.handNo !== undefined
      && arg.tournamentNo !== undefined
      && arg.buyInAmount !== undefined
      && arg.buyInUnit !== undefined
      && arg.next !== undefined;
  }
}
