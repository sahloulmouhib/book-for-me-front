import { Stack, TextField, Typography, styled } from "@mui/material";
import { borderRadius } from "../../utils/dimensions";

export const StyledInput = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: borderRadius.S,
    },
  },
  width: 450,
}));

export const StyledLabel = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "500",
  color: theme.palette.common.black,
}));

export const StyledStack = styled(Stack)(() => ({
  alignItems: "flex-start",
}));
