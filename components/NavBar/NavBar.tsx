import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import styles from "./navbar.module.css";
import NavBarDrawer from "./NavBarDrawer";

export default function NavBar() {
  return (
    <Box className={styles.navbar}>
      <AppBar position="static" sx={{ backgroundColor: "#070807" }}>
        <Toolbar className={styles.toolbar}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4} md={4} sx={{backgroundColor:"red"}}>
              <NavBarDrawer />
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
              }}
            >
              <IconButton
                size="large"
                color="inherit"
                aria-label="search"
                className={styles.iconButton}
              >
                <SearchIcon className={styles.searchButton} />
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
                aria-label="save"
                className={styles.iconButton}
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
