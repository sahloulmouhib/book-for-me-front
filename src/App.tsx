import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { theme } from "./theme/theme";
import { router } from "./routes/routes.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalStore } from "store/global.store";
import CustomLoader from "components/CustomLoader/CustomLoader";

const queryClient = new QueryClient();

function App() {
  const { hideLoader, isLoaderVisible } = useGlobalStore();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CustomLoader
          hideLoader={hideLoader}
          isLoaderVisible={isLoaderVisible}
        />
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
