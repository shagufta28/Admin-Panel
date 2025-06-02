import React from 'react';
import {
  Box,
  TextField,
  Paper,
  Typography,
  IconButton,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const EditUser = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, backgroundColor: '#f5f7f9' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        ▤ Edit User
      </Typography>

      <Box maxWidth={500}>
        <TextField
          fullWidth
          placeholder="Search by Email or Phone Number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Paper>
  );
};

export default EditUser;
