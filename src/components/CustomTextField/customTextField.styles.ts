import { Stack, TextField, Typography, styled } from "@mui/material";
import { borderRadius, fontSize } from "../../utils/dimensions";

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
  width: 450,
}));

export const StyledLabel = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "400",
  color: theme.palette.common.black,
}));

export const StyledStack = styled(Stack)(() => ({
  alignItems: "flex-start",
}));
