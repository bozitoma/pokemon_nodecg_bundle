// 参考 https://codesandbox.io/s/material-ui-counter-yo5tx?file=/src/App.js:0-1618
import { Divider, Box, Stack } from '@mui/material';
import { memo } from 'react';

type Props = {
  text: string;
  padding?: number;
};

export const TitleDivider = memo(({ text, padding }: Props) => {
  return (
    <Stack
      sx={{
        padding: padding,
      }}
    >
      <Divider>
        <Box
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            fontWeight: 'medium',
            fontFamily: 'Noto Sans JP',
            padding: padding,
          }}
        >
          {text}
        </Box>
      </Divider>
    </Stack>
  );
});
