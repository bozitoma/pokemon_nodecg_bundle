import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { memo, useCallback, useMemo } from 'react';
import { useReplicant } from '../../hooks/useReplicant';

export const TopcutTotalSelector = memo(() => {
  const [topcutRep, setTopcutRep] = useReplicant('Topcut');
  const topcutTotal = useMemo(() => String(topcutRep?.total ?? 0), [topcutRep]);
  const topcutTotalEdit = useCallback(
    (event: SelectChangeEvent) => {
      if (!topcutRep) return;
      setTopcutRep({ ...topcutRep, total: Number(event.target.value) });
    },
    [topcutRep]
  );
  const numbers = useMemo(() => [...Array(100)].map((_u, i) => i), []);
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
      <InputLabel id="Topcut-Total-Selector">Topcut Total</InputLabel>
      <Select value={topcutTotal} onChange={topcutTotalEdit} label="Topcut Total">
        {numbers.map((value, i) => (
          <MenuItem value={value} key={i}>
            {typeof value !== 'string' ? String(value) : value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});
