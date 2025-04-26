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
  const [pokemonRep] = useReplicant('Pokedex');
  const [battlePartyRep, setBattlePartyRep] = useReplicant('BattleParty');

  // ポケモンの選択肢をメモ化
  const pokedex = useMemo(() =>
    pokemonRep?.map((pokemon) => pokemon.name).filter(Boolean) ?? []
  , [pokemonRep]);

  // 現在選択されているポケモン名をメモ化
  const pokemonName = useMemo(() => {
    const name = battlePartyRep?.[props.playerSide]?.[props.pokemonNum]?.name;
    return name ?? 'なし';
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
