import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, MenuItem, Button } from '@mui/material';
import Charts from '../../components/Charts';

const signupData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', Phone: 'xxx9988xx99', "No of Packages Bought": 'Web' },
  // ...more mock data
];

export default function Signups() {
  return (
    <Box sx={{  px: { xs: 2, sm: 0 } /* small horizontal padding on mobile */ }}>
      <Typography variant="h4" gutterBottom>Signups</Typography>
      <Charts />
      {/* Responsive filter row */}
      <Box
        sx={{
          mt: 5 /* margin top 5 */,
          mb: 2,
          display: 'flex',
          gap: 2,
          flexWrap: { xs: 'wrap', sm: 'nowrap' },  // stack inputs on xs, row on sm+
          '& > *': {
            flex: { xs: '1 1 100%', sm: 'unset' }, // full width on xs, default on sm+
            minWidth: { xs: 'auto', sm: 200 },     // min width only on sm+
          }
        }}
      >
        <TextField label="Source" select>
          <MenuItem value="Web">Web</MenuItem>
          <MenuItem value="Mobile">Mobile</MenuItem>
        </TextField>
        <TextField label="" type="date" />
        <Button variant="contained">Apply</Button>
      </Box>

      {/* Make table container horizontally scrollable on mobile */}
      <TableContainer component={Paper} sx={{ overflowX: { xs: 'auto', sm: 'visible' }, minWidth: 200 , mb:5 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>No of Packages Bought</TableCell>
              <TableCell>No of Test Attempted</TableCell>
              <TableCell>Signup Details</TableCell>
              <TableCell>Test Details</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {signupData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.signupDate}</TableCell>
                <TableCell>{row.source}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
