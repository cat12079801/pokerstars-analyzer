import PokerStarsAnalyzer from './index';
import {
  PSAJson, // eslint-disable-line no-unused-vars
  LineKind, // eslint-disable-line no-unused-vars
  ParseFunctions, // eslint-disable-line no-unused-vars
  ParsedChunkInfo, // eslint-disable-line no-unused-vars
  ParsedTournamentInfo, // eslint-disable-line no-unused-vars
  ParsedTableInfo, // eslint-disable-line no-unused-vars
  ParsedPlayersInfo, // eslint-disable-line no-unused-vars
  ParsedPostParticipationFee, // eslint-disable-line no-unused-vars
  ParsedPartisionPreFlop, // eslint-disable-line no-unused-vars
  ParsedPhasePreFlop, // eslint-disable-line no-unused-vars
  ParsedPartisionFlop, // eslint-disable-line no-unused-vars
  ParsedPhaseFlop, // eslint-disable-line no-unused-vars
  ParsedPartisionTurn, // eslint-disable-line no-unused-vars
  ParsedPhaseTurn, // eslint-disable-line no-unused-vars
  ParsedPartisionRiver, // eslint-disable-line no-unused-vars
  ParsedPhaseRiver, // eslint-disable-line no-unused-vars
  ParsedPartisionSummary, // eslint-disable-line no-unused-vars
  ParsedSummary, // eslint-disable-line no-unused-vars
  ParsedTypes, // eslint-disable-line no-unused-vars
} from './type';

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
