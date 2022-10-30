import { Box } from "@mui/system";
import React from "react";
import { LightSwitch } from "../components/LightSwitch";

export const Dashboard = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <LightSwitch pinId={"pl1"} room={"ROOM 1"} />
        <LightSwitch pinId={"pl2"} room={"ROOM 2"} />
        <LightSwitch pinId={"pl3"} room={"ROOM 3"} />
        <LightSwitch pinId={"pl4"} room={"ROOM 4"} />
      </Box>
    </div>
  );
};
