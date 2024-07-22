import {
  EMAIL_REGEX,
  MAX_STRING_LENGTH,
  MIN_STRING_LENGTH,
  MIN_STRING_REQUIRED_LENGTH,
} from "utils/constants";
import { translate } from "locales/i18n";
import { z } from "zod";
import { PASSWORD_REGEX, signUpValidation } from "../utils/auth.constants";
import { UserRoleEnum } from "utils/enums";

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(
        MIN_STRING_REQUIRED_LENGTH,
        translate("validation.required", {
          field: translate("auth.sign_up.first_name"),
        })
      )
      .min(
        MIN_STRING_LENGTH,
        translate("validation.string.min", {
          field: translate("auth.sign_up.first_name"),
          min: MIN_STRING_LENGTH,
        })
      )
      .max(
        MAX_STRING_LENGTH,
        translate("validation.string.max", {
          field: translate("auth.sign_up.first_name"),
          max: MAX_STRING_LENGTH,
        })
      ),
    lastName: z
      .string()
      .trim()
      .min(
        MIN_STRING_REQUIRED_LENGTH,
        translate("validation.required", {
          field: translate("auth.sign_up.last_name"),
        })
      )
      .min(
        MIN_STRING_LENGTH,
        translate("validation.string.min", {
          field: translate("auth.sign_up.last_name"),
          min: MIN_STRING_LENGTH,
        })
      )
      .max(
        MAX_STRING_LENGTH,
        translate("validation.string.max", {
          field: translate("auth.sign_up.last_name"),
          max: MAX_STRING_LENGTH,
        })
      ),
    userType: z.number().refine(
      (value) =>
        value === UserRoleEnum.CompanyOwner || value === UserRoleEnum.User,
      translate("validation.required", {
        field: translate("auth.sign_up.user_type"),
      })
    ),
    email: z
      .string()
      .trim()
      .min(
        MIN_STRING_REQUIRED_LENGTH,
        translate("validation.required", {
          field: translate("auth.sign_up.email"),
        })
      )
      .regex(
        EMAIL_REGEX,
        translate("validation.string.regex", {
          field: translate("auth.sign_up.email"),
        })
      ),
    password: z
      .string()
      .trim()
      .min(
        MIN_STRING_REQUIRED_LENGTH,
        translate("validation.required", {
          field: translate("auth.sign_up.password"),
        })
      )
      .min(
        signUpValidation.password.MIN_LENGTH,
        translate("validation.string.min", {
          field: translate("auth.sign_up.password"),
          min: signUpValidation.password.MIN_LENGTH,
        })
      )
      .max(
        signUpValidation.password.MAX_LENGTH,
        translate("validation.string.max", {
          field: translate("auth.sign_up.password"),
          max: signUpValidation.password.MAX_LENGTH,
        })
      )
      .regex(
        PASSWORD_REGEX,
        translate("validation.password.regex", {
          field: translate("auth.sign_up.password"),
          uppercase: signUpValidation.password.MIN_UPPERCASE,
          lowercase: signUpValidation.password.MIN_LOWERCASE,
          number: signUpValidation.password.MIN_NUMBERS,
          special: signUpValidation.password.MIN_SYMBOLS,
        })
      ),
    confirmPassword: z
      .string()
      .trim()
      .min(
        MIN_STRING_REQUIRED_LENGTH,
        translate("validation.required", {
          field: translate("auth.sign_up.confirm_password"),
        })
      )
      .min(
        signUpValidation.password.MIN_LENGTH,
        translate("validation.string.min", {
          field: translate("auth.sign_up.confirm_password"),
          min: signUpValidation.password.MIN_LENGTH,
        })
      )
      .max(
        signUpValidation.password.MAX_LENGTH,
        translate("validation.string.max", {
          field: translate("auth.sign_up.confirm_password"),
          length: signUpValidation.password.MAX_LENGTH,
        })
      )
      .regex(
        PASSWORD_REGEX,
        translate("validation.password.regex", {
          field: translate("auth.sign_up.confirm_password"),
          uppercase: signUpValidation.password.MIN_UPPERCASE,
          lowercase: signUpValidation.password.MIN_LOWERCASE,
          number: signUpValidation.password.MIN_NUMBERS,
          special: signUpValidation.password.MIN_SYMBOLS,
        })
      ),
    hasAgreedToTerms: z.boolean().refine(
      (data) => data === true,
      translate("validation.required", {
        field: translate("auth.sign_up.agree_to_terms"),
      })
    ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: translate("validation.password.mismatch"),
    path: ["confirm_password"],
  });

export type SignUpSchemaType = z.infer<typeof signUpSchema>;

export const userSignUpDefaultValues: Partial<SignUpSchemaType> = {
  firstName: "",
  lastName: "",
  userType: undefined,
  email: "",
  password: "",
  confirmPassword: "",
  hasAgreedToTerms: false,
};
