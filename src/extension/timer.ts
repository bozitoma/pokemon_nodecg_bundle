import type { NodeCG } from './nodecg';

export const timer = (nodecg: NodeCG) => {
  const repTimer = nodecg.Replicant('Timer');
  const repSelectTime = nodecg.Replicant('SelectTime');

  // サーバー側にログを出す場合のコード
  const log = new nodecg.Logger('Timer');

  let intervalID: NodeJS.Timeout;
  const timerStart = () => {
    if (!repTimer.value) return;
    log.info(`Countdown start from ${repTimer.value.min}m${repTimer.value.sec}s.`);
    intervalID = setInterval(() => tick(), 1000);
    repTimer.value = { ...repTimer.value, isRunning: true };
  };
  const timerStop = () => {
    if (!repTimer.value) return;
    log.info(`Countdown stopped at ${repTimer.value.min}m${repTimer.value.sec}s.`);
    clearInterval(intervalID);
    repTimer.value = { ...repTimer.value, isRunning: false };
  };
  const timerReset = () => {
    if (!(repTimer.value && repSelectTime.value)) return;
    log.info(`Timer reset to ${repSelectTime.value.min}m${repSelectTime.value.sec}s.`);
    clearInterval(intervalID);
    repTimer.value = {
      ...repTimer.value,
      min: repSelectTime.value.min,
      sec: repSelectTime.value.sec,
      isRunning: false,
    };
  };
  const tick = () => {
    if (!repTimer.value) return;
    const countDown = repTimer.value.min * 60 + repTimer.value.sec - 1;
    const min = Math.floor(countDown / 60);
    const sec = countDown - min * 60;
    repTimer.value = { ...repTimer.value, min, sec };
    if (min <= 0 && sec <= 0) timerReset();
  };
  nodecg.listenFor('timerStart', timerStart);
  nodecg.listenFor('timerStop', timerStop);
  nodecg.listenFor('timerReset', timerReset);
};
