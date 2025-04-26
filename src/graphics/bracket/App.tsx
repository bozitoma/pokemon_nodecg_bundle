import './App.css';
import { TopcutPartyList } from './conponents/TopcutPartyList.graphics';

function App() {
  // 8位までの表示
  // return (
  //   <div className="wrapper">
  //     <TopcutPartyList start={1} end={4} />
  //     <TopcutPartyList start={5} end={8} />
  //     <div className="party_row maxPartyKP">
  //       {highestKPPlayer?.party.map((pokemon) => (
  //         <img className="pokemonIcon" src={getPokemonIcon(pokemon)} alt="" />
  //       ))}
  //       <div className="maxScore">
  //         <div className="score">{highestKPPlayer?.kpScore ?? 0}</div>
  //       </div>
  //     </div>
  //     <div className="totalParty">{totalPartyNum}</div>
  //   </div>
  // );
  // 16位までの表示
  return (
    <div className="wrapper">
      <div className="bracket">
        <div className="bracket-left">
          <TopcutPartyList start={1} end={2} />
          <TopcutPartyList start={3} end={4} />
          <TopcutPartyList start={5} end={6} />
          <TopcutPartyList start={7} end={8} />
        </div>
        <div className="bracket-right">
          <TopcutPartyList start={9} end={10} />
          <TopcutPartyList start={11} end={12} />
          <TopcutPartyList start={13} end={14} />
          <TopcutPartyList start={15} end={16} />
        </div>
      </div>
    </div>
  );
}

export default App;
