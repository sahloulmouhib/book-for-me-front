import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { DRAWER_WIDTH, distance } from "utils/dimensions";
// TODO: replace spacing with distance
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface ToggleDrawerProps {
  open: boolean;
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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
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

export const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const StyledIconButton = styled(IconButton)<ToggleDrawerProps>(
  ({ open }) => ({
    marginRight: distance.XL,
    ...(open && {
      display: "none",
    }),
  })
);

export const StyledListItemButton = styled(ListItemButton)<ToggleDrawerProps>(
  ({ open }) => ({
    minHeight: "48px",
    justifyContent: open ? "initial" : "center",
  })
);

export const StyledListItemIcon = styled(ListItemIcon)<ToggleDrawerProps>(
  ({ open }) => ({
    minWidth: "0px",
    justifyContent: "center",
    marginRight: open ? 3 : "auto",
  })
);

export const StyledListItemText = styled(ListItemText)<ToggleDrawerProps>(
  ({ open }) => ({
    opacity: open ? 1 : 0,
  })
);

export const StyledListItem = styled(ListItem)(() => ({
  display: "block",
}));

export const StyledDashboardContainer = styled(Box)(() => ({
  flexGrow: 1,
  padding: distance.XL,
}));

export const StyledDrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
