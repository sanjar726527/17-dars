import React from "react";
import Buttons from "./pages/Buttons";
import ToggleButton from "./pages/ToggleButton";
import { Divider } from "@mui/material";

import SliderPage from "./pages/Slider";
import NavigationPage from "./pages/NavigationPage";
import DisplayComponents from "./pages/DisplayComponents";
import { Lists } from "./pages/Lists";
import { Chips } from "./pages/Chips";

function App() {
  return (
    <div className="App">
      <Buttons />
      <Divider
        flexItem
        orientation="horizontal"
        sx={{ marginY: "20px", width: "90%" }}
      />
      <ToggleButton />
      <Divider
        flexItem
        orientation="horizontal"
        sx={{ marginY: "20px", width: "90%" }}
      />
      <SliderPage />
      <Divider
        flexItem
        orientation="horizontal"
        sx={{ marginY: "20px", width: "90%" }}
      />
      <NavigationPage />
      <Divider
        flexItem
        orientation="horizontal"
        sx={{ marginY: "20px", width: "90%" }}
      />
      <DisplayComponents />
      <Divider
        flexItem
        orientation="horizontal"
        sx={{ marginY: "20px", width: "90%" }}
      />
      <Lists />
      <Divider
        flexItem
        orientation="horizontal"
        sx={{ marginY: "20px", width: "90%" }}
      />
      <Chips />
    </div>
  );
}

export default App;
