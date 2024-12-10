import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useReplicant } from '../../hooks/useReplicant';
import { useCallback } from 'react';
import { PokemonNum } from '../../types/scoreboard';

type Props = {
  topcutPlace: number;
  pokemonNum: PokemonNum;
};

export const TopcutPokemonSelector = ({ topcutPlace, pokemonNum }: Props) => {
  const [pokedexRep] = useReplicant('Pokedex');
  const [topcutRep, setTopcutRep] = useReplicant('Topcut');
  const pokemonArray = Object.values(topcutRep?.players?.find((player) => player.place === topcutPlace)?.party ?? []);
  const pokemonName = pokemonArray[Number(pokemonNum.split('pokemon')[1]) - 1] ?? 'なし';
  const pokemons = pokedexRep?.map((pokemon) => pokemon.name || '') || [];

  const onChange = useCallback(
    (_event: unknown, newPokemon: string | null) => {
      if (!topcutRep) return;
      const num = Number(pokemonNum.split('pokemon')[1]) - 1;
      const newPokemonArray = [...pokemonArray];
      newPokemonArray[num] = newPokemon ?? 'なし';

      setTopcutRep({
        ...topcutRep,
        players: topcutRep.players?.map((player) =>
          player.place === topcutPlace
            ? {
                ...player,
                party: newPokemonArray,
              }
            : player
        ),
      });
    },
    [topcutRep, pokemonArray]
  );

  return (
    <Autocomplete
      id={`${topcutPlace}-${pokemonNum}-PokemonSelector`}
      size="small"
      value={pokemonName}
      onChange={onChange}
      options={pokemons}
      sx={{ width: 150 }}
      renderInput={(params) => <TextField {...params} label="ポケモン" variant="standard" />}
    />
  );
}
