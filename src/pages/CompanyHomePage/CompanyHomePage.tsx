import React from "react";

import CustomButton from "components/CustomButton/CustomButton";
import useCustomDialog from "hooks/useCustomDialog";
import CustomDialog from "components/CustomDialog/CustomDialog";
import CreateCompanyStepper from "components/CreateCompanyStepper/CreateCompanyStepper";
import { images } from "utils/images";
import {
  StyledContainer,
  StyledDescription,
  StyledImage,
  StyledTextContainer,
  StyledTitle,
} from "./companyHomePage.styles";
import { useGlobalStore } from "store/global.store";
import { capitalizeFirstLetter } from "utils/helpers";
import { translate } from "locales/i18n";

interface CompanyHomePageProps {}

const CompanyHomePage: React.FC<CompanyHomePageProps> = () => {
  const { handleClose, isOpen, handleOpen } = useCustomDialog();
  const { user } = useGlobalStore();
  const userName = capitalizeFirstLetter(user?.firstName ?? "");
  return (
    <StyledContainer>
      <CustomDialog handleClose={handleClose} isOpen={isOpen} maxWidth="lg">
        <CreateCompanyStepper onCompanyCreated={handleClose} />
      </CustomDialog>
      <StyledImage src={images.LAUNCH} />
      <StyledTextContainer>
        <StyledTitle>
          {translate("company.no_company.title", { name: userName })}
        </StyledTitle>
        <StyledDescription>
          {translate("company.no_company.description")}
        </StyledDescription>
      </StyledTextContainer>
      <CustomButton
        width={150}
        title={translate("company.no_company.button_title")}
        onClick={handleOpen}
      />
    </StyledContainer>
  );
};

export default CompanyHomePage;
