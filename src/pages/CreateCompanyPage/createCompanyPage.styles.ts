import { Stack, styled, Typography } from "@mui/material";
import { theme } from "theme/theme";
import { distance, fontSize } from "utils/dimensions";

export const StyledContainer = styled(Stack)(() => ({
  width: "100%",
  height: "100%",
  justifyContent: "start",
  alignItems: "center",
  gap: distance.XL,
}));

export const StyledImage = styled("img")(() => ({
  width: 300,
  height: 300,
  opacity: 0.5,
}));

export const StyledTextContainer = styled(Stack)(() => ({
  gap: distance.L,
  width: "40%",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledTitle = styled(Typography)(() => ({
  fontSize: fontSize.XL,
  fontWeight: 600,
  color: theme.palette.common.black,
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: fontSize.M,
  color: theme.palette.grey[500],
  textAlign: "center",
}));
