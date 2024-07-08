import { Box, Grid, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import CounterSection from "./CounterSection";

const HeroSection = () => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              backgroundColor: "#141414",
              height: "636px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box
              sx={{
                height: "173px",
                width: "402px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Cormorant Infant",
                  fontSize: "28px",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Lorem ipsum
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: "25.6px",
                  letterSpacing: "-0.015em",
                  textAlign: "left",
                  color: "white",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Box>
                <IconButton>
                  <Image
                    src="/images/ExploreButton.svg"
                    width={25}
                    height={25}
                    alt="Explore"
                  />
                  <Typography variant="body2" ml={1} color="white">
                    Explore more
                  </Typography>
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                color: "white",
                position: "absolute",
                bottom: 30,
                width: "100%",
                textAlign: "center",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "50px",
              }}
            >
              1M + collections
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              backgroundColor: "grey",
              height: "636px",
              position: "relative",
            }}
          >
            <video
              src="/images/video.mp4"
              autoPlay
              loop
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "30px",
                padding: "10px 0",
                height: "100px",
              }}
            >
              <h5>advertising</h5>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <CounterSection />
    </>
  );
};

export default HeroSection;
