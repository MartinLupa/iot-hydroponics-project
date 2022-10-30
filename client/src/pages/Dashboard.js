import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { FiWind } from "react-icons/fi";
import { GiWaterDrop } from "react-icons/gi";
import { RiPlantLine } from "react-icons/ri";
import { SensorBox } from "../components/SensorBox";

export const Dashboard = () => {
  const cardStyle = {
    margin: 10,
    padding: 20,
    width: 310,
    backgroundColor: "#EFEFEF",
  };

  const rowSplittingBoxStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 15,
  };

  const typographyStyle = {
    color: "#9DA097",
  };

  return (
    <Card style={cardStyle}>
      <Box display={"flex"} alignItems={"center"}>
        <RiPlantLine />
        <Typography>Celery</Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <FiWind />
        <Typography>Air</Typography>
      </Box>
      <Box style={rowSplittingBoxStyle}>
        <Box>
          <SensorBox />
          <Typography style={typographyStyle}>Light</Typography>
        </Box>
        <Box>
          <SensorBox />
          <Typography style={typographyStyle}>Humidty</Typography>
        </Box>
        <Box>
          <SensorBox />
          <Typography style={typographyStyle}>Temperature</Typography>
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <GiWaterDrop />
        <Typography>Water</Typography>
      </Box>
      <Box style={rowSplittingBoxStyle}>
        <Box>
          <SensorBox />
          <Typography style={typographyStyle}>pH</Typography>
        </Box>
        <Box>
          <SensorBox />
          <Typography style={typographyStyle}>Conductivity</Typography>
        </Box>
        <Box>
          <SensorBox />
          <Typography style={typographyStyle}>Temperature</Typography>
        </Box>
      </Box>
    </Card>
  );
};
