export default class PokerStarsAnalyzer {
  readonly logFilePath: string;

  constructor(logFilePath: string) {
    this.logFilePath = logFilePath;
  }

  get getLogFilePath(): string {
    return this.logFilePath;
  }
}
