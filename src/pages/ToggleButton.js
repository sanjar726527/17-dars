import { Divider, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import LaptopIcon from "@mui/icons-material/Laptop";
import TvIcon from "@mui/icons-material/Tv";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import React, { useState } from "react";

const ToggleButtonCom = () => {
  const [alignment, setAlignment] = useState();
  const [devices, setDevices] = useState(() => ["phone"]);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      console.log(newAlignment);
    }
  };
  const handleDevices = (event, newDevices) => {
    if (newDevices.length) {
      setDevices(newDevices);
      console.log(newDevices);
    }
  };
  return (
    <>
      <h1>ToggleButtons</h1>
      <Stack direction="row" spacing={4}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified">
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

        <ToggleButtonGroup
          value={devices}
          onChange={handleDevices}
          aria-label="device"
        >
          <ToggleButton value="laptop" aria-label="laptop">
            <LaptopIcon />
          </ToggleButton>
          <ToggleButton value="tv" aria-label="tv">
            <TvIcon />
          </ToggleButton>
          <ToggleButton value="phone" aria-label="phone">
            <PhoneAndroidIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
};

export default ToggleButtonCom;
