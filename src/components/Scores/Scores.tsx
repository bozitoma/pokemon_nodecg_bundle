// 参考 https://codesandbox.io/s/material-ui-counter-yo5tx?file=/src/App.js:0-1618
import { Stack, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Score } from './Score';
import { scoreResetAtom } from '../../atoms/scoreAtom';
import { useSetAtom } from 'jotai';

export const Scores = () => {
  const reset = useSetAtom(scoreResetAtom);
  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      <Score playerSide='Player1' />
      <IconButton color="primary" onClick={reset}>
        <RemoveCircleOutlineIcon />
      </IconButton>
      <Score playerSide='Player2' />
    </Stack>
  );
};
