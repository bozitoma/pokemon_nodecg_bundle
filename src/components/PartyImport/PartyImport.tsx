import { Stack, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';
import { useCallback, useMemo, useState } from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { PlayerSide, TerastalType_JP } from '../../types/scoreboard';
import { useReplicant } from '../../hooks/useReplicant';
import { Player } from '@prisma/generated/tournament';
import { ModalAlert } from '../ModalAlert';

export type ImportedParty = {
  name: string;
  teraType: TerastalType_JP;
};

export const PartyImport = ({ playerSide }: { playerSide: PlayerSide }) => {
  const [accountId, setAccountId] = useState<string | null>(null);

  // Submitのスナックバー
  const [submitOpen, setSubmitOpen] = useState(false);

  const [playerRep] = useReplicant('Player');
  console.log(playerRep);

  const playerNames = useMemo(
    () => playerRep?.filter((player) => player.player_name) ?? [],
    [playerRep]
  );
  const playerName = useMemo(() => {
    const name = playerNames.find((player) => player.accountID === accountId)?.player_name ?? '';
    const accountID = playerNames.find((player) => player.accountID === accountId)?.accountID ?? '';
    return `${name}【${accountID}】`;
  }, [playerNames, accountId]);
  const handleChange = useCallback((_event: unknown, newPlayer: Player | null) => {
    setAccountId(newPlayer?.accountID ?? null);
  }, []);

  const onClick = useCallback(() => {
    if (accountId) {
      nodecg.sendMessage('getParty', { accountId, playerSide });
      setSubmitOpen(true); // Submit完了のスナックバーを表示
    }
  }, [accountId, playerSide]);

  return (
    <>
      <Stack spacing={1} direction="row">
        <Autocomplete
          id={`${playerSide}-${playerName}-PartyImport`}
          size="small"
          options={playerNames}
          getOptionLabel={(option) => `${option.player_name}`}
          value={playerNames.find((player) => player.accountID === accountId) ?? null}
          onChange={handleChange}
          sx={{ width: 593 }}
          renderInput={(params) => (
            <TextField {...params} label="Player Select" variant="outlined" />
          )}
        />
        <LoadingButton
          variant="contained"
          size="small"
          startIcon={<FileDownloadIcon />}
          onClick={onClick}
        >
          INPORT
        </LoadingButton>
      </Stack>
      {/* Submitのスナックバー */}
      <ModalAlert
        state={submitOpen}
        setState={setSubmitOpen}
        text="Import has been completed!"
        severity="success"
      />
    </>
  );
};
