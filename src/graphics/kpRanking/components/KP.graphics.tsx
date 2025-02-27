import { useReplicant } from '../../../hooks/useReplicant';
import { KPData } from '../../../types/ranking';
import { nameConvert } from '../../../utils/const';

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
export const KPGraphics = ({ rankingData, place, total }: Props) => {
  const [pokedexRep] = useReplicant('Pokedex');
  const getPokemonIcon = (pokemonName: string) =>
    pokedexRep?.find((pokemon) => pokemon.name === pokemonName)?.img1 ?? '';
  const pokemonName = nameConvert(rankingData.combination.pokemons[0]);
  const pokemonIcon = getPokemonIcon(rankingData.combination.pokemons[0]  );
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
