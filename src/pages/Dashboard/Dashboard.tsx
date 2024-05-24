import * as React from "react";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
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
import { useState } from "react";
import { DrawerItem } from "utils/types";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const dashboardItems: DrawerItem[] = [
    {
      title: "Home",
      icon: <HomeRoundedIcon />,
      element: <Typography>Home</Typography>,
    },
    {
      title: "Bookings",
      icon: <EventAvailableRoundedIcon />,
      element: <Typography>Bookings</Typography>,
    },
    {
      title: "Services",
      icon: <FolderCopyIcon />,
      element: <Typography>Services</Typography>,
    },
    {
      title: "Clients",
      icon: <PeopleAltSharpIcon />,
      element: <Typography>Clients</Typography>,
    },
    {
      title: "Profile",
      icon: <AccountCircleSharpIcon />,
      element: <Typography>Profile</Typography>,
    },
  ];

  const [selectedDrawerItemIndex, setSelectedDrawerItemIndex] = useState(0);

  const handleDrawerItemClick = (index: number) => () => {
    setSelectedDrawerItemIndex(index);
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
          <StyledListItemButton open={open}>
            <StyledLogoutListItemIcon>
              <MeetingRoomIcon />
            </StyledLogoutListItemIcon>
            <StyledListItemText isLogout primary={"Log out"} open={open} />
          </StyledListItemButton>
        </StyledListItem>
      </StyledDrawer>
      <StyledDashboardContainer component="main">
        <StyledDrawerHeader open={open} />
        {dashboardItems[selectedDrawerItemIndex].element}
      </StyledDashboardContainer>
    </StyledContainer>
  );
}
