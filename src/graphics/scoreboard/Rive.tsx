import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect, useMemo } from 'react';
import rivefile from '../../assets/championroad.riv';
import { useReplicant } from '../../hooks/useReplicant';

export const Rive = () => {
  const [scoreboard] = useReplicant('Scoreboard');

  const { rive, RiveComponent } = useRive({
    src: rivefile,
    artboard: 'Scoreboard',
    stateMachines: 'Scoreboard',
    autoplay: true,
  });

  const Round = useMemo(() => scoreboard?.Round, [scoreboard]);
  const BestOf = useMemo(() => scoreboard?.BestOf, [scoreboard]);
  const Name1P = useMemo(() => scoreboard?.Player1.name, [scoreboard]);
  const Name2P = useMemo(() => scoreboard?.Player2.name, [scoreboard]);
  const Score1P = useMemo(() => scoreboard?.Player1.score, [scoreboard]);
  const Score2P = useMemo(() => scoreboard?.Player2.score, [scoreboard]);
  const SwissWin1P = useMemo(() => scoreboard?.Player1.swiss.win, [scoreboard]);
  const SwissLose1P = useMemo(() => scoreboard?.Player1.swiss.lose, [scoreboard]);
  const SwissDraw1P = useMemo(() => scoreboard?.Player1.swiss.draw, [scoreboard]);
  const SwissWin2P = useMemo(() => scoreboard?.Player2.swiss.win, [scoreboard]);
  const SwissLose2P = useMemo(() => scoreboard?.Player2.swiss.lose, [scoreboard]);
  const SwissDraw2P = useMemo(() => scoreboard?.Player2.swiss.draw, [scoreboard]);

  const oldName1P = rive?.getTextRunValue('player1Name');
  const oldName2P = rive?.getTextRunValue('player2Name');
  const oldScore1P = rive?.getTextRunValue('player1Score');
  const oldScore2P = rive?.getTextRunValue('player2Score');
  const oldRound = rive?.getTextRunValue('roundName');
  const oldBestof = rive?.getTextRunValue('bestofName');
  const oldSwissWin1P = rive?.getTextRunValue('player1SwissWin');
  const oldSwissLose1P = rive?.getTextRunValue('player1SwissLose');
  const oldSwissDraw1P = rive?.getTextRunValue('player1SwissDraw');
  const oldSwissWin2P = rive?.getTextRunValue('player2SwissWin');
  const oldSwissLose2P = rive?.getTextRunValue('player2SwissLose');
  const oldSwissDraw2P = rive?.getTextRunValue('player2SwissDraw');

  const isTriggerName1P = useStateMachineInput(rive, 'Scoreboard', 'name1p-update');
  const isTriggerName2P = useStateMachineInput(rive, 'Scoreboard', 'name2p-update');
  const isTriggerScore1P = useStateMachineInput(rive, 'Scoreboard', 'score1p-update');
  const isTriggerScore2P = useStateMachineInput(rive, 'Scoreboard', 'score2p-update');
  const isTriggerRound = useStateMachineInput(rive, 'Scoreboard', 'round-update');
  const isTriggerBestof = useStateMachineInput(rive, 'Scoreboard', 'bestof-update');
  const isTriggerSwiss1P = useStateMachineInput(rive, 'Scoreboard', 'swiss1p-update');
  const isTriggerSwiss2P = useStateMachineInput(rive, 'Scoreboard', 'swiss2p-update');

  // 最初にページを読み込んだ時にReplicantをテロップに反映させる
  useEffect(() => {
    rive?.setTextRunValue('roundName', Round !== undefined ? Round : '');
    rive?.setTextRunValue('bestofName', BestOf !== undefined ? BestOf : '');
    rive?.setTextRunValue('player1Name', Name1P !== undefined ? Name1P : '');
    rive?.setTextRunValue('player2Name', Name2P !== undefined ? Name2P : '');
    rive?.setTextRunValue('player1Score', String(Score1P));
    rive?.setTextRunValue('player2Score', String(Score2P));
    rive?.setTextRunValue('player1SwissWin', String(SwissWin1P));
    rive?.setTextRunValue('player1SwissWin', String(SwissLose1P));
    rive?.setTextRunValue('player1SwissWin', String(SwissDraw1P));
    rive?.setTextRunValue('player2SwissWin', String(SwissWin2P));
    rive?.setTextRunValue('player2SwissWin', String(SwissLose2P));
    rive?.setTextRunValue('player2SwissWin', String(SwissDraw2P));
  }, [rive?.setTextRunValue]);

  // Replicantの更新をテロップに反映させる
  useEffect(() => {
    if (Round !== oldRound) {
      isTriggerRound?.fire();
      rive?.setTextRunValue('roundName', Round !== undefined ? Round : '');
    }
    if (BestOf !== oldBestof) {
      isTriggerBestof?.fire();
      rive?.setTextRunValue('bestofName', BestOf !== undefined ? BestOf : '');
    }
    if (Name1P !== oldName1P) {
      isTriggerName1P?.fire();
      rive?.setTextRunValue('player1Name', Name1P !== undefined ? Name1P : '');
    }
    if (Name2P !== oldName2P) {
      isTriggerName2P?.fire();
      rive?.setTextRunValue('player2Name', Name2P !== undefined ? Name2P : '');
    }
    if (Score1P !== Number(oldScore1P)) {
      isTriggerScore1P?.fire();
      rive?.setTextRunValue('player1Score', String(Score1P));
    }
    if (Score2P !== Number(oldScore2P)) {
      isTriggerScore2P?.fire();
      rive?.setTextRunValue('player2Score', String(Score2P));
    }
    if (
      SwissWin1P !== Number(oldSwissWin1P) ||
      SwissLose1P !== Number(oldSwissLose1P) ||
      SwissDraw1P !== Number(oldSwissDraw1P)
    ) {
      isTriggerSwiss1P?.fire();
      rive?.setTextRunValue('player1SwissWin', String(SwissWin1P));
      rive?.setTextRunValue('player1SwissLose', String(SwissLose1P));
      rive?.setTextRunValue('player1SwissDraw', String(SwissDraw1P));
    }
    if (
      SwissWin2P !== Number(oldSwissWin2P) ||
      SwissLose2P !== Number(oldSwissLose2P) ||
      SwissDraw2P !== Number(oldSwissDraw2P)
    ) {
      isTriggerSwiss2P?.fire();
      rive?.setTextRunValue('player2SwissWin', String(SwissWin2P));
      rive?.setTextRunValue('player2SwissLose', String(SwissLose2P));
      rive?.setTextRunValue('player2SwissDraw', String(SwissDraw2P));
    }
  }, [scoreboard]);

  return scoreboard ? <RiveComponent style={{ width: 1920, height: 1080 }} /> : null;
};
