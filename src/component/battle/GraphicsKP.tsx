// import { PlayerNum, PokemonNum } from '../../types/scoreboard';
import { useRepList } from '../../hooks/useRepList';
import { usePokedex } from '../../hooks/usePokedex';
import { KPDefaultValues } from '../../types/replicant';

type Props = {
  listNumber: number;
};

const nameConvert = (name: string) => {
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
    case 'ギラティナ（アナザーフォルム）':
      return 'ギラティナ';
    case 'ギラティナ（オリジンフォルム）':
      return 'オリジンギラティナ';
    case 'ディアルガ（オリジンフォルム）':
      return 'オリジンディアルガ';
    case 'パルキア（オリジンフォルム）':
      return 'オリジンパルキア';
    default:
      return name;
  }
};

// KPを実数値からパーセント表記に変換
const kpToPercent = (total: number | undefined, KP: number) => {
  if (!total) return 0;
  const result = (KP / total) * 100; // パーティ総数で採用数を割る
  const roundToTwo = Math.round(result * 10) / 10; // 小数第二位で四捨五入する
  return roundToTwo;
};

export function GraphicsKP({ listNumber }: Props) {
  const { repKP, repParty } = useRepList();
  const { getPokemonIcon } = usePokedex();

  // パーティの総数
  const totalPartyNum = repParty?.length;

  // 三項演算子でundefindを排除
  const KPdata = repKP ? repKP[listNumber] : KPDefaultValues;
  const rank = KPdata.rank;
  const name = KPdata.pokemon;
  const score = KPdata.score;

  // ポケモンのアイコンを取り寄せ
  const pokemonIcon = getPokemonIcon(name);

  return (
    <div className="section">
      <div className="rank">{rank}</div>
      <img className="pokemonIcon" src={pokemonIcon} alt="" />
      <div className="name">{nameConvert(name)}</div>
      <div className="score">{kpToPercent(totalPartyNum, score)}</div>
      <div className="percent">%</div>
    </div>
  );
}
