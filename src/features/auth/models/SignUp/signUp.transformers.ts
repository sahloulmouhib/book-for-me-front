import { UserRoleEnum } from "utils/enums";
import { SignUp, SignUpPayload, SignUpResponse } from "./signUp.types";
import { SignUpSchemaType } from "features/auth/forms/signUp.formConfig";
import { decodeUser } from "../User/user.transformers";

export const decodeSignUp = (response: SignUpResponse): SignUp => {
  return {
    user: decodeUser(response.user),
    accessToken: response.accessToken,
  };
};

export const encodeSignUp = (data: SignUpSchemaType): SignUpPayload => {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    confirmPassword: data.confirmPassword,
    role: data.userType ?? UserRoleEnum.Client,
  };
};
