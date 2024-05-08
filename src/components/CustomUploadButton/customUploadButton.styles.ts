import { IconButton, Stack, Typography, styled } from "@mui/material";
import { BOX_WIDTH, distance, fontSize } from "utils/dimensions";

export const StyledContainer = styled(Stack)(() => ({
  alignItems: "flex-start",
}));

export const StyledLabel = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "400",
  color: theme.palette.common.black,
}));

export const StyledUploadButtonContainer = styled(IconButton)(({ theme }) => ({
  height: 200,
  width: BOX_WIDTH,
  gap: distance.XS,
  border: `2.5px dashed ${theme.palette.grey[400]}`,
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
}));

export const StyledIconTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "500",
  fontSize: fontSize.XS,
  color: theme.palette.primary.dark,
}));
