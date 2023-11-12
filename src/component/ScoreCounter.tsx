// 参考 https://codesandbox.io/s/material-ui-counter-yo5tx?file=/src/App.js:0-1618
import { ButtonGroup, Button, TextField, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Dispatch, MouseEventHandler } from "react";
import { ClearButton } from "./ButtonLib";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[50]),
  backgroundColor: blueGrey[50],
  borderColor: blueGrey[200],
  "&:hover": {
    backgroundColor: blueGrey[100],
    borderColor: blueGrey[300],
  },
}));

const StyledInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: 2,
      borderColor: blueGrey[200],
    },
    "&:hover fieldset": {
      borderColor: blueGrey[300],
    },
    "&.Mui-focused fieldset": {
      borderColor: blueGrey[500],
    },
    "& input": {
      textAlign: "center",
      width: 171,
      color: blueGrey[700],
    },
  },
});

type Props = {
  stateScore1p: number;
  stateScore2p: number;
  setStateScore1p: Dispatch<React.SetStateAction<number>>;
  setStateScore2p: Dispatch<React.SetStateAction<number>>;
  scoreReset: () => void;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function ScoreCounter({
  stateScore1p,
  stateScore2p,
  setStateScore1p,
  setStateScore2p,
  scoreReset,
}: Props) {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <ButtonGroup>
          <StyledInput id="gameCount1p" size="small" value={stateScore1p} />
          <StyledButton
            onClick={() => setStateScore1p((prev: number) => prev - 1)}
            disabled={stateScore1p === 0}
          >
            <RemoveIcon fontSize="small" />
          </StyledButton>
          <StyledButton
            onClick={() => setStateScore1p((prev: number) => prev + 1)}
            disabled={stateScore1p === 3}
          >
            <AddIcon fontSize="small" />
          </StyledButton>
        </ButtonGroup>
        <ClearButton onClick={scoreReset} />
        <ButtonGroup>
          <StyledButton
            onClick={() => setStateScore2p((prev: number) => prev + 1)}
            disabled={stateScore2p === 3}
          >
            <AddIcon fontSize="small" />
          </StyledButton>
          <StyledButton
            onClick={() => setStateScore2p((prev: number) => prev - 1)}
            disabled={stateScore2p === 0}
          >
            <RemoveIcon fontSize="small" />
          </StyledButton>
          <StyledInput id="gameCount2p" size="small" value={stateScore2p} />
        </ButtonGroup>
      </Stack>
    </>
  );
}
