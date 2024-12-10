import { PlayerSide } from '../../types/scoreboard';
import { Stack } from '@mui/material';
import { SwissScore } from './SwissScore';
import { memo } from 'react';

export const SwissScores = memo(({ playerSide }: { playerSide: PlayerSide }) => {
  return (
    <Stack spacing={2} direction="row">
      <SwissScore playerSide={playerSide} swissResult="win" />
      <SwissScore playerSide={playerSide} swissResult="lose" />
      <SwissScore playerSide={playerSide} swissResult="draw" />
    </Stack>
  );
});
