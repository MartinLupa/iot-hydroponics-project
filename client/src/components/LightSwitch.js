import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { Card, Switch } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
const LIGHTPINS_BASE_URL = process.env.REACT_APP_LIGHTPINS_BASE_URL;

const StyledCard = styled(Card, {
  name: "StyledCard",
})({
  margin: 10,
  width: 200,
  height: 250,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  onMouseOver: { boxshadow: 1 },
});

export const LightSwitch = ({ room, pinId }) => {
  const [isChecked, setChecked] = useState(false);
  const [pinSignal, setPinSignal] = useState("1");

  const handleSwitchChange = () => {
    setChecked(!isChecked);
    if (pinSignal === "0") {
      setPinSignal("1");
    } else if (pinSignal === "1") {
      setPinSignal("0");
    }

    fetch(LIGHTPINS_BASE_URL + `/${pinId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ pinSignal: pinSignal }),
    })
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledCard variant="outlined">
      <h2>{room}</h2>
      <LightbulbOutlinedIcon
        sx={(theme) => ({
          fontSize: 120,
          color: isChecked ? theme.colors.switch.on : theme.colors.switch.off,
        })}
      />

      <Switch checked={isChecked} onChange={handleSwitchChange} />
    </StyledCard>
  );
};
