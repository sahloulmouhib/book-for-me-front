import { Fab, Stack, styled } from "@mui/material";
import {
  ADD_COMPANY_SERVICE_ICON_RIGHT_POSITION,
  ADD_COMPANY_SERVICE_ICON_BOTTOM_POSITION,
} from "features/service/utils/service.constants";

import { distance } from "utils/dimensions";

export const StyledFormContainer = styled(Stack)({
  gap: distance.M,
  flexDirection: "row",
  alignItems: "start",
});

export const StyledAddIconContainer = styled(Fab)({
  position: "relative",
  right: ADD_COMPANY_SERVICE_ICON_RIGHT_POSITION,
  bottom: ADD_COMPANY_SERVICE_ICON_BOTTOM_POSITION,
});
