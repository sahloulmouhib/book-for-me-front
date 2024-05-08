import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useCreateCompanyStepper from "features/company/hooks/useCreateCompanyStepper";
import { StepperStep } from "features/company/company.types";
import {
  StyledButtonSeparator,
  StyledButtonsContainer,
  StyledContainer,
  StyledStepContainer,
  StyledStepTitle,
} from "./createCompanyStepper.styles";
import CustomButton from "components/CustomButton/CustomButton";
import CompanyDetails from "../CompanyDetails/CompanyDetails";

const steps: StepperStep[] = [
  {
    title: "Add company details",
    component: <CompanyDetails />,
  },
  {
    title: "Add company Availabilities",
    component: <div>"Create an ad group"</div>,
  },
  { title: "Add company services", component: <div>"Create an ad"</div> },
];

export default function CreateCompanyStepper() {
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
            <StyledStepContainer>
              {steps[activeStep].component}
            </StyledStepContainer>
            <StyledButtonsContainer>
              <CustomButton
                width={100}
                onClick={handleBack}
                title="Back"
                isDisabled={activeStep === 0}
              />
              <StyledButtonSeparator />
              <CustomButton width={100} onClick={handleNext} title="Next" />
            </StyledButtonsContainer>
          </>
        )}
      </StyledStepContainer>
    </StyledContainer>
  );
}
