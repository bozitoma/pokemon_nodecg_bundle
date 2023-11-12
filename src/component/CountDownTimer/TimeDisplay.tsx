import { styled } from "@mui/material";
import React from "react";

type Props = {
  time: object;
  delimiter: string;
};

const StyledTimeDisplay = styled("div")({
  color: "#333",
  fontWeight: "bold",
  fontSize: "3em",
});

export const TimeDisplay = ({ time, delimiter }: Props) => {
  const newTime = Array.isArray(time) ? time : Object.values(time);

  return (
    <StyledTimeDisplay>
      {newTime.map((n, i, array) => (
        <React.Fragment key={i}>
          {/* padStartは文字列のメソッドであるため、Stringでnを文字列に変換 */}
          <span>{String(n).padStart(2, "0")}</span>

          {/* 末尾の区切り文字は表示しない */}
          {i !== array.length - 1 && delimiter}
        </React.Fragment>
      ))}
    </StyledTimeDisplay>
  );
};
