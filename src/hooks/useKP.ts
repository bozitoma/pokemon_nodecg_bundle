// import { useRepList } from '../hooks/useRepList';
// import { KPDefaultValues } from '../types/replicant';
import { PokemonNum } from '../types/scoreboard';
import { pokemonNumList } from '../utils/const';
import { useReplicant } from './useReplicant';

export const useKP = () => {
  const [KPRep] = useReplicant('KP');
  const [partiesRep] = useReplicant('Parties');
  const [topcutRep] = useReplicant('Topcut');

  const getPartyKP = (playerName: string) => {
    if (!partiesRep) return 0;
    const partyInfo = [...partiesRep].find((party) => party.player_name === playerName);
    if (!partyInfo) return 0;
    const party = pokemonNumList.map((key) => partyInfo?.[key as PokemonNum] ?? '');
    return party.reduce((acc, cur) => {
      if (!KPRep) return acc;
      const KP = KPRep.ranking.find((pokemon) => pokemon.combination.pokemons.includes(cur))?.score;
      if (!KP) return acc;
      return acc + KP;
    }, 0);
  };

  const getSortedTopcut = () => {
    if (!topcutRep) return null;
    const playersWithKP = topcutRep.players.map((player) => ({
      playerName: player.name ?? '',
      kpScore: getPartyKP(player.name ?? ''),
      party: player.party,
    }));
    return playersWithKP.sort((a, b) => b.kpScore - a.kpScore);
  };

  const getHighestKPPlayer = () => {
    if (!partiesRep) return null;

    const playersWithKP = [...partiesRep].map((party) => ({
      playerName: party.player_name ?? '',
      kpScore: getPartyKP(party.player_name ?? ''),
      party: pokemonNumList.map((key) => party[key as PokemonNum] ?? ''),
    }));

    return playersWithKP.reduce((highest, current) => {
      return highest.kpScore > current.kpScore ? highest : current;
    }, playersWithKP[0]);
  };
  return { getHighestKPPlayer, getSortedTopcut };
};
