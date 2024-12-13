import './App.css';
import { TopcutPartyList } from './conponents/TopcutPartyList.graphics';
import { useReplicant } from '../../hooks/useReplicant';
import { useKP } from '../../hooks/useKP';
import { usePokedex } from '../../hooks/usePokedex';

function App() {
  const [topcutRep] = useReplicant('Topcut');
  const { getHighestKPPlayer } = useKP();
  const { getPokemonIcon } = usePokedex();
  const highestKPPlayer = getHighestKPPlayer();
  const totalPartyNum = topcutRep?.total ?? 0;
  return (
    <div className="wrapper">
      <TopcutPartyList start={1} end={6} />
      <TopcutPartyList start={7} end={12} />
      <TopcutPartyList start={13} end={16} />
      <div className="party_row maxPartyKP">
        {highestKPPlayer?.party.map((pokemon) => (
          <img className="pokemonIcon" src={getPokemonIcon(pokemon)} alt="" />
        ))}
        <div>
          <div className="score">{highestKPPlayer?.kpScore ?? 0}</div>
        </div>
      </div>
      <div className="totalParty">{totalPartyNum}</div>
    </div>
  );
}

export default App;
