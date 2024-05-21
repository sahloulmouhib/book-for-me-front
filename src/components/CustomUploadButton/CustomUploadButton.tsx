import React, { ChangeEvent } from "react";

import {
  StyledContainer,
  StyledDeleteIconContainer,
  StyledIconTitle,
  StyledImagePreview,
  StyledLabel,
  StyledPreviewContainer,
  StyledUploadButtonContainer,
  StyledVisuallyHiddenInput,
} from "./customUploadButton.styles";
import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import { spacing } from "utils/dimensions";
import DeleteIcon from "@mui/icons-material/Delete";

interface CustomUploadButtonProps {
  onUpload: (event: ChangeEvent<HTMLInputElement>) => void;
  onDelete?: () => void;
  label: string;
  description?: string;
  image?: File;
}

const CustomUploadButton: React.FC<CustomUploadButtonProps> = ({
  label,
  description,
  onUpload,
  image,
  onDelete,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const openFilePicker = () => {
    inputRef.current?.click();
  };

  const previewUrl = image ? URL.createObjectURL(image) : undefined;

  return (
    <StyledContainer spacing={spacing.XS}>
      <StyledLabel variant="subtitle1">{label}</StyledLabel>
      <StyledUploadButtonContainer onClick={openFilePicker}>
        {!previewUrl ? (
          <>
            <AddPhotoAlternateOutlined
              color="secondary"
              style={{ width: 60, height: 60 }}
            />
            {!!description && <StyledIconTitle>{description}</StyledIconTitle>}
          </>
        ) : (
          <StyledPreviewContainer>
            <StyledImagePreview src={previewUrl} />
            <StyledDeleteIconContainer onClick={onDelete} color="warning">
              <DeleteIcon
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </StyledDeleteIconContainer>
          </StyledPreviewContainer>
        )}
      </StyledUploadButtonContainer>
      <StyledVisuallyHiddenInput
        accept="image/*"
        ref={inputRef}
        type="file"
        multiple={false}
        onChange={onUpload}
      />
    </StyledContainer>
  );
};

export default CustomUploadButton;
