import React, { useEffect } from "react";
import { StyledContainer } from "./signInPage.styles";
import { SignInCover } from "features/auth/components/SignInCover/SignInCover";
import { SignInForm } from "features/auth/components/SignInForm/SignInFrom";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignInSchemaType,
  signInDefaultValues,
  signInSchema,
} from "features/auth/forms/signIn.formConfig";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signInMutationFn } from "features/auth/api/auth.api";
import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "store/global.store";
import { AxiosError } from "axios";
import { HttpStatusCodeEnum } from "api/api.enums";
import { toast } from "react-toastify";
import { translate } from "locales/i18n";
import { AUTH_PATH, DASHBOARD_PATH, SIGN_UP_PATH } from "routes/routes.paths";
import { jointPaths } from "utils/helpers";

const SignInPage: React.FC = () => {
  const { showLoader, hideLoader, setUserAndAccessToken } = useGlobalStore();
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate(jointPaths([AUTH_PATH, SIGN_UP_PATH]));
  };

  const { register, formState, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: signInDefaultValues,
    resolver: zodResolver(signInSchema),
  });
  const { errors, isValid } = formState;

  const { mutateAsync: signInUserApi, isPending } = useMutation({
    mutationFn: signInMutationFn,
  });

  const handleSignIn = async (data: SignInSchemaType) => {
    try {
      const { accessToken, user } = await signInUserApi(data);
      setUserAndAccessToken(user, accessToken);
      navigate(jointPaths([DASHBOARD_PATH]));
    } catch (error) {
      if (
        error instanceof AxiosError &&
        error.response?.status === HttpStatusCodeEnum.Unauthorized
      ) {
        toast.error(translate("auth.sign_in.errors.invalid_credentials"));
      } else {
        toast.error(translate("errors.server"));
      }
    }
  };

  const onSubmit = () => {
    handleSubmit((data) => {
      handleSignIn(data);
    })();
  };

  useEffect(() => {
    isPending ? showLoader() : hideLoader();
  }, [isPending]);

  return (
    <StyledContainer>
      <SignInCover />
      <SignInForm
        register={register}
        errors={errors}
        isValid={isValid}
        onSubmit={onSubmit}
        navigateToSignUp={navigateToSignUp}
      />
    </StyledContainer>
  );
};

export default SignInPage;
