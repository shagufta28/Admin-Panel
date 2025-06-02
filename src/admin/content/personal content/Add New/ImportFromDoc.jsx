import React from 'react';
import {
  Box, Typography, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Link
} from '@mui/material';

const ImportFromDoc = () => {
  return (
    <Box p={2}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" mb={2}>Import Status</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Import ID</TableCell>
                <TableCell>Import Status</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Import Date</TableCell>
                <TableCell>Test URL</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>224782410267</TableCell>
                <TableCell>
                  <Typography color="green">Completed</Typography>
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell>Fri, Apr 21, 2023, 9:31 AM</TableCell>
                <TableCell>
                  <Link href="#">Open Test</Link>
                </TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ImportFromDoc;
