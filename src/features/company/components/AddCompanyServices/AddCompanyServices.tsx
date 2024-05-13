import React from "react";
import { Box, Stack } from "@mui/material";
import CustomTextFieldInput from "components/CustomTextField/CustomTextField";
import AddIcon from "@mui/icons-material/Add";
import useAddCompanyServices from "features/company/hooks/useAddCompanyServices";
import {
  StyledAddIconContainer,
  StyledFormContainer,
} from "./addCompanyServices.styles";
import {
  ADD_COMPANY_SERVICE_PRICE_WIDTH,
  ADD_COMPANY_SERVICE_TITTLE_WIDTH,
} from "features/company/utils/company.constants";
import CompanyServiceList from "../CompanyServiceList/CompanyServiceList";
interface AddCompanyServicesProps {}

const AddCompanyServices: React.FC<AddCompanyServicesProps> = () => {
  const {
    register,
    onAddService,
    addedServices,
    deleteService,
    editService,
    errors,
    isValid,
  } = useAddCompanyServices();
  return (
    <Box width={"65%"}>
      <Stack>
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
