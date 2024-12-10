import { PlayerSide } from '../../types/scoreboard';
import { useAtom } from 'jotai';
import { swissAtomFamily } from '../../atoms/swissAtom';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { memo, useCallback, useMemo } from 'react';

type Props = {
  playerSide: PlayerSide;
  swissResult: 'win' | 'lose' | 'draw';
};

export const SwissScore = memo((props: Props) => {
  const [swiss, setSwiss] = useAtom(swissAtomFamily(props));
  const swissScoreEdit = useCallback((event: SelectChangeEvent) => {
    setSwiss(Number(event.target.value));
  }, []);
  const numbers = useMemo(() => [...Array(21)].map((_u, i) => i), []);
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
      <InputLabel id={`${props.playerSide}-${props.swissResult}`}>{props.swissResult}</InputLabel>
      <Select value={String(swiss)} onChange={swissScoreEdit} label={props.swissResult}>
        {numbers.map((value, i) => (
          <MenuItem value={value} key={i}>
            {typeof value !== 'string' ? String(value) : value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});
