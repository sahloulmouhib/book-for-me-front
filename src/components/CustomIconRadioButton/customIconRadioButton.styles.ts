import { Button, styled, Typography } from "@mui/material";
import { borderRadius, distance, fontSize } from "utils/dimensions";
import { CustomIconRadioButtonProps } from "./CustomIconRadioButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CSSProperties } from "react";

export const StyledContainer = styled(Button)<
  Pick<CustomIconRadioButtonProps, "isSelected">
>(({ theme, isSelected }) => ({
  padding: distance.S,
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  width: 100,
  height: 80,
  backgroundColor: theme.palette.grey["200"],
  borderRadius: borderRadius.M,
  gap: distance.S,
  border: `2.5px solid ${
    isSelected ? theme.palette.primary.main : theme.palette.grey[400]
  }`,
  textTransform: "none",
  position: "relative",
  "& .MuiButtonBase-root-MuiButton-root": {
    padding: 0,
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: fontSize.XS,
  color: theme.palette.common.black,
}));

export const imageStyle: CSSProperties = {
  width: 30,
  height: 30,
};

export const StyledCheckIcon = styled(CheckCircleIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  position: "absolute",
  top: -10,
  right: -10,
  backgroundColor: theme.palette.common.white,
  borderRadius: "50%",
}));
