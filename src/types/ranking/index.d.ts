// 基本的なポケモン組み合わせの型
export type PokemonCombination = {
  pokemons: string[];  // 組み合わせに含まれるポケモンの配列
}

// KPsのデータ型
export type KPData = {
  id: number;
  place: number;
  combination: PokemonCombination;
  score: number;
  percentage: number;  // rateをpercentageにリネーム（より明確な命名）
};

// KPsの結果型
export type KPResult = {
  total: number;
  ranking: KPData[];
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

// 伝説ポケモンの単体採用率データ型
export type LegendaryPokemonData = {
  pokemon: string;
  percentage: number;
  count: number;
};

// 伝説ポケモンの組み合わせデータ型
export type LegendaryCombinationData = {
  pokemon: string;
  percentage: number;
  count: number;
};

// 伝説ポケモンの組み合わせランキング型
export type LegendaryCombinationRanking = {
  legendary: string;
  combinations: LegendaryCombinationData[];
};

// LegendaryRanking全体の型
export type LegendaryRankingData = {
  total: number;
  legendaryRanking: LegendaryPokemonData[];
  combinationRanking: LegendaryCombinationRanking[];
};
