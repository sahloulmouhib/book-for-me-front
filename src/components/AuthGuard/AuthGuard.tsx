import React from "react";
import { Navigate } from "react-router-dom";
import { AUTH_PATH } from "routes/routes.paths";
import { useGlobalStore } from "store/global.store";
import { jointPaths } from "utils/helpers";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { user, accessToken } = useGlobalStore();
  if (!user || !accessToken) {
    return <Navigate to={jointPaths([AUTH_PATH])} replace />;
  }
  return children;
};

export default AuthGuard;
