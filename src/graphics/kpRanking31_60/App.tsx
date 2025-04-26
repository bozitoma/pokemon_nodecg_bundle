import './App.css';
import { useMemo } from 'react';
import { useReplicant } from '../../hooks/useReplicant';
import { KPRankingList } from '../kpRanking/components/KPRankingList.graphics';

function App() {
  const [KPRep] = useReplicant('KP');
  const totalPartyNum = useMemo(() => KPRep?.total ?? 0, [KPRep]);

  return (
    <div className="wrapper">
      <div className="totalParty">{totalPartyNum}</div>
      <div className="wrapper">
        <KPRankingList start={31} end={41} />
        <KPRankingList start={41} end={51} />
        <KPRankingList start={51} end={61} />
      </div>
    </div>
  );
}

export default App;
