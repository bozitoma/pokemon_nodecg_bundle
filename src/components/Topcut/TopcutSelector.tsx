// import React from 'react';
// import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useReplicant } from '../../hooks/useReplicant';

// interface TopcutSelectorProps {
//   // Add props here if needed
// }

export const TopcutSelector = () => {
  const [playernRep] = useReplicant('Player');
  const [topcut, setTopcut] = useReplicant('Topcut');
  console.log(playernRep);
  console.log(topcut ? [...topcut] : []);
  const options = playernRep?.map((player) => player.player_name ?? '') ?? [];
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={options}
        getOptionLabel={(option) => option}
        onChange={(_event, value) => setTopcut(value)}
        value={topcut ? [...topcut] : []}
        renderInput={(params) => (
          <TextField {...params} variant="standard" label="Select Players" placeholder="Player" />
        )}
      />
    </Stack>
  );
}
