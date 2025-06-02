import React, { useState } from 'react';
import {
  Box, Paper, Grid, Typography, TextField, MenuItem, Button,
  InputAdornment
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export default function VideoCourses() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [desktopImage, setDesktopImage] = useState(null);
  const [mobileImage, setMobileImage] = useState(null);

  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 3, maxWidth: 600, margin: 'auto' }}>
        <Typography variant="h6" gutterBottom>
          📚 Create Live Class Course
        </Typography>

        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField label="Course Name *" fullWidth required />
          </Grid>

          <Grid item>
            <TextField
              label="Language *"
              select
              fullWidth
              required
              defaultValue=""
            >
              <MenuItem value="">Select Language</MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
            </TextField>
          </Grid>

          <Grid item>
            <TextField
              label="Original Price *"
              fullWidth
              required
              InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Current Price *"
              fullWidth
              required
              InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
            />
          </Grid>

          <Grid item>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Upload Course Banner Image * (Desktop - Recommended size: 1000x500)
            </Typography>
            <Button component="label" variant="outlined">
              Choose File
              <input type="file" hidden onChange={(e) => setDesktopImage(e.target.files[0])} />
            </Button>
            <Typography variant="caption" sx={{ ml: 2 }}>
              {desktopImage?.name || 'No file chosen'}
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Upload Course Banner Image * (Mobile - Recommended size: 600x300)
            </Typography>
            <Button component="label" variant="outlined">
              Choose File
              <input type="file" hidden onChange={(e) => setMobileImage(e.target.files[0])} />
            </Button>
            <Typography variant="caption" sx={{ ml: 2 }}>
              {mobileImage?.name || 'No file chosen'}
            </Typography>
          </Grid>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid item>
              <DatePicker
                label="Course Duration Start *"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                format="DD-MM-YYYY"
                fullWidth
              />
            </Grid>
            <Grid item>
              <DatePicker
                label="Course Duration End *"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                format="DD-MM-YYYY"
                fullWidth
              />
            </Grid>
          </LocalizationProvider>

          <Grid item>
            <TextField
              label="About Course *"
              multiline
              rows={4}
              fullWidth
              required
            />
          </Grid>

          <Grid item>
            <TextField
              label="Choose target exam for this course *"
              fullWidth
              required
            />
          </Grid>

          <Grid item>
            <TextField label="Level 0" fullWidth select>
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="Option1">Option 1</MenuItem>
            </TextField>
          </Grid>

          <Grid item>
            <TextField label="Level 1" fullWidth select>
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="Option1">Option 1</MenuItem>
            </TextField>
          </Grid>

          <Grid item>
            <TextField label="Level 2" fullWidth select>
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="Option1">Option 1</MenuItem>
            </TextField>
          </Grid>

          <Grid item>
            <TextField label="Subjects (optional)" fullWidth />
          </Grid>

          <Grid item sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="contained" color="success">Submit</Button>
            <Button variant="contained" color="error">Reset</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
