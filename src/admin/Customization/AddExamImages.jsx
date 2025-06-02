// AddExamImages.jsx
import React, { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Stack,
} from '@mui/material';

const missingImages = [
  'Axis Bank CSO',
  'Bank Of Baroda (BOB)',
  'Bank of India Clerk',
  'Bank of India PO',
  'Bank of Maharashtra Clerk',
  'Bank of Maharashtra PO',
  'Bihar State Cooperative Bank',
  'SCB Assistant Multipurpose',
  'Canara Bank',
  'Central Bank of India Clerk',
];

const AddExamImages = () => {
  const [search, setSearch] = useState('');

  return (
    <Box p={3}>
      {/* Existing Images */}
      <Card variant="outlined" sx={{ mb: 4, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Existing Images
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Search by Exam Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Typography align="center" color="text.secondary">
          😐 No exam image added
        </Typography>
      </Card>

      {/* Missing Images */}
      <Card variant="outlined" sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Missing Images
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Search by Exam Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Page Location</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {missingImages.map((name, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    Banking &gt; Bank PO/Clerical &gt; {name}
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="warning" size="small">
                      Add Image
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack alignItems="center" sx={{ mt: 2 }}>
          <Pagination count={45} color="primary" />
        </Stack>
      </Card>
    </Box>
  );
};

export default AddExamImages;
