import { Stack, TextField, styled } from "@mui/material";
import { borderRadius, distance, fontSize } from "../../utils/dimensions";

export const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
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
    "& .MuiOutlinedInput-multiline": {
      padding: 50,
    },
  },
  width: "100%",
}));

export const StyledStack = styled(Stack)(() => ({
  alignItems: "flex-start",
}));

export const inputStyles = {
  padding: distance.M,
  fontSize: fontSize.M,
  fontWeight: "400",
};
