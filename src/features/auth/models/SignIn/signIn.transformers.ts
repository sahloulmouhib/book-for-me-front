import { SignInSchemaType } from "features/auth/forms/signIn.formConfig";
import { decodeSignUp } from "../SignUp/signUp.transformers";
import { SignInPayload } from "./signIn.types";

export const decodeSignIn = decodeSignUp;

export const encodeSignIn = (data: SignInSchemaType): SignInPayload => {
  return {
    email: data.email,
    password: data.password,
  };
};
