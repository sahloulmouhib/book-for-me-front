import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  DRAWER_CLOSED_WIDTH,
  DRAWER_WIDTH,
  distance,
  fontSize,
} from "utils/dimensions";

interface ToggleDrawerProps {
  open?: boolean;
  isLogout?: boolean;
}

interface DrawerItemProps {
  isSelected: boolean;
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: DRAWER_CLOSED_WIDTH,
});

export const StyledContainer = styled(Box)(() => ({
  display: "flex",
}));

export const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const StyledIconButton = styled(IconButton)<ToggleDrawerProps>(
  ({ open }) => ({
    ...(open && {
      display: "none",
    }),
  })
);

export const StyledListItemButton = styled(ListItemButton)<ToggleDrawerProps>(
  ({ open }) => ({
    justifyContent: open ? "initial" : "center",
    gap: open ? distance.L : 0,
    marginBlock: distance.XL,
    paddingInline: distance.XL,
  })
);

export const StyledListItemIcon = styled(ListItemIcon)<DrawerItemProps>(
  ({ theme, isSelected }) => ({
    minWidth: "0px",
    justifyContent: "center",
    color: isSelected ? theme.palette.common.white : theme.palette.grey[700],
    border: `0.1px solid ${theme.palette.grey[400]}`,
    borderRadius: distance.S,
    padding: distance.XS,
    backgroundColor: isSelected
      ? theme.palette.primary.main
      : theme.palette.grey[200],
  })
);

export const StyledListItemText = styled(ListItemText)<ToggleDrawerProps>(
  ({ open, theme, isLogout }) => ({
    opacity: open ? 1 : 0,
    "& .MuiListItemText-primary": {
      fontSize: isLogout ? fontSize.S : fontSize.M,
      fontWeight: "600",
      color: isLogout ? theme.palette.error.main : theme.palette.grey[600],
    },
  })
);

export const StyledListItem = styled(ListItem)(() => ({
  display: "block",
}));

export const StyledDashboardContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  height: "100vh",
  padding: distance.XL,
  backgroundColor: theme.palette.grey[300],
}));

export const StyledDrawerHeader = styled("div")<ToggleDrawerProps>(
  ({ theme, open }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: open ? "end" : "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  })
);

export const StyledLogoutListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: "0px",
  justifyContent: "center",
  color: theme.palette.error.main,
  border: `0.1px solid transparent`,
  borderRadius: distance.S,
  padding: distance.XS,
  backgroundColor: theme.palette.error.light,
}));
