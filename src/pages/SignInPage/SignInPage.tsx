import React from "react";
import { StyledContainer } from "./signInPage.styles";
import { SignInCover } from "features/auth/components/SignInCover/SignInCover";
import { SignInForm } from "features/auth/components/SignInForm/SignInFrom";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInDefaultValues,
  signInSchema,
} from "features/auth/forms/auth.signInFormConfig";
import { useForm } from "react-hook-form";

const SignInPage: React.FC = () => {
  const { register, formState, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: signInDefaultValues,
    resolver: zodResolver(signInSchema),
  });
  const { errors, isValid } = formState;

  const onSubmit = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleSubmit((_data) => {})();
  };

  return (
    <StyledContainer>
      <SignInCover />
      <SignInForm
        register={register}
        errors={errors}
        isValid={isValid}
        onSubmit={onSubmit}
      />
    </StyledContainer>
  );
};

export default SignInPage;
