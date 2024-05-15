import { isBefore } from "date-fns";
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
      // TODO: add to translation
    }, "Start time must be before end time")
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
