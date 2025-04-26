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
  // カラナクシ and トリトドン の処理
  if (name.includes('（にしのうみ）') || name.includes('（ひがしのうみ）')) {
    return name.replace('（にしのうみ）', '').replace('（ひがしのうみ）', '');
  }

  // ガラルのすがた の処理
  if (name.includes('（ガラルのすがた）')) {
    return 'ガラル' + name.replace('（ガラルのすがた）', '');
  }

  // アローラのすがた の処理
  if (name.includes('（アローラのすがた）')) {
    return 'アローラ' + name.replace('（アローラのすがた）', '');
  }

  // ヒスイのすがた の処理
  if (name.includes('（ヒスイのすがた）')) {
    return 'ヒスイ' + name.replace('（ヒスイのすがた）', '');
  }

  // パルデアのすがた の処理
  if (name.includes('（パルデアのすがた）')) {
    return 'パルデア' + name.replace('（パルデアのすがた）', '');
  }

  // れいじゅうフォルム の処理（例: トルネロス（れいじゅうフォルム） → 霊獣トルネロス）
  if (name.includes('（れいじゅうフォルム）')) {
    return '霊獣' + name.replace('（れいじゅうフォルム）', '');
  }

  // けしんフォルム の処理（例: トルネロス（けしんフォルム） → 化身トルネロス）
  if (name.includes('（けしんフォルム）')) {
    return '化身' + name.replace('（けしんフォルム）', '');
  }

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
    case 'ザシアン（けんのおう）':
      return 'ザシアン';
    case 'ザマゼンタ（れきせんのゆうしゃ）':
      return 'ザマゼンタ';
    case 'テラパゴス（ノーマルフォルム）':
      return 'テラパゴス';
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
