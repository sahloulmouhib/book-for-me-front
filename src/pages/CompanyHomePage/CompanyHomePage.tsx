import React from "react";

import { useGlobalStore } from "store/global.store";
import { UserRoleEnum } from "utils/enums";
import CreateCompanyPage from "pages/CreateCompanyPage/CreateCompanyPage";

interface CompanyHomePageProps {}

const CompanyHomePage: React.FC<CompanyHomePageProps> = () => {
  const { isUserCompanyCreated, user } = useGlobalStore();

  if (user?.role !== UserRoleEnum.User) {
    if (isUserCompanyCreated) {
      return <div>Bookings</div>;
    } else {
      return <CreateCompanyPage />;
    }
  }
  return <></>;
};

export default CompanyHomePage;
