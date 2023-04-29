import { Box, Slider } from "@mui/material";
import React from "react";

const valueText = (value) => {
  return `${value}°C`;
};

const SliderPage = () => {
  return (
    <>
      <h1>Silders</h1>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Temperature"
          defaultValue={50}
          getAriaValueText={valueText}
          valueLabelDisplay="on"
          step={5}
          marks
          min={0}
          max={100}
        />
        <Slider defaultValue={60} step={5} marks min={0} max={100} />
      </Box>
    </>
  );
};

export default SliderPage;
