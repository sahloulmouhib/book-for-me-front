import React, { useEffect } from "react";
import { StyledContainer } from "./signUpPage.styles";
import { SignUpCover } from "features/auth/components/SignUpCover/SignUpCover";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignUpForm } from "features/auth/components/SignUpForm/SignUpForm";
import {
  signUpSchemaType,
  userSignUpDefaultValues,
  signUpSchema,
} from "features/auth/forms/auth.signUpFormConfig";
import { useMutation } from "@tanstack/react-query";
import { signUpMutationFn } from "features/auth/api/auth.api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { HttpStatusCodeEnum } from "api/api.enums";
import { translate } from "locales/i18n";
import { useGlobalStore } from "store/global.store";

const SignUpPage: React.FC = () => {
  const { showLoader, hideLoader, setUserAndAccessToken } = useGlobalStore();
  const navigate = useNavigate();

  const { mutateAsync: signUpUserApi, isPending } = useMutation({
    mutationFn: signUpMutationFn,
  });

  const { register, formState, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: userSignUpDefaultValues,
    resolver: zodResolver(signUpSchema),
  });
  const { errors, isValid } = formState;

  const handleSignUp = async (data: signUpSchemaType) => {
    try {
      const { accessToken, user } = await signUpUserApi(data);
      setUserAndAccessToken(user, accessToken);
      // TODO: change to navigate to sign-in page
      navigate("sign-in");
    } catch (error) {
      if (
        error instanceof AxiosError &&
        error.response?.status === HttpStatusCodeEnum.Conflict
      ) {
        toast.error(translate("auth.sign_up.errors.email_exists"));
      } else {
        toast.error(translate("errors.server"));
      }
    }
  };

  const onSubmit = () => {
    handleSubmit((data) => {
      handleSignUp(data);
    })();
  };
  useEffect(() => {
    isPending ? showLoader() : hideLoader();
  }, [isPending]);

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
