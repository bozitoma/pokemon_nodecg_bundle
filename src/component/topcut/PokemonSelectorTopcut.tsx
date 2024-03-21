import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { usePokedex } from '../../hooks/usePokedex';

import { useRecoilState } from 'recoil';
import { TopcutPlayerNum, PokemonNum } from '../../types/scoreboard';
import { topcutAtom } from '../../store/atomTopcut';
import { useTopcut } from '../../hooks/useTopcut';
import { pokemonNumList } from '../../types/scoreboardDefaultValue';

type Props = {
  topcutPlayerNum: TopcutPlayerNum;
  pokemonNum: PokemonNum;
};

export function PokemonSelectorTopcut({ topcutPlayerNum, pokemonNum }: Props) {
  const [topcut, setTopcut] = useRecoilState(topcutAtom);
  const { POKEDEX, getPokemonIcon } = usePokedex();
  const { getKPscore } = useTopcut();

  const handleChangePokemon = (_event: unknown, newPokemon: string | null) => {
    const partyKP = pokemonNumList
      .filter((pokemon) => pokemon !== pokemonNum)
      .reduce((acc, pokemon) => acc + topcut[topcutPlayerNum][pokemon].score, 0);

    setTopcut((prev) => ({
      ...prev,
      [topcutPlayerNum]: {
        ...prev[topcutPlayerNum],
        [pokemonNum]: {
          name: newPokemon,
          icon: getPokemonIcon(newPokemon ? newPokemon : ''),
          score: getKPscore(newPokemon ? newPokemon : ''),
        },
        partyKP: getKPscore(newPokemon ? newPokemon : '') + partyKP,
      },
    }));
  };

  return (
    <Autocomplete
      id={`${topcutPlayerNum}-${pokemonNum}-PokemonSelector`}
      size="small"
      value={topcut[topcutPlayerNum][pokemonNum].name}
      onChange={handleChangePokemon}
      options={POKEDEX}
      sx={{ width: 150 }}
      renderInput={(params) => <TextField {...params} label="ポケモン" variant="standard" />}
    />
  );
}
