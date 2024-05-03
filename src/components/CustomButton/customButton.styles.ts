import { Button, styled } from "@mui/material";
import { BOX_WIDTH, borderRadius, fontSize } from "utils/dimensions";

export const StyledRoot = styled(Button)(({ theme }) => ({
  width: BOX_WIDTH,
  textAlign: "center",
  backgroundColor: theme.palette.primary.main,

  textTransform: "none",
  borderRadius: borderRadius.S,
  fontSize: fontSize.M,
}));
