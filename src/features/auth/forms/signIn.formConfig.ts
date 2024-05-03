import { EMAIL_REGEX, MIN_STRING_REQUIRED_LENGTH } from "constant";
import { translate } from "locales/i18n";
import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(
      MIN_STRING_REQUIRED_LENGTH,
      translate("validation.required", {
        field: translate("auth.sign_in.email"),
      })
    )
    .regex(
      EMAIL_REGEX,
      translate("validation.string.regex", {
        field: translate("auth.sign_in.email"),
      })
    ),
  password: z
    .string()
    .trim()
    .min(
      MIN_STRING_REQUIRED_LENGTH,
      translate("validation.required", {
        field: translate("auth.sign_in.password"),
      })
    ),
});

export type SignInSchemaType = z.infer<typeof signInSchema>;

export const signInDefaultValues: SignInSchemaType = {
  email: "",
  password: "",
};
