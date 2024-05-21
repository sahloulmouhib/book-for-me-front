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
  ADD_COMPANY_SERVICE_TITTLE_WIDTH,
  ADD_COMPANY_SERVICE_PRICE_WIDTH,
} from "features/service/utils/service.constants";
import { AddCompanyServiceSchemaType } from "features/service/forms/service.addCompanyServices";
import { UseFormReturn } from "react-hook-form";
interface AddCompanyServicesProps {
  form: UseFormReturn<AddCompanyServiceSchemaType>;
}

const AddCompanyServices: React.FC<AddCompanyServicesProps> = ({ form }) => {
  const {
    register,
    onAddService,
    addedServices,
    deleteService,
    editService,
    errors,
    isValid,
  } = useAddCompanyServices(form);
  return (
    <Box width={"65%"}>
      <Stack spacing={spacing.S}>
        <StyledFormContainer>
          <CustomTextFieldInput
            label="Title"
            placeholder="Title"
            width={ADD_COMPANY_SERVICE_TITTLE_WIDTH}
            register={register("title")}
            errorMessage={errors.title?.message}
          />
          <CustomTextFieldInput
            label="Price"
            placeholder="Price"
            width={ADD_COMPANY_SERVICE_PRICE_WIDTH}
            isNumber
            register={register("price", { valueAsNumber: true })}
            errorMessage={errors.price?.message}
          />
        </StyledFormContainer>
        <CustomTextFieldInput
          isMultiline
          label="Description"
          placeholder="Description"
          width={"100%"}
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
