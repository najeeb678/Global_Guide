"use client";

import { Box, Grid } from "@mui/material";
import React from "react";
import CountUp from "react-countup";

const CounterSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#BA9775",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          marginTop: "15px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          color: "white",
          fontSize: "20px",
        }}
      >
        <Box>
          <CountUp
            decimals={2}
            decimal=","
            end={243242}
            duration={2.5}
            style={{ color: "black" }}
          />
          <br />
          whiskies
        </Box>
        <Box>
          <CountUp
            decimals={2}
            decimal=","
            duration={2.5}
            end={842}
            style={{ color: "black" }}
          />
          <br />
          Distilleries
        </Box>
        <Box>
          <CountUp
            decimals={2}
            decimal=","
            duration={2.5}
            end={6442}
            style={{ color: "black" }}
          />
          <br />
          Brands
        </Box>
        <Box>
          <CountUp
            decimals={2}
            decimal=","
            duration={2.5}
            end={3142}
            style={{ color: "black" }}
          />
          <br />
          Members
        </Box>
        <Box>
          <CountUp
            decimals={2}
            decimal=","
            duration={2.5}
            end={2442}
            style={{ color: "black" }}
          />
          <br />
          Collections
        </Box>
      </Box>
    </Box>
  );
};

export default CounterSection;


// import { Box, Grid } from "@mui/material";
// import React from "react";
// import CountUp from "react-countup";

// const CounterSection = () => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         backgroundColor: "#BA9775",
//         padding: "10px",
//         boxSizing: "border-box",
//       }}
//     >
//       <Grid container spacing={2} style={{ width: "80%" }}>
//         <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="space-around">
//           <Box sx={{ marginRight: "20px" }}>
//             <CountUp
//               decimals={2}
//               decimal=","
//               end={243242}
//               duration={2.5}
//               style={{ color: "black" }}
//             />
//             <br />
//             whiskies
//           </Box>
//           <Box>
//             <CountUp
//               decimals={2}
//               decimal=","
//               duration={2.5}
//               end={842}
//               style={{ color: "black" }}
//             />
//             <br />
//             Distilleries
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="space-around">
//           <Box sx={{ marginRight: "20px" }}>
//             <CountUp
//               decimals={2}
//               decimal=","
//               duration={2.5}
//               end={6442}
//               style={{ color: "black" }}
//             />
//             <br />
//             Brands
//           </Box>
//           <Box>
//             <CountUp
//               decimals={2}
//               decimal=","
//               duration={2.5}
//               end={3142}
//               style={{ color: "black" }}
//             />
//             <br />
//             Members
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={6} md={2} display="flex" justifyContent="space-around">
//           <Box sx={{ marginRight: "20px" }}>
//             <CountUp
//               decimals={2}
//               decimal=","
//               duration={2.5}
//               end={2442}
//               style={{ color: "black" }}
//             />
//             <br />
//             Collections
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default CounterSection;