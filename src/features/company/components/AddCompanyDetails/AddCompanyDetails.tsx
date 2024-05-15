import { Stack } from "@mui/material";
import CustomTextFieldInput from "components/CustomTextField/CustomTextField";
import CustomUploadButton from "components/CustomUploadButton/CustomUploadButton";
import { translate } from "locales/i18n";
import React from "react";
import { spacing } from "utils/dimensions";

interface AddCompanyDetailsProps {}

const AddCompanyDetails: React.FC<AddCompanyDetailsProps> = () => {
  return (
    <Stack spacing={spacing.S}>
      <CustomTextFieldInput
        label={translate("company.create_company.name")}
        placeholder={translate("company.create_company.name")}
      />
      <CustomTextFieldInput
        isMultiline
        label={translate("company.create_company.description")}
        placeholder={translate("company.create_company.description")}
      />
      <CustomUploadButton
        label={translate("company.create_company.image")}
        description={translate("company.create_company.upload_image")}
        onUpload={() => {}}
      />
    </Stack>
  );
};

export default AddCompanyDetails;
