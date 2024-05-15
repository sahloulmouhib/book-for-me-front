import React from "react";
import StartEndTimePicker from "../StartEndTimePicker/StartEndTimePicker";
import {
  StyledContainer,
  StyledErrorText,
  StyledTimePickerListContainer,
  StyledWeekDayTitle,
} from "./companyAvailabilityPicker.styles";
import {
  AddCompanyAvailabilitiesSchemaType,
  AvailabilitiesSchemaType,
} from "features/company/forms/company.addCompanyAvailablitiesFormConfig";
import { Control, Controller, UseFormStateReturn } from "react-hook-form";
import CustomButton from "components/CustomButton/CustomButton";

interface CompanyAvailabilityPickerProps {
  weekday: string;
  control: Control<AddCompanyAvailabilitiesSchemaType>;
  name: keyof AddCompanyAvailabilitiesSchemaType;
  isFormValid?: boolean;
}

const CompanyAvailabilityPicker: React.FC<CompanyAvailabilityPickerProps> = ({
  weekday,
  control,
  name,
}) => {
  const getErrorMessage = (
    formState: UseFormStateReturn<AddCompanyAvailabilitiesSchemaType>,
    value: AvailabilitiesSchemaType
  ) => {
    return formState.errors.monday?.[value.length - 1]?.message;
  };

  const checkIfFormIsValid = (
    formState: UseFormStateReturn<AddCompanyAvailabilitiesSchemaType>,
    value: AvailabilitiesSchemaType
  ) => {
    console.log(formState.errors.monday, value.length > 0);
    return (
      !formState.errors.monday &&
      value.length > 0 &&
      value[value.length - 1].startTime !== null &&
      value[value.length - 1].endTime !== null
    );
  };

  const onAddTimePicker =
    (
      onChange: (value: AvailabilitiesSchemaType) => void,
      value: AvailabilitiesSchemaType
    ) =>
    () => {
      onChange([...value, { startTime: null, endTime: null }]);
    };

  const getMinTime = (value: AvailabilitiesSchemaType, index: number) => {
    if (
      value.length &&
      value.length > 0 &&
      index &&
      value[index - 1].endTime !== null
    ) {
      return value[index - 1].endTime as Date;
    }
    return undefined;
  };

  const deleteAvailability =
    (
      value: AvailabilitiesSchemaType,
      index: number,
      onChange: (value: AvailabilitiesSchemaType) => void
    ) =>
    () => {
      const newValue = value.filter((_item, i) => i !== index);
      onChange(newValue);
    };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, formState }) => (
        <StyledContainer>
          <StyledWeekDayTitle>{weekday}</StyledWeekDayTitle>
          <StyledTimePickerListContainer>
            {value.map((_item, index) => (
              <StartEndTimePicker
                key={index}
                index={index}
                onChange={onChange}
                value={value}
                isDisabled={value.length > index + 1}
                minTime={getMinTime(value, index)}
                onRemove={deleteAvailability(value, index, onChange)}
              />
            ))}
            {getErrorMessage(formState, value) && (
              <StyledErrorText variant="caption">
                {getErrorMessage(formState, value)}
              </StyledErrorText>
            )}
          </StyledTimePickerListContainer>
          <CustomButton
            isDisabled={!checkIfFormIsValid(formState, value)}
            title="Add"
            onClick={onAddTimePicker(onChange, value)}
          />
        </StyledContainer>
      )}
    />
  );
};

export default CompanyAvailabilityPicker;
