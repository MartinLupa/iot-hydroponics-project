import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const SensorBox = () => {
  const sensorBoxStyle = {
    width: 90,
    height: 90,
    border: `1px solid ${"#FAFAFA"}`,
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const sensorIndicatorStyle = {
    display: "flex",
    fontSize: 30,
  };

  const sensorIndicatorUnitStyle = {
    fontSize: 15,
  };
  return (
    <Box style={sensorBoxStyle}>
      <Typography style={sensorIndicatorStyle}>
        53<Typography style={sensorIndicatorUnitStyle}>%</Typography>
      </Typography>
    </Box>
  );
};
