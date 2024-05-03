import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { theme } from "./theme/theme";
import { router } from "./routes/routes.config";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
