import { ButtonGroup } from '@mui/material';
import { PlayerSide } from '../../types/scoreboard';
import { DecrementButton } from './DecrementButton';
import { IncrementButton } from './IncrementButton';
import { StyledInput } from './Score.style';
import { useAtomValue } from 'jotai';
import { scoreAtomFamily } from '../../atoms/scoreAtom';
import { memo } from 'react';

export const Score = memo(({ playerSide }: { playerSide: PlayerSide }) => {
  const score = useAtomValue(scoreAtomFamily(playerSide));
  return (
    <ButtonGroup>
      {playerSide === 'Player1' ? (
        <>
          <StyledInput size="small" value={score} />
          <DecrementButton playerSide={playerSide} score={score} />
          <IncrementButton playerSide={playerSide} score={score} />
        </>
      ) : (
        <>
          <IncrementButton playerSide={playerSide} score={score} />
          <DecrementButton playerSide={playerSide} score={score} />
          <StyledInput size="small" value={score} />
        </>
      )}
    </ButtonGroup>
  );
});
