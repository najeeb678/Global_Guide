
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styles from "./navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { Typography } from "@mui/material";

interface SideBarProps {
  toggleSidebar: () => void;
}

export default function SideBar({ toggleSidebar }: SideBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    toggleSidebar();
  };

  const sidebarLinks = [
    {
      imgURL: "/images/home.svg",
      route: "/",
      label: "Brands",
    },
    {
      imgURL: "/images/dollar-circle.svg",
      route: "/",
      label: "Releases",
    },
    {
      imgURL: "/images/transaction.svg",
      route: "/",
      label: "Distilleries",
    },
    {
      imgURL: "/images/money-send.svg",
      route: "/",
      label: "Companies",
    },
    {
      imgURL: "/images/transaction.svg",
      route: "/",
      label: "All mail",
    },
    {
      imgURL: "/images/money-send.svg",
      route: "/",
      label: "Sign In",
    },
    {
      imgURL: "/images/connect-bank.svg",
      route: "/",
      label: "Contact",
    },
  ];

  const DrawerList = (
    <Box
      sx={{ width: 250, backgroundColor: "#14171c", color: "#FFFFFF" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box className={styles.logoContainer} mt={3} mb={3}>
        <Image src="/images/Logo.svg" width={22} height={22} alt="logo" />
        <Typography variant="h6" component="div" color={"#FFFFFF"}>
          Global Guide
        </Typography>
      </Box>
      <List>
        {sidebarLinks.map((link) => (
          <ListItem key={link.label} disablePadding>
             <ListItemButton
              sx={{
                '&:hover': {
                  backgroundColor: '#BA9775',
                },
              }}
            >
              <ListItemIcon sx={{ color: "#FFFFFF" }}>
                <Image src={link.imgURL} width={24} height={24} alt={link.label} />
              </ListItemIcon>
              <ListItemText primary={link.label} sx={{ color: "#FFFFFF" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: "", color: "#FFFFFF" }}>
      <Button onClick={toggleDrawer(!open)} sx={{ color: "#FFFFFF" }}>
        <MenuIcon />
      </Button>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "#14171c",
            color: "#FFFFFF",
            height: "100%",
          }}
          onClick={toggleDrawer(false)}
        >
          {DrawerList}
        </Box>
      </Drawer>
    </Box>
  );
}

