export type Card =
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

export type Action = 'anti' | 'smallBlind' | 'bigBlind' | 'dealHoleCards' | 'dealFlop' | 'dealTurn' | 'dealRiver' | 'bet' | 'call' | 'raise' | 'fold';

export type PSAJson = {
  tournamentNo: number,
  tableName: string,
  players: string[],
  myPlayerName: string,
  myPlayerSeatNo: number,
  buyInAmount: number,
  buyInUnit: 'PlayMoney'|'USD',
  hands: Hand[],
};
export type Hand = {
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
  }[],
  summary: {
    pot: number,
    rake: number,
    stackBySeatNo: number[],
  },
};

export type LineKind =
  'ChunkInfo' |
  'TournamentInfo' |
  'TableInfo' |
  'PlayersInfo' |
  'PostParticipationFee' |
  'PhasePartision' |
  'PhasePreFlop' |
  'PhaseFlop' |
  'PhaseTurn' |
  'PhaseRiver' |
  'Summary' |
  'Blank';

export type ParseFunctions = {
  // すべてのLineKindに対してパースする関数を返す
  ChunkInfo: (line: string) => ParsedChunkInfo,
  TournamentInfo: (line: string) => ParsedTournamentInfo,
  TableInfo: (line: string) => ParsedTableInfo,
  PlayersInfo: (line: string) => ParsedPlayersInfo,
  PostParticipationFee: (line: string) => ParsedPostParticipationFee,
  PhasePartision: (line: string) => ParsedPhasePartision,
  PhasePreFlop: (line: string) => ParsedPhasePreFlop,
  PhaseFlop: (line: string) => ParsedPhaseFlop,
  PhaseTurn: (line: string) => ParsedPhaseTurn,
  PhaseRiver: (line: string) => ParsedPhaseRiver,
  Summary: (line: string) => ParsedSummary,
  Blank: (line: string) => ParsedBlank,
};

export type ParsedBase = {next: boolean};
export type ParsedChunkInfo = ParsedBase & {
  handNo: number,
  tournamentNo: number,
  buyInAmount: number,
  buyInUnit: 'PlayMoney'|'USD',
  next: true,
};
export type ParsedTournamentInfo = ParsedBase & {
  dummyPropertyParsedTournamentInfo: 'dummy',
};
export type ParsedTableInfo = ParsedBase & {
  dummyPropertyParsedTableInfo: 'dummy',
};
export type ParsedPlayersInfo = ParsedBase & {
  dummyPropertyParsedPlayersInfo: 'dummy',
};
export type ParsedPostParticipationFee = ParsedBase & {
  dummyPropertyParsedPostParticipationFee: 'dummy',
};
export type ParsedPhasePartision = ParsedBase & {
  nextLine:
    'PhasePreFlop' |
    'PhaseFlop' |
    'PhaseTurn' |
    'PhaseRiver' |
    'Summary',
  dummyPropertyParsedPhasePartision: 'dummy',
};
export type ParsedPhasePreFlop = ParsedBase & {
  dummyPropertyParsedPhasePreFlop: 'dummy',
};
export type ParsedPhaseFlop = ParsedBase & {
  dummyPropertyParsedPhaseFlop: 'dummy',
};
export type ParsedPhaseTurn = ParsedBase & {
  dummyPropertyParsedPhaseTurn: 'dummy',
};
export type ParsedPhaseRiver = ParsedBase & {
  dummyPropertyParsedPhaseRiver: 'dummy',
};
export type ParsedSummary = ParsedBase & {
  dummyPropertyParsedSummary: 'dummy',
};
export type ParsedBlank = ParsedBase & {
};
export type AnyParsedPhase =
  ParsedPhasePreFlop |
  ParsedPhaseFlop |
  ParsedPhaseTurn |
  ParsedPhaseRiver |
  ParsedSummary;

export type ParsedTypes =
  ParsedChunkInfo |
  ParsedTournamentInfo |
  ParsedTableInfo |
  ParsedPlayersInfo |
  ParsedPostParticipationFee |
  ParsedPhasePartision |
  ParsedPhasePreFlop |
  ParsedPhaseFlop |
  ParsedPhaseTurn |
  ParsedPhaseRiver |
  ParsedSummary |
  ParsedBlank;
