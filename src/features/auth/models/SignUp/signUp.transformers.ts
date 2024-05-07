import { UserRoleEnum } from "utils/enums";
import { SignUp, SignUpPayload, SignUpResponse } from "./signUp.types";
import { UserSignUpSchemaType } from "features/auth/forms/auth.signUpFormConfig";
import { decodeUser } from "../User/user.transformers";

export const decodeSignUp = (response: SignUpResponse): SignUp => {
  return {
    user: decodeUser(response.user),
    accessToken: response.accessToken,
  };
};

export const encodeSignUp = (data: UserSignUpSchemaType): SignUpPayload => {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    confirmPassword: data.confirmPassword,
    role: UserRoleEnum.User,
  };
};
