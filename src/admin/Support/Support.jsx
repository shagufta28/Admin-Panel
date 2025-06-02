// Support.jsx
import { Box, Paper, Typography, TextField, MenuItem, Button, Grid } from '@mui/material';

const departments = ['Support', 'Sales', 'Training'];

export default function Support() {
  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Typography variant="h6">🎫 Raise Ticket</Typography>
          <Box textAlign="right">
            <Typography variant="body2" fontWeight="bold">EduGorilla Support Timing</Typography>
            <Typography variant="body2">📞 0522-3514571</Typography>
            <Typography variant="body2">🕒 (10:00 AM to 7:00 PM IST)</Typography>
            <Typography variant="body2" color="success.main">📱 +91-6383209453</Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <TextField fullWidth label="Subject" variant="outlined" size="small" sx={{ mb: 2 }} />
          <TextField fullWidth select label="Select Department" variant="outlined" size="small" sx={{ mb: 2 }}>
            {departments.map((dept, idx) => (
              <MenuItem key={idx} value={dept}>{dept}</MenuItem>
            ))}
          </TextField>
          <TextField fullWidth multiline rows={4} label="Message" variant="outlined" size="small" sx={{ mb: 2 }} />
          <Button variant="contained">Submit</Button>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>🎓 Gibbon Training Schedule</Typography>
        <Grid container spacing={2}>
          <Grid item><Button variant="contained">Gibbon Portal Schedule Training 1</Button></Grid>
          <Grid item><Button variant="contained">Gibbon Portal Schedule Training 2</Button></Grid>
          <Grid item><Button variant="contained">Gibbon Marketing Schedule Training</Button></Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="subtitle1" gutterBottom>🎥 Gibbon Training Playlist</Typography>
        <Grid container spacing={2}>
          <Grid item><Button variant="contained">Gibbon Portal Training (English)</Button></Grid>
          <Grid item><Button variant="contained">Gibbon Portal Training (Hindi)</Button></Grid>
          <Grid item><Button variant="contained">Gibbon Marketing Training</Button></Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
