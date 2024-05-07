import React from "react";
import {
  NoAccountTitleStyle,
  StyledFormContainer,
  StyledNameContainer,
  StyledPageContainer,
  StyledPageSubtitle,
  StyledPageTittle,
  StyledRowContainer,
  StyledSignUpContainer,
} from "./signUpForm.styles";
import CustomBorderlessButton from "components/CustomBorderlessButton/CustomBorderlessButton";
import CustomButton from "components/CustomButton/CustomButton";
import CustomIconButton from "components/CustomIconButton/CustomIconButton";
import CustomTextFieldInput from "components/CustomTextField/CustomTextField";
import OrDivider from "../OrDivider/OrDivider";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { translate } from "locales/i18n";
import { Stack } from "@mui/material";
import { UserSignUpSchemaType } from "features/auth/forms/auth.signUpFormConfig";
import { SMALL_BOX_WIDTH } from "utils/dimensions";
import { CustomCheckbox } from "components/CustomCheckbox/CustomCheckbox";

interface SignInFormProps {
  register: UseFormRegister<UserSignUpSchemaType>;
  errors: FieldErrors<UserSignUpSchemaType>;
  isValid: boolean;
  onSubmit: () => void;
}

export const SignUpForm: React.FC<SignInFormProps> = ({
  register,
  errors,
  isValid,
  onSubmit,
}) => {
  return (
    <StyledPageContainer>
      <Stack>
        <StyledPageTittle>{translate("auth.sign_up.title")}</StyledPageTittle>
        <StyledPageSubtitle>
          {translate("auth.sign_up.subtitle")}
        </StyledPageSubtitle>
      </Stack>
      <CustomIconButton
        icon={"GOOGLE_ICON"}
        title={translate("auth.sign_up.sign_up_with_google")}
        onClick={() => {}}
      />
      <OrDivider />
      <StyledRowContainer>
        <StyledNameContainer>
          <CustomTextFieldInput
            width={SMALL_BOX_WIDTH}
            label={translate("auth.sign_up.first_name")}
            placeholder={translate("auth.sign_up.first_name")}
            register={register("firstName")}
            errorMessage={errors.firstName?.message}
          />
          <CustomTextFieldInput
            width={SMALL_BOX_WIDTH}
            label={translate("auth.sign_up.last_name")}
            placeholder={translate("auth.sign_up.last_name")}
            register={register("lastName")}
            errorMessage={errors.lastName?.message}
          />
        </StyledNameContainer>
        <CustomTextFieldInput
          label={translate("auth.sign_up.email")}
          placeholder={translate("auth.sign_up.email")}
          register={register("email")}
          errorMessage={errors.email?.message}
        />
        <CustomTextFieldInput
          label={translate("auth.sign_up.password")}
          placeholder={translate("auth.sign_up.password")}
          register={register("password")}
          isPassword
          errorMessage={errors.password?.message}
        />
        <CustomTextFieldInput
          label={translate("auth.sign_up.confirm_password")}
          placeholder={translate("auth.sign_up.confirm_password")}
          register={register("confirmPassword")}
          isPassword
          errorMessage={errors.confirmPassword?.message}
        />
        <CustomCheckbox register={register("hasAgreedToTerms")} />
      </StyledRowContainer>
      <StyledFormContainer>
        <CustomButton
          isDisabled={!isValid}
          title={translate("auth.sign_up.sign_up")}
          onClick={onSubmit}
        />
        <StyledSignUpContainer>
          <NoAccountTitleStyle>
            {translate("auth.sign_up.have_account")}
          </NoAccountTitleStyle>
          <CustomBorderlessButton
            title={translate("auth.sign_up.sign_in")}
            onClick={() => {}}
          />
        </StyledSignUpContainer>
      </StyledFormContainer>
    </StyledPageContainer>
  );
};
