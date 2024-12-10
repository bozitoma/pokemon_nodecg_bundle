import React from 'react';
import { Box, Divider } from '@mui/material';
import { BattleToggleButton } from '../BattleToggleButton';
import { PokemonSelector } from '../PokemonSelector';
import { StatusAilmentSelector } from '../StatusAilmentSelector';
import { PlayerSide, PokemonNum } from '../../types/scoreboard';
import { Terastal } from '../Terastal';

type Props = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const BattleManegement = (props: Props) => {
  return (
    <React.Fragment key={`${props.playerSide}-${props.pokemonNum}-BattleManegement`}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PokemonSelector playerSide={props.playerSide} pokemonNum={props.pokemonNum} />
        <BattleToggleButton playerSide={props.playerSide} pokemonNum={props.pokemonNum} />
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <Terastal playerSide={props.playerSide} pokemonNum={props.pokemonNum} />
        <StatusAilmentSelector playerSide={props.playerSide} pokemonNum={props.pokemonNum} />
      </Box>
      <Divider sx={{ mx: 0.5, my: 1 }} />
    </React.Fragment>
  );
};
