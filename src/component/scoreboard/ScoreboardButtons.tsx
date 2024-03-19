import { Button, Stack } from '@mui/material';
import { useState } from 'react';

// Marerial Icons
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplayIcon from '@mui/icons-material/Replay';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { ModalAlert } from '../general/ModalAlert';
import { DialogAlert } from '../general/DialogAlert';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';
import { useRecoilState } from 'recoil';
import { useRepList } from '../../hooks/useRepList';
import { playerAtomDefaultValue, pokemonNumList } from '../../types/scoreboardDefaultValue';

export const ScoreboardButtons = () => {
  const [scoreboradInfo, setScoreboradInfo] = useRecoilState(scoreboradInfoAtom);
  const { repInformation, setRepInformation } = useRepList();

  // Submitのスナックバー
  const [submitOpen, setSubmitOpen] = useState(false);

  // Resetのモーダルアラート
  const [resetOpen, setResetOpen] = useState(false);
  const handleResetOpen = () => {
    setResetOpen(true);
  };

  // Reset完了のスナックバー
  const [resetCompleteOpen, setResetCompleteOpen] = useState(false);

  const submit = () => {
    setRepInformation({
      Message: scoreboradInfo.Message,
      TournamentName: scoreboradInfo.TournamentName,
      Round: scoreboradInfo.Round,
      BestOf: scoreboradInfo.BestOf,
      Player1: {
        name: scoreboradInfo.Player1.name,
        score: scoreboradInfo.Player1.score,
        swiss: {
          win: scoreboradInfo.Player1.swiss.win,
          lose: scoreboradInfo.Player1.swiss.lose,
          draw: scoreboradInfo.Player1.swiss.draw,
        },
      },
      Player2: {
        name: scoreboradInfo.Player2.name,
        score: scoreboradInfo.Player2.score,
        swiss: {
          win: scoreboradInfo.Player2.swiss.win,
          lose: scoreboradInfo.Player2.swiss.lose,
          draw: scoreboradInfo.Player2.swiss.draw,
        },
      },
    });
    setSubmitOpen(true); // Submit完了のスナックバーを表示
  };

  const reset = () => {
    setScoreboradInfo({
      Message: '',
      TournamentName: '',
      Round: '',
      BestOf: '',
      Player1: playerAtomDefaultValue,
      Player2: playerAtomDefaultValue,
    });
    setResetOpen(false); // Resetのモーダルを閉じる
    setResetCompleteOpen(true); // Reset完了のスナックバーを表示
  };

  const restore = () => {
    if (repInformation !== undefined) {
      setScoreboradInfo((prev) => ({
        Message: repInformation.Message,
        TournamentName: repInformation.TournamentName,
        Round: repInformation.Round,
        BestOf: repInformation.BestOf,
        Player1: {
          ...prev.Player1,
          name: repInformation.Player1.name,
          score: repInformation.Player1.score,
          swiss: {
            win: repInformation.Player1.swiss.win,
            lose: repInformation.Player1.swiss.lose,
            draw: repInformation.Player1.swiss.draw,
          },
        },
        Player2: {
          ...prev.Player2,
          name: repInformation.Player2.name,
          score: repInformation.Player2.score,
          swiss: {
            win: repInformation.Player2.swiss.win,
            lose: repInformation.Player2.swiss.lose,
            draw: repInformation.Player2.swiss.draw,
          },
        },
      }));
    }
  };

  const nextBattle = () => {
    if (repInformation !== undefined) {
      pokemonNumList.map((pokemon) =>
        setScoreboradInfo((prev) => ({
          ...prev,
          Player1: {
            ...prev.Player1,
            [pokemon]: {
              ...prev.Player1[pokemon],
              battleState: 'Benched',
              statusAilment: 'なし',
              terastallize: false,
              terastalButton: false,
            },
          },
          Player2: {
            ...prev.Player2,
            [pokemon]: {
              ...prev.Player2[pokemon],
              battleState: 'Benched',
              statusAilment: 'なし',
              terastallize: false,
              terastalButton: false,
            },
          },
        }))
      );
    }
  };

  return (
    <>
      <Stack justifyContent="center" direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SendIcon />}
          sx={{ width: 400 }}
          onClick={submit}
        >
          SUBMIT
        </Button>
        <Button
          variant="outlined"
          color="error"
          size="small"
          startIcon={<DeleteIcon />}
          sx={{ width: 200 }}
          onClick={handleResetOpen}
        >
          RESET
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          startIcon={<ReplayIcon />}
          sx={{ width: 200 }}
          onClick={restore}
        >
          RESTORE
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<CatchingPokemonIcon />}
          sx={{ width: 200 }}
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
