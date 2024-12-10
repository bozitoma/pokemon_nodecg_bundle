// 参考 https://codesandbox.io/s/material-ui-counter-yo5tx?file=/src/App.js:0-1618
import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[50]),
  backgroundColor: blueGrey[50],
  borderColor: blueGrey[200],
  '&:hover': {
    backgroundColor: blueGrey[100],
    borderColor: blueGrey[300],
  },
}));

export const StyledInput = styled(TextField)({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: 2,
      borderColor: blueGrey[200],
    },
    '&:hover fieldset': {
      borderColor: blueGrey[300],
    },
    '&.Mui-focused fieldset': {
      borderColor: blueGrey[500],
    },
    '& input': {
      textAlign: 'center',
      color: blueGrey[700],
    },
  },
});
