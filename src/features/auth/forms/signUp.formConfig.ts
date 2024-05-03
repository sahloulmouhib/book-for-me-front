import { EMAIL_REGEX, MIN_STRING_REQUIRED_LENGTH } from "constant";
import { translate } from "locales/i18n";
import { z } from "zod";

export const signUpSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(
      MIN_STRING_REQUIRED_LENGTH,
      translate("validation.required", {
        field: translate("auth.sign_up.first_name"),
      })
    ),
  last_name: z
    .string()
    .trim()
    .min(
      MIN_STRING_REQUIRED_LENGTH,
      translate("validation.required", {
        field: translate("auth.sign_up.last_name"),
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
    ),
  confirm_password: z
    .string()
    .trim()
    .min(
      MIN_STRING_REQUIRED_LENGTH,
      translate("validation.required", {
        field: translate("auth.sign_up.confirm_password"),
      })
    ),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;

export const signUpDefaultValues: SignUpSchemaType = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};
