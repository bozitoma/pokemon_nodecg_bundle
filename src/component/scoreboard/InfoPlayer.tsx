import { Button, Stack } from '@mui/material';
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';
import { useRecoilState } from 'recoil';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';
import { InfoPlayerUnit } from './InfoPlayerUnit';

export function InfoPlayer() {
  const [scoreboradInfo, setScoreboradInfo] = useRecoilState(scoreboradInfoAtom);

  const playerNameSwap = () => {
    setScoreboradInfo((prev) => ({
      ...prev,
      Player1: {
        ...prev.Player1,
        name: scoreboradInfo.Player2.name,
        swiss: {
          win: scoreboradInfo.Player2.swiss.win,
          lose: scoreboradInfo.Player2.swiss.lose,
          draw: scoreboradInfo.Player2.swiss.draw,
        },
      },
      Player2: {
        ...prev.Player2,
        name: scoreboradInfo.Player1.name,
        swiss: {
          win: scoreboradInfo.Player1.swiss.win,
          lose: scoreboradInfo.Player1.swiss.lose,
          draw: scoreboradInfo.Player1.swiss.draw,
        },
      },
    }));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Stack spacing={1}>
        <InfoPlayerUnit player="Player1" />
      </Stack>
      <Button variant="text" onClick={playerNameSwap}>
        <SwapHorizontalCircleRoundedIcon />
      </Button>
      <Stack spacing={1}>
        <InfoPlayerUnit player="Player2" />
      </Stack>
    </Stack>
  );
}
