// eslint-disable-next-line no-unused-vars
import * as type from './type';
import * as typeUtil from './type-utils';

export default class TextParser {
  private json: type.PSAJson;

  private readingLine: type.LineKind;

  constructor() {
    this.json = typeUtil.emptyPSAJson();
    this.readingLine = 'ChunkInfo';
  }

  public read = (line: string): void => {
    const data = this.parseFunctions[this.readingLine](line);
    this.processParsedData(data);
  }

  private parseFunctions: type.ParseFunctions = {
    // eslint-disable-next-line no-unused-vars
    ChunkInfo: (line: string): type.ParsedChunkInfo => {
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
    TournamentInfo: (line: string): type.ParsedTournamentInfo => {
      return {
        dummyPropertyParsedTournamentInfo: 'dummy',
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    TableInfo: (line: string): type.ParsedTableInfo => {
      return {
        dummyPropertyParsedTableInfo: 'dummy',
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PlayersInfo: (line: string): type.ParsedPlayersInfo => {
      return {
        dummyPropertyParsedPlayersInfo: 'dummy',
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PostParticipationFee: (line: string): type.ParsedPostParticipationFee => {
      return {
        dummyPropertyParsedPostParticipationFee: 'dummy',
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PhasePartision: (line: string): type.ParsedPhasePartision => {
      return {
        dummyPropertyParsedPhasePartision: 'dummy',
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PhasePreFlop: (line: string): type.ParsedPhasePreFlop => {
      return {
        dummyPropertyParsedPhasePreFlop: 'dummy',
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PhaseFlop: (line: string): type.ParsedPhaseFlop => {
      return {
        dummyPropertyParsedPhaseFlop: 'dummy',
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PhaseTurn: (line: string): type.ParsedPhaseTurn => {
      return {
        dummyPropertyParsedPhaseTurn: 'dummy',
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    PhaseRiver: (line: string): type.ParsedPhaseRiver => {
      return {
        dummyPropertyParsedPhaseRiver: 'dummy',
        next: true,
      };
    },
    // eslint-disable-next-line no-unused-vars
    Summary: (line: string): type.ParsedSummary => {
      return {
        dummyPropertyParsedSummary: 'dummy',
        next: true,
      };
    },
  };

  private processParsedData = (parsed: type.ParsedTypes): void => {
    // TODO: if文を延々と連ねて書くのはダメ
    if (typeUtil.isParsedChunkInfo(parsed)) {
      this.json.tournamentNo = parsed.tournamentNo;
      this.json.buyInAmount = parsed.buyInAmount;
      this.json.buyInUnit = parsed.buyInUnit;
      this.json.hands.push(typeUtil.emptyHand());
      this.json.hands[this.json.hands.length - 1].handNo = parsed.handNo;
    }

    if (parsed.next) {
      // TODO: this.nextLineKind(); を用意する
      // この関数にnextを渡してその中で次に進むか考えても良いかも
    }
  }
}
