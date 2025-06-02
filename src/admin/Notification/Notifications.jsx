// Notification.jsx
import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Notifications = () => {
  return (
    <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
      <Box display="flex" alignItems="center" mb={1}>
        <Typography variant="subtitle1" fontWeight={600} mr={1}>
          Send Notifications to Users
        </Typography>
        <InfoOutlinedIcon fontSize="small" color="info" />
      </Box>
      <Divider sx={{ mb: 2 }} />
      <Typography color="error" align="center">
        You do not have any app to send notification.
      </Typography>
    </Paper>
  );
};

export default Notifications;
