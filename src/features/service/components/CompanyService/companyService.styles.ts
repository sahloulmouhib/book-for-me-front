import { Stack, Typography, styled } from "@mui/material";
import { distance, fontSize, spacing } from "utils/dimensions";

export const StyledContainer = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.L,
  flex: 1,
  width: "100%",
}));

export const StyledCardContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: 12,
  justifyContent: "space-between",
  alignItems: "center",
  padding: distance.M,
  gap: spacing.L,
  flex: 1,
  width: "100%",
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  fontSize: fontSize.XS,
  fontWeight: "500",
  width: "100%",
  wordWrap: "break-word",
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontSize: fontSize.XS,
  fontWeight: "light",
  width: "100%",
  wordWrap: "break-word",
}));

export const StyledPriceTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: fontSize.S,
}));

export const StyledPriceContainer = styled(Stack)(() => ({
  flexDirection: "row",
  justifyItems: "flex-end",
  alignItems: "center",
  width: "5%",
}));

export const StyledTextContainer = styled(Stack)(() => ({
  justifyItems: "center",
  gap: spacing.S,
  width: "95%",
}));
