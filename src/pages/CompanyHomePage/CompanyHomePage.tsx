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
        <StyledTitle>Welcome {userName}</StyledTitle>
        <StyledDescription>
          Start your journey by creating your company profile and start managing
          your services and availabilities in one place.
        </StyledDescription>
      </StyledTextContainer>
      <CustomButton width={150} title="Start" onClick={handleOpen} />
    </StyledContainer>
  );
};

export default CompanyHomePage;
