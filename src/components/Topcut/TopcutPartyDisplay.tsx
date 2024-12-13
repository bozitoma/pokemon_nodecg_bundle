import { Avatar, Stack } from '@mui/material';
import { useReplicant } from '../../hooks/useReplicant';
import { useMemo } from 'react';
import { emptyParty } from '../../utils/const';
import { usePokedex } from '../../hooks/usePokedex';

export const TopcutPartyDisplay = ({ topcutPlace }: { topcutPlace: number }) => {
  const [topcutRep] = useReplicant('Topcut');
  const { getPokemonIcon } = usePokedex();
  const party = useMemo(
    () => topcutRep?.players?.find((player) => player.place === topcutPlace)?.party ?? emptyParty,
    [topcutRep, topcutPlace]
  );
  return (
    <Stack direction="row" spacing={2}>
      {party.map((pokemonName) => (
        <Avatar
          variant="rounded"
          src={getPokemonIcon(pokemonName)}
          sx={{
            height: 48,
            width: 48,
          }}
        />
      ))}
    </Stack>
  );
};
