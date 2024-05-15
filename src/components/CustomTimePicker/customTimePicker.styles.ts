import styled from "@emotion/styled";
import { TimePicker } from "@mui/x-date-pickers";
import { theme } from "theme/theme";
import {
  TIME_PICKER_HEIGHT,
  TIME_PICKER_WIDTH,
  borderRadius,
  fontSize,
} from "utils/dimensions";

export const StyledTimePicker = styled(TimePicker)({
  width: TIME_PICKER_WIDTH,
  "& .MuiOutlinedInput-root": {
    height: TIME_PICKER_HEIGHT,
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
