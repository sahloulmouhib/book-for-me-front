import { Stack, Typography, styled } from "@mui/material";
import { BOX_WIDTH, distance, fontSize } from "utils/dimensions";

export const StyledPageContainer = styled(Stack)(() => ({
  padding: distance.XL,
  gap: distance.L,
  display: "flex",
  flex: 0.55,
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledRowContainer = styled(Stack)(() => ({
  gap: distance.L,
}));
export const StyledPageTittle = styled(Typography)(({ theme }) => ({
  fontSize: fontSize.XL,
  paddingBottom: distance.M,
  color: theme.palette.common.black,
  fontWeight: "600",
  minWidth: BOX_WIDTH,
}));

export const StyledSignUpContainer = styled(Stack)(() => ({
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));

export const NoAccountTitleStyle = styled(Typography)(({ theme }) => ({
  fontSize: fontSize.S,
  color: theme.palette.grey[700],
  fontWeight: "500",
}));

export const StyledFormContainer = styled(Stack)(() => ({
  gap: distance.XS,
}));
