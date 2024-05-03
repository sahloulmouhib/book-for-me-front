import React from "react";
import { StyledRoot } from "./customButton.styles";

interface CustomButtonProps {
  onClick: () => void;
  title: string;
  isDisabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  title,
  isDisabled,
}) => {
  return (
    <StyledRoot onClick={onClick} disabled={isDisabled} variant="contained">
      {title}
    </StyledRoot>
  );
};

export default CustomButton;
