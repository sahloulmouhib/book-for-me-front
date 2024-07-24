import { SignUp, SignUpResponse } from "../SignUp/signUp.types";

export interface SignInResponse extends SignUpResponse {
  isUserCompanyCreated: boolean;
}
export interface SignIn extends SignUp {
  isUserCompanyCreated: boolean;
}

export interface SignInPayload {
  email: string;
  password: string;
}
