import { Stack } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddCompanyAvailabilitiesSchemaType,
  addCompanyAvailabilitiesDefaultValues,
  addCompanyAvailabilitiesSchema,
} from "features/company/forms/company.addCompanyAvailablitiesFormConfig";
import CompanyAvailabilityPicker from "../CompanyAvailabilityPicker/CompanyAvailabilityPicker";
interface AddCompanyAvailabilitiesProps {}

const AddCompanyAvailabilities: React.FC<
  AddCompanyAvailabilitiesProps
> = () => {
  const { control } = useForm<AddCompanyAvailabilitiesSchemaType>({
    mode: "onChange",
    resolver: zodResolver(addCompanyAvailabilitiesSchema),
    defaultValues: addCompanyAvailabilitiesDefaultValues,
  });
  return (
    <Stack>
      <CompanyAvailabilityPicker
        weekday="Monday"
        control={control}
        name="monday"
      />
      {/* <CompanyAvailabilityPicker weekday="Tuesday" />
      <CompanyAvailabilityPicker weekday="Wednesday" />
      <CompanyAvailabilityPicker weekday="Thursday" />
      <CompanyAvailabilityPicker weekday="Friday" />
      <CompanyAvailabilityPicker weekday="Saturday" />
      <CompanyAvailabilityPicker weekday="Sunday" /> */}
    </Stack>
  );
};

export default AddCompanyAvailabilities;
