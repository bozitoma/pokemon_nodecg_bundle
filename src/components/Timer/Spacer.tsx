import { CSSProperties } from "@mui/material/styles/createMixins";

type Props = {
  size: string | number | "auto";
  axis: "vertical" | "horizontal";
  style?: CSSProperties | undefined;
};

export const Spacer = ({ size, axis, style = {}, ...delegated }: Props) => {
  const width = axis === "vertical" ? 1 : size;
  const height = axis === "horizontal" ? 1 : size;
  return (
    <span
      style={{
        display: "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...delegated}
    />
  );
};
