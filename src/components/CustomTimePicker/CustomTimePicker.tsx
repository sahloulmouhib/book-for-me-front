import React from "react";

import { StyledTimePicker } from "./customTimePicker.styles";
import { renderTimeViewClock } from "@mui/x-date-pickers";

interface CustomTimePickerProps {
  value: Date | null;
  onChange: (value: Date | null) => void;
  isDisabled?: boolean;
  min?: Date;
  max?: Date;
}

const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
  onChange,
  value,
  isDisabled,
  min,
  max,
}) => {
  return (
    <StyledTimePicker
      minTime={min}
      maxTime={max}
      value={value}
      disabled={isDisabled}
      onChange={onChange}
      viewRenderers={{
        hours: renderTimeViewClock,
        minutes: renderTimeViewClock,
        seconds: renderTimeViewClock,
      }}
    />
  );
};

export default CustomTimePicker;
