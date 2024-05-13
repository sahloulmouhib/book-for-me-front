import React from "react";
import { StyledRoot } from "./customButton.styles";
import { BOX_WIDTH } from "utils/dimensions";

interface CustomButtonProps {
  onClick: () => void;
  title: string;
  isDisabled?: boolean;
  width?: string | number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  title,
  isDisabled,
  width,
}) => {
  return (
    <StyledRoot
      style={{ width: width ?? BOX_WIDTH }}
      onClick={onClick}
      disabled={isDisabled}
      variant="contained"
    >
      {title}
    </StyledRoot>
  );
};

export default CustomButton;
