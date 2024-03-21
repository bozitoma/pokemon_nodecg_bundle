import { Avatar } from '@mui/material';

import { usePokedex } from '../../hooks/usePokedex';
import { useRecoilValue } from 'recoil';
import { TopcutPlayerNum, PokemonNum } from '../../types/scoreboard';
import { topcutAtom } from '../../store/atomTopcut';

type Props = {
  topcutPlayerNum: TopcutPlayerNum;
  pokemonNum: PokemonNum;
};

export function PokemonAvatarTopcut({ topcutPlayerNum, pokemonNum }: Props) {
  const { getPokemonIcon } = usePokedex();
  const topcut = useRecoilValue(topcutAtom);
  const selectPokemon = topcut[topcutPlayerNum][pokemonNum].name;

  // →型をポケモンの名前に一致しているかどうかに変えたい
  const pokemonIcon: string | undefined = getPokemonIcon(selectPokemon);

  return (
    <Avatar
      variant="rounded"
      src={pokemonIcon}
      sx={{
        height: 45,
        width: 45,
      }}
    />
  );
}
