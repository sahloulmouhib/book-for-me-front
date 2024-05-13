import React from "react";
import {
  NoAccountTitleStyle,
  StyledFormContainer,
  StyledPageContainer,
  StyledPageSubtitle,
  StyledPageTittle,
  StyledRowContainer,
  StyledSignUpContainer,
} from "./signInForm.styles";
import CustomBorderlessButton from "components/CustomBorderlessButton/CustomBorderlessButton";
import CustomButton from "components/CustomButton/CustomButton";
import CustomIconButton from "components/CustomIconButton/CustomIconButton";
import CustomTextFieldInput from "components/CustomTextField/CustomTextField";
import OrDivider from "../OrDivider/OrDivider";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { SignInSchemaType } from "features/auth/forms/auth.signInFormConfig";
import { translate } from "locales/i18n";
import { Stack } from "@mui/material";

interface SignInFormProps {
  register: UseFormRegister<SignInSchemaType>;
  errors: FieldErrors<SignInSchemaType>;
  isValid: boolean;
  onSubmit: () => void;
  navigateToSignUp: () => void;
}

export const SignInForm: React.FC<SignInFormProps> = ({
  register,
  errors,
  isValid,
  onSubmit,
  navigateToSignUp,
}) => {
  return (
    <StyledPageContainer>
      <Stack>
        <StyledPageTittle>{translate("auth.sign_in.title")}</StyledPageTittle>
        <StyledPageSubtitle>
          {translate("auth.sign_in.subtitle")}
        </StyledPageSubtitle>
      </Stack>

      <CustomIconButton
        icon={"GOOGLE_ICON"}
        title={translate("auth.sign_in.sign_in_with_google")}
        onClick={() => {}}
      />
      <OrDivider />
      <StyledRowContainer>
        <CustomTextFieldInput
          label={translate("auth.sign_in.email")}
          placeholder={translate("auth.sign_in.email")}
          register={register("email")}
          errorMessage={errors.email?.message}
        />
        <CustomTextFieldInput
          label={translate("auth.sign_in.password")}
          placeholder={translate("auth.sign_in.password")}
          register={register("password")}
          isPassword
          errorMessage={errors.password?.message}
        />
      </StyledRowContainer>
      <StyledFormContainer>
        <CustomButton
          isDisabled={!isValid}
          title={translate("auth.sign_in.sign_in")}
          onClick={onSubmit}
        />
        <StyledSignUpContainer>
          <NoAccountTitleStyle>Don't have an account?</NoAccountTitleStyle>
          <CustomBorderlessButton
            title={translate("auth.sign_in.sign_up")}
            onClick={navigateToSignUp}
          />
        </StyledSignUpContainer>
      </StyledFormContainer>
    </StyledPageContainer>
  );
};
