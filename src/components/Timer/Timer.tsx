// 参考 https://tsukulog.net/2021/10/03/react-count-down-timer/
import { TimeDisplay } from './TimeDisplay';
import { ChangeEventHandler, useCallback, useEffect, useMemo } from 'react';
import { Stack } from '@mui/material';
import { ItemPickers } from './ItemPickers';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import TimerOffIcon from '@mui/icons-material/TimerOff';
import { useReplicant } from '../../hooks/useReplicant';

export const Timer = () => {
  const start = () => nodecg.sendMessage('timerStart');
  const stop = () => nodecg.sendMessage('timerStop');
  const reset = () => nodecg.sendMessage('timerReset');
  const [repTimer, setRepTimer] = useReplicant('Timer');
  const [repSelectTime, setRepSelectTime] = useReplicant('SelectTime');

  // SelectTimeの初期値をマウント時に更新
  useEffect(() => {
    setRepSelectTime({
      min: 20,
      sec: 0,
    });
  }, []);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      if (!repSelectTime) return;
      setRepSelectTime({
        ...repSelectTime,
        [e.target.name]: Number(e.target.value),
      });

      if (!repTimer) return;
      setRepTimer({
        ...repTimer,
        ...repSelectTime,
        [e.target.name]: Number(e.target.value),
      });
    },
    [repTimer, repSelectTime]
  );
  const isReset = useMemo(
    () => repTimer?.min === repSelectTime?.min && repTimer?.sec === repSelectTime?.sec,
    [repTimer?.min, repTimer?.sec, repSelectTime?.min, repSelectTime?.sec]
  );
  return (
    <>
      <Stack justifyContent="center" spacing={5}>
        <Stack spacing={4}>
          <ItemPickers handleChange={handleChange} />
          <TimeDisplay min={repTimer?.min ?? 0} sec={repTimer?.sec ?? 0} />
        </Stack>
        <Stack justifyContent="center" direction="row" spacing={2}>
          <Button
            className="start-timer-button"
            onClick={start}
            disabled={repTimer?.isRunning ? true : false}
            size="small"
            variant="contained"
            startIcon={<PlayArrowIcon />}
            sx={{ width: 100 }}
          >
            start
          </Button>
          <Button
            className="stop-timer-button"
            onClick={stop}
            disabled={repTimer?.isRunning ? false : true}
            size="small"
            variant="outlined"
            color="error"
            startIcon={<StopIcon />}
            sx={{ width: 100 }}
          >
            stop
          </Button>
          <Button
            className="reset-timer-button"
            onClick={reset}
            disabled={isReset}
            size="small"
            variant="contained"
            color="error"
            startIcon={<TimerOffIcon />}
            sx={{ width: 100 }}
          >
            reset
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
