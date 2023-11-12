import { Alert, Button, Snackbar, Stack } from '@mui/material';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

// Marerial Icons
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplayIcon from '@mui/icons-material/Replay';
import { useRepList } from '../hooks/useRepList';

type Props = {
  resetBattleToggleButton: () => void;
  resetTerastallized: () => void;
  resetStatusAilment: () => void;
  Player1Name: string;
  Player2Name: string;
  Player1Score: number;
  Player2Score: number;
  RoundInfo: string;
  BestOfInfo: string;
};

export const ScoreboardButtons = ({
  resetBattleToggleButton,
  resetTerastallized,
  resetStatusAilment,
  Player1Name,
  Player2Name,
  Player1Score,
  Player2Score,
  RoundInfo,
  BestOfInfo,
}: Props) => {
  // Submitのスナックバー
  const [submitOpen, setSubmitOpen] = useState(false);

  // スナックバーの閉じる（バツ）ボタン
  const handleSubmitClose = (
    _event?: Event | React.SyntheticEvent<Element, Event> | undefined,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setSubmitOpen(false);
  };

  // Replicantのインポート
  const {
    setRepPlayer1Name,
    setRepPlayer2Name,
    setRepPlayer1Score,
    setRepPlayer2Score,
    setRepRoundInfo,
    setRepBestOfInfo,
  } = useRepList();

  // Resetのモーダルアラート
  const [resetOpen, setResetOpen] = useState(false);
  const handleResetOpen = () => {
    setResetOpen(true);
  };
  const handleResetClose = () => {
    setResetOpen(false);
  };

  // Reset完了のスナックバー
  const [resetCompleteOpen, setResetCompleteOpen] = useState(false);
  const handleResetCompleteClose = () => {
    setResetCompleteOpen(false);
  };

  const submit = () => {
    setRepPlayer1Name(Player1Name);
    setRepPlayer2Name(Player2Name);
    setRepPlayer1Score(Player1Score);
    setRepPlayer2Score(Player2Score);
    setRepRoundInfo(RoundInfo);
    setRepBestOfInfo(BestOfInfo);
    setSubmitOpen(true); // Submit完了のスナックバーを表示
  };

  const reset = () => {
    setResetOpen(false); // Resetのモーダルを閉じる
    setResetCompleteOpen(true); // Reset完了のスナックバーを表示
  };

  const nextBattle = () => {
    resetTerastallized();
    resetBattleToggleButton();
    resetStatusAilment();
  };

  return (
    <>
      <Stack justifyContent="center" direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SendIcon />}
          sx={{ width: 330 }}
          onClick={submit}
        >
          SUBMIT
        </Button>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ width: 150 }}
          onClick={handleResetOpen}
        >
          RESET
        </Button>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<ReplayIcon />}
          sx={{ width: 150 }}
          onClick={nextBattle}
        >
          NEXT BATTLE
        </Button>
      </Stack>

      {/* Submitのスナックバー */}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={submitOpen}
        autoHideDuration={2000}
        onClose={handleSubmitClose}
      >
        <Alert onClose={handleSubmitClose} severity="success" sx={{ width: '100%' }}>
          スコアボードを更新しました！
        </Alert>
      </Snackbar>

      {/* Reset完了のスナックバー */}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={resetCompleteOpen}
        autoHideDuration={2000}
        onClose={handleResetCompleteClose}
      >
        <Alert onClose={handleResetCompleteClose} severity="success" sx={{ width: '100%' }}>
          スコアボードをリセットしました！
        </Alert>
      </Snackbar>

      {/* Resetのモーダル */}
      <Dialog open={resetOpen} onClose={handleResetClose} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">{'スコアボードをリセットしますか？'}</DialogTitle>
        <DialogActions>
          <Button onClick={handleResetClose}>キャンセル</Button>
          <Button onClick={reset} variant="contained" color="error" autoFocus>
            リセット
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
