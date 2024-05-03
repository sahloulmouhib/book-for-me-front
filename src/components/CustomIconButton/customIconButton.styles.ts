import { Button, styled } from "@mui/material";
import { BOX_WIDTH, borderRadius, distance, fontSize } from "utils/dimensions";

export const StyledRoot = styled(Button)(({ theme }) => ({
  padding: distance.S,
  width: BOX_WIDTH,
  color: theme.palette.grey["700"],
  textTransform: "none",
  borderRadius: borderRadius.S,
  border: `1px solid ${theme.palette.grey["500"]}`,
  fontSize: fontSize.M,
}));
