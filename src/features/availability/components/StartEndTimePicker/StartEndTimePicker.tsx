import React from "react";

import { StyledContainer } from "./startEndTimePicker.styles";
import { Button, Typography } from "@mui/material";
import { AvailabilitiesSchemaType } from "features/availability/forms/addCompanyAvailabilities.formConfig";
import { AddCircleOutlined, CancelRounded } from "@mui/icons-material";
import CustomTimePicker from "components/CustomTimePicker/CustomTimePicker";
import { translate } from "locales/i18n";

interface StartEndTimePickerProps {
  value: AvailabilitiesSchemaType;
  onChange: (value: AvailabilitiesSchemaType) => void;
  index: number;
  isDisabled?: boolean;
  minTime?: Date;
  maxTime?: Date;

  onRemove?: () => void;

  addButton?: {
    onClick: () => void;
    isDisabled: boolean;
  };
}

const StartEndTimePicker: React.FC<StartEndTimePickerProps> = ({
  onChange,
  value,
  index,
  isDisabled,
  minTime,
  onRemove,
  addButton,
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
      <Typography>{translate("availability.from")}</Typography>
      <CustomTimePicker
        isDisabled={isDisabled}
        value={startTime}
        onChange={onChangeStartTime}
        min={minTime}
      />
      <Typography>{translate("availability.to")}</Typography>
      <CustomTimePicker
        isDisabled={isDisabled}
        value={endTime}
        onChange={onChangeEndTime}
      />
      {isDisabled && (
        <Button variant="text" color="secondary" onClick={onRemove}>
          <CancelRounded />
        </Button>
      )}
      {!isDisabled && addButton && (
        <Button
          variant="text"
          color="primary"
          onClick={addButton.onClick}
          disabled={addButton.isDisabled}
        >
          <AddCircleOutlined />
        </Button>
      )}
    </StyledContainer>
  );
};

export default StartEndTimePicker;
