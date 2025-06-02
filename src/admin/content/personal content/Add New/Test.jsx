import React from 'react';
import {
  Box, Typography, FormControl, InputLabel, Select, MenuItem,
  TextField, Button, Paper
} from '@mui/material';

const levels = ['Level 0', 'Level 1', 'Level 2', 'Level 3', 'Level 4'];

const Test = () => {
  return (
    <Box p={2}>
      {/* Taxonomy */}
      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6">Taxonomy</Typography>
        <Box display="flex" gap={2} mt={2}>
          {levels.map((level, idx) => (
            <FormControl key={idx} size="small">
              <InputLabel>{level}</InputLabel>
              <Select defaultValue="">
                <MenuItem value="">Select</MenuItem>
              </Select>
            </FormControl>
          ))}
        </Box>
      </Paper>

      {/* Test Details */}
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6">Test Details</Typography>
        <TextField fullWidth required label="Test Name" margin="normal" />
        <TextField fullWidth required label="Test Duration (in minutes)" margin="normal" />
        <FormControl fullWidth margin="normal">
          <InputLabel>Language(s) Supported</InputLabel>
          <Select multiple defaultValue={[]}>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Hindi">Hindi</MenuItem>
            {/* Add more as needed */}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Choose Source File Type</InputLabel>
          <Select defaultValue="DOCX">
            <MenuItem value="DOCX">DOCX</MenuItem>
          </Select>
        </FormControl>
        <Typography variant="caption">
          Please note that only single-choice questions can be imported.
        </Typography>
        <Box mt={2}>
          <Button variant="contained" color="warning">Submit</Button>
          <Button variant="contained" sx={{ ml: 1 }}>Add Section</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Test;
