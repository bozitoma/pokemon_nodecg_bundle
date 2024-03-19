import { Stack } from '@mui/material';
import { InfoTournamentName } from './InfoTournamentName';
import { InfoRound } from './InfoRound';
import { InfoBestof } from './InfoBestof';
import { InfoPlayer } from './InfoPlayer';
import { ScoreCounter } from './ScoreCounter';
import { ScoreboardButtons } from './ScoreboardButtons';
import { useStyled } from '../../hooks/useStyled';
import { TitleDivider } from '../general/TitleDivider';
import { InfoMessage } from './InfoMessage';

export const ScoreboardEditor = () => {
  const { Heading, WhiteCard } = useStyled();

  return (
    <WhiteCard>
      <Stack spacing={2} justifyContent="center">
        <Heading>Scoreboard Editor</Heading>
        <Stack spacing={2} direction="row">
          <Stack spacing={2}>
            <TitleDivider text="Information" />
            <InfoMessage />
            <InfoTournamentName />
            <Stack spacing={2} direction="row">
              <InfoRound />
              <InfoBestof />
            </Stack>
          </Stack>
          <Stack spacing={2}>
            <InfoPlayer />
            <ScoreCounter />
          </Stack>
        </Stack>
        <ScoreboardButtons />
      </Stack>
    </WhiteCard>
  );
};
