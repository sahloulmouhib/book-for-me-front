import React from "react";

import CustomTimePicker from "../CustomTimePicker/CustomTimePicker";
import { StyledContainer } from "./startEndTimePicker.styles";
import { Button, Typography } from "@mui/material";
import { AvailabilitiesSchemaType } from "features/company/forms/company.addCompanyAvailablitiesFormConfig";
import { DeleteOutline } from "@mui/icons-material";

interface StartEndTimePickerProps {
  value: AvailabilitiesSchemaType;
  onChange: (value: AvailabilitiesSchemaType) => void;
  index: number;
  isDisabled?: boolean;
  minTime?: Date;
  maxTime?: Date;
  onRemove?: () => void;
}

const StartEndTimePicker: React.FC<StartEndTimePickerProps> = ({
  onChange,
  value,
  index,
  isDisabled,
  minTime,
  onRemove,
}) => {
  const onChangeStartTime = (startTime: Date | null) => {
    if (index === 0 && value.length === 0) {
      onChange([{ startTime, endTime: null }]);
      return;
    } else {
      const newValue = value.map((availability, i) => {
        if (i === index) {
          return {
            ...availability,
            startTime,
          };
        }
        return availability;
      });
      onChange(newValue);
    }
  };

  const onChangeEndTime = (endTime: Date | null) => {
    if (index === 0 && value.length === 0) {
      onChange([{ endTime, startTime: null }]);
      return;
    } else {
      const newValue = value.map((availability, i) => {
        if (i === index) {
          return {
            ...availability,
            endTime,
          };
        }
        return availability;
      });

      onChange(newValue);
    }
  };

  const startTime = value.length > index ? value[index].startTime : null;
  const endTime = value.length > index ? value[index].endTime : null;

  return (
    <StyledContainer>
      <Typography>From</Typography>
      <CustomTimePicker
        isDisabled={isDisabled}
        value={startTime}
        onChange={onChangeStartTime}
        min={minTime}
      />
      <Typography>To</Typography>
      <CustomTimePicker
        isDisabled={isDisabled}
        value={endTime}
        onChange={onChangeEndTime}
      />
      {isDisabled && (
        <Button variant="text" color="warning" onClick={onRemove}>
          <DeleteOutline />
        </Button>
      )}
    </StyledContainer>
  );
};

export default StartEndTimePicker;
