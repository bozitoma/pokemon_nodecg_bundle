import { Stack, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useSetRecoilState } from 'recoil';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';
import { EntryMargeParty, PlayerNum, TerastalType } from '../../types/scoreboard';
import { useRepList } from '../../hooks/useRepList';

type PlayerNums = {
  player: PlayerNum;
};

type Prop = {
  [key in string]: TerastalType;
};

const typeConvert: Prop = {
  ノーマル: 'normal',
  ほのお: 'fire',
  みず: 'water',
  くさ: 'grass',
  でんき: 'electric',
  こおり: 'ice',
  かくとう: 'fighting',
  どく: 'poison',
  じめん: 'ground',
  ひこう: 'flying',
  エスパー: 'psychic',
  むし: 'bug',
  いわ: 'rock',
  ゴースト: 'ghost',
  ドラゴン: 'dragon',
  あく: 'dark',
  はがね: 'steel',
  フェアリー: 'fairy',
  ステラ: 'stellar',
};

export function PartyImport({ player }: PlayerNums) {
  const setScoreborad = useSetRecoilState(scoreboradInfoAtom);
  const [isLoading, setIsLoding] = useState(false);
  const [selectParty, setSelectParty] = useState<EntryMargeParty | null>(null);

  const { repParty } = useRepList();

  const handleChange = (_event: unknown, newPokemon: EntryMargeParty | null) => {
    setSelectParty(newPokemon);
  };

  // そのまま使うとNodeCGの仕様でunknown扱いになるので、強制的に型定義してエラーを防ぐ
  const typed = repParty ? repParty : [];

  const onClick = () => {
    const getPlayerData = () => {
      const pokeName = typed?.findIndex((data) => data.accountID === selectParty?.accountID);
      return typed[pokeName];
    };

    const pokemons = getPlayerData();
    setIsLoding(true);
    setScoreborad((prev) => ({
      ...prev,
      [player]: {
        ...prev[player],
        pokemon1: {
          ...prev[player].pokemon1,
          name: pokemons?.pokemon1.name,
          teraType: typeConvert[pokemons?.pokemon1.teraType],
        },
        pokemon2: {
          ...prev[player].pokemon2,
          name: pokemons?.pokemon2.name,
          teraType: typeConvert[pokemons?.pokemon2.teraType],
        },
        pokemon3: {
          ...prev[player].pokemon3,
          name: pokemons?.pokemon3.name,
          teraType: typeConvert[pokemons?.pokemon3.teraType],
        },
        pokemon4: {
          ...prev[player].pokemon4,
          name: pokemons?.pokemon4.name,
          teraType: typeConvert[pokemons?.pokemon4.teraType],
        },
        pokemon5: {
          ...prev[player].pokemon5,
          name: pokemons?.pokemon5.name,
          teraType: typeConvert[pokemons?.pokemon5.teraType],
        },
        pokemon6: {
          ...prev[player].pokemon6,
          name: pokemons?.pokemon6.name,
          teraType: typeConvert[pokemons?.pokemon6.teraType],
        },
      },
    }));
    setIsLoding(false);
  };

  return (
    <Stack spacing={1} direction="row">
      <Autocomplete
        id={`${player}-Party`}
        size="small"
        options={typed}
        getOptionLabel={(option) =>
          `【${option.player_name}】 ${option.pokemon1.name}/${option.pokemon2.name}/${option.pokemon3.name}/${option.pokemon4.name}/${option.pokemon5.name}/${option.pokemon6.name}`
        }
        value={selectParty}
        onChange={handleChange}
        sx={{ width: 593 }}
        renderInput={(params) => <TextField {...params} label="Player Select" variant="outlined" />}
      />
      <LoadingButton
        variant="contained"
        size="small"
        startIcon={<FileDownloadIcon />}
        loading={isLoading}
        onClick={onClick}
      >
        INPORT
      </LoadingButton>
    </Stack>
  );
}
