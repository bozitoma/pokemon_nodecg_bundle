import { useState } from 'react';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { usePokedex } from '../hooks/usePokedex';
import type { StatusAilment } from '../types/scoreboard';
import { PokemonAvatar } from './PokemonAvatar';

type Props = {
  className: string;
  terastallize: boolean;
  statusAilment: StatusAilment;
  repPokemonIcon: (newValue: string) => void;
  repBattleStatus: (newValue: string) => void;
  repTerastallized: (newValue: boolean) => void;
  repStatusAilment: (newValue: StatusAilment) => void;
};

export function PokemonSelector({
  className,
  terastallize,
  statusAilment,
  repPokemonIcon,
  repBattleStatus,
  repTerastallized,
  repStatusAilment,
}: Props) {
  const { pokedex, POKEDEX } = usePokedex();
  const [selectPokemon, setSelectPokemon] = useState<string | null>(null);

  return (
    <>
      <PokemonAvatar
        className={className}
        terastallize={terastallize}
        statusAilment={statusAilment}
        repPokemonIcon={repPokemonIcon}
        repBattleStatus={repBattleStatus}
        repTerastallized={repTerastallized}
        repStatusAilment={repStatusAilment}
        pokedex={pokedex}
        selectPokemon={selectPokemon}
      />
      <Autocomplete
        size="small"
        value={selectPokemon}
        onChange={(_event: unknown, newValue: string | null) => {
          setSelectPokemon(newValue);
        }}
        options={POKEDEX}
        sx={{ width: 250 }}
        renderInput={(params) => <TextField {...params} label="ポケモン" variant="standard" />}
      />
    </>
  );
}
