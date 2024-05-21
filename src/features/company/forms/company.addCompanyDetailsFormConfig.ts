import { translate } from "locales/i18n";
import {
  MAX_MULTILINE_STRING_LENGTH,
  MAX_STRING_LENGTH,
  MIN_STRING_REQUIRED_LENGTH,
} from "utils/constants";
import { z } from "zod";

export const addCompanyDetailsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(
      MIN_STRING_REQUIRED_LENGTH,
      translate("validation.required", {
        field: translate("company.create_company.name"),
      })
    )
    .max(
      MAX_STRING_LENGTH,
      translate("validation.string.max", {
        field: translate("company.create_company.name"),
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
  image: z.instanceof(File).optional(),
});

export type AddCompanyDetailsSchemaType = z.infer<
  typeof addCompanyDetailsSchema
>;

export const addCompanyDetailsDefaultValues: AddCompanyDetailsSchemaType = {
  name: "",
  description: "",
  image: undefined,
};
