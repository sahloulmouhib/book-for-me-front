import { isBefore } from "date-fns";
import { translate } from "locales/i18n";
import { z } from "zod";
const availabilitiesSchema = z.array(
  z
    .object({
      startTime: z.date().nullable(),
      endTime: z.date().nullable(),
    })
    .refine((availability) => {
      const { startTime, endTime } = availability;
      if (startTime === null && endTime === null) return true;
      return startTime !== null && endTime !== null
        ? isBefore(startTime, endTime)
        : false;
    }, translate("availability.start_time_lower_than_end_time"))
);
export type AvailabilitiesSchemaType = z.infer<typeof availabilitiesSchema>;

export const addCompanyAvailabilitiesSchema = z.object({
  monday: availabilitiesSchema,
  tuesday: availabilitiesSchema,
  wednesday: availabilitiesSchema,
  thursday: availabilitiesSchema,
  friday: availabilitiesSchema,
  saturday: availabilitiesSchema,
  sunday: availabilitiesSchema,
});

export type AddCompanyAvailabilitiesSchemaType = z.infer<
  typeof addCompanyAvailabilitiesSchema
>;

const availabilitiesSchemaDefaultValues: AvailabilitiesSchemaType = [
  {
    startTime: null,
    endTime: null,
  },
];

export const addCompanyAvailabilitiesDefaultValues: AddCompanyAvailabilitiesSchemaType =
  {
    monday: availabilitiesSchemaDefaultValues,
    tuesday: availabilitiesSchemaDefaultValues,
    wednesday: availabilitiesSchemaDefaultValues,
    thursday: availabilitiesSchemaDefaultValues,
    friday: availabilitiesSchemaDefaultValues,
    saturday: availabilitiesSchemaDefaultValues,
    sunday: availabilitiesSchemaDefaultValues,
  };
