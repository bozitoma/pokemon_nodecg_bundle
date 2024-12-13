import { Button, Stack } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';

// Marerial Icons
import DeleteIcon from '@mui/icons-material/Delete';
import { ModalAlert } from '../ModalAlert';
import { DialogAlert } from '../DialogAlert';
import { useReplicant } from '../../hooks/useReplicant';

export const TopcutResetButton = () => {
  const [topcutRep, setTopcutRep] = useReplicant('Topcut');
  const topcutTotal = useMemo(() => topcutRep?.total ?? 0, [topcutRep]);

  // Resetのモーダルアラート
  const [resetOpen, setResetOpen] = useState(false);
  const handleResetOpen = () => {
    setResetOpen(true);
  };

  // Reset完了のスナックバー
  const [resetCompleteOpen, setResetCompleteOpen] = useState(false);

  const reset = useCallback(() => {
    if (!topcutRep) return;
    const resetPlayers = Array.from({ length: topcutTotal }, (_, i) => ({
      place: i + 1,
      name: 'なし',
      party: ['なし', 'なし', 'なし', 'なし', 'なし', 'なし'],
    }));
    const newTopcutRep = { total: topcutTotal, players: resetPlayers };
    setTopcutRep(newTopcutRep);
    setResetOpen(false); // Resetのモーダルを閉じる
    setResetCompleteOpen(true); // Reset完了のスナックバーを表示
  }, [topcutRep]);

  return (
    <>
      <Stack justifyContent="center" direction="row" spacing={2}>
        <Button
          variant="outlined"
          color="error"
          size='large'
          startIcon={<DeleteIcon />}
          sx={{ width: '100%' }}
          onClick={handleResetOpen}
        >
          RESET
        </Button>
      </Stack>

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
