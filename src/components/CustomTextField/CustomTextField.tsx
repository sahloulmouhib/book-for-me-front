import React, { useState, MouseEvent } from "react";
import {
  StyledInput,
  StyledStack,
  inputStyles,
} from "./customTextField.styles";
import { BOX_WIDTH, spacing } from "utils/dimensions";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import CustomFormLabel from "components/CustomFormLabel/CustomFormLabel";

interface CustomTextFieldInputProps {
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
  isPassword?: boolean;
  width?: number | string;
  isMultiline?: boolean;
  isNumber?: boolean;
}

const CustomTextFieldInput: React.FC<CustomTextFieldInputProps> = ({
  placeholder,
  label,
  register,
  errorMessage,
  isPassword,
  isMultiline,
  width = BOX_WIDTH,
  isNumber,
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleClickShowPassword = () => setIsPasswordShown((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const getInputType = () => {
    if (isPassword && !isPasswordShown) {
      return "password";
    }
    if (isNumber) {
      return "number";
    }
    return "text";
  };
  return (
    <StyledStack width={width} spacing={spacing.XS}>
      <CustomFormLabel>{label}</CustomFormLabel>
      <StyledInput
        multiline={isMultiline}
        rows={isMultiline ? 3 : undefined}
        inputProps={{
          style: {
            padding: 0,
          },
        }}
        {...register}
        type={getInputType()}
        error={!!errorMessage}
        helperText={errorMessage}
        placeholder={placeholder}
        InputProps={{
          style: inputStyles,
          endAdornment: isPassword && (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {isPasswordShown ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </StyledStack>
  );
};

export default CustomTextFieldInput;
