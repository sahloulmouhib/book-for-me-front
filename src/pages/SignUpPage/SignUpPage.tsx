import React from "react";
import { StyledContainer } from "./signUpPage.styles";
import { SignUpCover } from "features/auth/components/SignUpCover/SignUpCover";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignUpForm } from "features/auth/components/SignUpForm/SignUpForm";
import {
  signUpDefaultValues,
  signUpSchema,
} from "features/auth/forms/signUp.formConfig";

const SignUpPage: React.FC = () => {
  const { register, formState, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: signUpDefaultValues,
    resolver: zodResolver(signUpSchema),
  });
  const { errors, isValid } = formState;

  const onSubmit = () => {
    handleSubmit((data) => {
      console.log(data);
    })();
  };

  return (
    <StyledContainer>
      <SignUpCover />
      <SignUpForm
        register={register}
        errors={errors}
        isValid={isValid}
        onSubmit={onSubmit}
      />
    </StyledContainer>
  );
};

export default SignUpPage;
