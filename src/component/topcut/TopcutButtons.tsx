import { Button, Stack } from '@mui/material';
import { useCallback, useState } from 'react';

// Marerial Icons
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplayIcon from '@mui/icons-material/Replay';
import SortIcon from '@mui/icons-material/Sort';
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
      Player9: topcut.Player9,
      Player10: topcut.Player10,
      Player11: topcut.Player11,
      Player12: topcut.Player12,
      Player13: topcut.Player13,
      Player14: topcut.Player14,
      Player15: topcut.Player15,
      Player16: topcut.Player16,
      // Player17: topcut.Player17,
      // Player18: topcut.Player18,
      // Player19: topcut.Player19,
      // Player20: topcut.Player20,
      // Player21: topcut.Player21,
      // Player22: topcut.Player22,
      // Player23: topcut.Player23,
      // Player24: topcut.Player24,
      // Player25: topcut.Player25,
      // Player26: topcut.Player26,
      // Player27: topcut.Player27,
      // Player28: topcut.Player28,
      // Player29: topcut.Player29,
      // Player30: topcut.Player30,
      // Player31: topcut.Player31,
      // Player32: topcut.Player32,
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
        Player9: topcutDefaultValue,
        Player10: topcutDefaultValue,
        Player11: topcutDefaultValue,
        Player12: topcutDefaultValue,
        Player13: topcutDefaultValue,
        Player14: topcutDefaultValue,
        Player15: topcutDefaultValue,
        Player16: topcutDefaultValue,
        // Player17: topcutDefaultValue,
        // Player18: topcutDefaultValue,
        // Player19: topcutDefaultValue,
        // Player20: topcutDefaultValue,
        // Player21: topcutDefaultValue,
        // Player22: topcutDefaultValue,
        // Player23: topcutDefaultValue,
        // Player24: topcutDefaultValue,
        // Player25: topcutDefaultValue,
        // Player26: topcutDefaultValue,
        // Player27: topcutDefaultValue,
        // Player28: topcutDefaultValue,
        // Player29: topcutDefaultValue,
        // Player30: topcutDefaultValue,
        // Player31: topcutDefaultValue,
        // Player32: topcutDefaultValue,
      });
    }

    setResetOpen(false); // Resetのモーダルを閉じる
    setResetCompleteOpen(true); // Reset完了のスナックバーを表示
  };

  const restore = useCallback(() => {
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
        Player9: repTopcut.Player9,
        Player10: repTopcut.Player10,
        Player11: repTopcut.Player11,
        Player12: repTopcut.Player12,
        Player13: repTopcut.Player13,
        Player14: repTopcut.Player14,
        Player15: repTopcut.Player15,
        Player16: repTopcut.Player16,
        // Player17: repTopcut.Player17,
        // Player18: repTopcut.Player18,
        // Player19: repTopcut.Player19,
        // Player20: repTopcut.Player20,
        // Player21: repTopcut.Player21,
        // Player22: repTopcut.Player22,
        // Player23: repTopcut.Player23,
        // Player24: repTopcut.Player24,
        // Player25: repTopcut.Player25,
        // Player26: repTopcut.Player26,
        // Player27: repTopcut.Player27,
        // Player28: repTopcut.Player28,
        // Player29: repTopcut.Player29,
        // Player30: repTopcut.Player30,
        // Player31: repTopcut.Player31,
        // Player32: repTopcut.Player32,
      });
    }
  }, [repTopcut]);

  const sort = useCallback(() => {
    const keys = Object.keys(topcut);
    const sorted = keys
      .map((key) => topcut[key as keyof typeof topcut])
      .sort((a, b) => b.partyKP - a.partyKP);

    sorted.forEach((party, index) => {
      setTopcut((prev) => ({
        ...prev,
        [keys[index]]: party,
      }));
    });
  }, [topcut]);

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
        <Button
          variant="outlined"
          color="primary"
          size="small"
          startIcon={<SortIcon />}
          sx={{ width: 200 }}
          onClick={sort}
        >
          SORT
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
