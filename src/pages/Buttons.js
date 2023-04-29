import { Button, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React from "react";

const Buttons = () => {
  return (
    <>
      <h1>Buttons</h1>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>

        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
    </>
  );
};

export default Buttons;
