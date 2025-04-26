import { Stack, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';
import { useCallback, useMemo, useState } from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { PlayerSide, TerastalType_JP } from '../../types/scoreboard';
import { useReplicant } from '../../hooks/useReplicant';
import { Party } from '../../../prisma/generated/tournament';
import { ModalAlert } from '../ModalAlert';

export type ImportedParty = {
  name: string;
  teraType: TerastalType_JP;
};

export const PartyImport = ({ playerSide }: { playerSide: PlayerSide }) => {
  const [selectedParty, setSelectedParty] = useState<Party | null>(null);

  // Submitのスナックバー
  const [submitOpen, setSubmitOpen] = useState(false);

  const [partiesRep] = useReplicant('Parties');
  console.log(partiesRep);

  const partyOptions = useMemo(
    () => (partiesRep as Party[] | undefined)?.filter((party: Party) => party.accountID && party.party_num) ?? [],
    [partiesRep]
  );

  const handleChange = useCallback((_event: unknown, newParty: Party | null) => {
    setSelectedParty(newParty);
  }, []);

  const onClick = useCallback(() => {
    if (selectedParty?.accountID) {
      console.log(`インポート: ${selectedParty.player_name}_${selectedParty.party_num}`, selectedParty);

      nodecg.sendMessage('getParty', {
        accountId: selectedParty.accountID,
        playerSide,
        partyNum: selectedParty.party_num ?? undefined
      });

      setSubmitOpen(true); // Submit完了のスナックバーを表示
    }
  }, [selectedParty, playerSide]);

  return (
    <>
      <Stack spacing={1} direction="row">
        <Autocomplete
          id={`${playerSide}-PartyImport`}
          size="small"
          options={partyOptions}
          getOptionLabel={(option) => `${option.player_name}_${option.party_num}`}
          value={selectedParty}
          onChange={handleChange}
          sx={{ width: 593 }}
          renderInput={(params) => (
            <TextField {...params} label="Party Select" variant="outlined" />
          )}
        />
        <LoadingButton
          variant="contained"
          size="small"
          startIcon={<FileDownloadIcon />}
          onClick={onClick}
        >
          IMPORT
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
