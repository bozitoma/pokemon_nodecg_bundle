import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { PokemonAvatar } from './PokemonAvatar';
import { PlayerSide, PokemonNum } from '../../types/scoreboard';
import { useCallback, useMemo } from 'react';
import { useReplicant } from '../../hooks/useReplicant';

type Props = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const PokemonSelector = (props: Props) => {
  const [pokemonRep] = useReplicant('Pokemon');
  const [battlePartyRep, setBattlePartyRep] = useReplicant('BattleParty');
  const pokedex = pokemonRep?.map((pokemon) => pokemon.name) ?? [];
  const pokemonName = useMemo(() => {
    return battlePartyRep?.[props.playerSide]?.[props.pokemonNum]?.name ?? 'なし';
  }, [battlePartyRep, props.playerSide, props.pokemonNum]);
  const handleChangePokemon = useCallback((_event: unknown, newPokemon: string | null) => {
    if (newPokemon != null && battlePartyRep) {
      setBattlePartyRep({
        ...battlePartyRep,
        [props.playerSide]: {
          ...battlePartyRep[props.playerSide],
          [props.pokemonNum]: {
            ...battlePartyRep[props.playerSide][props.pokemonNum],
            name: newPokemon,
          },
        },
      });
    }
  }, [battlePartyRep, props.playerSide, props.pokemonNum]);
  return (
    <>
      <PokemonAvatar playerSide={props.playerSide} pokemonNum={props.pokemonNum} />
      <Autocomplete
        id={`${props.playerSide}-${props.pokemonNum}-PokemonSelector`}
        size="small"
        value={pokemonName}
        onChange={handleChangePokemon}
        options={pokedex}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="ポケモン" variant="standard" />}
      />
    </>
  );
};
