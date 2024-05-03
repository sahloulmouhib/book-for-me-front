import { createTheme } from "@mui/material/styles";
import { lightPalette } from "./palette/palette.light";
import { typography } from "./typography";

export const theme = createTheme({
  palette: lightPalette,
  typography: typography,
});
