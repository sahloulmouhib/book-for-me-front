import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { BOX_WIDTH, borderRadius, distance, fontSize } from "utils/dimensions";

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
  borderRadius: borderRadius.M,
  display: "flex",
  flexDirection: "column",
}));

export const StyledIconTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "500",
  fontSize: fontSize.XS,
  color: theme.palette.primary.dark,
}));

export const StyledVisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const StyledImagePreview = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: borderRadius.S,
});

export const StyledDeleteIconContainer = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: 8,
  right: 8,
  zIndex: 100,
  padding: 0,
  backgroundColor: theme.palette.error.light,
}));

export const StyledPreviewContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
}));
