import React, { useState, MouseEvent } from "react";
import {
  StyledInput,
  StyledStack,
  StyledLabel,
} from "./customTextField.styles";
import { BOX_WIDTH, distance, fontSize, spacing } from "utils/dimensions";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

interface CustomTextFieldInputProps {
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
  isPassword?: boolean;
  width?: number;
}

const CustomTextFieldInput: React.FC<CustomTextFieldInputProps> = ({
  placeholder,
  label,
  register,
  errorMessage,
  isPassword,
  width = BOX_WIDTH,
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleClickShowPassword = () => setIsPasswordShown((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <StyledStack spacing={spacing.XS}>
      <StyledLabel variant="subtitle1">{label}</StyledLabel>
      <StyledInput
        sx={{ width }}
        inputProps={{
          style: {
            padding: distance.M,
            fontSize: fontSize.M,
            fontWeight: "400",
          },
        }}
        {...register}
        type={isPassword && !isPasswordShown ? "password" : "text"}
        error={!!errorMessage}
        helperText={errorMessage}
        placeholder={placeholder}
        InputProps={{
          endAdornment: isPassword && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
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
