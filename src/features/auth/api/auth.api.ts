import axiosInstance from "api/axios";
import { UserSignUpSchemaType } from "../forms/auth.signUpFormConfig";
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

export const signUpUserMutationFn = async (data: UserSignUpSchemaType) => {
  const payload = encodeSignUp(data);
  const response = await axiosInstance.post<
    unknown,
    AxiosResponse<SignUpResponse>
  >(authEndpoints.SIGN_UP_USER, payload);

  return decodeSignUp(response.data);
};

export const signInUserMutationFn = async (data: UserSignUpSchemaType) => {
  const payload = encodeSignIn(data);
  const response = await axiosInstance.post<
    unknown,
    AxiosResponse<SignUpResponse>
  >(authEndpoints.SIGN_IN_USER, payload);
  return decodeSignIn(response.data);
};
