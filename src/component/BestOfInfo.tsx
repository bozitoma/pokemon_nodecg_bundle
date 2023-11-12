import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Stack, TextField } from "@mui/material";
import { Dispatch, useEffect } from "react";

type Props = {
  alignment: string;
  setAlignment: Dispatch<React.SetStateAction<string>>;
  stateBestOfInfo: string;
  handleButtonChange: (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => void;
  handleTextChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export function BestOfInfo({
  alignment,
  setAlignment,
  stateBestOfInfo,
  handleButtonChange,
  handleTextChange,
}: Props) {
  useEffect(() => {
    if (stateBestOfInfo === "Best of 5") {
      setAlignment("Best of 5");
    } else if (stateBestOfInfo === "Best of 3") {
      setAlignment("Best of 3");
    } else if (stateBestOfInfo === "Best of 1") {
      setAlignment("Best of 1");
    } else {
      setAlignment("");
    }
    return;
  }, [stateBestOfInfo, setAlignment]);

  return (
    <>
      <Stack spacing={1} direction="row">
        <TextField
          id="bestOfInfo"
          label="Best of"
          variant="outlined"
          size="small"
          value={stateBestOfInfo}
          onChange={handleTextChange}
          sx={{ width: 225 }}
        />
        <ToggleButtonGroup
          id="setInfoButton"
          color="primary"
          size="small"
          value={alignment} // 選択中のボタンを取得
          exclusive // 一度に1つのボタンのみを選択する属性
          onChange={handleButtonChange} // クリック時の挙動
          aria-label="Platform"
        >
          <ToggleButton value="Best of 1">Bo1</ToggleButton>
          <ToggleButton value="Best of 3">Bo3</ToggleButton>
          <ToggleButton value="Best of 5">Bo5</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
}
