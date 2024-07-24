import { SignInSchemaType } from "features/auth/forms/signIn.formConfig";
import { SignIn, SignInPayload, SignInResponse } from "./signIn.types";
import { decodeUser } from "../User/user.transformers";

export const decodeSignIn = (response: SignInResponse): SignIn => {
  return {
    user: decodeUser(response.user),
    accessToken: response.accessToken,
    isUserCompanyCreated: response.isUserCompanyCreated,
  };
};

export const encodeSignIn = (data: SignInSchemaType): SignInPayload => {
  return {
    email: data.email,
    password: data.password,
  };
};
