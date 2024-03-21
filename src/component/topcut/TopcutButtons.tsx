import { Button, Stack } from '@mui/material';
import { useState } from 'react';

// Marerial Icons
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplayIcon from '@mui/icons-material/Replay';
import { ModalAlert } from '../general/ModalAlert';
import { DialogAlert } from '../general/DialogAlert';
import { useRecoilState } from 'recoil';
import { useRepList } from '../../hooks/useRepList';
import { topcutDefaultValue } from '../../types/scoreboardDefaultValue';

import { topcutAtom } from '../../store/atomTopcut';

export const TopcutButtons = () => {
  const [topcut, setTopcut] = useRecoilState(topcutAtom);
  const { repTopcut, setRepTopcut } = useRepList();

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
    setRepTopcut({
      Player1: topcut.Player1,
      Player2: topcut.Player2,
      Player3: topcut.Player3,
      Player4: topcut.Player4,
      Player5: topcut.Player5,
      Player6: topcut.Player6,
      Player7: topcut.Player7,
      Player8: topcut.Player8,
    });
    setSubmitOpen(true); // Submit完了のスナックバーを表示
  };

  const reset = () => {
    if (repTopcut !== undefined) {
      setTopcut({
        Player1: topcutDefaultValue,
        Player2: topcutDefaultValue,
        Player3: topcutDefaultValue,
        Player4: topcutDefaultValue,
        Player5: topcutDefaultValue,
        Player6: topcutDefaultValue,
        Player7: topcutDefaultValue,
        Player8: topcutDefaultValue,
      });
    }

    setResetOpen(false); // Resetのモーダルを閉じる
    setResetCompleteOpen(true); // Reset完了のスナックバーを表示
  };

  const restore = () => {
    if (repTopcut !== undefined) {
      setTopcut({
        Player1: repTopcut.Player1,
        Player2: repTopcut.Player2,
        Player3: repTopcut.Player3,
        Player4: repTopcut.Player4,
        Player5: repTopcut.Player5,
        Player6: repTopcut.Player6,
        Player7: repTopcut.Player7,
        Player8: repTopcut.Player8,
      });
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
          sx={{ width: 300 }}
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
