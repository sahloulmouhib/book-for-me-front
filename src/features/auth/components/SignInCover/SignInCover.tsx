import React from "react";
import {
  StyledCoverImage,
  StyledCoverImageContainer,
  StyledCoverImageSubtitleText,
  StyledCoverImageTitleText,
} from "./signInCover.styles";
import { Stack } from "@mui/material";
import { images } from "utils/images";

interface SignInCoverProps {}

export const SignInCover: React.FC<SignInCoverProps> = () => {
  return (
    <StyledCoverImageContainer>
      <Stack>
        <StyledCoverImageTitleText>
          Make your bookings with us !
        </StyledCoverImageTitleText>
        <StyledCoverImageSubtitleText>
          start your journey with us and make your bookings
        </StyledCoverImageSubtitleText>
      </Stack>
      <StyledCoverImage src={images.DATES_COVER} />
    </StyledCoverImageContainer>
  );
};
