import { Stack, styled } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { theme } from "theme/theme";
import { borderRadius, distance, fontSize } from "utils/dimensions";

// TODO: fix styles
export const StyledTimePicker = styled(TimePicker)({
  width: 160,
  "& .MuiOutlinedInput-root": {
    height: 40,
    "& fieldset": {
      borderRadius: borderRadius.S,
      borderColor: theme.palette.grey[400],
      borderWidth: 1.5,
    },
    "& .MuiInputBase-input::placeholder": {
      color: theme.palette.grey[400],
      fontSize: fontSize.S,
      opacity: 1,
    },
  },
});

export const StyledContainer = styled(Stack)({
  flexDirection: "row",
  width: "100%",
  justifyContent: "start",
  alignItems: "center",
  gap: distance.M,
  border: "3px solid red",
});
