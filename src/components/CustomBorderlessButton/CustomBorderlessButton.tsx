import React from "react";
import { StyledBorderlessButton } from "./customBorderlessButton.styles";

interface CustomBorderlessButtonProps {
  onClick: () => void;
  title: string;
}

const CustomBorderlessButton: React.FC<CustomBorderlessButtonProps> = ({
  onClick,
  title,
}) => {
  return (
    <StyledBorderlessButton onClick={onClick} variant="text">
      {title}
    </StyledBorderlessButton>
  );
};

export default CustomBorderlessButton;
