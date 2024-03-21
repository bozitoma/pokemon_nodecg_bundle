import { Stack, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useSetRecoilState } from 'recoil';
import { topcutAtom } from '../../store/atomTopcut';
import { EntryMargeParty, TopcutPlayerNum } from '../../types/scoreboard';
import { useRepList } from '../../hooks/useRepList';
import { useTopcut } from '../../hooks/useTopcut';
import { pokemonNumList } from '../../types/scoreboardDefaultValue';
import { usePokedex } from '../../hooks/usePokedex';

type Props = {
  topcutPlayerNum: TopcutPlayerNum;
};

export function PartyImportTopcut({ topcutPlayerNum }: Props) {
  const setTopcut = useSetRecoilState(topcutAtom);
  const [selectParty, setSelectParty] = useState<EntryMargeParty | null>(null);
  const { getKPscore } = useTopcut();
  const { getPokemonIcon } = usePokedex();

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
    const partyKP = pokemonNumList.reduce(
      (acc, pokemon) => acc + getKPscore(pokemons[pokemon].name),
      0
    );

    setTopcut((prev) => ({
      ...prev,
      [topcutPlayerNum]: {
        ...prev[topcutPlayerNum],
        pokemon1: {
          name: pokemons?.pokemon1.name,
          icon: getPokemonIcon(pokemons?.pokemon1.name),
          score: getKPscore(pokemons?.pokemon1.name),
        },
        pokemon2: {
          name: pokemons?.pokemon2.name,
          icon: getPokemonIcon(pokemons?.pokemon2.name),
          score: getKPscore(pokemons?.pokemon2.name),
        },
        pokemon3: {
          name: pokemons?.pokemon3.name,
          icon: getPokemonIcon(pokemons?.pokemon3.name),
          score: getKPscore(pokemons?.pokemon3.name),
        },
        pokemon4: {
          name: pokemons?.pokemon4.name,
          icon: getPokemonIcon(pokemons?.pokemon4.name),
          score: getKPscore(pokemons?.pokemon4.name),
        },
        pokemon5: {
          name: pokemons?.pokemon5.name,
          icon: getPokemonIcon(pokemons?.pokemon5.name),
          score: getKPscore(pokemons?.pokemon5.name),
        },
        pokemon6: {
          name: pokemons?.pokemon6.name,
          icon: getPokemonIcon(pokemons?.pokemon6.name),
          score: getKPscore(pokemons?.pokemon6.name),
        },
        partyKP: partyKP,
      },
    }));
  };

  return (
    <Stack spacing={1} direction="row">
      <Autocomplete
        id={`${topcutPlayerNum}-Party`}
        size="small"
        options={typed}
        getOptionLabel={(option) => option.player_name}
        value={selectParty}
        onChange={handleChange}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="Player Select" variant="outlined" />}
      />
      <LoadingButton
        variant="contained"
        size="small"
        startIcon={<FileDownloadIcon />}
        onClick={onClick}
      >
        INPORT
      </LoadingButton>
    </Stack>
  );
}
