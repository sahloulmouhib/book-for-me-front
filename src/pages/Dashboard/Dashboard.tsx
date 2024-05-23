import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  StyledAppBar,
  StyledContainer,
  StyledDashboardContainer,
  StyledDrawer,
  StyledDrawerHeader,
  StyledIconButton,
  StyledListItem,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
} from "./dashboard.styles";
import { useState } from "react";
import { DrawerItem } from "utils/types";

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const dashboardItems: DrawerItem[] = [
    {
      title: "Inbox",
      icon: <InboxIcon />,
      element: <Typography>Inbox</Typography>,
    },
    {
      title: "Starred",
      icon: <MailIcon />,
      element: <Typography>Starred</Typography>,
    },
    {
      title: "Send email",
      icon: <InboxIcon />,
      element: <Typography>Send email</Typography>,
    },
    {
      title: "Drafts",
      icon: <MailIcon />,
      element: <Typography>Drafts</Typography>,
    },
    {
      title: "All mail",
      icon: <InboxIcon />,
      element: <Typography>All mail</Typography>,
    },
    {
      title: "Trash",
      icon: <MailIcon />,
      element: <Typography>Trash</Typography>,
    },
    {
      title: "Spam",
      icon: <InboxIcon />,
      element: <Typography>Spam</Typography>,
    },
  ];

  const [selectedDrawerItemIndex, setSelectedDrawerItemIndex] = useState(0);

  const handleDrawerItemClick = (index: number) => () => {
    setSelectedDrawerItemIndex(index);
  };
  return (
    <StyledContainer>
      <CssBaseline />
      <StyledAppBar position="fixed" open={open}>
        <Toolbar>
          <StyledIconButton
            open={open}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </StyledIconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer variant="permanent" open={open}>
        <StyledDrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </StyledDrawerHeader>
        <Divider />
        <List>
          {dashboardItems.map((item, index) => (
            <StyledListItem key={item.title} disablePadding>
              <StyledListItemButton
                selected={selectedDrawerItemIndex === index}
                onClick={handleDrawerItemClick(index)}
                open={open}
              >
                <StyledListItemIcon open={open}>{item.icon}</StyledListItemIcon>
                <StyledListItemText primary={item.title} open={open} />
              </StyledListItemButton>
            </StyledListItem>
          ))}
        </List>
        <Divider />
      </StyledDrawer>
      <StyledDashboardContainer component="main">
        <StyledDrawerHeader />
        {dashboardItems[selectedDrawerItemIndex].element}
      </StyledDashboardContainer>
    </StyledContainer>
  );
}
