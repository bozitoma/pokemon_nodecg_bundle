// Replicantsの型を定義
import type {
  EntryMargeParty,
  EntryMargePokemon,
  Gender_JP,
  Party,
  PokemonType_JP,
  TerastalType_JP,
  Topcut,
} from '../types/scoreboard';
import { partyDefaultValue, topcutDefaultValue } from './scoreboardDefaultValue';

export type PlayerInfo = {
  name: string;
  score: number;
  swiss: {
    win: number;
    lose: number;
    draw: number;
  };
};

export const playerInfoDefaultValues: PlayerInfo = {
  name: 'name',
  score: 0,
  swiss: {
    win: 0,
    lose: 0,
    draw: 0,
  },
};

export type Commentator = {
  name: string;
  account: string;
  tag: string;
};

export const commentatorDefaultValues: Commentator = {
  name: 'name',
  account: 'account',
  tag: 'tag',
};

export type Bracket = {
  name1p: string;
  name2p: string;
  score1p: number;
  score2p: number;
};

export const bracketDefaultValues: Bracket = {
  name1p: 'name1p',
  name2p: 'name2p',
  score1p: 0,
  score2p: 0,
};

export type KP = {
  rank: number;
  pokemon: string;
  score: number;
};

export const KPDefaultValues: KP = {
  rank: 0,
  pokemon: '',
  score: 0,
};

export const entryMargePokemonDefaultValues: EntryMargePokemon = {
  name: '',
  teraType: 'ノーマル',
};

export const entryMargePartyDefaultValues: EntryMargeParty = {
  id: 0,
  accountID: '',
  player_name: '',
  pokemon1: entryMargePokemonDefaultValues,
  pokemon2: entryMargePokemonDefaultValues,
  pokemon3: entryMargePokemonDefaultValues,
  pokemon4: entryMargePokemonDefaultValues,
  pokemon5: entryMargePokemonDefaultValues,
  pokemon6: entryMargePokemonDefaultValues,
};

export type EntryPokemon = {
  id: number;
  accountID: string;
  player_name: string;
  gender: Gender_JP;
  type1: PokemonType_JP;
  type2: PokemonType_JP;
  teraType: TerastalType_JP;
  ability: string;
  item: string;
  move1: string;
  move2: string;
  move3: string;
  move4: string;
};

export const entryPokemonDefaultValues: EntryPokemon = {
  id: 0,
  accountID: '',
  player_name: '',
  gender: 'なし',
  type1: 'なし',
  type2: 'なし',
  teraType: 'ノーマル',
  ability: '',
  item: '',
  move1: '',
  move2: '',
  move3: '',
  move4: '',
};

export type RankingContents = {
  Rank: number;
  Name: string;
  Score: number;
};

export type ConvertedRanking = {
  id: number;
  pokemon: string;
  item: RankingContents[];
  ability: RankingContents[];
  teraType: RankingContents[];
  move: RankingContents[];
};

export const rankingContentsDefaultValues: RankingContents = {
  Rank: 0,
  Name: '',
  Score: 0,
};

export const convertedRankingDefaultValues: ConvertedRanking = {
  id: 0,
  pokemon: '',
  item: [rankingContentsDefaultValues],
  ability: [rankingContentsDefaultValues],
  teraType: [rankingContentsDefaultValues],
  move: [rankingContentsDefaultValues],
};

export type Pokedex = {
  id: number;
  no: number;
  variable: number;
  name: string;
  ability1: string;
  ability2: string;
  ability3: string;
  type1: PokemonType_JP;
  type2: PokemonType_JP;
  H: number;
  A: number;
  B: number;
  C: number;
  D: number;
  S: number;
  Total: number;
  generation: number;
  img1: string;
  img2: string;
};

export const pokedexDefaultValues: Pokedex = {
  id: 0,
  no: 0,
  variable: 0,
  name: '',
  ability1: '',
  ability2: '',
  ability3: '',
  type1: 'なし',
  type2: 'なし',
  H: 0,
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  S: 0,
  Total: 0,
  generation: 0,
  img1: 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png',
  img2: 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png',
};

export interface ReplicantMap {
  Pokedex: Pokedex[];
  Party: EntryMargeParty[];
  Pokemon: EntryPokemon[];
  Ranking: ConvertedRanking[];
  KP: KP[];
  K2P: KP[];
  K3P: KP[];
  K4P: KP[];
  K5P: KP[];
  K6P: KP[];
  K2P_KPtop10: KP[];
  Timer: string;
  ScoreboardInfo: {
    Message: string;
    TournamentName: string;
    Round: string;
    BestOf: string;
    Player1: PlayerInfo;
    Player2: PlayerInfo;
  };
  BattleParty: Party;
  Commentator: {
    commentator1: Commentator;
    commentator2: Commentator;
    commentator3: Commentator;
    commentator4: Commentator;
  };
  Topcut: {
    Player1: Topcut;
    Player2: Topcut;
    Player3: Topcut;
    Player4: Topcut;
    Player5: Topcut;
    Player6: Topcut;
    Player7: Topcut;
    Player8: Topcut;
  };
  Bracket: {
    WQFa: Bracket;
    WQFb: Bracket;
    WQFc: Bracket;
    WQFd: Bracket;
    WSFa: Bracket;
    WSFb: Bracket;
    WF: Bracket;
    LTOP16a: Bracket;
    LTOP16b: Bracket;
    LTOP16c: Bracket;
    LTOP16d: Bracket;
    LTOP8a: Bracket;
    LTOP8b: Bracket;
    LQFa: Bracket;
    LQFb: Bracket;
    LSF: Bracket;
    LF: Bracket;
    GF: Bracket;
    GF2: Bracket;
    BracketRound: {
      WQF: string;
      WSF: string;
      WF: string;
      LTOP16: string;
      LTOP8: string;
      LQF: string;
      LSF: string;
      LF: string;
      GF: string;
      GF2: string;
    };
  };
}

// Replicantsの初期値を定義
export const replicantDefaultValues: ReplicantMap = {
  Pokedex: [pokedexDefaultValues],
  Party: [entryMargePartyDefaultValues],
  Pokemon: [entryPokemonDefaultValues],
  Ranking: [convertedRankingDefaultValues],
  KP: [KPDefaultValues],
  K2P: [KPDefaultValues],
  K3P: [KPDefaultValues],
  K4P: [KPDefaultValues],
  K5P: [KPDefaultValues],
  K6P: [KPDefaultValues],
  K2P_KPtop10: [KPDefaultValues],
  Timer: '00:00',
  ScoreboardInfo: {
    Message: 'Message',
    TournamentName: 'TournamentName',
    Round: 'Round',
    BestOf: 'Best of 1',
    Player1: playerInfoDefaultValues,
    Player2: playerInfoDefaultValues,
  },
  BattleParty: partyDefaultValue,
  Commentator: {
    commentator1: commentatorDefaultValues,
    commentator2: commentatorDefaultValues,
    commentator3: commentatorDefaultValues,
    commentator4: commentatorDefaultValues,
  },
  Topcut: {
    Player1: topcutDefaultValue,
    Player2: topcutDefaultValue,
    Player3: topcutDefaultValue,
    Player4: topcutDefaultValue,
    Player5: topcutDefaultValue,
    Player6: topcutDefaultValue,
    Player7: topcutDefaultValue,
    Player8: topcutDefaultValue,
  },
  Bracket: {
    WQFa: bracketDefaultValues,
    WQFb: bracketDefaultValues,
    WQFc: bracketDefaultValues,
    WQFd: bracketDefaultValues,
    WSFa: bracketDefaultValues,
    WSFb: bracketDefaultValues,
    WF: bracketDefaultValues,
    LTOP16a: bracketDefaultValues,
    LTOP16b: bracketDefaultValues,
    LTOP16c: bracketDefaultValues,
    LTOP16d: bracketDefaultValues,
    LTOP8a: bracketDefaultValues,
    LTOP8b: bracketDefaultValues,
    LQFa: bracketDefaultValues,
    LQFb: bracketDefaultValues,
    LSF: bracketDefaultValues,
    LF: bracketDefaultValues,
    GF: bracketDefaultValues,
    GF2: bracketDefaultValues,
    BracketRound: {
      WQF: 'Winners Quarter',
      WSF: 'Winners Semi',
      WF: 'Winners Final',
      LTOP16: 'Losers Top16',
      LTOP8: 'Losers Top8',
      LQF: 'Losers Quarter',
      LSF: 'Losers Semi',
      LF: 'Losers Final',
      GF: 'Grand Final',
      GF2: 'Grand Final set2',
    },
  },
};
