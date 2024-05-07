import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { translate } from "locales/i18n";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CustomCheckboxProps {
  register: UseFormRegisterReturn;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ register }) => {
  return (
    <FormGroup>
      <FormControlLabel
        {...register}
        control={<Checkbox />}
        label={translate("auth.sign_up.agree_to_terms")}
      />
    </FormGroup>
  );
};
