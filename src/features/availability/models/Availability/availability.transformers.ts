import {
  AddCompanyAvailabilitiesSchemaType,
  AvailabilitiesSchemaType,
} from "../../forms/availability.addCompanyAvailabilitiesFormConfig";
import {
  AvailabilityPayload,
  AvailabilitySlotPayload,
} from "./availability.types";
import { getTotalMinutes } from "utils/date.helpers";

export const encodeAvailabilities = (
  availabilities: AddCompanyAvailabilitiesSchemaType
): AvailabilityPayload[] => {
  return Object.keys(availabilities).map((key, index) => {
    const slots: AvailabilitySlotPayload[] = [];
    const weekDayKey = key as keyof typeof availabilities;
    (availabilities[weekDayKey] as AvailabilitiesSchemaType).forEach((slot) => {
      if (slot.startTime !== null && slot.endTime !== null) {
        slots.push({
          startTime: slot.startTime ? getTotalMinutes(slot.startTime) : 0,
          endTime: slot.endTime ? getTotalMinutes(slot.endTime) : 0,
        });
      }
    });
    return { weekDay: index, slots };
  });
};
