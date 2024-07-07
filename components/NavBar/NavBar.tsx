"use client"
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, InputBase } from "@mui/material";
import styles from "./navbar.module.css";
import { styled, alpha } from "@mui/material/styles";
import SideBar from "./SideBar";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.05),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  marginTop: "5px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
interface NavBarProps {
  toggleSidebar: () => void;
}
export default function NavBar({ toggleSidebar }:NavBarProps) {
  return (
    <Box className={styles.navbar}>
      <AppBar position="static" sx={{ backgroundColor: "#070807" }}>
        <Toolbar className={styles.toolbar}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4} md={4}>
              <SideBar  toggleSidebar={toggleSidebar} />
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
                alignItems: "center", // Align items to center vertically
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <IconButton
                size="large"
                color="inherit"
                aria-label="save"
                sx={{ margin: "0px 10px 0px 10px" }}
              >
                <Image
                  src="/images/Save.svg"
                  width={22}
                  height={22}
                  alt="Save Icon"
                />
              </IconButton>
              <Button className={styles.signInButton}>Sign In</Button>
              <Button className={styles.contactButton}>Contact</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
