import { SignUp, SignUpResponse } from "../SignUp/signUp.types";

export type SignInResponse = SignUpResponse;
export type SignIn = SignUp;

export interface SignInPayload {
  email: string;
  password: string;
}
