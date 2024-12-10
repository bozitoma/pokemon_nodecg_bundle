import { Stack } from '@mui/material';
import { TerastalButton } from './TerastalButton';
import { PlayerSide, PokemonNum } from '../../types/scoreboard';
import { TerastalTypeSelector } from './TerastalTypeSelector';
import { memo } from 'react';

type Props = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const Terastal = memo((props: Props) => {
  return (
    <Stack spacing={1} direction="row">
      <TerastalButton playerSide={props.playerSide} pokemonNum={props.pokemonNum} />
      <TerastalTypeSelector playerSide={props.playerSide} pokemonNum={props.pokemonNum} />
    </Stack>
  );
});
