import { SvgIconTypeMap, useTheme } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import {
  imageStyle,
  StyledCheckIcon,
  StyledContainer,
  StyledTitle,
} from "./customIconRadioButton.styles";

export interface CustomIconRadioButtonProps {
  title: string;
  Image: OverridableComponent<SvgIconTypeMap<object, "svg">> & object;
  isSelected?: boolean;
  onClick: () => void;
}

const CustomIconRadioButton: React.FC<CustomIconRadioButtonProps> = ({
  Image,
  isSelected,
  title,
  onClick,
}) => {
  const { palette } = useTheme();
  const imageColor = { color: palette.common.black };
  return (
    <StyledContainer onClick={onClick} isSelected={isSelected}>
      {isSelected && <StyledCheckIcon />}
      <Image style={imageStyle} sx={imageColor} />
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  );
};

export default CustomIconRadioButton;
