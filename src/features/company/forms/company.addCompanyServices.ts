import { translate } from "locales/i18n";
import {
  MAX_MULTILINE_STRING_LENGTH,
  MAX_STRING_LENGTH,
  MIN_STRING_REQUIRED_LENGTH,
} from "utils/constants";
import { z } from "zod";

export const addCompanyServiceSchema = z.object({
  title: z
    .string()
    .trim()
    .min(
      MIN_STRING_REQUIRED_LENGTH,
      translate("validation.required", {
        field: translate("company.create_company.title"),
      })
    )
    .max(
      MAX_STRING_LENGTH,
      translate("validation.string.max", {
        field: translate("company.create_company.title"),
        length: MAX_STRING_LENGTH,
      })
    ),
  description: z
    .string()
    .trim()
    .min(
      MIN_STRING_REQUIRED_LENGTH,
      translate("validation.required", {
        field: translate("company.create_company.description"),
      })
    )
    .max(
      MAX_MULTILINE_STRING_LENGTH,
      translate("validation.string.max", {
        field: translate("company.create_company.description"),
        length: MAX_MULTILINE_STRING_LENGTH,
      })
    ),
  //   price: z.number().positive(),
  price: z.string(),
});

export type AddCompanyServiceSchemaType = z.infer<
  typeof addCompanyServiceSchema
>;

export const addCompanyServiceDefaultValues: AddCompanyServiceSchemaType = {
  title: "",
  description: "",
  price: "",
};
