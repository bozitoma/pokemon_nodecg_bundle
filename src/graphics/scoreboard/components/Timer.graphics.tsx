import { useMemo } from 'react';
import { useReplicant } from '../../../hooks/useReplicant';

const zeroPaddingNum = (num: number) => {
  return String(num).padStart(2, '0');
};

export const TimerGraphics = () => {
  const [timerRep] = useReplicant('Timer');
  const min = useMemo(() => timerRep?.min ?? 0, [timerRep]);
  const sec = useMemo(() => timerRep?.sec ?? 0, [timerRep]);
  const time = useMemo(() => `${zeroPaddingNum(min)}:${zeroPaddingNum(sec)}`, [min, sec]);
  return <div className="timer">{time}</div>;
};
