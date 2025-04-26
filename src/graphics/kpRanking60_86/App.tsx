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
        <KPRankingList start={67} end={86} />
      </div>
    </div>
  );
}

export default App;
