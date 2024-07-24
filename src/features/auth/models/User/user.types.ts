import { UserRoleEnum } from "utils/enums";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRoleEnum;
  isClient: boolean;
}

export interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRoleEnum;
}
