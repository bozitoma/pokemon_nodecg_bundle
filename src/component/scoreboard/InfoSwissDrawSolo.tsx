import { useRecoilState } from 'recoil';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';
import { PlayerNum } from '../../types/scoreboard';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type Props = {
  player: PlayerNum;
  swissResult: 'win' | 'lose' | 'draw';
};

export function InfoSwissDrawSolo({ player, swissResult }: Props) {
  const [scoreboradInfo, setScoreboradInfo] = useRecoilState(scoreboradInfoAtom);

  const swissScoreEdit = (event: SelectChangeEvent) => {
    setScoreboradInfo((prev) => ({
      ...prev,
      [player]: {
        ...prev[player],
        swiss: {
          ...prev[player].swiss,
          [swissResult]: event.target.value,
        },
      },
    }));
  };

  const numbers = [...Array(100)].map((_u, i) => i);

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 75 }}>
      <InputLabel id={`${player}-${swissResult}`}>{swissResult}</InputLabel>
      <Select
        value={String(scoreboradInfo[player].swiss[swissResult])}
        onChange={swissScoreEdit}
        label={swissResult}
      >
        {numbers.map((value, i) => (
          <MenuItem value={value} key={i}>
            {typeof value !== 'string' ? String(value) : value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
