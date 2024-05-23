import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  AddCompanyAvailabilitiesSchemaType,
  addCompanyAvailabilitiesSchema,
  addCompanyAvailabilitiesDefaultValues,
} from "features/availability/forms/addCompanyAvailabilities.formConfig";
import {
  addCompanyImageMutationFn,
  createCompanyMutationFn,
} from "features/company/api/company.api";
import {
  AddCompanyDetailsSchemaType,
  addCompanyDetailsSchema,
  addCompanyDetailsDefaultValues,
} from "features/company/forms/addCompanyDetails.FormConfig";
import {
  addCompanyServiceDefaultValues,
  addCompanyServiceSchema,
} from "features/service/forms/addCompanyService.fromConfig";
import useAddCompanyServices from "features/service/hooks/useAddCompanyServices";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

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

  const getFormData = () => {
    return {
      companyDetails: addCompanyDetailsForm.getValues(),
      availabilities: addCompanyAvailabilitiesForm.getValues(),
      services: addCompanyServicesForm.addedServices,
    };
  };

  const { mutateAsync: createCompanyApi } = useMutation({
    mutationFn: createCompanyMutationFn,
  });

  const { mutateAsync: addCompanyImageApi } = useMutation({
    mutationFn: addCompanyImageMutationFn,
  });

  const handleCreateCompany = async () => {
    const data = getFormData();
    try {
      const result = await createCompanyApi(data);
      const companyId = result.companyId;
      const { image } = addCompanyDetailsForm.getValues();
      image && (await addCompanyImageApi({ companyId, image }));

      toast.success("Company created successfully");
    } catch (error) {
      toast.error("Failed to create company");
    }
  };

  return {
    addCompanyDetailsForm,
    addCompanyAvailabilitiesForm,
    addCompanyServicesForm,
    isAddCompanyDetailsFormValid,
    isAddCompanyAvailabilitiesFormValid,
    isAddCompanyServicesFormValid,
    handleCreateCompany,
  };
};

export default useCreateCompanyForm;
