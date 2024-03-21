import './App.css';
import { useRepList } from '../../hooks/useRepList';
import { GraphicsTopcutPartySolo } from '../../component/topcut/GraphicsTopcutPartySolo';

function App() {
  const { repParty } = useRepList();
  // パーティの総数
  const totalPartyNum = repParty?.length;
  const maxPartyKP = totalPartyNum ? totalPartyNum * 6 : 0;
  return (
    <div className="wrapper">
      <div className="list">
        <GraphicsTopcutPartySolo topcutPlayerNum="Player1" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player2" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player3" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player4" />
      </div>
      <div className="list">
        <GraphicsTopcutPartySolo topcutPlayerNum="Player5" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player6" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player7" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player8" />
      </div>
      <div className="totalParty">{totalPartyNum}</div>
      <div className="maxPartyKP">{maxPartyKP}</div>
    </div>
  );
}

export default App;
