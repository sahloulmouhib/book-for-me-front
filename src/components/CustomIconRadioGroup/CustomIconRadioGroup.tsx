import CustomIconRadioButton from "components/CustomIconRadioButton/CustomIconRadioButton";
import React from "react";
import { CustomIconRadioButtonType } from "utils/types";
import { StyledContainer } from "./customIconRadioGroup.styles";

interface CustomIconRadioGroupProps {
  radioGroup: CustomIconRadioButtonType[];
  onValueChange: (value: string | number) => void;
  selectedValue: string | number;
}

const CustomIconRadioGroup: React.FC<CustomIconRadioGroupProps> = ({
  radioGroup,
  onValueChange,
  selectedValue,
}) => {
  return (
    <StyledContainer>
      {radioGroup.map((radioButton) => (
        <CustomIconRadioButton
          onClick={() => onValueChange(radioButton.value)}
          key={radioButton.value}
          title={radioButton.title}
          Image={radioButton.image}
          isSelected={radioButton.value === selectedValue}
        />
      ))}
    </StyledContainer>
  );
};

export default CustomIconRadioGroup;
