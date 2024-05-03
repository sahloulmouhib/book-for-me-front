import React from "react";
import {
  StyledCoverImage,
  StyledCoverImageContainer,
  StyledCoverImageSubtitleText,
  StyledCoverImageTitleText,
} from "./signUpCover.styles";
import { Stack } from "@mui/material";
import { images } from "utils/images";
import { translate } from "locales/i18n";

interface SignUpCoverProps {}

export const SignUpCover: React.FC<SignUpCoverProps> = () => {
  return (
    <StyledCoverImageContainer>
      <Stack>
        <StyledCoverImageTitleText>
          {translate("auth.sign_up.make_bookings")}
        </StyledCoverImageTitleText>
        <StyledCoverImageSubtitleText>
          {translate("auth.sign_up.start_journey")}
        </StyledCoverImageSubtitleText>
      </Stack>
      <StyledCoverImage src={images.OPEN_DOOR} />
    </StyledCoverImageContainer>
  );
};
