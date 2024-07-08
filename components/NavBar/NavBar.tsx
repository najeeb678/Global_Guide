"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

import { Grid } from "@mui/material";
import styles from "./navbar.module.css";
import SideBar from "./SideBar";
import SearchBar from "../SearchBar";

interface NavBarProps {
  toggleSidebar: () => void;
}
export default function NavBar({ toggleSidebar }: NavBarProps) {
  return (
    <Box className={styles.navbar}>
      <AppBar position="static" sx={{ backgroundColor: "#070807" }}>
        <Toolbar className={styles.toolbar}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4} md={4}>
              <SideBar toggleSidebar={toggleSidebar} />
            </Grid>
            <Grid item xs={4} md={4}>
              <Box className={styles.logoContainer}>
                <Image
                  src="/images/Logo.svg"
                  width={22}
                  height={22}
                  alt="logo"
                />
                <Typography variant="h6" component="div" color={"#FFFFFF"}>
                  Global Guide
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={4}
              md={4}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <SearchBar
                onChange={(e) => console.log(e.target.value)}
                placeholder="Search by name"
              />

              <IconButton
                size="large"
                color="inherit"
                aria-label="save"
                sx={{ margin: "0px 10px 0px 15px" }}
              >
                <Image
                  src="/images/Save.svg"
                  width={22}
                  height={22}
                  alt="Save Icon"
                />
              </IconButton>
              <Button sx={{ minWidth: "100px", color: "inherit" }}>
                Sign In
              </Button>
              <Button className={styles.contactButton}>Contact</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
