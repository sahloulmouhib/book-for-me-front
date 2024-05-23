import { Stack } from "@mui/material";
import CustomTextFieldInput from "components/CustomTextField/CustomTextField";
import CustomUploadButton from "components/CustomUploadButton/CustomUploadButton";
import { AddCompanyDetailsSchemaType } from "features/company/forms/addCompanyDetails.FormConfig";
import { translate } from "locales/i18n";
import React, { ChangeEvent, MouseEventHandler } from "react";
import { UseFormReturn } from "react-hook-form";
import { spacing } from "utils/dimensions";

interface AddCompanyDetailsProps {
  form: UseFormReturn<AddCompanyDetailsSchemaType>;
}

const AddCompanyDetails: React.FC<AddCompanyDetailsProps> = ({ form }) => {
  const { register, formState, setValue, watch } = form;
  const { errors } = formState;

  const uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setValue("image", event.target.files[0]);
    }
  };

  const deleteImage: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValue("image", undefined);
  };

  const companyImage = watch("image");
  return (
    <Stack spacing={spacing.S}>
      <CustomTextFieldInput
        label={translate("company.create_company.name")}
        placeholder={translate("company.create_company.name")}
        register={register("name")}
        errorMessage={errors.name?.message}
      />
      <CustomTextFieldInput
        isMultiline
        label={translate("company.create_company.description")}
        placeholder={translate("company.create_company.description")}
        register={register("description")}
        errorMessage={errors.description?.message}
      />
      <CustomUploadButton
        label={translate("company.create_company.image")}
        description={translate("company.create_company.upload_image")}
        onUpload={uploadImage}
        onDelete={deleteImage}
        image={companyImage}
      />
    </Stack>
  );
};

export default AddCompanyDetails;
