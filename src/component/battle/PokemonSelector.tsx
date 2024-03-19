import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { usePokedex } from '../../hooks/usePokedex';
import { PokemonAvatar } from './PokemonAvatar';

import { useRecoilState } from 'recoil';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';
import { PlayerNum, PokemonNum } from '../../types/scoreboard';

type Props = {
  player: PlayerNum;
  pokemonNum: PokemonNum;
};

export function PokemonSelector({ player, pokemonNum }: Props) {
  const { POKEDEX } = usePokedex();

  const [scoreboard, setScoreborad] = useRecoilState(scoreboradInfoAtom);

  const handleChangePokemon = (_event: unknown, newPokemon: string | null) => {
    setScoreborad((prev) => ({
      ...prev,
      [player]: {
        ...prev[player],
        [pokemonNum]: {
          ...prev[player][pokemonNum],
          name: newPokemon,
        },
      },
    }));
  };

  return (
    <>
      <PokemonAvatar player={player} pokemonNum={pokemonNum} />
      <Autocomplete
        id={`${player}-${pokemonNum}-PokemonSelector`}
        size="small"
        value={scoreboard[player][pokemonNum].name}
        onChange={handleChangePokemon}
        options={POKEDEX}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="ポケモン" variant="standard" />}
      />
    </>
  );
}
