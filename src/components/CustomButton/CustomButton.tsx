import React from "react";
import { StyledRoot } from "./customButton.styles";

interface CustomButtonProps {
  onClick: () => void;
  title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, title }) => {
  return (
    <StyledRoot onClick={onClick} variant="contained">
      {title}
    </StyledRoot>
  );
};

export default CustomButton;
