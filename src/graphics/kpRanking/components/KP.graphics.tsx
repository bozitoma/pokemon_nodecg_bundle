import { useReplicant } from '../../../hooks/useReplicant';
import { RankingData } from '../../../types/ranking';

type Props = {
  rankingData: RankingData;
  place: number;
  total: number;
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
    case 'ディアルガ（オリジンフォルム）':
      return 'オリジンディアルガ';
    case 'パルキア（オリジンフォルム）':
      return 'オリジンパルキア';
    default:
      return name;
  }
};

// KPを実数値からパーセント表記に変換
const getPercent = (total: number | undefined, KP: number) => {
  if (!total) return '0.0';
  const result = (KP / total) * 100; // パーティ総数で採用数を割る
  const roundToTwo = (Math.round(result * 10) / 10).toFixed(1); // 小数第一位まで表示
  return roundToTwo;
};
export const KPGraphics = ({ rankingData, place, total }: Props) => {
  const [pokedexRep] = useReplicant('Pokedex');
  const getPokemonIcon = (pokemonName: string) =>
    pokedexRep?.find((pokemon) => pokemon.name === pokemonName)?.img1 ?? '';
  const pokemonName = nameConvert(rankingData.combination);
  const pokemonIcon = getPokemonIcon(rankingData.combination);
  const percent = getPercent(total, rankingData.score);
  return (
    <div className="section">
      <div className="rank">{place}</div>
      <img className="pokemonIcon" src={pokemonIcon} alt="" />
      <div className="name">{pokemonName}</div>
      <div className="score">{percent}</div>
      <div className="percent">%</div>
    </div>
  );
}
