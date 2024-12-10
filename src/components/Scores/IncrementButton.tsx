// 参考 https://codesandbox.io/s/material-ui-counter-yo5tx?file=/src/App.js:0-1618
import AddIcon from '@mui/icons-material/Add';
import { memo } from 'react';
import { StyledButton } from './Score.style';
import { useSetAtom } from 'jotai';
import { scoreIncrementAtom } from '../../atoms/scoreAtom';
import { PlayerSide } from '../../types/scoreboard';

type Props = { playerSide: PlayerSide; score: number };

export const IncrementButton = memo((props: Props) => {
  const scoreIncrement = useSetAtom(scoreIncrementAtom(props.playerSide));
  return (
    <StyledButton
      id={`${props.playerSide}-incrementButton`}
      onClick={scoreIncrement}
      disabled={props.score === 3}
    >
      <AddIcon fontSize="small" />
    </StyledButton>
  );
});
