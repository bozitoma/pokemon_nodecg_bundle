import TextField from '@mui/material/TextField';
import { ChangeEventHandler } from 'react';
import { useAtom } from 'jotai';
import { roundAtom } from '../../atoms/roundAtom';

export const Round = () => {
  const [round, setRound] = useAtom(roundAtom);
  const roundEdit: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setRound(event.target.value);
  };
  return (
    <TextField
      id="Round"
      label="Round"
      variant="outlined"
      // sx={{ width: 200 }}
      fullWidth
      size="small"
      onChange={roundEdit}
      value={round}
    />
  );
};
