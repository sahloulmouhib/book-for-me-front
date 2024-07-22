import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { CustomIconRadioButtonType } from "utils/types";
import CustomIconRadioGroup from "components/CustomIconRadioGroup/CustomIconRadioGroup";
import { spacing } from "utils/dimensions";
import { StyledStack } from "components/CustomTextField/customTextField.styles";
import CustomFormLabel from "components/CustomFormLabel/CustomFormLabel";

interface CustomIconRadioGroupFormProps<T extends FieldValues> {
  label: string;
  control: Control<T>;
  radioGroup: CustomIconRadioButtonType[];
  name: FieldPath<T>;
}

const CustomIconRadioGroupForm = <T extends FieldValues>({
  control,
  radioGroup,
  name,
  label,
}: CustomIconRadioGroupFormProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <StyledStack spacing={spacing.XS}>
          <CustomFormLabel>{label}</CustomFormLabel>
          <CustomIconRadioGroup
            radioGroup={radioGroup}
            onValueChange={field.onChange}
            selectedValue={field.value}
          />
        </StyledStack>
      )}
    />
  );
};

export default CustomIconRadioGroupForm;
