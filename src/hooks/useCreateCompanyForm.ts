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
import useAddCompanyServices from "features/service/hooks/useAddCompanyServices";
import { useForm } from "react-hook-form";

const useCreateCompanyForm = () => {
  const addCompanyDetailsForm = useForm<AddCompanyDetailsSchemaType>({
    mode: "onChange",
    resolver: zodResolver(addCompanyDetailsSchema),
    defaultValues: addCompanyDetailsDefaultValues,
  });
  const isAddCompanyDetailsFormValid = addCompanyDetailsForm.formState.isValid;

  const addCompanyAvailabilitiesForm =
    useForm<AddCompanyAvailabilitiesSchemaType>({
      mode: "onChange",
      resolver: zodResolver(addCompanyAvailabilitiesSchema),
      defaultValues: addCompanyAvailabilitiesDefaultValues,
    });
  const isAddCompanyAvailabilitiesFormValid =
    addCompanyAvailabilitiesForm.formState.isValid;

  const addCompanyServiceForm = useForm({
    mode: "onChange",
    defaultValues: addCompanyServiceDefaultValues,
    resolver: zodResolver(addCompanyServiceSchema),
  });
  const addCompanyServicesForm = useAddCompanyServices(addCompanyServiceForm);
  const isAddCompanyServicesFormValid =
    addCompanyServicesForm.addedServices.length > 0;

  return {
    addCompanyDetailsForm,
    addCompanyAvailabilitiesForm,
    addCompanyServicesForm,
    isAddCompanyDetailsFormValid,
    isAddCompanyAvailabilitiesFormValid,
    isAddCompanyServicesFormValid,
  };
};

export default useCreateCompanyForm;
