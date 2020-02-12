// TODO: このあたり外から見えるEnumにする
type Suit = 'Spade' | 'Club' | 'Diamond' | 'Heart'

type Rank =
    'A'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'T'
  | 'J'
  | 'Q'
  | 'K'

export default class PlayingCard {
  readonly suit: Suit;

  readonly rank: Rank;

  constructor(suit: Suit, rank: Rank) {
    this.suit = suit;
    this.rank = rank;
  }

  public toString = (): string => `${this.rank}${this.suit[0].toLocaleLowerCase()}`;

  get getSuit(): Suit {
    return this.suit;
  }

  get getRank(): Rank {
    return this.rank;
  }
}
