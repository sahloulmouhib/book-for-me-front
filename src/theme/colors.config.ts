import { PaletteOptions, alpha } from "@mui/material";

const DISABLED = "rgba(159, 165, 172, 0.5)";

export const LightColorsConfig: PaletteOptions = {
  primary: {
    light: "#B3D4FF",
    main: "#0162FF",
    dark: "#043184",
  },
  secondary: {
    light: "#BE4FE4",
    main: "#ED54CD",
    dark: "#66415e",
  },
  info: {
    light: "#DEE4F0",
    main: "#0162FF",
  },
  success: {
    main: "#5AEDC4",
  },
  warning: {
    main: "#ED5454",
  },
  error: {
    light: "#ed7272",
    main: "#DA1414",
    dark: "#9B0000",
  },

  grey: {
    50: "#FFFFFF",
    100: "#FCFCFD",
    200: "#F5F7FB",
    300: "#ECEDF1",
    400: "#ACB3BD",
    500: "#ABB2BC",
    600: "#AAB6CE",
    700: "#7A8096",
    800: "#252427",
    900: "#000000",
  },

  text: {
    primary: "#252427",
    disabled: alpha("#252427", 0.7),
  },

  action: {
    disabledBackground: DISABLED,
    disabled: "#FFFFFF",
    hover: "#F8F9FC",
  },

  background: { paper: "#FFFFFF", default: "#FCFCFD" },
};

export const DarkColorsConfig: PaletteOptions = {
  primary: {
    main: "#755BE4",
  },
  secondary: {
    main: "#FFFFFF",
  },
  info: {
    light: "#DEE4F0",
    main: "#2E5AAC",
    dark: "#043184",
  },
  success: {
    light: "#EDF9F0",
    main: "#287D3C",
    dark: "#085A1B",
  },
  warning: {
    light: "#FFF4EC",
    main: "#b95000",
    dark: "#692D00",
  },
  error: {
    light: "#FEEFEF",
    main: "#DA1414",
    dark: "#9B0000",
  },

  grey: {
    50: "#000000",
    100: "#090909", // Darker shade
    200: "#151515", // Darker shade
    300: "#1F1F1F", // Darker shade
    400: "#2E2E2E", // Darker shade
    500: "#3D3D3D", // Darker shade
    600: "#4B4B4B", // Darker shade
    800: "#777777", // Darker shade
    900: "#FFFFFF",
  },

  text: {
    primary: "#FFFFFF", // White or light text color
    disabled: alpha("#FFFFFF", 0.7), // Slightly transparent white for disabled text
  },

  action: {
    disabledBackground: DISABLED,
    disabled: "#777777", // Dark grey for disabled action elements
    hover: "#151515", // Darker grey for hover effect
  },

  background: {
    paper: "#151515", // Dark grey for paper or card backgrounds
    default: "#090909", // Even darker grey for default background
  },
};
