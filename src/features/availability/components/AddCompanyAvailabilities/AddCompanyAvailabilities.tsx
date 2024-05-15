import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddCompanyAvailabilitiesSchemaType,
  addCompanyAvailabilitiesDefaultValues,
  addCompanyAvailabilitiesSchema,
} from "features/availability/forms/availability.addCompanyAvailabilitiesFormConfig";
import CompanyAvailabilityPicker, {
  CompanyAvailabilityPickerProps,
} from "../CompanyAvailabilityPicker/CompanyAvailabilityPicker";
import { StyledContainer } from "./addCompanyAvailabilities.styles";
import { translate } from "locales/i18n";
interface AddCompanyAvailabilitiesProps {}

const AddCompanyAvailabilities: React.FC<
  AddCompanyAvailabilitiesProps
> = () => {
  const { control } = useForm<AddCompanyAvailabilitiesSchemaType>({
    mode: "onChange",
    resolver: zodResolver(addCompanyAvailabilitiesSchema),
    defaultValues: addCompanyAvailabilitiesDefaultValues,
  });

  const companyAvailabilityPickerList: Array<
    Omit<CompanyAvailabilityPickerProps, "control">
  > = [
    { weekday: translate("date.week_day.monday"), name: "monday" },
    { weekday: translate("date.week_day.tuesday"), name: "tuesday" },
    { weekday: translate("date.week_day.wednesday"), name: "wednesday" },
    { weekday: translate("date.week_day.thursday"), name: "thursday" },
    { weekday: translate("date.week_day.friday"), name: "friday" },
    { weekday: translate("date.week_day.saturday"), name: "saturday" },
    { weekday: translate("date.week_day.sunday"), name: "sunday" },
  ];

  return (
    <StyledContainer>
      {companyAvailabilityPickerList.map((companyAvailabilityPicker, index) => (
        <CompanyAvailabilityPicker
          key={index}
          control={control}
          {...companyAvailabilityPicker}
        />
      ))}
    </StyledContainer>
  );
};

export default AddCompanyAvailabilities;
