import { memo } from 'react';
import { Wrapper } from '../../../components/Wrapper';
import { Round } from '../../../components/Round';
import { Bestof } from '../../../components/Bestof';
import { Stack } from '@mui/material';
import { TitleDivider } from '../../../components/TitleDivider';
import { Players } from '../../../components/Players';
import { Scores } from '../../../components/Scores';
import { ScoreboardButtons } from '../../../components/ScoreboardButtons';

export const Infomations = memo(() => {
  return (
    <>
      <Wrapper title={'Infomations'}>
        <Stack spacing={2} justifyContent="center">
            <Stack spacing={2}>
              <TitleDivider title="Information" />
              <Stack spacing={2} direction="row">
                <Round />
                <Bestof />
              </Stack>
            <Stack spacing={2}>
              <Players />
              <Scores />
            </Stack>
          </Stack>
          <ScoreboardButtons />
        </Stack>
      </Wrapper>
    </>
  );
});
