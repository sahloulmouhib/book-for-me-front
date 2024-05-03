import React from "react";
import {
  StyledInput,
  StyledStack,
  StyledLabel,
} from "./customTextField.styles";
import { distance, fontSize, spacing } from "utils/dimensions";

interface CustomTextFieldInputProps {
  label: string;
  placeholder: string;
}

const CustomTextFieldInput: React.FC<CustomTextFieldInputProps> = ({
  placeholder,
  label,
}) => {
  return (
    <StyledStack spacing={spacing.XS}>
      <StyledLabel variant="subtitle1">{label}</StyledLabel>
      <StyledInput
        inputProps={{
          style: {
            padding: distance.M,
            fontSize: fontSize.M,
            fontWeight: "500",
          },
        }}
        placeholder={placeholder}
      />
    </StyledStack>
  );
};

export default CustomTextFieldInput;
