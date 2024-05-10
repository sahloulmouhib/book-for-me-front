import React from "react";
import { Box, Fab, Stack } from "@mui/material";
import CustomTextFieldInput from "components/CustomTextField/CustomTextField";
import { distance } from "utils/dimensions";
import CompanyService from "../CompanyService/CompanyService";
import AddIcon from "@mui/icons-material/Add";
import useAddCompanyServices from "features/company/hooks/useAddCompanyServices";
interface AddCompanyServicesProps {}

const AddCompanyServices: React.FC<AddCompanyServicesProps> = () => {
  const { register, onAddService, addedServices, deleteService, editService } =
    useAddCompanyServices();
  return (
    <Box width={"65%"}>
      <Stack>
        <Stack gap={distance.XXS} flexDirection={"row"} alignItems={"center"}>
          <CustomTextFieldInput
            label="Title"
            placeholder="Title"
            width={"70%"}
            register={register("title")}
          />
          <CustomTextFieldInput
            label="Price"
            placeholder="Price"
            width={"30%"}
            isNumber
            register={register("price")}
          />
        </Stack>
        <CustomTextFieldInput
          isMultiline
          label="Description"
          placeholder="Description"
          width={"100%"}
          register={register("description")}
        />
      </Stack>

      <Fab
        style={{ right: 0 }}
        size="small"
        color="primary"
        aria-label="add"
        onClick={onAddService}
      >
        <AddIcon />
      </Fab>

      {addedServices.map((service) => (
        <CompanyService
          key={service.id}
          title={service.title}
          price={service.price}
          description={service.description}
          onDeletePress={() => deleteService(service.id)}
          onEditPress={() => editService(service.id)}
        />
      ))}
    </Box>
  );
};

export default AddCompanyServices;
