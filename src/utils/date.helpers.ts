import { getHours, getMinutes } from "date-fns";

export const getTotalMinutes = (date: Date) => {
  const hours = getHours(date);
  const minutes = getMinutes(date);
  return hours * 60 + minutes;
};
