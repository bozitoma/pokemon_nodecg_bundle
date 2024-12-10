import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Stack, TextField } from '@mui/material';
import { ChangeEvent, MouseEvent, useCallback } from 'react';
import { useAtom } from 'jotai';
import { bestofAtom } from '../../atoms/bestofAtom';

export const Bestof = () => {
  const [bestof, setBestof] = useAtom(bestofAtom);
  const handleButtonChange = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if ((event.target as HTMLButtonElement).value === bestof) {
        setBestof('');
      } else {
        setBestof((event.target as HTMLButtonElement).value);
      }
    },
    [bestof]
  );
  const handleTextChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setBestof((event.target as HTMLButtonElement).value);
    },
    []
  );
  return (
    <Stack spacing={1} direction="row">
      <TextField
        id="Bestof"
        label="Bestof"
        variant="outlined"
        size="small"
        value={bestof}
        onChange={handleTextChange}
        sx={{ width: 300 }}
        fullWidth
      />
      <ToggleButtonGroup
        id="BestofButtons"
        color="primary"
        size="small"
        value={bestof} // 選択中のボタンを取得
        exclusive // 一度に1つのボタンのみを選択する属性
        onChange={handleButtonChange} // クリック時の挙動
        aria-label="Platform"
        fullWidth
      >
        <ToggleButton value="Best of 1">Bo1</ToggleButton>
        <ToggleButton value="Best of 3">Bo3</ToggleButton>
        <ToggleButton value="Best of 5">Bo5</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};
