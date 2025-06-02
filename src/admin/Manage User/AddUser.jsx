import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Collapse,
  Paper
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AddUser = () => {
  const [showAdditional, setShowAdditional] = React.useState(false);

  return (
    <Paper elevation={3} sx={{ p: 3, backgroundColor: '#f5f7f9' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        ▤ Create New User
      </Typography>

      <Box display="flex" flexDirection="column" gap={2} maxWidth={500}>
        <TextField label="Name" required fullWidth />
        <TextField label="Phone" required fullWidth />
        <TextField label="Email" required fullWidth />
        <TextField
          label="Password"
          required
          type="password"
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon fontSize="small" />
              </IconButton>
            ),
          }}
          helperText="An email will be sent to the user with the above login details"
        />

        <Button
          variant="outlined"
          startIcon={<ExpandMoreIcon />}
          onClick={() => setShowAdditional(!showAdditional)}
        >
          Additional User Data
        </Button>

        <Collapse in={showAdditional}>
          {/* Add additional fields here */}
          <TextField label="Role" fullWidth />
        </Collapse>

        <Box textAlign="center" mt={2}>
          <Button variant="contained" color="primary">
            Add User
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default AddUser;
