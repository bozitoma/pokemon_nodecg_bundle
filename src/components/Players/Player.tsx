import TextField from '@mui/material/TextField';
import { PlayerSide } from '../../types/scoreboard';
import { ChangeEventHandler, useCallback } from 'react';
import { useAtom } from 'jotai';
import { playerNameAtomFamily } from '../../atoms/playerNameAtom';

export const Player = ({ playerSide }: { playerSide: PlayerSide }) => {
  const [playerName, setPlayerName] = useAtom(playerNameAtomFamily(playerSide));
  const playerNameEdit: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
    (event) => {
      setPlayerName(event.target.value);
    },
    []
  );
  return (
    <TextField
      id={`${playerSide}-playerName`}
      label="Player Name"
      variant="outlined"
      size="small"
      value={playerName}
      onChange={playerNameEdit}
      // sx={{ width: 294 }}
      fullWidth
    />
  );
};
