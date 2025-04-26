import './App.css';
import { useMemo } from 'react';
import { useReplicant } from '../../hooks/useReplicant';
import { KPRankingList } from '../kpRanking/components/KPRankingList.graphics';

function App() {
  // const [KPRep] = useReplicant('KP');
  const [playerRep] = useReplicant('Player');
  // 元のコード: 合計パーティ数
  // const totalPartyNum = useMemo(() => KPRep?.total ?? 0, [KPRep]);

  // 一時的に変更: プレイヤー数を表示
  const totalPartyNum = useMemo(() => playerRep?.length ?? 0, [playerRep]);

  return (
    <div className="wrapper">
      <div className="totalParty">{totalPartyNum}</div>
      <div className="wrapper">
        <KPRankingList start={67} end={86} />
      </div>
    </div>
  );
}

export default App;
