import { SignInSchemaType } from "features/auth/forms/auth.signInFormConfig";
import { decodeSignUp } from "../SignUp/signUp.transformers";
import { SignInPayload } from "./signIn.types";

export const decodeSignIn = decodeSignUp;

export const encodeSignIn = (data: SignInSchemaType): SignInPayload => {
  return {
    email: data.email,
    password: data.password,
  };
};
