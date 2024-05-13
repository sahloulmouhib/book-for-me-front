import { User, UserResponse } from "./user.types";

export const decodeUser = (response: UserResponse): User => {
  return {
    id: response.id,
    firstName: response.firstName,
    lastName: response.lastName,
    email: response.email,
    role: response.role,
  };
};
