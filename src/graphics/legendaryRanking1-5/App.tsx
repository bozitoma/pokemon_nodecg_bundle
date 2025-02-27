import './App.css';
import { usePokedex } from '../../hooks/usePokedex';
import { useReplicant } from '../../hooks/useReplicant';
import { nameConvert } from '../../utils/const';

export function GraphicsLegendary({ num }: { num: number }) {
  const [legendaryRankingRep] = useReplicant('LegendaryRanking');
  const { getPokemonIcon } = usePokedex();

  // データが未定義の場合のフォールバック
  if (!legendaryRankingRep) {
    return <div>Loading...</div>;
  }

  const legendary = legendaryRankingRep.legendaryRanking[num];
  // 伝説ポケモンの名前で組み合わせを検索
  const combinations = legendaryRankingRep.combinationRanking.find(
    cr => cr.legendary === legendary?.pokemon
  )?.combinations || [];

  return (
    <div className="section">
      <div className="legend">
        <img 
          className="legendIcon" 
          src={getPokemonIcon(legendary?.pokemon || '')} 
          alt="" 
        />
        <div className="legendName">
          {nameConvert(legendary?.pokemon || '')}
          <span className="legendPercent">
            {legendary?.percentage.toFixed(1)}%
          </span>
        </div>
      </div>

      <div className="list">
        {combinations.slice(0, 10).map((combo, i) => (
          <div className="pear" key={i}>
            <img
              className="pokemonIcon"
              src={getPokemonIcon(combo.pokemon)}
              alt=""
            />
            <div className="scoreArea">
              <div className="score">{combo.percentage.toFixed(1)}</div>
              <div className="percent">%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="wrapper">
      <GraphicsLegendary num={0} />
      <GraphicsLegendary num={1} />
      <GraphicsLegendary num={2} />
      <GraphicsLegendary num={3} />
      <GraphicsLegendary num={4} />
    </div>
  );
}

export default App;