import { translate } from "locales/i18n";
import {
  MAX_MULTILINE_STRING_LENGTH,
  MAX_STRING_LENGTH,
  MIN_POSITIVE_NUMBER,
  MIN_STRING_LENGTH,
  MIN_STRING_REQUIRED_LENGTH,
} from "utils/constants";
import { z } from "zod";
import { MIN_SERVICE_DURATION_MINUTES } from "../utils/service.constants";

export const addCompanyServiceSchema = z.object({
  title: z
    .string()
    .trim()
    .min(
      MIN_STRING_REQUIRED_LENGTH,
      translate("validation.required", {
        field: translate("service.title"),
      })
    )
    .min(
      MIN_STRING_LENGTH,
      translate("validation.string.min", {
        field: translate("service.title"),
        min: MIN_STRING_LENGTH,
      })
    )
    .max(
      MAX_STRING_LENGTH,
      translate("validation.string.max", {
        field: translate("service.title"),
        max: MAX_STRING_LENGTH,
      })
    ),
  description: z
    .string()
    .trim()
    .max(
      MAX_MULTILINE_STRING_LENGTH,
      translate("validation.string.max", {
        field: translate("service.description"),
        max: MAX_MULTILINE_STRING_LENGTH,
      })
    )
    .optional(),
  price: z
    .number({
      invalid_type_error: translate("validation.required", {
        field: translate("service.price"),
      }),
      required_error: translate("validation.required", {
        field: translate("service.price"),
      }),
    })
    .positive({
      message: translate("validation.number.min", {
        field: translate("service.price"),
        min: MIN_POSITIVE_NUMBER,
      }),
    }),
  duration: z
    .number({
      invalid_type_error: translate("validation.required", {
        field: translate("service.duration"),
      }),
      required_error: translate("validation.required", {
        field: translate("service.duration"),
      }),
    })
    .positive({
      message: translate("validation.number.min", {
        field: translate("service.duration"),
        min: MIN_SERVICE_DURATION_MINUTES,
      }),
    }),
});

export type AddCompanyServiceSchemaType = z.infer<
  typeof addCompanyServiceSchema
>;

export const addCompanyServiceDefaultValues: AddCompanyServiceSchemaType = {
  title: "",
  description: "",
  price: 0,
  duration: 0,
};