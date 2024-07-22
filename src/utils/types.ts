import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface DrawerItem {
  title: string;
  icon: JSX.Element;
  path: string;
}

export interface CustomIconRadioButtonType {
  title: string;
  image: OverridableComponent<SvgIconTypeMap<object, "svg">> & object;
  value: string | number;
}
