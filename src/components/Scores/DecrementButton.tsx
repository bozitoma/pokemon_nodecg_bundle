// 参考 https://codesandbox.io/s/material-ui-counter-yo5tx?file=/src/App.js:0-1618
import RemoveIcon from '@mui/icons-material/Remove';
import { memo } from 'react';
import { StyledButton } from './Score.style';
import { useSetAtom } from 'jotai';
import { scoreDecrementAtom } from '../../atoms/scoreAtom';
import { PlayerSide } from '../../types/scoreboard';

type Props = { playerSide: PlayerSide; score: number };

export const DecrementButton = memo((props: Props) => {
  const scoreDecrement = useSetAtom(scoreDecrementAtom(props.playerSide));
  return (
    <StyledButton
      id={`${props.playerSide}-decrementButton`}
      onClick={scoreDecrement}
      disabled={props.score === 0}
    >
      <RemoveIcon fontSize="small" />
    </StyledButton>
  );
});
