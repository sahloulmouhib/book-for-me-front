import { UserRoleEnum } from "utils/enums";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRoleEnum;
}

export interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRoleEnum;
}
