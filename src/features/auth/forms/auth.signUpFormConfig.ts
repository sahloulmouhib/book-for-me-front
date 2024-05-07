import {
  EMAIL_REGEX,
  MAX_STRING_LENGTH,
  MIN_STRING_LENGTH,
  MIN_STRING_REQUIRED_LENGTH,
} from "constants";
import { translate } from "locales/i18n";
import { z } from "zod";
import { PASSWORD_REGEX, userSignUprValidation } from "../utils/auth.constants";

export const userSignUpSchema = z
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
        userSignUprValidation.password.MIN_LENGTH,
        translate("validation.string.min", {
          field: translate("auth.sign_up.password"),
          min: userSignUprValidation.password.MIN_LENGTH,
        })
      )
      .max(
        userSignUprValidation.password.MAX_LENGTH,
        translate("validation.string.max", {
          field: translate("auth.sign_up.password"),
          max: userSignUprValidation.password.MAX_LENGTH,
        })
      )
      .regex(
        PASSWORD_REGEX,
        translate("validation.password.regex", {
          field: translate("auth.sign_up.password"),
          uppercase: userSignUprValidation.password.MIN_UPPERCASE,
          lowercase: userSignUprValidation.password.MIN_LOWERCASE,
          number: userSignUprValidation.password.MIN_NUMBERS,
          special: userSignUprValidation.password.MIN_SYMBOLS,
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
        userSignUprValidation.password.MIN_LENGTH,
        translate("validation.string.min", {
          field: translate("auth.sign_up.confirm_password"),
          min: userSignUprValidation.password.MIN_LENGTH,
        })
      )
      .max(
        userSignUprValidation.password.MAX_LENGTH,
        translate("validation.string.max", {
          field: translate("auth.sign_up.confirm_password"),
          length: userSignUprValidation.password.MAX_LENGTH,
        })
      )
      .regex(
        PASSWORD_REGEX,
        translate("validation.password.regex", {
          field: translate("auth.sign_up.confirm_password"),
          uppercase: userSignUprValidation.password.MIN_UPPERCASE,
          lowercase: userSignUprValidation.password.MIN_LOWERCASE,
          number: userSignUprValidation.password.MIN_NUMBERS,
          special: userSignUprValidation.password.MIN_SYMBOLS,
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

export type UserSignUpSchemaType = z.infer<typeof userSignUpSchema>;

export const userSignUpDefaultValues: UserSignUpSchemaType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  hasAgreedToTerms: false,
};
