import React from 'react';
import { Box, Divider } from '@mui/material';
import { BattleToggleButton } from './BattleToggleButoon';
import { PokemonSelector } from './PokemonSelector';
import { TerastalUnit } from './TerastalUnit';
import { StatusAilmentSelector } from './StatusAilmentSelector';
import { PlayerNum, PokemonNum } from '../../types/scoreboard';

type Props = {
  player: PlayerNum;
  pokemonNum: PokemonNum;
};

export function BattleManegementSolo({ player, pokemonNum }: Props) {
  return (
    <React.Fragment key={`${player}-${pokemonNum}-BattleManegementSolo`}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PokemonSelector player={player} pokemonNum={pokemonNum} />
        <BattleToggleButton player={player} pokemonNum={pokemonNum} />
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <TerastalUnit player={player} pokemonNum={pokemonNum} />
        <StatusAilmentSelector player={player} pokemonNum={pokemonNum} />
      </Box>
      <Divider sx={{ mx: 0.5, my: 1 }} />
    </React.Fragment>
  );
}
