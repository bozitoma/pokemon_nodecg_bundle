import { Divider, Stack } from '@mui/material';
import { TopcutPartyDisplay } from './TopcutPartyDisplay';
import { useReplicant } from '../../hooks/useReplicant';
import { useEffect, useMemo } from 'react';
import { TopcutPlayerSelector } from './TopcutPlayerSelector';
import { TopcutTotalSelector } from './TopcutTotalSelector';
import { TitleDivider } from '../TitleDivider';
import { Wrapper } from '../Wrapper';
import { TopcutResetButton } from './TopcutResetButton';

export const Topcut = () => {
  const [topcutRep] = useReplicant('Topcut');
  const calcTopcutKPs = () => nodecg.sendMessage('calcTopcutKPs');
  const topcutTotal = useMemo(() => topcutRep?.total ?? 0, [topcutRep]);
  useEffect(() => {
    calcTopcutKPs();
  }, [topcutRep]);
  return (
    <>
      <Wrapper title="Topcut">
        <Stack direction="row" spacing={1} justifyContent='space-around'>
          <Stack direction="row" spacing={1} alignItems="center">
            <TitleDivider title="Topcut Player Number" />
            <TopcutTotalSelector />
          </Stack>
          <TopcutResetButton />
        </Stack>
        <Divider sx={{ mx: 0.5, my: 3 }} />
        <Stack direction="column" spacing={2}>
          {Array.from({ length: topcutTotal }, (_, i) => i + 1).map((place) => (
            <Stack direction="row" spacing={2}>
              <TitleDivider title={`Place ${place}`} />
              <TopcutPlayerSelector topcutPlace={place} />
              <TopcutPartyDisplay topcutPlace={place} />
              <Divider sx={{ mx: 0.5, my: 1 }} />
            </Stack>
          ))}
        </Stack>
      </Wrapper>
    </>
  );
};
