import { Button, styled } from "@mui/material";
import { borderRadius, fontSize } from "utils/dimensions";

export const StyledRoot = styled(Button)(() => ({
  textAlign: "center",
  textTransform: "none",
  borderRadius: borderRadius.S,
  fontSize: fontSize.M,
}));
