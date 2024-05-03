import { Stack, Typography, styled } from "@mui/material";
import { distance, fontSize } from "utils/dimensions";

export const StyledOrText = styled(Typography)(({ theme }) => ({
  fontSize: fontSize.M,
  color: theme.palette.grey["700"],
  fontWeight: "500",
}));

export const StyledLine = styled("div")(({ theme }) => ({
  width: "100%",
  height: 0.5,
  backgroundColor: theme.palette.grey["400"],
}));

export const StyledStack = styled(Stack)(() => ({
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: distance.S,
  width: 450,
}));
