import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SwapHorizontalCircleRoundedIcon from "@mui/icons-material/SwapHorizontalCircleRounded";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

type Props = {
  variant?: "text" | "contained" | "outlined";
  text?: string;
  color?:
    | "primary"
    | "error"
    | "inherit"
    | "secondary"
    | "info"
    | "success"
    | "warning";
  url?: string;
  width?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function ButtonTemplate({
  variant,
  text,
  color,
  url,
  width,
  onClick,
}: Props) {
  return (
    <>
      <Button
        variant={variant}
        onClick={onClick}
        color={color}
        href={url}
        sx={{ width: { width } }}
      >
        {text}
      </Button>
    </>
  );
}

export function SwapButton({ onClick }: Props) {
  return (
    <>
      <IconButton color="primary" onClick={onClick}>
        <SwapHorizontalCircleRoundedIcon />
      </IconButton>
    </>
  );
}

export function ClearButton({ onClick }: Props) {
  return (
    <>
      <IconButton color="primary" onClick={onClick}>
        <RemoveCircleOutlineIcon />
      </IconButton>
    </>
  );
}
