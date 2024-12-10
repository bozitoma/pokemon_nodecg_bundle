import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { PlayerSide, PokemonNum, TerastalType } from '../../types/scoreboard';
import { memo, useCallback, useMemo } from 'react';
import { useReplicant } from '../../hooks/useReplicant';

type Props = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const TerastalTypeSelector = memo((props: Props) => {
  const [battlePartyRep, setBattlePartyRep] = useReplicant('BattleParty');
  const teraType = useMemo(
    () => battlePartyRep?.[props.playerSide]?.[props.pokemonNum]?.teraType ?? 'normal',
    [battlePartyRep, props.playerSide, props.pokemonNum]
  );
  const onChange = useCallback(
    (event: SelectChangeEvent) => {
      if (!battlePartyRep) return;
      setBattlePartyRep({
        ...battlePartyRep,
        [props.playerSide]: {
          ...battlePartyRep[props.playerSide],
          [props.pokemonNum]: {
            ...battlePartyRep[props.playerSide][props.pokemonNum],
            teraType: event.target.value as TerastalType,
          },
        },
      });
    },
    [battlePartyRep, props.playerSide, props.pokemonNum]
  );
  return (
    <FormControl
      id={`${props.playerSide}-${props.pokemonNum}-TerastalTypeSelector`}
      variant="standard"
      sx={{ m: 1, minWidth: 120 }}
      tabIndex={-1}
    >
      <InputLabel>テラスタイプ</InputLabel>
      <Select value={teraType} onChange={onChange} label="テラスタイプ">
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
});
