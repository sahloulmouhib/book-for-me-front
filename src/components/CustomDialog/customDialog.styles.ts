import { IconButton, styled } from "@mui/material";
import { distance } from "utils/dimensions";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: distance.S,
  top: distance.S,
  color: theme.palette.grey[500],
}));
