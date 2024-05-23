import { WeekdayEnum } from "utils/enums";

export interface AvailabilityPayload {
  weekDay: WeekdayEnum;
  slots: AvailabilitySlotPayload[];
}

export interface AvailabilitySlotPayload {
  startTime: number;
  endTime: number;
}
