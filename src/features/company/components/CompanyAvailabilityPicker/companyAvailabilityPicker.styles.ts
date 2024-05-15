import { Stack, Typography, styled } from "@mui/material";
import { distance } from "utils/dimensions";

export const StyledContainer = styled(Stack)({
  flexDirection: "row",
  width: "100%",
  justifyContent: "start",
  alignItems: "start",
  gap: distance.XL,
});

// TODO: fix styles
export const StyledWeekDayTitle = styled(Typography)({
  fontWeight: "bold",
  width: 130,
});

export const StyledErrorText = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
}));

export const StyledTimePickerListContainer = styled(Stack)({
  gap: distance.XXS,
  justifyContent: "center",
  alignItems: "center",
});
