import './App.css';
import { useRepList } from '../../hooks/useRepList';

import { GraphicsK2P_KPtop10 } from '../../component/battle/GraphicsK2P_KPtop10';

function App() {
  const { repParty } = useRepList();
  // パーティの総数
  const totalPartyNum = repParty?.length;
  return (
    <div className="wrapper">
      <GraphicsK2P_KPtop10 />
      <div>{totalPartyNum}</div>
    </div>
  );
}

export default App;
