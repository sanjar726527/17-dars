import { DialerSip } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import React from "react";

const Buttons = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
      
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>
  );
};

export default Buttons;
