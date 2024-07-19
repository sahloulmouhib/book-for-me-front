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
} from "features/company/forms/addCompanyDetails.formConfig";
import {
  addCompanyServiceDefaultValues,
  addCompanyServiceSchema,
} from "features/service/forms/addCompanyService.fromConfig";
import useAddCompanyServices from "features/service/hooks/useAddCompanyServices";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useGlobalStore } from "store/global.store";

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

  const { showLoader, hideLoader } = useGlobalStore();

  const handleCreateCompany = async () => {
    try {
      showLoader();
      const data = getFormData();
      const result = await createCompanyApi(data);
      const companyId = result.companyId;
      const { image } = addCompanyDetailsForm.getValues();
      image && (await addCompanyImageApi({ companyId, image }));
      // TODO: add to i18n
      toast.success("Company created successfully");
    } catch (error) {
      // TODO: add to i18n
      toast.error("Failed to create company");
    } finally {
      hideLoader();
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
