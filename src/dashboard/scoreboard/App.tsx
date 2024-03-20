import './App.css';
import { Stack } from '@mui/material';
import { RecoilRoot } from 'recoil';
import { PartyImport } from '../../component/battle/PartyImport';
import { BattleManegementUnit } from '../../component/battle/BattleManegementUnit';
import { ScoreboardEditor } from '../../component/scoreboard/ScoreboardEditor';
import { useStyled } from '../../hooks/useStyled';
import { CountDownTimer } from '../../component/CountDownTimer/CountDownTimer';

export function App() {
  const { Heading, WhiteCard } = useStyled();
  return (
    <>
      <RecoilRoot>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <ScoreboardEditor />
            <Stack spacing={2}>
              <WhiteCard>
                <Heading>Timer</Heading>
                <CountDownTimer />
              </WhiteCard>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <WhiteCard>
              <Heading>Player 1</Heading>
              <PartyImport player="Player1" />
              <BattleManegementUnit player="Player1" />
            </WhiteCard>
            <WhiteCard>
              <Heading>Player 2</Heading>
              <PartyImport player="Player2" />
              <BattleManegementUnit player="Player2" />
            </WhiteCard>
          </Stack>
        </Stack>
      </RecoilRoot>
    </>
  );
}
