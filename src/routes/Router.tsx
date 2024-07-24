import { useRoutes } from "react-router-dom";
import { useGlobalStore } from "store/global.store";
import { clientRoutes, companyRoutes } from "./routes.config";

const Router: React.FC = () => {
  const { user } = useGlobalStore();
  const routes = !user?.isClient ? companyRoutes : clientRoutes;
  return useRoutes(routes);
};

export default Router;
