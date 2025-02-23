import './App.css';
import { Stack } from '@mui/material';
import { BattleManegements } from './BattleManegements';
import { WrappingTimer } from './WrappingTimer';
import { Infomations } from './Infomations';

export function App() {
  return (
    <>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Infomations />
          <WrappingTimer />
        </Stack>
        <Stack direction="row" spacing={2}>
          <BattleManegements playerSide="Player1" />
          <BattleManegements playerSide="Player2" />
        </Stack>
      </Stack>
    </>
  );
}
