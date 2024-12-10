import React from 'react';
import { Box, Divider, Stack } from '@mui/material';
import { TopcutPlayerNum } from '../../types/scoreboard';
import { PartyImportTopcut } from './PartyImportTopcut';
import { PokemonSelectorTopcut } from './PokemonSelectorTopcut';
import { PokemonAvatarTopcut } from './PokemonAvatarTopcut';
import { TitleDivider } from '../general/TitleDivider';
import { useRecoilValue } from 'recoil';
import { topcutAtom } from '../../store/atomTopcut';

type Props = {
  topcutPlayerNum: TopcutPlayerNum;
};

export function TopcutManegement({ topcutPlayerNum }: Props) {
  const topcut = useRecoilValue(topcutAtom);

  return (
    <React.Fragment key={`${topcutPlayerNum}-TopcutManegementSolo`}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Stack spacing={1} direction="row" alignItems="center">
          <TitleDivider text={topcutPlayerNum} />
          <PartyImportTopcut topcutPlayerNum={topcutPlayerNum} />
          <PokemonSelectorTopcut topcutPlayerNum={topcutPlayerNum} pokemonNum="pokemon1" />
          <PokemonSelectorTopcut topcutPlayerNum={topcutPlayerNum} pokemonNum="pokemon2" />
          <PokemonSelectorTopcut topcutPlayerNum={topcutPlayerNum} pokemonNum="pokemon3" />
          <PokemonSelectorTopcut topcutPlayerNum={topcutPlayerNum} pokemonNum="pokemon4" />
          <PokemonSelectorTopcut topcutPlayerNum={topcutPlayerNum} pokemonNum="pokemon5" />
          <PokemonSelectorTopcut topcutPlayerNum={topcutPlayerNum} pokemonNum="pokemon6" />
          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
          <PokemonAvatarTopcut topcutPlayerNum={topcutPlayerNum} pokemonNum="pokemon1" />
          <PokemonAvatarTopcut topcutPlayerNum={topcutPlayerNum} pokemonNum="pokemon2" />
          <PokemonAvatarTopcut topcutPlayerNum={topcutPlayerNum} pokemonNum="pokemon3" />
          <PokemonAvatarTopcut topcutPlayerNum={topcutPlayerNum} pokemonNum="pokemon4" />
          <PokemonAvatarTopcut topcutPlayerNum={topcutPlayerNum} pokemonNum="pokemon5" />
          <PokemonAvatarTopcut topcutPlayerNum={topcutPlayerNum} pokemonNum="pokemon6" />
          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
          <Box sx={{ display: 'block', alignItems: 'flex-end' }}>
            <TitleDivider text="Party KP" />
            <Box
              sx={{
                color: 'text.secondary',
                textAlign: 'center',
                fontWeight: 'medium',
                fontFamily: 'Noto Sans JP',
                fontSize: 20,
              }}
            >
              {topcut[topcutPlayerNum].partyKP}
            </Box>
          </Box>
        </Stack>
      </Box>
      <Divider sx={{ mx: 0.5, my: 1 }} />
    </React.Fragment>
  );
}
