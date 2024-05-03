import React from "react";
import { StyledContainer } from "./signInPage.styles";
import { SignInCover } from "features/auth/components/SignInCover/SignInCover";
import { SignInForm } from "features/auth/components/SignInForm/SignInFrom";

const SignInPage: React.FC = () => {
  return (
    <StyledContainer>
      <SignInCover />
      <SignInForm />
    </StyledContainer>
  );
};

export default SignInPage;
