import { PokemonNum } from '../types/scoreboard';

export const pokemonNumList: PokemonNum[] = Array.from(
  { length: 6 },
  (_, i) => `pokemon${i + 1}` as PokemonNum
);

export const emptyParty: string[] = Array.from(
  { length: 6 },
  () => 'なし'
);

export const nameConvert = (name: string) => {
  switch (name) {
    case 'ウーラオス（れんげきのかた）':
      return '水ウーラオス';
    case 'ウーラオス（いちげきのかた）':
      return '悪ウーラオス';
    case 'オーガポン（みどりのめん）':
      return '草オーガポン';
    case 'オーガポン（かまどのめん）':
      return '炎オーガポン';
    case 'オーガポン（いどのめん）':
      return '水オーガポン';
    case 'オーガポン（いしずえのめん）':
      return '岩オーガポン';
    case 'ガチグマ（アカツキ）':
      return '暁ガチグマ';
    case 'ランドロス（れいじゅうフォルム）':
      return '霊獣ランドロス';
    case 'キュウコン（アローラのすがた）':
      return 'アローラキュウコン';
    case 'バドレックス（はくばじょうのすがた）':
      return '白バドレックス';
    case 'バドレックス（こくばじょうのすがた）':
      return '黒バドレックス';
    case 'キュレム（ホワイトキュレム）':
      return 'ホワイトキュレム';
    case 'キュレム（ブラックキュレム）':
      return 'ブラックキュレム';
    case 'キュレム（キュレムのすがた）':
      return 'キュレム';
    case 'ネクロズマ（たそがれのたてがみ）':
      return '日食ネクロズマ';
    case 'ネクロズマ（あかつきのつばさ）':
      return '月食ネクロズマ';
    case 'ギラティナ（アナザーフォルム）':
      return 'ギラティナ';
    case 'ギラティナ（オリジンフォルム）':
      return 'ギラティナオリジン';
    case 'ディアルガ（オリジンフォルム）':
      return 'オリジンディアルガ';
    case 'パルキア（オリジンフォルム）':
      return 'オリジンパルキア';
    default:
      return name;
  }
};


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
