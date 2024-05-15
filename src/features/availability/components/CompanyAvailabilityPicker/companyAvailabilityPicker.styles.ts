import { Stack, Typography, styled } from "@mui/material";
import { WEEK_DAY_TITLE_WIDTH } from "features/availability/utils/availability.constants";
import { distance } from "utils/dimensions";

export const StyledContainer = styled(Stack)({
  flexDirection: "row",
  width: "100%",
  justifyContent: "start",
  alignItems: "start",
  gap: distance.XL,
});

export const StyledWeekDayTitle = styled(Typography)({
  fontWeight: "bold",
  width: WEEK_DAY_TITLE_WIDTH,
});

export const StyledErrorText = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
}));

export const StyledTimePickerListContainer = styled(Stack)({
  alignItems: "start",
});
