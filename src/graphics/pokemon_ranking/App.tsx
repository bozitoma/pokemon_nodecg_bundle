import './App.css';
import { useReplicant } from '../../hooks/useReplicant';
import { usePokedex } from '../../hooks/usePokedex';
import { TerastalType } from '../../types/scoreboard';
import { TerastalType_JP } from '../../types/scoreboard';
import { useMemo } from 'react';
import { nameConvert } from '../../utils/const';

const typeConvert: { [key in TerastalType_JP]: TerastalType } = {
  ノーマル: 'normal',
  ほのお: 'fire',
  みず: 'water',
  くさ: 'grass',
  でんき: 'electric',
  こおり: 'ice',
  かくとう: 'fighting',
  どく: 'poison',
  じめん: 'ground',
  ひこう: 'flying',
  エスパー: 'psychic',
  むし: 'bug',
  いわ: 'rock',
  ゴースト: 'ghost',
  ドラゴン: 'dragon',
  あく: 'dark',
  はがね: 'steel',
  フェアリー: 'fairy',
  ステラ: 'stellar',
};

const getTypeIcon = (type: string) => {
  const typeJP = typeConvert[type as TerastalType_JP];
  return new URL(`../../assets/type_icon/icon_type_${typeJP}.png`, import.meta.url).href;
};

const getRankColor = (rank: number): string => {
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

function App() {
  const [pokemonDataRep] = useReplicant('PokemonData');
  const [KPRep] = useReplicant('KP');
  const [Topcut_KPRep] = useReplicant('Topcut_KP');

  const [topcutRep] = useReplicant('Topcut');
  const { getPokemonIcon, getPokemonInfo } = usePokedex();

  const total = useMemo(() => KPRep?.total ?? 0, [KPRep]);
  const topcutTotal = topcutRep?.total ?? 0;

  console.log('pokemonDataRep?.name', pokemonDataRep?.name);
  
  const pokemonData = (() => {
    if (pokemonDataRep?.name === 'テラパゴス（ノーマルフォルム）') {
      return getPokemonInfo('テラパゴス（テラスタルフォルム）');
    }
    return getPokemonInfo(pokemonDataRep?.name ?? '');
  })();
  const pokemonIcon = getPokemonIcon(pokemonDataRep?.name ?? '');
  const KP = KPRep?.ranking.find((kp) => kp.combination.pokemons.includes(pokemonDataRep?.name ?? ''));
  const Topcut_KP = Topcut_KPRep?.ranking.find(
    (kp) => kp.combination.pokemons.includes(pokemonDataRep?.name ?? '')
  );


  console.log('Topcut_KP', Topcut_KP);
  console.log('KP', KP);
  console.log('pokemonDataRep', pokemonDataRep);
  console.log('KPRep', KPRep);
  console.log('Topcut_KPRep', Topcut_KPRep);

  // デバッグ用に中間値を確認
  const topcutScore = Topcut_KP?.score ?? 0;
  const totalScore = KP?.score ?? 1
  const KPPercentage = (KP?.percentage ?? 0);


  const KPRate = topcutScore / totalScore; // ポケモン毎の予選抜けKP/ポケモン毎のKP
  const playerRate = topcutTotal / total; // 予選抜け人数/参加人数  
  const topcutRate = KPRate / playerRate; // (ポケモン毎の予選抜けKP/ポケモン毎のKP) / (予選抜け人数/参加人数)
  const metaImpactScore = topcutRate * KPPercentage; // ポケモン毎の予選抜けKP/ポケモン毎のKP
  
  console.log(
    {
      'ポケモン': pokemonDataRep?.name,
      'ポケモン毎の予選抜けKP': topcutScore,
      'ポケモン毎のKP': totalScore,
      '予選通過者数': topcutTotal,
      '参加者数': total,
      '予選抜けKP/ポケモン毎のKP': KPRate,
      '予選通過者数/参加者数': playerRate,
      '環境影響度スコア': metaImpactScore,
      '採用率': KPPercentage,
      '(予選抜けKP/ポケモン毎のKP)/(予選通過者数/参加者数)': topcutRate,
    }
  );
  

  console.log({
    pokemonName: pokemonDataRep?.name,
    topcutScore,
    totalScore,
    KPRate,
    topcutTotal,
    total,
    playerRate,
    topcutRate
  }); 

  // 各ランキングの計算ロジックを修正
  const calculateRanking = <T extends { name: string; total: number }>(items: T[]) => {
    if (items.length === 0) return [];
    
    // 降順にソート
    const sorted = [...items].sort((a, b) => b.total - a.total);
    let currentRank = 1;
    let previousTotal = sorted[0].total;
    
    return sorted.map((item, index) => {
      // 前の要素と値が異なる場合のみ、順位を更新
      if (item.total < previousTotal) {
        currentRank = index + 1;
        previousTotal = item.total;
      }
      return { ...item, rank: currentRank };
    });
  };

  // 各ランキングの計算を修正
  const teraTypes = useMemo(() => {
    return calculateRanking(
      Object.entries(pokemonDataRep?.teraType ?? {})
        .map(([name, total]) => ({ name, total }))
    );
  }, [pokemonDataRep]);

  const abilitys = useMemo(() => {
    return calculateRanking(
      Object.entries(pokemonDataRep?.ability ?? {})
        .map(([name, total]) => ({ name, total }))
    );
  }, [pokemonDataRep]);

  const items = useMemo(() => {
    return calculateRanking(
      Object.entries(pokemonDataRep?.item ?? {})
        .map(([name, total]) => ({ name, total }))
    );
  }, [pokemonDataRep]);

  const moves = useMemo(() => {
    return calculateRanking(
      Object.entries(pokemonDataRep?.moves ?? {})
        .map(([name, total]) => ({ name, total }))
    );
  }, [pokemonDataRep]);

  // ポケモンごとの合計数を計算
  const pokemonTotal = useMemo(() => {
    // 技の合計を使用（1匹につき技は必ず4つあるため、4で割る）
    const moveTotal = Object.values(pokemonDataRep?.moves ?? {}).reduce((sum, count) => sum + count, 0) / 4;
    return moveTotal;
  }, [pokemonDataRep]);

  return (
    <div className="wrapper">
      <div className="pokemonName">
        <div>{nameConvert(pokemonDataRep?.name ?? '')}</div>
      </div>
      <div className="pokemonIcon">
        <img src={pokemonIcon} alt="" />
      </div>
      <div className="pokemonTotal">
        <div className="pokemonTotalPlace">{KP?.place ?? ''}位</div>
        <div className="pokemonTotalRate">
          {KPPercentage.toFixed(2) + '%'}
        </div>
      </div>
      <div className="topcutRate">
        <div>{topcutRate.toFixed(1)}</div>
      </div>
      <div className="metaImpactScore">
        <div>{metaImpactScore.toFixed(1)}</div>
      </div>
      <div className="type">
        {pokemonData?.type?.map((type) =>
          type ? (
            <div className="typeWrapper">
              <img src={getTypeIcon(type as TerastalType_JP)} alt="" />
              <div>{type}</div>
            </div>
          ) : null
        )}
      </div>
      <div className="ability">
        {pokemonData?.ability?.map((ability) => (
          <div>{ability}</div>
        ))}
      </div>
      <div className="baseStats">
        <div>{pokemonData.BaseStats?.[0] ?? ''}</div>
        <div>{pokemonData.BaseStats?.[3] ?? ''}</div>
        <div>{pokemonData.BaseStats?.[1] ?? ''}</div>
        <div>{pokemonData.BaseStats?.[4] ?? ''}</div>
        <div>{pokemonData.BaseStats?.[2] ?? ''}</div>
        <div>{pokemonData.BaseStats?.[5] ?? ''}</div>
      </div>

      <div className="abilityRanking">
        {abilitys.map((ability) => (
          <div className="ranking" key={ability.name}>
            <div 
              className="rankSquare"
              style={{ background: getRankColor(ability.rank) }}
            >
              {ability.rank}
            </div>
            <div>{ability.name}</div>
            <div>{((ability.total * 100) / pokemonTotal).toFixed(1)}%</div>
          </div>
        ))}
      </div>

      <div className="itemRanking">
        {items.slice(0, 3).map((item) => (
          <div className="ranking" key={item.name}>
            <div 
              className="rankSquare"
              style={{ background: getRankColor(item.rank) }}
            >
              {item.rank}
            </div>
            <div>{item.name}</div>
            <div>{((item.total * 100) / pokemonTotal).toFixed(1)}%</div>
          </div>
        ))}
      </div>

      <div className="teraTypeRanking">
        {teraTypes.slice(0, 3).map((teraType) => (
          <div className="ranking" key={teraType.name}>
            <div 
              className="rankSquare"
              style={{ background: getRankColor(teraType.rank) }}
            >
              {teraType.rank}
            </div>
            <div>{teraType.name}</div>
            <div>{((teraType.total * 100) / pokemonTotal).toFixed(1)}%</div>
          </div>
        ))}
      </div>

      <div className="moveRanking">
        {moves.slice(0, 12).map((move) => (
          <div className="mod-moveRanking" key={move.name}>
            <div 
              className="rankSquare"
              style={{ background: getRankColor(move.rank) }}
            >
              {move.rank}
            </div>
            <div>{move.name}</div>
            <div>{((move.total * 100) / pokemonTotal).toFixed(1)}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
