import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useReplicant } from '../../hooks/useReplicant';
import { useCallback, useMemo } from 'react';
import { PokemonNum } from '../../types/scoreboard';
import { pokemonNumList } from '../../utils/const';

const emptyParty = ['なし', 'なし', 'なし', 'なし', 'なし', 'なし'];

export const TopcutPlayerSelector = ({ topcutPlace }: { topcutPlace: number }) => {
  const [playerRep] = useReplicant('Player');
  const [partiesRep] = useReplicant('Parties');
  const [topcutRep, setTopcutRep] = useReplicant('Topcut');
  const playerName = useMemo(
    () => topcutRep?.players?.find((player) => player.place === topcutPlace)?.name ?? 'なし',
    [topcutRep, topcutPlace]
  );
  const players = useMemo(
    () => playerRep?.map((player) => player.player_name || '') || [],
    [playerRep]
  );
  const party = useCallback(
    (playerName: string) => {
      console.log('partiesRep', partiesRep);

      if (!partiesRep) return emptyParty;
      const partyInfo = [...partiesRep].find((party) => party.player_name === playerName);
      const result = pokemonNumList.map((key) => partyInfo?.[key as PokemonNum] ?? 'なし');
      return result;
    },
    [partiesRep]
  );
  const onChange = useCallback(
    (_event: unknown, newPlayer: string | null) => {
      if (!topcutRep) return;
      console.log(newPlayer);
      setTopcutRep({
        ...topcutRep,
        players: topcutRep.players?.map((player) =>
          player.place === topcutPlace
            ? {
                ...player,
                name: newPlayer ?? 'なし',
                party: party(newPlayer ?? 'なし'),
              }
            : player
        ),
      });
    },
    [topcutRep]
  );
  return (
    <Autocomplete
      id={`Topcut-PlayerSelector-${topcutPlace}`}
      size="small"
      value={playerName}
      onChange={onChange}
      options={players}
      sx={{ width: 150 }}
      renderInput={(params) => <TextField {...params} label="ポケモン" variant="standard" />}
    />
  );
};
