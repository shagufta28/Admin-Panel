import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';

const SocialLogin = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box border={1} borderRadius={2} p={2}>
            <Typography variant="h6">Web Social Login</Typography>
            <Typography variant="subtitle2" color="textSecondary">Facebook App Credentials</Typography>
            <TextField fullWidth label="App ID" variant="outlined" sx={{ my: 1 }} />
            <TextField fullWidth label="App Secret" variant="outlined" sx={{ my: 1 }} />
            <TextField fullWidth label="App Version" variant="outlined" sx={{ my: 1 }} />
            <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 2 }}>Google App Credentials</Typography>
            <TextField fullWidth label="Client ID" variant="outlined" sx={{ my: 1 }} />
            <Box mt={2}>
              <Button variant="contained" color="primary" sx={{ mr: 1 }}>Submit</Button>
              <Button variant="outlined" color="error">Reset</Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box border={1} borderRadius={2} p={2}>
            <Typography variant="h6">Android Social Login</Typography>
            <Typography variant="subtitle2" color="textSecondary">Facebook App Credentials</Typography>
            <TextField fullWidth label="App ID" variant="outlined" sx={{ my: 1 }} />
            <TextField fullWidth label="App Secret" variant="outlined" sx={{ my: 1 }} />
            <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 2 }}>Google App Credentials</Typography>
            <TextField fullWidth label="Client ID" variant="outlined" sx={{ my: 1 }} />
            <Box mt={2}>
              <Button variant="contained" color="primary" sx={{ mr: 1 }}>Submit</Button>
              <Button variant="outlined" color="error">Reset</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialLogin;
