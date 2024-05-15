import { Stack, styled } from "@mui/material";
import { distance } from "utils/dimensions";

export const StyledListContainer = styled(Stack)({
  gap: distance.S,
  flexDirection: "column",
  alignItems: "center",
});
