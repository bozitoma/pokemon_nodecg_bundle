import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';
import { PlayerNum } from '../../types/scoreboard';
import { ChangeEventHandler } from 'react';

type Props = {
  player: PlayerNum;
};

export function InfoPlayerSolo({ player }: Props) {
  const [scoreboradInfo, setScoreboradInfo] = useRecoilState(scoreboradInfoAtom);

  const playerNameEdit: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setScoreboradInfo((prev) => ({
      ...prev,
      [player]: {
        ...prev[player],
        name: event.target.value,
      },
    }));
  };

  return (
    <TextField
      id={`${player}-name`}
      label={`${player} Name`}
      variant="outlined"
      size="small"
      value={scoreboradInfo[player].name}
      onChange={playerNameEdit}
      sx={{ width: 254 }}
    />
  );
}
