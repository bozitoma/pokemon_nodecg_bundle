import { useKP } from '../../../hooks/useKP';
import { usePokedex } from '../../../hooks/usePokedex';
import { emptyParty } from '../../../utils/const';
// import { useReplicant } from '../../../hooks/useReplicant';

export const TopcutPartyGraphics = ({ place }: { place: number }) => {
  // const [topcutRep] = useReplicant('Topcut');
  const { getPokemonIcon } = usePokedex();
  const { getSortedTopcut } = useKP();
  const sortedTopcut = getSortedTopcut() ?? [{
    playerName: '',
    kpScore: 0,
    party: emptyParty,
  }];
  console.log('sortedTopcut', sortedTopcut);

  const player = sortedTopcut[place - 1];
  return (
    <div className="party_row">
      {player?.party.map((pokemon) => (
        <img className="pokemonIcon" src={getPokemonIcon(pokemon)} alt="" />
      ))}
      <div>
        <div className="score">{player?.kpScore ?? 0}</div>
      </div>
    </div>
  );
};
