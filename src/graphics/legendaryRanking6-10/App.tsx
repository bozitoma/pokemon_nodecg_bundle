import './App.css';
import { usePokedex } from '../../hooks/usePokedex';
import { useReplicant } from '../../hooks/useReplicant';
import { nameConvert } from '../../utils/const';
// import { useMemo } from 'react';

export function GraphicsLegendary({ num }: { num: number }) {
  const [legendaryRankingRep] = useReplicant('LegendaryRanking');
  const { getPokemonIcon } = usePokedex();

  // データが未定義の場合のフォールバック
  if (!legendaryRankingRep) {
    return null;
  }

  const legendary = legendaryRankingRep.legendaryRanking[num];

  // legendaryが存在しない場合は何も表示しない
  if (!legendary) {
    return null;
  }

  // デバッグ用のログ
  console.log('Debug:', {
    num,
    legendary,
    allRankings: legendaryRankingRep.legendaryRanking,
    percentage: legendary?.percentage
  });

  // 順位計算を単純化
  const calculateRank = (current: number, list: { percentage: number }[]): number => {
    let rank = 1;
    for (const item of list) {
      if (item.percentage > current) {
        rank++;
      }
    }
    return rank;
  };

  const rank = (() => {
    if (!legendary || !legendary.percentage) return '';
    return calculateRank(legendary.percentage, legendaryRankingRep.legendaryRanking);
  })();

  // 伝説ポケモンの名前で組み合わせを検索
  const combinations = legendaryRankingRep.combinationRanking.find(
    cr => cr.legendary === legendary?.pokemon
  )?.combinations || [];

  // 順位に応じた背景色を取得
  const getRankColor = (rank: number | string): string => {
    switch (rank) {
      case 1:
        return '#FBD100'; // 金
      case 2:
        return '#C1C1C1'; // 銀
      case 3:
        return '#CB9501'; // 銅
      default:
        return '#373737'; // その他
    }
  };

  return (
    <div className="section">
      <div className="legend">
        <div 
          className="legendRank" 
          style={{ 
            background: getRankColor(rank),
          }}
        >
          {rank}
        </div>
        <img 
          className="legendIcon" 
          src={getPokemonIcon(legendary?.pokemon || '')} 
          alt="" 
        />
        <div className="legendName">
          {nameConvert(legendary?.pokemon || '')}
          <div className="legendPercentage">
            <div className="legendLabel">採用率</div>
            <div className="legendScore">{legendary?.percentage.toFixed(1)}</div>
            <div className="legendPercent">%</div>
          </div>
        </div>
      </div>

      <div className="list">
        {combinations.slice(0, 10).map((combo) => {
          const comboRank = calculateRank(combo.percentage, combinations);
          return (
            <div className="pear" key={combo.pokemon}>
              <div 
                className="comboRank" 
                style={{ 
                  background: getRankColor(comboRank)
                }}
              >
                <span>{comboRank}</span>
              </div>
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
          );
        })}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="wrapper">
      <GraphicsLegendary num={5} />
      <GraphicsLegendary num={6} />
      <GraphicsLegendary num={7} />
      <GraphicsLegendary num={8} />
      <GraphicsLegendary num={9} />
    </div>
  );
}

export default App;