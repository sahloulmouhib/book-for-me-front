import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import useCreateCompanyStepper from "features/company/hooks/useCreateCompanyStepper";
import { StepperStep } from "features/company/utils/company.types";
import {
  StyledButtonSeparator,
  StyledButtonsContainer,
  StyledContainer,
  StyledStepContainer,
  StyledStepContent,
  StyledStepTitle,
} from "./createCompanyStepper.styles";
import CustomButton from "components/CustomButton/CustomButton";
import AddCompanyDetails from "features/company/components/AddCompanyDetails/AddCompanyDetails";
import AddCompanyAvailabilities from "features/availability/components/AddCompanyAvailabilities/AddCompanyAvailabilities";
import AddCompanyServices from "features/service/components/AddCompanyServices/AddCompanyServices";
import useCreateCompanyForm from "hooks/useCreateCompanyForm";
import { translate } from "locales/i18n";
import { STEPPER_BUTTON_WIDTH } from "utils/dimensions";

const CreateCompanyStepper: React.FC = () => {
  const {
    addCompanyAvailabilitiesForm,
    addCompanyDetailsForm,
    addCompanyServicesForm,
    isAddCompanyAvailabilitiesFormValid,
    isAddCompanyDetailsFormValid,
    isAddCompanyServicesFormValid,
  } = useCreateCompanyForm();

  const steps: StepperStep[] = React.useMemo(
    () => [
      {
        title: translate("global.create_company.add_company_details"),
        component: <AddCompanyDetails form={addCompanyDetailsForm} />,
        isValid: isAddCompanyDetailsFormValid,
      },
      {
        title: translate("global.create_company.add_company_availabilities"),
        component: (
          <AddCompanyAvailabilities form={addCompanyAvailabilitiesForm} />
        ),
        isValid: isAddCompanyAvailabilitiesFormValid,
      },
      {
        title: translate("global.create_company.add_company_services"),
        component: (
          <AddCompanyServices addCompanyServicesForm={addCompanyServicesForm} />
        ),
        isValid: isAddCompanyServicesFormValid,
      },
    ],
    [
      isAddCompanyAvailabilitiesFormValid,
      isAddCompanyDetailsFormValid,
      isAddCompanyServicesFormValid,
      addCompanyServicesForm,
    ]
  );
  const {
    activeStep,
    completed,
    handleNext,
    handleBack,
    handleStep,
    isBackButtonDisabled,
  } = useCreateCompanyStepper(steps);

  return (
    <StyledContainer>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={completed[index]}>
            <StepButton color="inherit" disabled onClick={handleStep(index)}>
              {step.title}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <StyledStepContainer>
        <>
          <StyledStepTitle>{steps[activeStep].title}</StyledStepTitle>
          <StyledStepContent>{steps[activeStep].component}</StyledStepContent>
          <StyledButtonsContainer>
            <CustomButton
              width={STEPPER_BUTTON_WIDTH}
              onClick={handleBack}
              title={translate("common.back")}
              isDisabled={isBackButtonDisabled}
            />
            <StyledButtonSeparator />
            <CustomButton
              width={STEPPER_BUTTON_WIDTH}
              onClick={handleNext}
              title={translate("common.next")}
              isDisabled={!steps[activeStep].isValid}
            />
          </StyledButtonsContainer>
        </>
      </StyledStepContainer>
    </StyledContainer>
  );
};

export default CreateCompanyStepper;
