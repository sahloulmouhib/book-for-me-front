import { Stack, Typography, styled } from "@mui/material";
import { distance, fontSize } from "../../../../utils/dimensions";

export const StyledCoverImageContainer = styled(Stack)(({ theme }) => ({
  padding: distance.XL,
  gap: distance.XXL,
  flex: 0.45,
  backgroundColor: theme.palette.primary.main,
  justifyContent: "center",
}));

export const StyledCoverImage = styled("img")(() => ({
  width: "80%",
  alignSelf: "center",
}));

export const StyledCoverImageTitleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: fontSize.XXL,
  fontWeight: "500",
  textAlign: "start",
  marginTop: distance.L,
  alignItems: "center",
}));

export const StyledCoverImageSubtitleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: fontSize.M,
  fontWeight: "200",
  textAlign: "start",
  alignItems: "center",
}));
