import React from 'react';
import {
  Box, Grid, Paper, Typography, TextField, Button, MenuItem,
  FormControlLabel, Checkbox, Divider
} from '@mui/material';

export default function AllTests() {
  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          🧪 AllTests Filter Form
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Date Range"
              fullWidth
              value="May 2, 2025 - May 31, 2025"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="User Info: Name, Email, Phone"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Test ID"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Device Info"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Test Package Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Coupon Code / Serial"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Product Type"
              select
              fullWidth
              defaultValue="All"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Course">Course</MenuItem>
              <MenuItem value="Package">Package</MenuItem>
              <MenuItem value="Mock Test">Mock Test</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox />}
              label="Include Unsubscribed Users"
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" color="primary">Apply</Button>
          <Button variant="outlined" color="secondary">Reset</Button>
        </Box>
      </Paper>
    </Box>
  );
}
