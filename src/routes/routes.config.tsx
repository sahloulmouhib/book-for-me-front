import { createBrowserRouter } from "react-router-dom";
import SignInPage from "pages/SignInPage/SignInPage";
import SignUpPage from "pages/SignUpPage/SignUpPage";
import { DASHBOARD_PATH, SIGN_IN_PATH, SIGN_UP_PATH } from "./routes.paths";
import CreateCompanyStepper from "components/CreateCompanyStepper/CreateCompanyStepper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpPage />,
  },
  {
    path: SIGN_UP_PATH,
    element: <SignUpPage />,
  },
  {
    path: SIGN_IN_PATH,
    element: <SignInPage />,
  },
  {
    path: DASHBOARD_PATH,
    element: <CreateCompanyStepper />,
  },
]);
