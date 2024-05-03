import React from "react";
import {
  StyledCoverImage,
  StyledCoverImageContainer,
  StyledCoverImageSubtitleText,
  StyledCoverImageTitleText,
} from "./signInCover.styles";
import { Stack } from "@mui/material";
import { images } from "utils/images";
import { translate } from "locales/i18n";

interface SignInCoverProps {}

export const SignInCover: React.FC<SignInCoverProps> = () => {
  return (
    <StyledCoverImageContainer>
      <Stack>
        <StyledCoverImageTitleText>
          {translate("auth.sign_in.welcome_back")}
        </StyledCoverImageTitleText>
        <StyledCoverImageSubtitleText>
          {translate("auth.sign_in.sign_in_now")}
        </StyledCoverImageSubtitleText>
      </Stack>
      <StyledCoverImage src={images.DATES_COVER} />
    </StyledCoverImageContainer>
  );
};
