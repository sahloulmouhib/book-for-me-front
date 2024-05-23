import { sendAxiosRequest } from "api/axios";
import { signUpSchemaType } from "../forms/auth.signUpFormConfig";
import { authEndpoints } from "./auth.endpoints";
import {
  decodeSignUp,
  encodeSignUp,
} from "../models/SignUp/signUp.transformers";
import {
  decodeSignIn,
  encodeSignIn,
} from "../models/SignIn/signIn.transformers";
import { SignInSchemaType } from "../forms/auth.signInFormConfig";
import { HttpMethodEnum } from "api/api.enums";

export const signUpMutationFn = async (data: signUpSchemaType) => {
  return sendAxiosRequest({
    method: HttpMethodEnum.Post,
    url: authEndpoints.SIGN_UP_USER,
    payload: data,
    encoder: encodeSignUp,
    isAuthRequired: false,
    decoder: decodeSignUp,
  });
};

export const signInMutationFn = async (data: SignInSchemaType) => {
  return sendAxiosRequest({
    method: HttpMethodEnum.Post,
    url: authEndpoints.SIGN_IN_USER,
    payload: data,
    encoder: encodeSignIn,
    isAuthRequired: false,
    decoder: decodeSignIn,
  });
};
