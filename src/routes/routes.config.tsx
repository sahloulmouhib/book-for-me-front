import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import SignInPage from "pages/SignInPage/SignInPage";
import SignUpPage from "pages/SignUpPage/SignUpPage";
import {
  AUTH_PATH,
  BOOKINGS_PATH,
  CLIENTS_PATH,
  DASHBOARD_PATH,
  HOME_PATH,
  PROFILE_PATH,
  SERVICES_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from "./routes.paths";
import Dashboard from "pages/Dashboard/Dashboard";
import CompanyHomePage from "pages/CompanyHomePage/CompanyHomePage";
import AuthGuard from "components/AuthGuard/AuthGuard";
const authRouteObject: RouteObject = {
  path: AUTH_PATH,
  children: [
    {
      path: "",
      element: <Navigate to={SIGN_IN_PATH} />,
    },
    {
      path: SIGN_IN_PATH,
      element: <SignInPage />,
    },
    {
      path: SIGN_UP_PATH,
      element: <SignUpPage />,
    },
  ],
};

export const router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to={AUTH_PATH} />,
  },
  {
    ...authRouteObject,
  },
  {
    path: DASHBOARD_PATH,
    element: (
      <AuthGuard>
        <Dashboard />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <Navigate to={HOME_PATH} />,
      },
      {
        path: HOME_PATH,
        element: <CompanyHomePage />,
      },
      {
        path: BOOKINGS_PATH,
        element: <div>Bookings</div>,
      },
      {
        path: SERVICES_PATH,
        element: <div>Services</div>,
      },
      {
        path: CLIENTS_PATH,
        element: <div>Clients</div>,
      },
      {
        path: PROFILE_PATH,
        element: <div>Profile</div>,
      },
    ],
  },
]);
