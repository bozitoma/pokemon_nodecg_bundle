import './App.css';
import { useReplicant } from '../../hooks/useReplicant';
import { usePokedex } from '../../hooks/usePokedex';
import { TerastalType } from '../../types/scoreboard';
import { TerastalType_JP } from '../../types/scoreboard';
import { useMemo } from 'react';

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

function App() {
  const [pokemonDataRep] = useReplicant('PokemonData');
  const [KPRep] = useReplicant('KP');
  const [Topcut_KPRep] = useReplicant('Topcut_KP');

  const [topcutRep] = useReplicant('Topcut');
  const { getPokemonIcon, getPokemonInfo } = usePokedex();
  const total = pokemonDataRep?.total ?? 0;
  const topcutTotal = topcutRep?.total ?? 0;

  const pokemonData = getPokemonInfo(pokemonDataRep?.name ?? '');
  const pokemonIcon = getPokemonIcon(pokemonDataRep?.name ?? '');
  const KP = KPRep?.ranking.find((kp) => kp.combination === pokemonDataRep?.name ?? '');
  const Topcut_KP = Topcut_KPRep?.ranking.find(
    (kp) => kp.combination === pokemonDataRep?.name ?? ''
  );

  const KPRate = Topcut_KP?.score ?? 0 / (KP?.score ?? 1); // ポケモン毎の予選抜けKP/ポケモン毎のKP
  const playerRate = topcutTotal / total; // 予選抜け人数/参加人数
  const topcutRate = KPRate / playerRate; // (ポケモン毎の予選抜けKP/ポケモン毎のKP) / (予選抜け人数/参加人数)

  const teraTypes = useMemo(() => {
    const sorted = Object.entries(pokemonDataRep?.teraType ?? {})
      .map(([name, total]) => ({ name, total }))
      .sort((a, b) => b.total - a.total);

    let currentRank = 1;
    let previousTotal = sorted[0]?.total;

    return sorted.map((item) => {
      if (previousTotal !== item.total) {
        currentRank = sorted.findIndex((i) => i.total === item.total) + 1;
        previousTotal = item.total;
      }
      return { ...item, rank: currentRank };
    });
  }, [pokemonDataRep]);
  const abilitys = useMemo(() => {
    const sorted = Object.entries(pokemonDataRep?.ability ?? {})
      .map(([name, total]) => ({ name, total }))
      .sort((a, b) => b.total - a.total);

    let currentRank = 1;
    let previousTotal = sorted[0]?.total;

    return sorted.map((item) => {
      if (previousTotal !== item.total) {
        currentRank = sorted.findIndex((i) => i.total === item.total) + 1;
        previousTotal = item.total;
      }
      return { ...item, rank: currentRank };
    });
  }, [pokemonDataRep]);
  const items = useMemo(() => {
    const sortedItems = Object.entries(pokemonDataRep?.item ?? {})
      .map(([name, total]) => ({ name, total }))
      .sort((a, b) => b.total - a.total);

    let currentRank = 1;
    let previousTotal = sortedItems[0]?.total;

    return sortedItems.map((item) => {
      if (previousTotal !== item.total) {
        currentRank = sortedItems.findIndex((i) => i.total === item.total) + 1;
        previousTotal = item.total;
      }
      return { ...item, rank: currentRank };
    });
  }, [pokemonDataRep]);
  const moves = useMemo(() => {
    const sortedMoves = Object.entries(pokemonDataRep?.moves ?? {})
      .map(([name, total]) => ({ name, total }))
      .sort((a, b) => b.total - a.total);

    let currentRank = 1;
    let previousTotal = sortedMoves[0]?.total;

    return sortedMoves.map((move) => {
      if (previousTotal !== move.total) {
        currentRank = sortedMoves.findIndex((m) => m.total === move.total) + 1;
        previousTotal = move.total;
      }
      return { ...move, rank: currentRank };
    });
  }, [pokemonDataRep]);
  return (
    <div className="wrapper">
      <div className="pokemonName">
        <div>{pokemonDataRep?.name ?? ''}</div>
      </div>
      <div className="pokemonIcon">
        <img src={pokemonIcon} alt="" />
      </div>
      <div className="pokemonTotal">
        <div className="pokemonTotalPlace">{KP?.place ?? ''}位</div>
        <div className="pokemonTotalRate">{KP?.rate ?? ''}</div>
      </div>
      <div className="topcutRate">
        <div className="topcutRateRate">{topcutRate.toFixed(1)}</div>
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
          <div className="ranking">
            <div>{ability.name}</div>
            <div>{((ability.total * 100) / total).toFixed(1)}%</div>
          </div>
        ))}
      </div>

      <div className="itemRanking">
        {items.map((item, index) =>
          index < 3 ? (
            <div className="ranking">
              <div>{item.name}</div>
              <div>{((item.total * 100) / total).toFixed(1)}%</div>
            </div>
          ) : null
        )}
      </div>

      <div className="teraTypeRanking">
        {teraTypes.map((teraType, index) =>
          index < 3 ? (
            <div className="ranking">
              <div>{teraType.name}</div>
              <div>{((teraType.total * 100) / total).toFixed(1)}%</div>
            </div>
          ) : null
        )}
      </div>

      <div className="moveRanking">
        {moves.map((move, index) =>
          index < 10 ? (
            <div className="mod-moveRanking">
              <div>{move.name}</div>
              <div>{((move.total * 100) / total).toFixed(1)}%</div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;
