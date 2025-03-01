import './App.css';
import { TopcutPartyList } from './conponents/TopcutPartyList.graphics';
import { useReplicant } from '../../hooks/useReplicant';
import { useKP } from '../../hooks/useKP';
import { usePokedex } from '../../hooks/usePokedex';

function App() {
  const { getHighestKPPlayer } = useKP();
  const { getPokemonIcon } = usePokedex();
  const highestKPPlayer = getHighestKPPlayer();
  const [partiesRep] = useReplicant('Parties');
  const totalPartyNum = partiesRep?.length ?? 0;
  return (
    <div className="wrapper">
      <TopcutPartyList start={1} end={4} />
      <TopcutPartyList start={5} end={8} />
      <div className="party_row maxPartyKP">
        {highestKPPlayer?.party.map((pokemon) => (
          <img className="pokemonIcon" src={getPokemonIcon(pokemon)} alt="" />
        ))}
        <div className="maxScore">
          <div className="score">{highestKPPlayer?.kpScore ?? 0}</div>
        </div>
      </div>
      <div className="totalParty">{totalPartyNum}</div>
    </div>
  );
}

export default App;
