import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
// TODO: refactor to use styled-components

export default function CreateCompanyStepper() {
  const {
    addCompanyAvailabilitiesForm,
    addCompanyDetailsForm,
    addCompanyServicesForm,
  } = useCreateCompanyForm();

  const steps: StepperStep[] = [
    {
      title: "Add company details",
      component: <AddCompanyDetails form={addCompanyDetailsForm} />,
      isValid: addCompanyDetailsForm.formState.isValid,
    },
    {
      title: "Add company Availabilities",
      component: (
        <AddCompanyAvailabilities form={addCompanyAvailabilitiesForm} />
      ),
      isValid: addCompanyAvailabilitiesForm.formState.isValid,
    },
    {
      title: "Add company services",
      component: <AddCompanyServices form={addCompanyServicesForm} />,
      isValid: addCompanyServicesForm.formState.isValid,
    },
  ];
  const {
    activeStep,
    completed,
    isAllStepsCompleted,
    handleNext,
    handleBack,
    handleStep,
    handleReset,
  } = useCreateCompanyStepper(steps);

  return (
    <StyledContainer>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {step.title}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <StyledStepContainer>
        {isAllStepsCompleted ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <>
            <StyledStepTitle>{steps[activeStep].title}</StyledStepTitle>
            <StyledStepContent>{steps[activeStep].component}</StyledStepContent>
            <StyledButtonsContainer>
              <CustomButton
                width={100}
                onClick={handleBack}
                title="Back"
                isDisabled={activeStep === 0}
              />
              <StyledButtonSeparator />
              <CustomButton
                width={100}
                onClick={handleNext}
                title="Next"
                isDisabled={!steps[activeStep].isValid}
              />
            </StyledButtonsContainer>
          </>
        )}
      </StyledStepContainer>
    </StyledContainer>
  );
}
