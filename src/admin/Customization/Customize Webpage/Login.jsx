import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Switch, FormControlLabel, Paper
} from '@mui/material';

const Login = () => {
  const [disableSignup, setDisableSignup] = useState(false);

  return (
    <Box p={2}>
      {/* Background Image Section */}
      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6">Background Image</Typography>
        <Button variant="contained" color="warning" sx={{ my: 2 }}>
          Click to change image
        </Button>
        <Typography variant="caption" display="block">
          Prefer image dimensions of width between 990–1000 px and height between 900–920 px
        </Typography>
        <Box mt={2}>
          <Button variant="contained" color="primary">Submit</Button>
          <Button variant="outlined" color="error" sx={{ ml: 1 }}>Reset</Button>
        </Box>
      </Paper>

      {/* Tag Line Section */}
      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6">Login/Signup Tag Line and Heading</Typography>
        <TextField fullWidth label="Tag Line" margin="normal" />
        <TextField fullWidth label="Heading 1" margin="normal" />
        <TextField fullWidth label="Heading 2" margin="normal" />
        <Box mt={2}>
          <Button variant="contained" color="primary">Submit</Button>
          <Button variant="outlined" color="error" sx={{ ml: 1 }}>Reset</Button>
        </Box>
      </Paper>

      {/* Enable/Disable Signup */}
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6">Enable/Disable Signup</Typography>
        <FormControlLabel
          control={
            <Switch
              checked={disableSignup}
              onChange={(e) => setDisableSignup(e.target.checked)}
            />
          }
          label="Disable Signup"
        />
        <Typography variant="caption" display="block">
          Show/Hide signup button from the portal.
        </Typography>
        <Box mt={2}>
          <Button variant="contained" color="primary">Submit</Button>
          <Button variant="outlined" color="error" sx={{ ml: 1 }}>Reset</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
