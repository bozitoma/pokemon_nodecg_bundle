// 参考 https://tsukulog.net/2021/10/03/react-count-down-timer/
import { TimeDisplay } from './TimeDisplay';
import {
  ChangeEventHandler,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Stack } from '@mui/material';
import { ItemPickers } from './ItemPickers';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import TimerOffIcon from '@mui/icons-material/TimerOff';
import { useRepList } from '../../hooks/useRepList';

type Times = {
  [key: string]: number[];
};

type Props = {
  [key: string]: number;
};

const TIMES: Times = {
  // map関数で第二引数（index番号）だけを使いたい場合でも、第一引数を書く必要がある。
  // その時、アンダーバーで使わない引数を表すことができ、undefindedのuを加えて _u と記載する。
  min: [...Array(60)].map((_u, i) => i),
  sec: [...Array(60)].map((_u, i) => i),
};

export const CountDownTimer = () => {
  // 値をゼロ埋めする関数
  const zeroPaddingNum = useCallback((num: number) => {
    return String(num).padStart(2, '0');
  }, []);

  const [selectItems, setSelectItems] = useState(() => {
    const newItems: Props = {};

    Object.keys(TIMES).forEach((name) => {
      name === 'min' ? (newItems[name] = TIMES[name][20]) : (newItems[name] = TIMES[name][0]);
    });

    return newItems;
  });

  const handleChange: ChangeEventHandler<HTMLSelectElement> = useCallback((e) => {
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
  const intervalID: MutableRefObject<number | undefined> = useRef(undefined);

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
        min: newTimeLimit.min,
        sec: newTimeLimit.sec,
      };
    });
  }, [zeroPaddingNum, stopTime]);

  // タイマーをスタートする関数
  const startTime = useCallback(() => {
    // 本来"window."は省略できるが、Node.jsのTimerのAPIに"setInterval"が存在しているようで
    // VScode上でJSのかNode.jsのかが判断できないため、"window."を明示してJSのものと判断させる必要があるらしい。
    // 参考:https://www.konosumi.net/entry/2019/05/26/150656
    intervalID.current = window.setInterval(() => tick(), 1000);

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
      min: selectItems.min,
      sec: selectItems.sec,
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
      min: selectItems.min,
      sec: selectItems.sec,
    });
  }, [selectItems]);

  // タイムアップ後にスタートボタンを押したときは、選択したタイムからカウントダウンする
  useEffect(() => {
    // タイムアップ中且つスタートボタンを押した
    if (isStart && isTimeUp) {
      setTimeLimit({
        // hour: zeroPaddingNum(selectItems.hour),
        min: selectItems.min,
        sec: selectItems.sec,
      });

      setIsTimeUp(false);
    }
  }, [isStart, isTimeUp, selectItems]); // スタートボタンを押したときに実行

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
