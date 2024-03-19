import { Stack } from '@mui/material';
import { InfoPlayerSolo } from './InfoPlayerSolo';
import { PlayerNum } from '../../types/scoreboard';
import { TitleDivider } from '../general/TitleDivider';
import { InfoSwissDrawUnit } from './InfoSwissDrawUnit';

type Props = {
  player: PlayerNum;
};

export function InfoPlayerUnit({ player }: Props) {
  return (
    <Stack spacing={1}>
      <TitleDivider text={player} />
      <InfoPlayerSolo player={player} />
      <InfoSwissDrawUnit player={player} />
    </Stack>
  );
}
