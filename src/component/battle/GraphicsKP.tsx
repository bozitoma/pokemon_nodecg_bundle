// import { PlayerNum, PokemonNum } from '../../types/scoreboard';
import { useRepList } from '../../hooks/useRepList';
import { usePokedex } from '../../hooks/usePokedex';
import { KPDefaultValues } from '../../types/replicant';

type Props = {
  listNumber: number;
};

export function GraphicsKP({ listNumber }: Props) {
  const { repKP } = useRepList();
  const { getPokemonIcon } = usePokedex();

  // 三項演算子でundefindを排除
  const KPdata = repKP ? repKP[listNumber] : KPDefaultValues;
  const rank = KPdata.rank;
  const name = KPdata.pokemon;
  const score = KPdata.score;

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
      default:
        return name;
    }
  };

  // ポケモンのアイコンを取り寄せ
  const pokemonIcon = getPokemonIcon(name);

  return (
    <div className="section">
      <div className="rank">{rank}</div>
      <img className="pokemonIcon" src={pokemonIcon} alt="" />
      <div className="name">{nameConvert(name)}</div>
      <div className="score">{score}</div>
    </div>
  );
}
