import { PokemonNum } from '../types/scoreboard';

export const pokemonNumList: PokemonNum[] = Array.from(
  { length: 6 },
  (_, i) => `pokemon${i + 1}` as PokemonNum
);

// export const translateType: { [key in TerastalType_JP]: TerastalType } = {
//   ノーマル: 'normal',
//   ほのお: 'fire',
//   みず: 'water',
//   くさ: 'grass',
//   でんき: 'electric',
//   こおり: 'ice',
//   かくとう: 'fighting',
//   どく: 'poison',
//   じめん: 'ground',
//   ひこう: 'flying',
//   エスパー: 'psychic',
//   むし: 'bug',
//   いわ: 'rock',
//   ゴースト: 'ghost',
//   ドラゴン: 'dragon',
//   あく: 'dark',
//   はがね: 'steel',
//   フェアリー: 'fairy',
//   ステラ: 'stellar',
// };
