// 参考 https://tsukulog.net/2021/10/03/react-count-down-timer/
import { TimeDisplay } from './TimeDisplay';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SelectChangeEvent, Stack } from '@mui/material';
import { ItemPickers } from './ItemPickers';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import TimerOffIcon from '@mui/icons-material/TimerOff';
import { useRepList } from '../../hooks/useRepList';

const TIMES = {
  // hour: [...Array(60)].map((u, i) => i),
  min: [...Array(60)].map((u, i) => i),
  sec: [...Array(60)].map((u, i) => i),
};

export const CountDownTimer = () => {
  // 値をゼロ埋めする関数
  const zeroPaddingNum = useCallback((num) => {
    return String(num).padStart(2, '0');
  }, []);

  const [selectItems, setSelectItems] = useState(() => {
    const newItems = {};

    Object.keys(TIMES).forEach((name, i) => {
      {
        name === 'min' ? (newItems[name] = TIMES[name][20]) : (newItems[name] = TIMES[name][0]);
      }
    });

    return newItems;
  });

  const handleChange = useCallback((e: SelectChangeEvent) => {
    setSelectItems((p) => ({
      ...p,
      [e.target.name]: Number(e.target.value),
    }));
  }, []);

  // タイムリミットを保存するステート
  const [timeLimit, setTimeLimit] = useState(selectItems);

  // カウントダウンタイマーがスタートしているかどうか
  const [isStart, setIsStart] = useState(false);

  // カウントダウンがストップしていればtrue
  const [isStop, setIsStop] = useState(false);

  // タイムアップしていればtrue
  const [isTimeUp, setIsTimeUp] = useState(false);

  // カウントダウンがリセットされたらtrue
  const [isReset, setIsReset] = useState(false);

  // setIntervalメソッドが返す一意に識別するIDを保存するRef
  const intervalID = useRef(null);

  // カウントダウンを一時停止する関数
  const stopTime = useCallback(() => {
    clearInterval(intervalID.current);

    setIsStop(false);
    setIsStart(false);
  }, []);

  const { setRepTimer } = useRepList();

  // 時を刻む関数
  const tick = useCallback(() => {
    setTimeLimit((prevTimeLimit) => {
      const newTimeLimit = Object.assign({}, prevTimeLimit);
      const {
        // hour,
        min,
        sec,
      } = newTimeLimit;

      // // 「時」が1時間以上あるときに「分」と「秒」が0以下になったら、「時」を1つ減らして、「分」を60に戻す
      // if (newTimeLimit.hour > 0 && min <= 0 && sec <= 0) {
      //   newTimeLimit.hour -= 1;
      //   newTimeLimit.min = 60;
      // }

      // 「分」が1分以上あるときに「秒」が0以下になったら、「分」を1つ減らして、「秒」を60に戻す
      if (newTimeLimit.min > 0 && newTimeLimit.sec <= 0) {
        newTimeLimit.min -= 1;
        newTimeLimit.sec = 60;
      }

      // カウントダウン中に00:00:00になったらタイムアップ
      if (
        // hour <= 0 &&
        min <= 0 &&
        sec <= 0
      ) {
        stopTime();
        setIsTimeUp(true);

        return newTimeLimit;
      }

      // 「秒」を1つ減らす
      newTimeLimit.sec -= 1;

      // Replicantにタイムを入れる
      setRepTimer(`${zeroPaddingNum(newTimeLimit.min)}:${zeroPaddingNum(newTimeLimit.sec)}`);

      return {
        // hour: zeroPaddingNum(newTimeLimit.hour),
        min: zeroPaddingNum(newTimeLimit.min),
        sec: zeroPaddingNum(newTimeLimit.sec),
      };
    });
  }, [zeroPaddingNum, stopTime]);

  // タイマーをスタートする関数
  const startTime = useCallback(() => {
    intervalID.current = setInterval(() => tick(), 1000);

    setIsStart(true);
    setIsStop(true);
    setIsReset(false);
  }, [tick]);

  // タイムリミットをリセットする関数
  const resetTime = useCallback(() => {
    clearInterval(intervalID.current);

    // タイムピッカーで選択中の値に戻す
    setTimeLimit({
      // hour: zeroPaddingNum(selectItems.hour),
      min: zeroPaddingNum(selectItems.min),
      sec: zeroPaddingNum(selectItems.sec),
    });

    setRepTimer(`${zeroPaddingNum(selectItems.min)}:${zeroPaddingNum(selectItems.sec)}`);

    setIsReset(true);
    setIsStart(false);
    setIsStop(false);
    setIsTimeUp(false);
  }, [selectItems, zeroPaddingNum]);

  // ピッカーで選択した値をそのままタイムリミットとして反映する
  useEffect(() => {
    setTimeLimit({
      // hour: zeroPaddingNum(selectItems.hour),
      min: zeroPaddingNum(selectItems.min),
      sec: zeroPaddingNum(selectItems.sec),
    });
  }, [selectItems, zeroPaddingNum]);

  // タイムアップ後にスタートボタンを押したときは、選択したタイムからカウントダウンする
  useEffect(() => {
    // タイムアップ中且つスタートボタンを押した
    if (isStart && isTimeUp) {
      setTimeLimit({
        // hour: zeroPaddingNum(selectItems.hour),
        min: zeroPaddingNum(selectItems.min),
        sec: zeroPaddingNum(selectItems.sec),
      });

      setIsTimeUp(false);
    }
  }, [isStart, isTimeUp, selectItems, zeroPaddingNum]); // スタートボタンを押したときに実行

  return (
    <>
      <Stack justifyContent="center" spacing={2}>
        <ItemPickers items={TIMES} handleChange={handleChange} />
        <TimeDisplay time={timeLimit} delimiter=":" />
        <Stack justifyContent="center" direction="row" spacing={2}>
          <Button
            className="start-button"
            onClick={stopTime}
            disabled={isStop ? false : true}
            size="small"
            variant="outlined"
            color="error"
            startIcon={<StopIcon />}
            sx={{ width: 90 }}
          >
            stop
          </Button>
          <Button
            className="start-button"
            onClick={startTime}
            disabled={isStart ? true : false}
            size="small"
            variant="contained"
            startIcon={<PlayArrowIcon />}
            sx={{ width: 90 }}
          >
            start
          </Button>
          <Button
            className="reset-button"
            onClick={resetTime}
            disabled={isStart || (isStop && !isTimeUp && !isReset) ? false : true}
            size="small"
            variant="contained"
            color="error"
            startIcon={<TimerOffIcon />}
            sx={{ width: 90 }}
          >
            reset
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
