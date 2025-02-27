import { KPResult, PokemonRankingData } from "../../types/ranking";

export const rankingDefaultValue: KPResult = {
  total: 0,
  ranking: [{ id: 0, place: 0, combination: { pokemons: ['なし', 'なし', 'なし', 'なし', 'なし', 'なし'] }, score: 0, percentage: 0 }],
};

export const pokemonRankingDefaultValue: PokemonRankingData = {
  'なし': {
    rank: 0,
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
