import React from 'react';
import {
  Box, Grid, TextField, Button, Typography, Switch, FormControlLabel, Select, MenuItem, InputLabel, FormControl
} from '@mui/material';

const UpdateInfo = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>Company Details</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Brand Name" variant="outlined" />
          <TextField fullWidth label="Legal Name" variant="outlined" sx={{ mt: 2 }} />
          <TextField fullWidth label="Contact No" variant="outlined" sx={{ mt: 2 }} />
          <FormControlLabel control={<Switch />} label="Enable WhatsApp Chat" sx={{ mt: 2 }} />
          <TextField fullWidth label="Official Support Time" variant="outlined" sx={{ mt: 2 }} />
          <TextField fullWidth label="Email" variant="outlined" sx={{ mt: 2 }} />
          <TextField fullWidth label="Logo Header URL" variant="outlined" sx={{ mt: 2 }} />
          <Button variant="contained" component="label" sx={{ mt: 2 }}>Upload Header Logo<input type="file" hidden /></Button>
          <Button variant="contained" component="label" sx={{ mt: 2 }}>Upload Footer Logo<input type="file" hidden /></Button>
          <Button variant="contained" component="label" sx={{ mt: 2 }}>Upload Favicon<input type="file" hidden /></Button>
          <Button variant="contained" component="label" sx={{ mt: 2 }}>Upload Android Logo<input type="file" hidden /></Button>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" sx={{ mr: 1 }}>Submit</Button>
            <Button variant="outlined" color="error">Reset</Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Footer URLs</Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Select Section</InputLabel>
            <Select defaultValue="">
              <MenuItem value="about">About</MenuItem>
              <MenuItem value="help">Help</MenuItem>
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="social">Social Handles</MenuItem>
              <MenuItem value="general">General</MenuItem>
              <MenuItem value="app">App</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" sx={{ mr: 1 }}>Submit</Button>
          <Button variant="outlined" color="error">Reset</Button>

          <Box mt={4}>
            <Typography variant="h6" gutterBottom>Google Analytics / Facebook / GTM</Typography>
            <TextField fullWidth label="Google Analytics ID" variant="outlined" sx={{ mt: 2 }} />
            <TextField fullWidth label="Facebook Pixel ID" variant="outlined" sx={{ mt: 2 }} />
            <TextField fullWidth label="GTM Code" variant="outlined" sx={{ mt: 2 }} />
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="primary" sx={{ mr: 1 }}>Submit</Button>
              <Button variant="outlined" color="error">Reset</Button>
            </Box>
          </Box>

          <Box mt={4}>
            <Typography variant="h6" gutterBottom>OTP Service Provider</Typography>
            <FormControl fullWidth>
              <InputLabel>OTP Method</InputLabel>
              <Select defaultValue="bypass">
                <MenuItem value="bypass">Bypass OTP</MenuItem>
                <MenuItem value="firebase">Firebase</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="primary" sx={{ mr: 1 }}>Submit</Button>
              <Button variant="outlined" color="error">Reset</Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Bank Details</Typography>
          <TextField fullWidth label="Account Holder Name" variant="outlined" sx={{ mt: 2 }} />
          <TextField fullWidth label="Account Number" variant="outlined" sx={{ mt: 2 }} />
          <TextField fullWidth label="IFSC Code" variant="outlined" sx={{ mt: 2 }} />
          <TextField fullWidth label="Bank Name" variant="outlined" sx={{ mt: 2 }} />
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" sx={{ mr: 1 }}>Submit</Button>
            <Button variant="outlined" color="error">Reset</Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Site Settings</Typography>
          <FormControlLabel control={<Switch />} label="Disable Purchase" />
          <FormControlLabel control={<Switch />} label="Update Test Exam in Course" />
          <TextField fullWidth label="Languages Supported (comma separated)" variant="outlined" sx={{ mt: 2 }} />
          <TextField fullWidth label="Test Report Delay (days)" variant="outlined" sx={{ mt: 2 }} />
          <FormControlLabel control={<Switch />} label="Enable Realistic Report" sx={{ mt: 2 }} />
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" sx={{ mr: 1 }}>Submit</Button>
            <Button variant="outlined" color="error">Reset</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UpdateInfo;
