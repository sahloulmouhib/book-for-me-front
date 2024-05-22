import React from "react";
import { Box, Stack } from "@mui/material";
import CustomTextFieldInput from "components/CustomTextField/CustomTextField";
import AddIcon from "@mui/icons-material/Add";
import useAddCompanyServices from "features/service/hooks/useAddCompanyServices";
import {
  StyledAddIconContainer,
  StyledFormContainer,
} from "./addCompanyServices.styles";

import { spacing } from "utils/dimensions";
import CompanyServiceList from "features/service/components/CompanyServiceList/CompanyServiceList";
import {
  ADD_COMPANY_SERVICE_DURATION_WIDTH,
  ADD_COMPANY_SERVICE_PRICE_WIDTH,
} from "features/service/utils/service.constants";
import { translate } from "locales/i18n";
interface AddCompanyServicesProps {
  addCompanyServicesForm: ReturnType<typeof useAddCompanyServices>;
}

const AddCompanyServices: React.FC<AddCompanyServicesProps> = ({
  addCompanyServicesForm,
}) => {
  const {
    register,
    onAddService,
    addedServices,
    deleteService,
    editService,
    errors,
    isValid,
  } = addCompanyServicesForm;
  return (
    <Box width={"65%"}>
      <Stack spacing={spacing.S}>
        <CustomTextFieldInput
          label={translate("service.title")}
          placeholder={translate("service.title")}
          register={register("title")}
          errorMessage={errors.title?.message}
        />
        <StyledFormContainer>
          <CustomTextFieldInput
            label={translate("service.duration")}
            placeholder={translate("service.duration")}
            width={ADD_COMPANY_SERVICE_DURATION_WIDTH}
            register={register("duration", { valueAsNumber: true })}
            isNumber
            errorMessage={errors.duration?.message}
          />
          <CustomTextFieldInput
            label={translate("service.price")}
            placeholder={translate("service.price")}
            width={ADD_COMPANY_SERVICE_PRICE_WIDTH}
            isNumber
            register={register("price", { valueAsNumber: true })}
            errorMessage={errors.price?.message}
          />
        </StyledFormContainer>
        <CustomTextFieldInput
          isMultiline
          label={translate("service.description")}
          placeholder={translate("service.description")}
          register={register("description")}
          errorMessage={errors.description?.message}
        />
        <StyledAddIconContainer
          size="small"
          color="primary"
          onClick={onAddService}
          disabled={!isValid}
        >
          <AddIcon />
        </StyledAddIconContainer>
      </Stack>

      <CompanyServiceList
        services={addedServices}
        deleteService={deleteService}
        editService={editService}
      />
    </Box>
  );
};

export default AddCompanyServices;
