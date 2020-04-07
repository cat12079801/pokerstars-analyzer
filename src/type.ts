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
  hands: {
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
  }[],
}

export type LineKind =
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

export type ParseFunctions = {
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

export type ParsedBase = {next: boolean};
export type ParsedChunkInfo = ParsedBase & {
  handNo: number,
  tournamentNo: number,
  buyInAmount: number,
  buyInUnit: 'PlayMoney'|'USD',
  next: true,
};
export type ParsedTournamentInfo = ParsedBase & {};
export type ParsedTableInfo = ParsedBase & {};
export type ParsedPlayersInfo = ParsedBase & {};
export type ParsedPostParticipationFee = ParsedBase & {};
export type ParsedPartisionPreFlop = ParsedBase & {};
export type ParsedPhasePreFlop = ParsedBase & {};
export type ParsedPartisionFlop = ParsedBase & {};
export type ParsedPhaseFlop = ParsedBase & {};
export type ParsedPartisionTurn = ParsedBase & {};
export type ParsedPhaseTurn = ParsedBase & {};
export type ParsedPartisionRiver = ParsedBase & {};
export type ParsedPhaseRiver = ParsedBase & {};
export type ParsedPartisionSummary = ParsedBase & {};
export type ParsedSummary = ParsedBase & {};
export type ParsedTypes =
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
