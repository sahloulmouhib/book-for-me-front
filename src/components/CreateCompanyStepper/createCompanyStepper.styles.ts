import { Box, Stack, Typography, styled } from "@mui/material";
import { distance, fontSize } from "utils/dimensions";

export const StyledContainer = styled(Box)(() => ({
  padding: distance.M,
  height: "calc(100vh - 180px)",
  width: 700,
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledButtonsContainer = styled(Stack)(() => ({
  flexDirection: "row",
  width: "100%",
  paddingTop: distance.XL,
  paddingBottom: distance.M,
}));

export const StyledButtonSeparator = styled(Box)(() => ({
  flex: "1 1 auto",
}));

export const StyledStepTitle = styled(Typography)(({ theme }) => ({
  textAlign: "start",
  fontWeight: "500",
  color: theme.palette.primary.dark,
  fontSize: fontSize.L,
  paddingTop: distance.XL,
  paddingBottom: distance.L,
}));

export const StyledStepContainer = styled(Stack)(() => ({
  width: "100%",
  height: "100%",
}));

export const StyledStepContent = styled(Stack)(() => ({
  width: "100%",
  height: "100%",
  overflowY: "auto",
}));
