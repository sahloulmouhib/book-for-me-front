import React from "react";

import { StyledLabel } from "./customFormLabel.styles";

interface CustomFormLabelProps {
  children: string;
}

const CustomFormLabel: React.FC<CustomFormLabelProps> = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

export default CustomFormLabel;
