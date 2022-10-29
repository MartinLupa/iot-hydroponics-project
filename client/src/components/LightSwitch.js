import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { Card, Switch } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";

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

export const LightSwitch = ({ room }) => {
  const [isChecked, setChecked] = useState(true);

  const handleSwitchChange = () => {
    setChecked(!isChecked);
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
