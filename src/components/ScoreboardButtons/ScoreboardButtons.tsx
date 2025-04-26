import { Button, Stack } from '@mui/material';
import { useCallback, useState } from 'react';

// Marerial Icons
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplayIcon from '@mui/icons-material/Replay';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { ModalAlert } from '../ModalAlert';
import { DialogAlert } from '../DialogAlert';

import { useAtom } from 'jotai';
import { playerNameAtomFamily } from '../../atoms/playerNameAtom';
import { roundAtom } from '../../atoms/roundAtom';
import { bestofAtom } from '../../atoms/bestofAtom';
import { swissAtomFamily } from '../../atoms/swissAtom';
import { useReplicant } from '../../hooks/useReplicant';
import { scoreAtomFamily } from '../../atoms/scoreAtom';
import { Party } from '../../types/scoreboard';

export const ScoreboardButtons = () => {
  const [round, setRound] = useAtom(roundAtom);
  const [bestOf, setBestOf] = useAtom(bestofAtom);
  const [player1Name, setPlayer1Name] = useAtom(playerNameAtomFamily('Player1'));
  const [player2Name, setPlayer2Name] = useAtom(playerNameAtomFamily('Player2'));
  const [player1Score, setPlayer1Score] = useAtom(scoreAtomFamily('Player1'));
  const [player2Score, setPlayer2Score] = useAtom(scoreAtomFamily('Player2'));
  const [player1SwissWin, setPlayer1SwissWin] = useAtom(swissAtomFamily({ playerSide: 'Player1', swissResult: 'win' }));
  const [player1SwissLose, setPlayer1SwissLose] = useAtom(swissAtomFamily({ playerSide: 'Player1', swissResult: 'lose' }));
  const [player1SwissDraw, setPlayer1SwissDraw] = useAtom(swissAtomFamily({ playerSide: 'Player1', swissResult: 'draw' }));
  const [player2SwissWin, setPlayer2SwissWin] = useAtom(swissAtomFamily({ playerSide: 'Player2', swissResult: 'win' }));
  const [player2SwissLose, setPlayer2SwissLose] = useAtom(swissAtomFamily({ playerSide: 'Player2', swissResult: 'lose' }));
  const [player2SwissDraw, setPlayer2SwissDraw] = useAtom(swissAtomFamily({ playerSide: 'Player2', swissResult: 'draw' }));
  const [battlePartyRep, setBattlePartyRep] = useReplicant('BattleParty');

  const [scoreborad, setScoreborad] = useReplicant('Scoreboard');

  // Submitのスナックバー
  const [submitOpen, setSubmitOpen] = useState(false);

  // Resetのモーダルアラート
  const [resetOpen, setResetOpen] = useState(false);
  const handleResetOpen = () => {
    setResetOpen(true);
  };

  // Reset完了のスナックバー
  const [resetCompleteOpen, setResetCompleteOpen] = useState(false);

  // Nextバトル完了のスナックバー
  const [nextBattleOpen, setNextBattleOpen] = useState(false);

  const submit = useCallback(() => {
    setScoreborad({
      Round: round,
      BestOf: bestOf,
      Player1: {
        name: player1Name,
        score: player1Score,
        swiss: {
          win: player1SwissWin,
          lose: player1SwissLose,
          draw: player1SwissDraw,
        },
      },
      Player2: {
        name: player2Name,
        score: player2Score,
        swiss: {
          win: player2SwissWin,
          lose: player2SwissLose,
          draw: player2SwissDraw,
        },
      },
    });
    setSubmitOpen(true); // Submit完了のスナックバーを表示
  }, [round, bestOf, player1Name, player1Score, player1SwissWin, player1SwissLose, player1SwissDraw, player2Name, player2Score, player2SwissWin, player2SwissLose, player2SwissDraw]);

  const reset = useCallback(() => {
    setRound('');
    setBestOf('');
    setPlayer1Name('');
    setPlayer2Name('');
    setPlayer1Score(0);
    setPlayer2Score(0);
    setPlayer1SwissWin(0);
    setPlayer1SwissLose(0);
    setPlayer1SwissDraw(0);
    setPlayer2SwissWin(0);
    setPlayer2SwissLose(0);
    setPlayer2SwissDraw(0);
    setResetOpen(false); // Resetのモーダルを閉じる
    setResetCompleteOpen(true); // Reset完了のスナックバーを表示
  }, []);

  const restore = useCallback(() => {
    if (!scoreborad) return;
    setRound(scoreborad.Round);
    setBestOf(scoreborad.BestOf);
    setPlayer1Name(scoreborad.Player1.name);
    setPlayer2Name(scoreborad.Player2.name);
    setPlayer1Score(scoreborad.Player1.score);
    setPlayer2Score(scoreborad.Player2.score);
    setPlayer1SwissWin(scoreborad.Player1.swiss.win);
    setPlayer1SwissLose(scoreborad.Player1.swiss.lose);
    setPlayer1SwissDraw(scoreborad.Player1.swiss.draw);
    setPlayer2SwissWin(scoreborad.Player2.swiss.win);
    setPlayer2SwissLose(scoreborad.Player2.swiss.lose);
    setPlayer2SwissDraw(scoreborad.Player2.swiss.draw);
  }, [scoreborad]);

  const nextBattle = useCallback(() => {
    if (!battlePartyRep) return;

    // バトル状態、状態異常、テラスタルの有無のみをリセット
    setBattlePartyRep({
      Player1: Object.entries(battlePartyRep.Player1).reduce<Party>(
        (acc, [pokemonNum, pokemon]) => ({
          ...acc,
          [pokemonNum]: {
            ...(typeof pokemon === 'object' && pokemon !== null ? pokemon : {}),
            // nameとteraTypeはそのまま保持
            name: pokemon?.name || 'なし',
            teraType: pokemon?.teraType || 'normal',
            // バトル関連の状態のみリセット
            battleState: 'Benched',
            statusAilment: 'なし',
            terastallize: false,
            terastalButton: false,
          },
        }),
        battlePartyRep.Player1
      ),
      Player2: Object.entries(battlePartyRep.Player2).reduce<Party>(
        (acc, [pokemonNum, pokemon]) => ({
          ...acc,
          [pokemonNum]: {
            ...(typeof pokemon === 'object' && pokemon !== null ? pokemon : {}),
            // nameとteraTypeはそのまま保持
            name: pokemon?.name || 'なし',
            teraType: pokemon?.teraType || 'normal',
            // バトル関連の状態のみリセット
            battleState: 'Benched',
            statusAilment: 'なし',
            terastallize: false,
            terastalButton: false,
          },
        }),
        battlePartyRep.Player2
      ),
    });

    setNextBattleOpen(true); // 次のバトル準備完了のスナックバーを表示
  }, [battlePartyRep]);

  return (
    <>
      <Stack justifyContent="center" direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SendIcon />}
          sx={{ width: '40%' }}
          onClick={submit}
        >
          SUBMIT
        </Button>
        <Button
          variant="outlined"
          color="error"
          size="small"
          startIcon={<DeleteIcon />}
          sx={{ width: '20%' }}
          onClick={handleResetOpen}
        >
          RESET
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          startIcon={<ReplayIcon />}
          sx={{ width: '20%' }}
          onClick={restore}
        >
          RESTORE
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<CatchingPokemonIcon />}
          sx={{ width: '20%' }}
          onClick={nextBattle}
        >
          NEXT BATTLE
        </Button>
      </Stack>

      {/* Submitのスナックバー */}
      <ModalAlert
        state={submitOpen}
        setState={setSubmitOpen}
        text="Update has been completed scoreboard!"
        severity="success"
      />

      {/* Reset完了のスナックバー */}
      <ModalAlert
        state={resetCompleteOpen}
        setState={setResetCompleteOpen}
        text="Reset has been completed scoreboard!"
        severity="success"
      />

      {/* 次のバトル準備完了のスナックバー */}
      <ModalAlert
        state={nextBattleOpen}
        setState={setNextBattleOpen}
        text="Battle states have been reset!"
        severity="success"
      />

      {/* Resetのモーダル */}
      <DialogAlert
        state={resetOpen}
        setState={setResetOpen}
        text="Do you want to reset the scoreboard?"
        reset={reset}
      />
    </>
  );
};
