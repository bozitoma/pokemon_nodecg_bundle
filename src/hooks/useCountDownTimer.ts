import { useState, useRef, useCallback, useEffect } from "react";

const useCountDownTimer = (time) => {
  const [timeLimit, setTimeLimit] = useState(time);

  const [isStart, setIsStart] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const intervalID = useRef(null);

  const zeroPaddingNum = useCallback((num) => {
    return String(num).padStart(2, "0");
  }, []);

  const startTime = useCallback(() => {
    intervalID.current = setInterval(() => tick(), 1000);

    setIsStart(true);
    setIsStop(false);
    setIsTimeUp(false);
    setIsReset(false);
  });

  const stopTime = useCallback(() => {
    clearInterval(intervalID.current);

    setIsStop(true);
    setIsStart(false);
  });

  const resetTime = useCallback(() => {
    clearInterval(intervalID.current);

    setTimeLimit({
      hour: zeroPaddingNum(time.hour),
      min: zeroPaddingNum(time.min),
      sec: zeroPaddingNum(time.sec),
    });

    setIsReset(true);
    setIsStart(false);
    setIsStop(false);
    setIsTimeUp(false);
  });

  const tick = useCallback(() => {
    setTimeLimit((prevTimeLimit) => {
      const newTimeLimit = Object.assign({}, prevTimeLimit);
      const { hour, min, sec } = newTimeLimit;

      if (hour <= 0 && min <= 0 && sec <= 0) {
        stopTime();

        setIsTimeUp(true);

        return newTimeLimit;
      }

      if (newTimeLimit.hour > 0 && min <= 0 && sec <= 0) {
        newTimeLimit.hour -= 1;
        newTimeLimit.min = 60;
      }

      if (newTimeLimit.min > 0 && newTimeLimit.sec <= 0) {
        newTimeLimit.min -= 1;
        newTimeLimit.sec = 60;
      }

      newTimeLimit.sec -= 1;

      return {
        hour: zeroPaddingNum(newTimeLimit.hour),
        min: zeroPaddingNum(newTimeLimit.min),
        sec: zeroPaddingNum(newTimeLimit.sec),
      };
    });
  });

  // ピッカーで選択した値をそのままタイムリミットとして反映する
  useEffect(() => {
    setTimeLimit({
      hour: zeroPaddingNum(time.hour),
      min: zeroPaddingNum(time.min),
      sec: zeroPaddingNum(time.sec),
    });
  }, [time]);

  // タイムアップした後にスタートボタンを押したときに選択したタイムからカウントダウンする
  useEffect(() => {
    if (isStart && isTimeUp) {
      setTimeLimit({
        hour: zeroPaddingNum(time.hour),
        min: zeroPaddingNum(time.min),
        sec: zeroPaddingNum(time.sec),
      });

      setIsTimeUp(false);
    }
  }, [isStart]);

  return [
    timeLimit,
    startTime,
    stopTime,
    resetTime,
    { isStart, isStop, isTimeUp, isReset },
  ];
};

export default useCountDownTimer;
