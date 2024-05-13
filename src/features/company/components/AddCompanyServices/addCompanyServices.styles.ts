import { Fab, Stack, styled } from "@mui/material";
import {
  ADD_COMPANY_ICON_BOTTOM_POSITION,
  ADD_COMPANY_ICON_RIGHT_POSITION,
} from "features/company/utils/company.constants";
import { distance } from "utils/dimensions";

export const StyledFormContainer = styled(Stack)({
  gap: distance.M,
  flexDirection: "row",
  alignItems: "start",
});

export const StyledAddIconContainer = styled(Fab)({
  position: "relative",
  right: ADD_COMPANY_ICON_RIGHT_POSITION,
  bottom: ADD_COMPANY_ICON_BOTTOM_POSITION,
});
