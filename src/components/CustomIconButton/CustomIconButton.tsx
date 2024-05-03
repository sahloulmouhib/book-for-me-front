import React from "react";
import { StyledRoot } from "./customIconButton.styles";
import { images } from "utils/images";

interface CustomIconButtonProps {
  onClick: () => void;
  title: string;
  icon: keyof typeof images;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
  onClick,
  title,
  icon,
}) => {
  return (
    <StyledRoot
      startIcon={<img src={images[icon]} height={25} alt="google" />}
      onClick={onClick}
      variant="outlined"
    >
      {title}
    </StyledRoot>
  );
};

export default CustomIconButton;
