import { Box } from "@mui/material";
import { memo } from "react";

export const BoxWrapper = memo(({ children }: { children?: React.ReactNode }) => {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        opacity: 0.9,
      }}
    >{children}</Box>
  );
});
