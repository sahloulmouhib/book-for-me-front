import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalStore } from "store/global.store";
import CustomLoader from "components/CustomLoader/CustomLoader";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import Router from "routes/Router";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  const { hideLoader, isLoaderVisible } = useGlobalStore();
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <CustomLoader
              hideLoader={hideLoader}
              isLoaderVisible={isLoaderVisible}
            />
            <Router />
            <ToastContainer />
          </QueryClientProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </BrowserRouter>
  );
}

export default App;
