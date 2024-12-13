export type RankingData = {
  id: number;
  place: number;
  combination: string;
  score: number;
  rate: string;
};

export type Ranking = {
  total: number;
  ranking: RankingData[];
};

export type PokemonRankingData = {
  [pokemon in string]: {
    rank: number;
    total: number;
    teraType: { [teraType in string]: number };
    ability: { [ability in string]: number };
    item: { [item in string]: number };
    moves: { [move in string]: number };
  };
};
