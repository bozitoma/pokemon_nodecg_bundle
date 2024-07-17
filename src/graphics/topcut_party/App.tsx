import './App.css';
// import { useRepList } from '../../hooks/useRepList';
import { GraphicsTopcutPartySolo } from '../../component/topcut/GraphicsTopcutPartySolo';
// import { TopcutPlayerNum } from '../../types/scoreboard';

function App() {
  // const { repParty } = useRepList();
  // パーティの総数
  // const totalPartyNum = repParty?.length;
  // const maxPartyKP = totalPartyNum ? totalPartyNum * 6 : 0;
  return (
    <div className="wrapper">
      <div className="list">
        <GraphicsTopcutPartySolo topcutPlayerNum="Player1" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player2" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player3" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player4" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player5" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player6" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player7" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player8" />
      </div>
      <div className="list">
        <GraphicsTopcutPartySolo topcutPlayerNum="Player9" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player10" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player11" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player12" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player13" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player14" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player15" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player16" />
      </div>
      <div className="list">
        <GraphicsTopcutPartySolo topcutPlayerNum="Player17" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player18" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player19" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player20" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player21" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player22" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player23" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player24" />
      </div>
      <div className="list">
        <GraphicsTopcutPartySolo topcutPlayerNum="Player25" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player26" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player27" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player28" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player29" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player30" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player31" />
        <GraphicsTopcutPartySolo topcutPlayerNum="Player32" />
      </div>
      {/* <div className="totalParty">{totalPartyNum}</div>
      <div className="maxPartyKP">{maxPartyKP}</div> */}
    </div>
  );
}

export default App;
