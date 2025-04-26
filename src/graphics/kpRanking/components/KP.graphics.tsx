import { KPData } from '../../../types/ranking';
import { nameConvert } from '../../../utils/const';
import { usePokedex } from '../../../hooks/usePokedex';

type Props = {
    rankingData: KPData;
  place: number;
  total: number;
};

// KPを実数値からパーセント表記に変換
const getPercent = (total: number | undefined, KP: number) => {
  if (!total) return '0.0';
  const result = (KP / total) * 100; // パーティ総数で採用数を割る
  const roundToTwo = (Math.round(result * 10) / 10).toFixed(1); // 小数第一位まで表示
  return roundToTwo;
};

// ウーラオスの表示名を統一する関数
const getPokemonDisplayName = (name: string) => {
  // ウーラオスの場合は「ウーラオス」に統一
  if (name.includes('ウーラオス')) {
    return 'ウーラオス';
  }
  // それ以外は通常の変換を使用
  return nameConvert(name);
};

export const KPGraphics = ({ rankingData, place, total }: Props) => {
  const { getPokemonIcon } = usePokedex();

  const originalPokemonName = rankingData.combination.pokemons[0];
  // ウーラオスの表示名を統一
  const pokemonName = getPokemonDisplayName(originalPokemonName);

  // アイコンの取得（usePokedex内で統一されたウーラオスのアイコン処理を行うため、元の名前を使用）
  const pokemonIcon = getPokemonIcon(originalPokemonName);

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
