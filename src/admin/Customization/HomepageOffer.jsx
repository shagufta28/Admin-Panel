// HomepageOffer.jsx
import React, { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
} from '@mui/material';

const HomepageOffer = () => {
  const [offerType, setOfferType] = useState('Branding Offers');

  return (
    <Box p={3}>
      <Card variant="outlined" sx={{ mb: 4, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Add Offer
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          }}
        >
          <TextField label="Offer Name" fullWidth required />
          <TextField
            select
            label="Offer Type"
            value={offerType}
            onChange={(e) => setOfferType(e.target.value)}
            fullWidth
            required
          >
            <MenuItem value="Branding Offers">Branding Offers</MenuItem>
            <MenuItem value="Package Based Offer">Package Based Offer</MenuItem>
          </TextField>
          <TextField
            label="Image On-Click Open URL"
            fullWidth
            placeholder="Optional"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Android Only"
            sx={{ gridColumn: '1 / -1' }}
          />
          <TextField
            type="file"
            label="Upload Offer Image (Desktop)"
            InputLabelProps={{ shrink: true }}
            helperText="Recommended: 1920x300"
          />
          <TextField
            type="file"
            label="Upload Offer Image (Mobile)"
            InputLabelProps={{ shrink: true }}
            helperText="Recommended: 600x300"
          />
        </Box>
        <Box mt={2}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Submit
          </Button>
          <Button variant="outlined" color="error">
            Reset
          </Button>
        </Box>
      </Card>

      {/* Existing Offers */}
      <Card variant="outlined" sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Existing Offers
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          📌 Drag and Drop offers in the below table to reorder
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Offer Name</TableCell>
                <TableCell>Image On-Click Open URL</TableCell>
                <TableCell>Offer Image</TableCell>
                <TableCell>Offer Type</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>School Level (365 days)</TableCell>
                <TableCell>
                  <Link href="#">URL</Link>
                </TableCell>
                <TableCell>
                  <Link href="#">Desktop</Link> / <Link href="#">Mobile</Link>
                </TableCell>
                <TableCell>Package Based Offer</TableCell>
                <TableCell>
                  <Button variant="outlined" color="error" size="small">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default HomepageOffer;
