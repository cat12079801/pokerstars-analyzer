class PokerStarsAnalyzer {
  readonly logFilePath: string;

  constructor(logFilePath: string) {
    this.logFilePath = logFilePath;
  }

  get getLogFilePath(): string {
    return this.logFilePath;
  }
}

const a: PokerStarsAnalyzer = new PokerStarsAnalyzer('abcde');
console.log(a.getLogFilePath); // eslint-disable-line
