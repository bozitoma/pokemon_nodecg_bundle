import './App.css';
import { useMemo } from 'react';
import { useReplicant } from '../../hooks/useReplicant';
import { KPRankingList } from './components/KPRankingList.graphics';

function App() {
  const [KPRep] = useReplicant('KP');
  const totalPartyNum = useMemo(() => KPRep?.total ?? 0, [KPRep]);
  return (
    <div className="wrapper">
      <div className="totalParty">{totalPartyNum}</div>
      <div className="wrapper">
        <KPRankingList start={1} end={11} />
        <KPRankingList start={12} end={22} />
        <KPRankingList start={23} end={33} />
      </div>
    </div>
  );
}

export default App;
