import { styled, Typography } from "@mui/material";

export const StyledLabel = styled(Typography)(({ theme }) => ({
  textAlign: "start",
  fontWeight: "400",
  color: theme.palette.common.black,
  width: "100%",
}));
