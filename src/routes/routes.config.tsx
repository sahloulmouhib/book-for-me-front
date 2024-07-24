import { Navigate, RouteObject } from "react-router-dom";
import SignInPage from "pages/SignInPage/SignInPage";
import SignUpPage from "pages/SignUpPage/SignUpPage";
import {
  AUTH_PATH,
  BOOKINGS_PATH,
  CLIENT_DASHBOARD_PATH,
  CLIENTS_PATH,
  COMPANIES_PATH,
  COMPANY_DASHBOARD_PATH,
  HOME_PATH,
  PROFILE_PATH,
  SERVICES_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from "./routes.paths";
import Dashboard from "pages/Dashboard/Dashboard";
import CompanyHomePage from "pages/CompanyHomePage/CompanyHomePage";
import AuthGuard from "components/AuthGuard/AuthGuard";

const authRouteObject: RouteObject[] = [
  {
    path: "",
    element: <Navigate to={AUTH_PATH} />,
  },
  {
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
  },
];

export const companyRoutes: RouteObject[] = [
  ...authRouteObject,
  {
    path: COMPANY_DASHBOARD_PATH,
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
];

export const clientRoutes: RouteObject[] = [
  ...authRouteObject,
  {
    path: CLIENT_DASHBOARD_PATH,
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
        element: <div>Home</div>,
      },
      {
        path: BOOKINGS_PATH,
        element: <div>Bookings</div>,
      },
      {
        path: COMPANIES_PATH,
        element: <div>Companies</div>,
      },
      {
        path: PROFILE_PATH,
        element: <div>Profile</div>,
      },
    ],
  },
];
