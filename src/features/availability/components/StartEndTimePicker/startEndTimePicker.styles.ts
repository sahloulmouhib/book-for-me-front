import { Stack, styled } from "@mui/material";
import { distance } from "utils/dimensions";

export const StyledContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: distance.S,
});
