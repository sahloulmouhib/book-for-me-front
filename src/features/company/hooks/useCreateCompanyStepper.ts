import { useState } from "react";
import { StepperStep } from "../company.types";

const useCreateCompanyStepper = (steps: StepperStep[]) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = steps.length;

  const nbrOfCompletedSteps = Object.keys(completed).length;

  const isLastStep = activeStep === totalSteps - 1;

  const isAllStepsCompleted = nbrOfCompletedSteps === totalSteps;

  const handleNext = () => {
    const newActiveStep =
      isLastStep && !isAllStepsCompleted
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((_step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return {
    activeStep,
    completed,
    totalSteps,
    nbrOfCompletedSteps,
    isLastStep,
    isAllStepsCompleted,
    handleNext,
    handleBack,
    handleStep,
    handleComplete,
    handleReset,
  };
};

export default useCreateCompanyStepper;
