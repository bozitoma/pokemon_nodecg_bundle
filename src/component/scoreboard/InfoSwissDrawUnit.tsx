import { PlayerNum } from '../../types/scoreboard';
import { Stack } from '@mui/material';
import { InfoSwissDrawSolo } from './InfoSwissDrawSolo';

type Props = {
  player: PlayerNum;
};

export function InfoSwissDrawUnit({ player }: Props) {
  return (
    <Stack spacing={2} direction="row">
      <InfoSwissDrawSolo player={player} swissResult="win" />
      <InfoSwissDrawSolo player={player} swissResult="lose" />
      <InfoSwissDrawSolo player={player} swissResult="draw" />
    </Stack>
  );
}
