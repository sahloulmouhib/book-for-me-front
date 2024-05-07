import { UserRoleEnum } from "utils/enums";
import { User, UserResponse } from "../User/user.types";

export interface SignUpResponse {
  user: UserResponse;
  accessToken: string;
}

export interface SignUp {
  user: User;
  accessToken: string;
}

export interface SignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRoleEnum.User;
}
