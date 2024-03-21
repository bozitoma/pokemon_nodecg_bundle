import React from 'react';
import { Stack } from '@mui/material';
import { TopcutManegementSolo } from './TopcutManegementSolo';
import { topcutPlayerNumList } from '../../types/scoreboardDefaultValue';
import { TopcutButtons } from './TopcutButtons';
import { useRepList } from '../../hooks/useRepList';
import { useStyled } from '../../hooks/useStyled';

export function TopcutManegementUnit() {
  const { repParty } = useRepList();
  const { WhiteCard } = useStyled();
  // パーティの総数
  const totalPartyNum = repParty ? repParty.length * 6 : 0;
  return (
    <React.Fragment key={'TopcutManegementUnit'}>
      <Stack spacing={2}>
        <Stack spacing={2} direction="row" alignItems="center" justifyContent="space-between">
          <TopcutButtons />
          <WhiteCard>Max Party KP | {totalPartyNum}</WhiteCard>
        </Stack>
        {topcutPlayerNumList.map((player) => (
          <TopcutManegementSolo topcutPlayerNum={player} />
        ))}
      </Stack>
    </React.Fragment>
  );
}
