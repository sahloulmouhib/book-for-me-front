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
import { Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material";
import { SignUpSchemaType } from "features/auth/forms/signUp.formConfig";
import { SMALL_BOX_WIDTH } from "utils/dimensions";

interface SignInFormProps {
  register: UseFormRegister<SignUpSchemaType>;
  errors: FieldErrors<SignUpSchemaType>;
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
            register={register("first_name")}
            errorMessage={errors.first_name?.message}
          />
          <CustomTextFieldInput
            width={SMALL_BOX_WIDTH}
            label={translate("auth.sign_up.last_name")}
            placeholder={translate("auth.sign_up.last_name")}
            register={register("last_name")}
            errorMessage={errors.last_name?.message}
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
          register={register("confirm_password")}
          isPassword
          errorMessage={errors.confirm_password?.message}
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label={translate("auth.sign_up.agree_to_terms")}
          />
        </FormGroup>
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
