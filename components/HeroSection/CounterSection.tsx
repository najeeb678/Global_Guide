"use client";

import { Box, Grid } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
interface CardProps {
  end: number;
  label: string;
}

const Card: React.FC<CardProps> = ({ end, label }) => {
  return (
    <Box sx={{ textAlign: "center", padding: "25px 0px" }}>
      <CountUp
        decimals={2}
        decimal=","
        end={end}
        duration={2.5}
        style={{ color: "black" }}
      />
      <br />
      {label}
    </Box>
  );
};

const cardData = [
  { end: 243242, label: "whiskies" },
  { end: 842, label: "Distilleries" },
  { end: 6442, label: "Brands" },
  { end: 3142, label: "Members" },
  { end: 2442, label: "Collections" },
];
const CounterSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#BA9775",

        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "white",
        fontSize: { xs: "15px", sm: "20px" },
      }}
    >
      {cardData.map((data, index) => (
        <Card key={index} end={data.end} label={data.label} />
      ))}
    </Box>
  );
};

export default CounterSection;
