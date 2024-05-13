import React from "react";

import {
  StyledContainer,
  StyledIconTitle,
  StyledLabel,
  StyledUploadButtonContainer,
} from "./customUploadButton.styles";
import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import { spacing } from "utils/dimensions";

interface CustomUploadButtonProps {
  onUpload: () => void;
  label: string;
  description?: string;
}

const CustomUploadButton: React.FC<CustomUploadButtonProps> = ({
  label,
  description,
}) => {
  return (
    <StyledContainer spacing={spacing.XS}>
      <StyledLabel variant="subtitle1">{label}</StyledLabel>
      <StyledUploadButtonContainer>
        <AddPhotoAlternateOutlined
          color="secondary"
          style={{ width: 60, height: 60 }}
        />
        {!!description && <StyledIconTitle>{description}</StyledIconTitle>}
      </StyledUploadButtonContainer>
    </StyledContainer>
  );
};

export default CustomUploadButton;
