import React from "react";
import {
  NoAccountTitleStyle,
  StyledFormContainer,
  StyledPageContainer,
  StyledPageTittle,
  StyledRowContainer,
  StyledSignUpContainer,
} from "./signInForm.styles";
import CustomBorderlessButton from "components/CustomBorderlessButton/CustomBorderlessButton";
import CustomButton from "components/CustomButton/CustomButton";
import CustomIconButton from "components/CustomIconButton/CustomIconButton";
import CustomTextFieldInput from "components/CustomTextField/CustomTextField";
import OrDivider from "../OrDivider/OrDivider";

interface SignInFormProps {}

export const SignInForm: React.FC<SignInFormProps> = () => {
  return (
    <StyledPageContainer>
      <StyledPageTittle>Sign in to your account</StyledPageTittle>
      <CustomIconButton
        icon={"GOOGLE_ICON"}
        title="Sign in with Google"
        onClick={() => {}}
      />
      <OrDivider />
      <StyledRowContainer>
        <CustomTextFieldInput label="Email" placeholder="Email" />
        <CustomTextFieldInput label="Password" placeholder="Password" />
      </StyledRowContainer>
      <StyledFormContainer>
        <CustomButton title="Sign in" onClick={() => {}} />
        <StyledSignUpContainer>
          <NoAccountTitleStyle>Don't have an account?</NoAccountTitleStyle>
          <CustomBorderlessButton title="Sign up" onClick={() => {}} />
        </StyledSignUpContainer>
      </StyledFormContainer>
    </StyledPageContainer>
  );
};
