import { atom } from 'recoil';

export const countDownTimerAtom = atom({
  key: 'countDownTimerAtom',
  default: {
    isStart: false,
    isStop: false,
    isTimeUp: false,
    isReset: false,
  },
});
