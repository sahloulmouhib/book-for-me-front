import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddCompanyAvailabilitiesSchemaType,
  addCompanyAvailabilitiesSchema,
  addCompanyAvailabilitiesDefaultValues,
} from "features/availability/forms/availability.addCompanyAvailabilitiesFormConfig";
import {
  AddCompanyDetailsSchemaType,
  addCompanyDetailsSchema,
  addCompanyDetailsDefaultValues,
} from "features/company/forms/company.addCompanyDetailsFormConfig";
import {
  addCompanyServiceDefaultValues,
  addCompanyServiceSchema,
} from "features/service/forms/service.addCompanyServices";
import { useForm } from "react-hook-form";

const useCreateCompanyForm = () => {
  const addCompanyDetailsForm = useForm<AddCompanyDetailsSchemaType>({
    mode: "onChange",
    resolver: zodResolver(addCompanyDetailsSchema),
    defaultValues: addCompanyDetailsDefaultValues,
  });

  const addCompanyAvailabilitiesForm =
    useForm<AddCompanyAvailabilitiesSchemaType>({
      mode: "onChange",
      resolver: zodResolver(addCompanyAvailabilitiesSchema),
      defaultValues: addCompanyAvailabilitiesDefaultValues,
    });

  const addCompanyServicesForm = useForm({
    mode: "onChange",
    defaultValues: addCompanyServiceDefaultValues,
    resolver: zodResolver(addCompanyServiceSchema),
  });

  return {
    addCompanyDetailsForm,
    addCompanyAvailabilitiesForm,
    addCompanyServicesForm,
  };
};

export default useCreateCompanyForm;
