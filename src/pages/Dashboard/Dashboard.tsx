import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  StyledContainer,
  StyledDashboardContainer,
  StyledDrawer,
  StyledDrawerHeader,
  StyledListItem,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
  StyledLogoutListItemIcon,
} from "./dashboard.styles";
import { useMemo, useState } from "react";
import { DrawerItem } from "utils/types";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { Outlet, useNavigate } from "react-router-dom";
import {
  BOOKINGS_PATH,
  CLIENTS_PATH,
  COMPANIES_PATH,
  HOME_PATH,
  PROFILE_PATH,
  SERVICES_PATH,
} from "routes/routes.paths";
import { useGlobalStore } from "store/global.store";

const COMPANY_DASHBOARD_ITEMS: DrawerItem[] = [
  {
    title: "Home",
    icon: <HomeRoundedIcon />,
    path: HOME_PATH,
  },
  {
    title: "Bookings",
    icon: <EventAvailableRoundedIcon />,
    path: BOOKINGS_PATH,
  },
  {
    title: "Services",
    icon: <FolderCopyIcon />,
    path: SERVICES_PATH,
  },
  {
    title: "Clients",
    icon: <PeopleAltSharpIcon />,
    path: CLIENTS_PATH,
  },
  {
    title: "Profile",
    icon: <AccountCircleSharpIcon />,
    path: PROFILE_PATH,
  },
];

const CLIENT_DASHBOARD_ITEMS: DrawerItem[] = [
  {
    title: "Home",
    icon: <HomeRoundedIcon />,
    path: HOME_PATH,
  },
  {
    title: "My bookings",
    icon: <EventAvailableRoundedIcon />,
    path: BOOKINGS_PATH,
  },
  {
    title: "Companies",
    icon: <PeopleAltSharpIcon />,
    path: COMPANIES_PATH,
  },
  {
    title: "Profile",
    icon: <AccountCircleSharpIcon />,
    path: PROFILE_PATH,
  },
];

const DashBoard: React.FC = () => {
  const { user, accessToken } = useGlobalStore();
  const dashboardItems = useMemo(() => {
    if (!user) {
      return [];
    } else if (user.isClient) {
      return CLIENT_DASHBOARD_ITEMS;
    } else {
      return COMPANY_DASHBOARD_ITEMS;
    }
  }, [accessToken]);
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [selectedDrawerItemIndex, setSelectedDrawerItemIndex] = useState(0);
  const navigate = useNavigate();
  const handleDrawerItemClick = (index: number) => () => {
    setSelectedDrawerItemIndex(index);
    navigate(dashboardItems[index].path);
  };

  const { logoutUser } = useGlobalStore();
  const onLogoutClick = () => {
    logoutUser();
  };

  return (
    <StyledContainer>
      <CssBaseline />
      <StyledDrawer variant="permanent" open={open}>
        <StyledDrawerHeader open={open}>
          <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
            {open ? <ChevronRightIcon /> : <MenuIcon />}
          </IconButton>
        </StyledDrawerHeader>
        <Divider />
        <List style={{ flexGrow: 1 }}>
          {dashboardItems.map((item, index) => (
            <StyledListItem key={item.title} disablePadding>
              <StyledListItemButton
                selected={selectedDrawerItemIndex === index}
                onClick={handleDrawerItemClick(index)}
                open={open}
              >
                <StyledListItemIcon
                  isSelected={selectedDrawerItemIndex === index}
                >
                  {item.icon}
                </StyledListItemIcon>
                <StyledListItemText primary={item.title} open={open} />
              </StyledListItemButton>
            </StyledListItem>
          ))}
        </List>
        <Divider />
        <StyledListItem disablePadding>
          <StyledListItemButton onClick={onLogoutClick} open={open}>
            <StyledLogoutListItemIcon>
              <MeetingRoomIcon />
            </StyledLogoutListItemIcon>
            <StyledListItemText isLogout open={open} />
          </StyledListItemButton>
        </StyledListItem>
      </StyledDrawer>
      <StyledDashboardContainer component="main">
        <StyledDrawerHeader open={open} />
        <Outlet />
      </StyledDashboardContainer>
    </StyledContainer>
  );
};

export default DashBoard;
