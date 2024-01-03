import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import type { StatusAilment } from '../types/scoreboard';

type Props = {
  statusAilment: StatusAilment;
  handleChangeStatusAilment: (event: SelectChangeEvent) => void;
};
export function StatusAilmentSelector({ statusAilment, handleChangeStatusAilment }: Props) {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }} tabIndex={-1}>
      <InputLabel>状態異常</InputLabel>
      <Select value={statusAilment} onChange={handleChangeStatusAilment} label="状態異常">
        <MenuItem value="">
          <em>なし</em>
        </MenuItem>
        <MenuItem value="PSN">どく</MenuItem>
        <MenuItem value="SLP">ねむり</MenuItem>
        <MenuItem value="BRN">やけど</MenuItem>
        <MenuItem value="PAR">まひ</MenuItem>
        <MenuItem value="FRZ">こおり</MenuItem>
      </Select>
    </FormControl>
  );
}
