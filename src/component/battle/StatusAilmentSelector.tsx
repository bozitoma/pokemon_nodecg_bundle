import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useRecoilState } from 'recoil';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';
import { PlayerNum, PokemonNum } from '../../types/scoreboard';

type Props = {
  player: PlayerNum;
  pokemonNum: PokemonNum;
};

export function StatusAilmentSelector({ player, pokemonNum }: Props) {
  const [scoreboard, setScoreborad] = useRecoilState(scoreboradInfoAtom);

  const handleChangeStatusAilment = (event: SelectChangeEvent) => {
    setScoreborad((prev) => ({
      ...prev,
      [player]: {
        ...prev[player],
        [pokemonNum]: {
          ...prev[player][pokemonNum],
          statusAilment: event.target.value,
        },
      },
    }));
  };

  return (
    <FormControl
      id={`${player}-${pokemonNum}-StatusAilmentSelector`}
      variant="standard"
      sx={{ m: 1, minWidth: 120 }}
    >
      <InputLabel>状態異常</InputLabel>
      <Select
        value={scoreboard[player][pokemonNum].statusAilment}
        onChange={handleChangeStatusAilment}
        label="状態異常"
      >
        <MenuItem value="なし">
          <em>なし</em>
        </MenuItem>
        <MenuItem value="PSN">どく</MenuItem>
        <MenuItem value="BPSN">もうどく</MenuItem>
        <MenuItem value="SLP">ねむり</MenuItem>
        <MenuItem value="BRN">やけど</MenuItem>
        <MenuItem value="PAR">まひ</MenuItem>
        <MenuItem value="FRZ">こおり</MenuItem>
      </Select>
    </FormControl>
  );
}
