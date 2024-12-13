import { PokemonRankingData, Ranking } from "../../types/ranking";

export const rankingDefaultValue: Ranking = {
  total: 0,
  ranking: [{ id: 0, place: 0, combination: 'なし', score: 0, rate: '0%' }],
};

export const pokemonRankingDefaultValue: PokemonRankingData = {
  'なし': {
    total: 0,
    teraType: {
      'ノーマル': 0,
    },
    ability: {
      'なし': 0,
    },
    item: {
      'なし': 0,
    },
    moves: {
      'なし': 0,
    },
  },
};
