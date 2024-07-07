"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styles from "./navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { Typography } from "@mui/material";
export default function SideBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

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
        {["Brands", "Releases", "Distilleries ", "Companies"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#FFFFFF" }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "#FFFFFF" }} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["All mail", "Sign In", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#FFFFFF" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: "#FFFFFF" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: "", color: "#FFFFFF" }}>
      <Button onClick={toggleDrawer(true)} sx={{ color: "#FFFFFF" }}>
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
