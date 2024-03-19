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

export function TerastalTypeSelector({ player, pokemonNum }: Props) {
  const [scoreboard, setScoreborad] = useRecoilState(scoreboradInfoAtom);

  const handleChangeTerastal = (event: SelectChangeEvent) => {
    setScoreborad((prev) => ({
      ...prev,
      [player]: {
        ...prev[player],
        [pokemonNum]: {
          ...prev[player][pokemonNum],
          teraType: event.target.value,
        },
      },
    }));
  };

  return (
    <FormControl
      id={`${player}-${pokemonNum}-TerastalTypeSelector`}
      variant="standard"
      sx={{ m: 1, minWidth: 120 }}
      tabIndex={-1}
    >
      <InputLabel>テラスタイプ</InputLabel>
      <Select
        value={scoreboard[player][pokemonNum].teraType}
        onChange={handleChangeTerastal}
        label="テラスタイプ"
      >
        <MenuItem value="normal">
          <em>ノーマル</em>
        </MenuItem>
        <MenuItem value="fire">ほのお</MenuItem>
        <MenuItem value="water">みず</MenuItem>
        <MenuItem value="grass">くさ</MenuItem>
        <MenuItem value="electric">でんき</MenuItem>
        <MenuItem value="ice">こおり</MenuItem>
        <MenuItem value="fighting">かくとう</MenuItem>
        <MenuItem value="poison">どく</MenuItem>
        <MenuItem value="ground">じめん</MenuItem>
        <MenuItem value="flying">ひこう</MenuItem>
        <MenuItem value="psychic">エスパー</MenuItem>
        <MenuItem value="bug">むし</MenuItem>
        <MenuItem value="rock">いわ</MenuItem>
        <MenuItem value="ghost">ゴースト</MenuItem>
        <MenuItem value="dragon">ドラゴン</MenuItem>
        <MenuItem value="dark">あく</MenuItem>
        <MenuItem value="steel">はがね</MenuItem>
        <MenuItem value="fairy">フェアリー</MenuItem>
        <MenuItem value="stellar">ステラ</MenuItem>
      </Select>
    </FormControl>
  );
}
