import { IconButton, Stack } from '@mui/material';
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';
import { Player } from './Player';
import { useSetAtom } from 'jotai';
import { playerNameSwapAtom } from '../../atoms/playerNameAtom';
import { SwissScores } from '../SwissScores';
import { swissSwapAtom } from '../../atoms/swissAtom';

export const Players = () => {
  const playerNameSwap = useSetAtom(playerNameSwapAtom);
  const swissSwap = useSetAtom(swissSwapAtom);
  const onClick = () => {
    playerNameSwap();
    swissSwap();
  };
  return (
    <Stack direction="row" spacing={1}>
      <Stack spacing={1}>
        <Player playerSide="Player1" />
        <SwissScores playerSide="Player1" />
      </Stack>
      <IconButton color="primary" aria-label="playerNameSwap" onClick={onClick} size="small">
        <SwapHorizontalCircleRoundedIcon />
      </IconButton>
      <Stack spacing={1}>
        <Player playerSide="Player2" />
        <SwissScores playerSide="Player2" />
      </Stack>
    </Stack>
  );
};
