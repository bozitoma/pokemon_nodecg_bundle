import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { PlayerSide, PokemonNum, StatusAilment } from '../../types/scoreboard';
import { memo, useCallback, useMemo } from 'react';
import { useReplicant } from '../../hooks/useReplicant';

type Props = {
  playerSide: PlayerSide;
  pokemonNum: PokemonNum;
};

export const StatusAilmentSelector = memo((props: Props) => {
  const [battlePartyRep, setBattlePartyRep] = useReplicant('BattleParty');
  const statusAilment = useMemo(
    () => battlePartyRep?.[props.playerSide]?.[props.pokemonNum]?.statusAilment ?? 'なし',
    [battlePartyRep, props.playerSide, props.pokemonNum]
  );

  const onChange = useCallback(
    (event: SelectChangeEvent) => {
      if (battlePartyRep) {
        setBattlePartyRep({
          ...battlePartyRep,
          [props.playerSide]: {
            ...battlePartyRep[props.playerSide],
            [props.pokemonNum]: {
              ...battlePartyRep[props.playerSide][props.pokemonNum],
              statusAilment: event.target.value as StatusAilment,
            },
          },
        });
      }
    },
    [battlePartyRep, props.playerSide, props.pokemonNum]
  );
  return (
    <FormControl
      id={`${props.playerSide}-${props.pokemonNum}-StatusAilmentSelector`}
      variant="standard"
      sx={{ m: 1, minWidth: 120 }}
    >
      <InputLabel>状態異常</InputLabel>
      <Select value={statusAilment} onChange={onChange} label="状態異常">
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
});
