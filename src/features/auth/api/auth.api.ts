import axiosInstance from "api/axios";
import { signUpSchemaType } from "../forms/auth.signUpFormConfig";
import { authEndpoints } from "./auth.endpoints";
import {
  decodeSignUp,
  encodeSignUp,
} from "../models/SignUp/signUp.transformers";
import { SignUpResponse } from "../models/SignUp/signUp.types";
import { AxiosResponse } from "axios";
import {
  decodeSignIn,
  encodeSignIn,
} from "../models/SignIn/signIn.transformers";
import { SignInSchemaType } from "../forms/auth.signInFormConfig";

export const signUpMutationFn = async (data: signUpSchemaType) => {
  const payload = encodeSignUp(data);
  const response = await axiosInstance.post<
    unknown,
    AxiosResponse<SignUpResponse>
  >(authEndpoints.SIGN_UP_USER, payload);

  return decodeSignUp(response.data);
};

export const signInMutationFn = async (data: SignInSchemaType) => {
  const payload = encodeSignIn(data);
  const response = await axiosInstance.post<
    unknown,
    AxiosResponse<SignUpResponse>
  >(authEndpoints.SIGN_IN_USER, payload);
  return decodeSignIn(response.data);
};
