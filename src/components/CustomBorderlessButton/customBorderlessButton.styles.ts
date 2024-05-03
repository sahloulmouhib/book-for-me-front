import { Button, styled } from "@mui/material";
import { borderRadius, fontSize, spacing } from "../../utils/dimensions";

export const StyledBorderlessButton = styled(Button)(({ theme }) => ({
  textAlign: "center",
  "&:hover": {
    backgroundColor: "white",
    color: theme.palette.primary.main,
    textUnderlineOffset: spacing.S,
    textDecorationLine: "underline",
  },
  textTransform: "none",
  borderRadius: borderRadius.S,
  fontSize: fontSize.M,
}));
