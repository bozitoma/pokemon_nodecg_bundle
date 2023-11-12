import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Stack } from "@mui/material";
import { ReactEventHandler } from "react";

type Props = {
  roundText: string;
  roundSelect: ReactEventHandler<HTMLDivElement>;
};

export function RoundInfo({ roundText, roundSelect }: Props) {
  return (
    <Stack spacing={2} sx={{ width: 302 }}>
      <Autocomplete
        id="RoundInfo"
        freeSolo
        options={roundList.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="Round" />}
        size="small"
        onSelect={roundSelect}
        value={roundText}
      />
    </Stack>
  );
}

const roundList = [
  "Winners",
  "Winners Top",
  "Winners Round",
  "Winners Quarter",
  "Winners Semi",
  "Winners Final",
  "Losers",
  "Losers Top",
  "Losers Round",
  "Losers Quarter",
  "Losers Semi",
  "Losers Final",
  "Grand Final",
  "Grand Final Set2",
  "Pools",
  "Round",
  "Brackets",
  "TOP",
  "Quarter-Final",
  "Semi-Final",
  "Final",
  "Friendly",
];
